# Webapp Friendify GPT



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

## Install
- [ ]  Ubuntu 20.04.6 LTS (GNU/Linux 5.15.0-1028-aws x86_64)
- [ ]  Nginx
- [ ]  Nodejs >=v16.19.1
- [ ]  Npm >=8.19.3 or Yarn >=1.22.19
- [ ]  pm2 >=5.3.0
- [ ]  Certbot

## How to start
1. Clone source code
   git clone https://github.com/playgroundvina/Friendify-GPT-frontend.git
2. Install dependencies
   ``` npm install ``` or ``` yarn```
3. ``` cp sample.env .env``` and change data .env file
4. Start code:
- Dev:

    + ```yarn dev``` to start source
- Production:

    + ```yarn prod``` to start source

## Setup nginx
1. cd /etc/nginx/conf.d
2. sudo touch friendify-fe.conf
3. sudo vi friendify-fe.conf
4. Paste this code:
```server {
    listen         80;
    listen         [::]:80;
    server_name    app.friendify.ai www.app.friendify.ai;
    return         301 https://$server_name$request_uri;
}
server {
    listen       443 ssl http2;
    listen       [::]:443 ssl http2;
    server_name  app.friendify.ai www.app.friendify.ai;

    ssl_certificate "/etc/letsencrypt/live/app.friendify.ai/fullchain.pem";
    ssl_certificate_key "/etc/letsencrypt/live/app.friendify.ai/privkey.pem";
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_session_cache shared:SSL:1m;
    ssl_session_timeout  10m;
    client_max_body_size 12M;

    location / {
        proxy_set_header X-Real-IP $remote_addr ;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for ;
        proxy_set_header X-Forwarded-Proto https;
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }
}

````
5. Save file
6. Run ```sudo nginx -t``` to check syntax
6. Run ```sudo service nginx restart``` to restart nginx service
