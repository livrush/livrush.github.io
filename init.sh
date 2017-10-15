sudo apt-get update

sudo apt-get install nodejs

sudo apt-get install npm

sudo curl -o /usr/local/bin/docker-compose -L "https://github.com/docker/compose/releases/download/1.15.0/docker-compose-$(uname -s)-$(uname -m)"

sudo chmod +x /usr/local/bin/docker-compose

docker-compose -v
