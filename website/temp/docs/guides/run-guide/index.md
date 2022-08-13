# Run Guide

## Install Docker Engine

[Official docker doc](https://docs.docker.com/engine/install/ubuntu/)

Make main working folder:

```
mkdir -p ~/workspace
```

Clone all repos and build docker images

```
cd ~/workspace
git clone https://github.com/baobuibk/context-broker.git
cd context-broker
docker build -t context-broker .
```

```
cd ~/workspace
git clone https://github.com/baobuibk/record-engine.git
cd record-engine
docker build -t record-engine .
```

```
cd ~/workspace
git clone https://github.com/baobuibk/mqtt-agent.git
cd mqtt-agent
docker build -t mqtt-agent .
```

```
cd ~/workspace
git clone https://github.com/baobuibk/monitoring-backend.git
cd monitoring-backend
docker build -t monitoring-backend .
```

Clone project repo (can skip if already do it to see this documentation)

```
cd ~/workspace
git clone https://github.com/baobuibk/solar-monitoring-system.git
```

Start all microservices

```
cd solar-monitoring-system
docker compose up -d
```

All will run.
