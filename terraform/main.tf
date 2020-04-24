locals {
  app="ddd-api"
  region   = "ca-central-1"
  keyname  = "aws"

}
provider "aws" {
  region = local.region

}




resource "aws_lightsail_key_pair" "lightsail_key_pair" {
  name       = "awskey"
  public_key = file("./aws.pub")
}


resource "aws_lightsail_instance" "app" {
  name              = local.app
  availability_zone = "${local.region}b"
  blueprint_id      = "ubuntu_18_04"
  bundle_id         = "nano_2_0"
  key_pair_name           = "awskey"

}

output "ip" {
  value = aws_lightsail_instance.app.public_ip_address
}
