# 🚀 Free Lifetime 200GB VPS, 4x CPU cores, 24GB Memory 🚀

::: warning Disclaimer
This is only a rewrite, so if things change, this might be outdated. Here is the [link](https://rentry.co/4sx64) to the original guide.

Also this KVM doesnt run 24/7
:::

## Creating the Server

1. Visit [console.cloud.google.com](https://console.cloud.google.com).

2. In the upper-right corner, click on **Activate Cloud Shell**.

3. If Docker isn't installed, you can install it by running the following command:

   ```bash
   sudo apt install docker -y
   ```

4. Copy the following command:

   ```bash
   docker run -p 6080:80 dorowu/ubuntu-desktop-lxde-vnc
   ```

   Paste it into the Cloud Shell terminal using `CTRL + V`, and then press `Enter`.

5. After running the Docker command, you can modify the port number by clicking on the icon located in the upper-right corner (next to the settings icon). Change the port number to `6080`.

6. Enjoy your free Desktop Linux shell on Google Cloud!
