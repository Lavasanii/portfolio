## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Deploy On Server

On your computer

```sh
cd PROJECT_FOLDER_PATH
npm run build
scp -r dist root@104.248.35.250:/home/portfolio/
```
Open the server via ssh and run this

```sh
ssh root@SERVER_IP
sudo nginx -t
sudo systemctl restart nginx
```