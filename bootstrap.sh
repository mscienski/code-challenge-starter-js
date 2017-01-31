#!/usr/bin/env bash

sudo apt-get remove -y nodejs

curl --silent --location https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-add-repository ppa:brightbox/ruby-ng
sudo apt-get update
sudo apt-get install -y git nodejs libfontconfig

#For Heroku
#sudo apt-get install -y ruby2.2 ruby2.2-dev git nodejs
#wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh

#Optional copy to non-linked dir
#sudo cp /vagrant ~/code-challenge-starter-js -r
cd /vagrant
sudo chown -R `whoami` ./
rm -rf node_modules
npm install
