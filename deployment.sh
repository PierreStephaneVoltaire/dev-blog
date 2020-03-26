#!/bin/bash

runContainer () {
sudo docker-compose -f api-docker-compose.yml up
}

checkIfDockerIsInstalled () {
sudo docker -v
dockerIsInstalled=$?
docker-compose -v
if [[ $? != 0 || $dockerIsInstalled != 0 ]]
then
sudo apt-get update
sudo apt-get remove docker docker-engine docker.io
sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo docker-compose --version
 fi
 }

checkIfGitIsInstalled(){
git --version
if [ $? != 0 ]
then
sudo apt update
sudo apt install git
fi
}

checkIfConsulIsInstalled(){
consul -v
if [ $? != 0 ]
then
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
fi
}

checkIfGitIsInstalled;
checkIfDockerIsInstalled;
if [ -d "./dev-blog" ]
then
    cd dev-blog
else
    git clone https://github.com/PierreStephaneVoltaire/dev-blog.git
    cd dev-blog
fi
runContainer;
