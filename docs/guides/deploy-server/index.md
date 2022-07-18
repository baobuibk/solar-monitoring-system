---
sidebar_position: 1
---

# Deploy server

This guide will instruct you how to deploy a server on UpCloud

Firstly, go to [UpCloud](https://hub.upcloud.com/login), use provided credential to login.
![deploy-server-01](./assets/deploy-server-01.png)

The [homepage](https://hub.upcloud.com/) of Uploud will be shown as below. Click **Deploy server**.
![deploy-server-02](./assets/deploy-server-02.png)

In **Location** section, choose **SG-SIN1** as
![deploy-server-03](./assets/deploy-server-03.png)

In **Plan** section, while at **Simple plans** tab, choose **$5**.
![deploy-server-04](./assets/deploy-server-04.png)

Skip the **Storage** section.

Skip the **Automated backups** section.

In **Operating system** section, while at **Operating systems** tab, choose **Ubuntu Server 20.04 LTS (Focal Fossa)**.
![deploy-server-05](./assets/deploy-server-05.png)

Skip the **Optionals** section.

In **Login Method**, choose **One time password**.
![deploy-server-06](./assets/deploy-server-06.png)

Skip the **Initialization script** section.

Review the summary at the right banner. If every things are OK. Click **Deploy**.
![deploy-server-07](./assets/deploy-server-07.png)

The deployment will take a few seconds to finish, then a dialog will show up. Copy the password and save somewhere. Then click **Close**.
![deploy-server-08](./assets/deploy-server-08.png)

Now the newly deployed server will show up at the homepage, click on it to see details.
![deploy-server-09](./assets/deploy-server-09.png)

Actions related to server deployment will be showed here.
![deploy-server-10](./assets/deploy-server-10.png)

From now, you can start connect to newly deployed server using SSH, and prepare it with prerequisites as in another guide.
