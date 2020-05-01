#!/bin/bash


sudo apt-get update
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo apt install git
export VER="1.7.1"
wget https://releases.hashicorp.com/consul/${VER}/consul_${VER}_linux_amd64.zip
unzip consul_${VER}_linux_amd64.zip
sudo mv consul /usr/local/bin/
sudo groupadd --system consul
sudo useradd -s /sbin/nologin --system -g consul consul
sudo mkdir -p /var/lib/consul
sudo chown -R consul:consul /var/lib/consul
sudo chmod -R 775 /var/lib/consul
sudo mkdir /etc/consul.d
sudo chown -R consul:consul /etc/consul.d

