---
sidebar_position: 3
---

# Installation

## Prerequisites

To install **Solar monitoring system** successful, your cloud Linux environment must have these components installed:

- Git
- Node.js
- MongoDB
- Redis
- Nginx
- Mosquitto

## Deploy location

Every parts of **Solar monitoring system** should be held in one folder. In this guide, you will create a folder named `deploy`.

```shell
mkdir ~/deploy
```

Then inside `deploy`, we will have a folder named `microservices` for all our microservice components:

```shell
mkdir ~/deploy/microservices
```

A folder named `website` also be created to serve our static files for the frontend:

```shell
mkdir ~/deploy/website
mkdir ~/deploy/website/index
mkdir ~/deploy/website/app
```

### Download source code

Clone all microservice repos to `microservices` folder:

```shell
cd ~/deploy/microservices
git clone https://github.com/baobuibk/context-broker.git
git clone https://github.com/baobuibk/mqtt-agent.git
git clone https://github.com/baobuibk/record-engine.git
git clone https://github.com/baobuibk/monitoring-backend.git
```

### Install microservice dependencies

Run these commands:

```shell
cd ~/deploy/microservices/context-broker
npm install
cd ~/deploy/microservices/mqtt-agent
npm install
cd ~/deploy/microservices/record-engine
npm install
cd ~/deploy/microservices/monitoring-backend
npm install
```

### Start all microservices:

Start `context-broker`:

```shell
cd ~/deploy/microservices/context-broker
pm2 start . --name context-broker --watch
```

Start `mqtt-agent`:

```shell
cd ~/deploy/microservices/mqtt-agent
pm2 start . --name mqtt-agent --watch
```

Start `record-engine`:

```shell
cd ~/deploy/microservices/record-engine
pm2 start . --name record-engine --watch
```

Start `monitoring-backend`:

```shell
cd ~/deploy/microservices/monitoring-backend
pm2 start . --name monitoring-backend --watch
```

## Serve static files for the frontend

Our website (landing page, documentations) will be served at root `/`.

Our web app (app, monitoring-frontend) will be served at `/app`.

As our server computing resource is limited, we will build our static files on our local, personal computer.

After building the projects locally, we will push the bundles (outputs) to our server via SSH.

### Download source code

Assumed that you have **workspace** as a local folder to work with. Now download our frontend projects:

```shell
cd ~/workspace
git clone https://github.com/baobuibk/monitoring-frontend.git
git clone https://github.com/baobuibk/solar-monitoring-system.git
```

### Install dependencies

```shell
cd ~/workspace/monitoring-frontend
npm install
```

```shell
cd ~/workspace/solar-monitoring-system
npm install
```

### Build the outputs

Check the repos carefully, especially the package.json file.

If everything is OK, process to build:

```shell
cd ~/workspace/monitoring-frontend
npm run build
```

```shell
cd ~/workspace/solar-monitoring-system
npm run build
```

### Deploy static files to server

Deploy app (web app, monitoring-frontend)

```bash
cd ~/workspace/monitoring-frontend
scp -r ./build/* admin@<ip_address>:/home/admin/deploy/website/app
```

```bash
cd ..
cd solar-monitoring-system
scp -r ./build/* admin@<ip_address>:/home/admin/deploy/website/index
```

### Configure nginx to serve static files

Use SSH to log into server again. Then run:

```bash
sudo nano /etc/nginx/nginx.conf
```

In `http` section of nginx.conf:

```conf
# [...]
http {
        # [...]
}
# [...]
```

Add the configs as below:

```
server {
  location / {
    root /home/admin/deploy/website/index;
  }
  location /app {
    root /home/admin/deploy/website;
  }
}
```

Find this line `include /etc/nginx/sites-enabled*;` in the text and comment it out by adding `#` to the start of the line.

File `nginx.conf` will look like below:

```
# [...]
http {
        server {
                location / {
                        root /home/admin/deploy/website/index;
                }
                location /app {
                        root /home/admin/deploy/website;
                }
        }
        # [...]
        # include /etc/nginx/sites-enabled/*;
}
```

Save `Ctrl+S` and exit `Ctrl+X`.

Apply new settings to nginx:

```bash
sudo nginx -s reload
```

On browser, go to url `http://<ip_address>` and `http://<ip_address>/app` to see the result.
