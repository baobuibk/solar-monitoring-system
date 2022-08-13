---
sidebar_position: 1
---

# Architecture

`context-broker` listens on port `8000`.

`record-engine` listens on port `8001`.

`mqtt-agent` listens on port `8004`.

`monitoring-backend` listens on port `8002`.

Overview 1

![overview1](./assets//overview1.png)

In our system, every device/reallife entity is called Entity

![Entity](./assets/Entity.png)

Entity will model the "real thing" into digital version of it.

![entityexplained](./assets//entityexplained.png)
![Sensor](./assets/Sensor.png)

The main component that manage Entities is context-broker

![entitycontextbroker](./assets/entitycontextbroker.png)

Beside context-broker, there are more.

![servercommon](./assets/servercommon.png)

They are microservices.

`record-engine` help manage Records

![Record](./assets/Record.png)

![recordexplained](./assets/recordexplained.png)

Records are used to draw figures.

![savetimeseries](./assets/savetimeseries.PNG)

So, overral, things work like this:

![serverflow](./assets/serverflow.png)
