terraform {
  required_version = ">= 0.12"
}

locals {
  app="ddd-api"
  region   = "ca-central-1"
  keyname  = "aws"

}
provider "aws" {
  region = "ca-central-1"
  access_key = ""
  secret_key = ""
}

resource "null_resource" "docker_build" {
  triggers = {
    dockerfile = filemd5("Dockerfile")
  }

  provisioner "local-exec" {
    command = "docker build . -t devblog"
  }

  provisioner "local-exec" {
    when = destroy
    command = "docker rmi devblog"
  }
}

resource "aws_lightsail_key_pair" "lightsail_key_pair" {
  name       = "awskey"
  public_key = file("./aws.pub")
}
resource "null_resource" "docker_build" {
  triggers = {
    dockerfile = filemd5("Dockerfile")
  }

  provisioner "local-exec" {
    command = "docker build . --target builder -t app"
  }

}

resource "aws_lightsail_instance" "app" {
  name              = local.app
  availability_zone = "${local.region}b"
  blueprint_id      = "ubuntu_18_04"
  bundle_id         = "nano_2_0"
  key_pair_name           = "awskey"
  provisioner "remote-exec" {
    connection {
      type     = "ssh"
      user     = "ubuntu"
      host     = aws_lightsail_instance.app.public_ip_address
      private_key = file("aws")
    }
    inline = [
      "curl -fsSL https://get.docker.com -o get-docker.sh",
  "sudo sh get-docker.sh"
      ,"sudo apt install git"
    ,"sudo apt install consul"
    ]
  }

  depends_on = [ null_resource.docker_build ]
}

output "ip" {
  value = aws_lightsail_instance.app.public_ip_address
}

//provisioner "local-exec" {
//  command = "ANSIBLE_HOST_KEY_CHECKING=\"False\" ansible-playbook -u unbuntu --private-key=\"./aws\" -i '${aws_lightsail_instance.app.public_ip_address},' ansible-deploy.yml"
//}
