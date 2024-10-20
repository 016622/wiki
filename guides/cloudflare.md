## Unlimited Proxy-Data

1. **Visit the text file**

   - Go to [this](https://gist.github.com/jbugel-lol/3857f959ed93f1974c87ef8f0a462815)

2. **Pick a key**
   - Enjoy 1.92EB (Exabyte) aka 1.92 Million Terabyte of Cloudflare Warp+ Traffic

## Unlimited Cloudflare-Devices (PC, Mac, Android, iOS)

1. **Download the latest release of WGCF**

   - Visit this [link](https://github.com/ViRb3/wgcf/releases/latest) to download the latest release of WGCF.
   - Once on the GitHub page, you may need to click on "Show all assets" to reveal the available option you'r device to download.
   - Save the downloaded file to a easy accessable folder (ideally a new folder).

2. **Rename the downloaded file**

   - Rename the downloaded file to "wgcf".

3. **Open the Command Prompt (CMD)**

   - Launch the Command Prompt (CMD) on your computer.

4. **Change the directory to your Downloads folder**

   - Navigate to the folder by running the following command:
     ```
     cd (you'r path to the wgcf file)
     ```

5. **Register WGCF**

   - Run the command:
     ```
     wgcf register
     ```

6. **Update the account key in "wgcf-account.toml"**

   - Open the "wgcf-account.toml" file with a text editor.
   - Replace the "license_key" field with the key you selected in the previous guide.

7. **Update WGCF**

   - Run the command:
     ```
     wgcf update
     ```

8. **Generate WGCF configuration again**

   - Execute the command:
     ```
     wgcf generate
     ```

9. **Import the "wgcf-profile.conf" file to your Wireguard client**

   - Import the "wgcf-profile.conf" configuration file to your Wireguard client.

10. **Activate the configuration**

    - Activate the imported configuration in your Wireguard client.

11. **Copy "wgcf-profile.conf" to other devices**
    - You can now copy the "wgcf-profile.conf" file to any device that supports Wireguard and use WARP+ on those devices.
