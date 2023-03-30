# First Deploy

## 1 -  DigitalOcean Server  
    ssh root@104.248.19.88

## 2 on Server
    sudo apt update
    sudo install node
    sudo install npm

## 3 on Local
    scp -r ./portfolio root@104.248.19.88:

## 4 on Server
    cd portfolio
    npm install
    npm install pm2 -g
    pm2 start index.js 


# Update

## 1 Copy File To server
    scp "Files" root@104.248.19.88:/root/portfolio
    OR
    scp -r "Folder" root@104.248.19.88:/root/portfolio

# 2 
    ssh root@104.248.19.88

# 3 
    pm2 restart index.js 
