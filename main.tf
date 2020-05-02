terraform {
  required_version = ">= 0.12"
}

locals {
  app = "ddd-api"
  region = "ca-central-1"
  keyname = "aws"
}

provider "aws" {
  region = "ca-central-1"

}

resource "tls_private_key" "aws" {
  algorithm = "RSA"
}

resource "null_resource" "docker_build" {
  triggers = {
    dockerfile = filemd5("Dockerfile")
  }

  provisioner "local-exec" {
    command = "docker build . -t devblog"
  }

  provisioner "local-exec" {
    command = "docker save devblog | gzip > devblog.tar.gz"
  }

  provisioner "local-exec" {
    when = destroy
    command = "docker rmi devblog"
  }
}

resource "aws_lightsail_key_pair" "lightsail_key_pair" {
  name = "awskey"
  public_key = tls_private_key.aws.public_key_openssh
}

resource "aws_lightsail_instance" "app" {
  name = local.app
  availability_zone = "${local.region}b"
  blueprint_id = "ubuntu_18_04"
  bundle_id = "nano_2_0"
  key_pair_name = aws_lightsail_key_pair.lightsail_key_pair.name
  provisioner "remote-exec" {
    connection {
      type = "ssh"
      user = "ubuntu"
      host = self.public_ip_address
      private_key = tls_private_key.aws.private_key_pem
    }
    inline = [
      "curl -fsSL https://get.docker.com -o get-docker.sh",
      "sudo sh get-docker.sh",
      "sudo apt install git",
      "sudo apt install consul"
    ]
  }


}

resource "null_resource" "docker_deploy" {
  depends_on = [
    null_resource.docker_build
  ]

  triggers = {
    public_ip = aws_lightsail_instance.app.public_ip_address
  }

  connection {
    type = "ssh"
    user = "ubuntu"
    host = self.triggers.public_ip
    private_key = tls_private_key.aws.private_key_pem
  }

  provisioner "file" {
    source = "devblog.tar.gz"
    destination = "devblog.tar.gz"
  }
  provisioner "remote-exec" {
    script = "deployment.sh"
  }
}

resource "local_file" "aws_key" {
  filename = "aws_key.pem"
  file_permission = "0600"
  sensitive_content = tls_private_key.aws.private_key_pem
}

output "ip" {
  value = aws_lightsail_instance.app.public_ip_address
}
