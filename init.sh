# Create non-root user with sudo priveleges 
# Docs: https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04

sudo adduser liv
sudo usermod -aG sudo liv

# Install node and npm
# Docs: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04

sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm

# Install Docker
# Docs: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
apt-cache policy docker-ce
sudo apt-get install -y docker-ce
sudo systemctl status docker

# Install docker-compose
# Docs: https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-16-04

sudo curl -o /usr/local/bin/docker-compose -L "https://github.com/docker/compose/releases/download/1.15.0/docker-compose-$(uname -s)-$(uname -m)"
sudo chmod +x /usr/local/bin/docker-compose
docker-compose -v

# Move docker-compose file and start server

mv ./config/docker-compose.yml ../docker-compose.yml
sudo docker-compose up -d
