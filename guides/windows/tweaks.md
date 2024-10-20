# List of Windows Tweaks

## Windows God Mode Folder

### How to create a Windows God Mode Folder on Windows 10

1. Create a new folder and name it as desired.

2. Append the string `.{ED7BA470-8E54-465E-825C-99712043E01C}` to the end of the folder name.

## Change System Font

### How to ACTUALLY Change the Windows Default System Font (and restore it if anything goes wrong)

:::warning
Please make sure to check the contents of the .reg file before downloading it. If you download a .reg file from the internet, make sure to check the contents of the file before merging it into your registry. This is a powerful tool that can be used for malicious purposes if used incorrectly.
:::
### How to change the Windows Default System Font

1. Go to [https://github.com/016622/registryHacks/tree/main/changeFont](https://github.com/016622/registryHacks/tree/main/changeFont) and download the `changeDefaultFont.reg` file.

2. Open the `changeDefaultFont.reg` file with a text editor (such as Notepad or Notepad++), and replace the font name with the one you want to use as the default.

3. Save the changes and close the text editor.

4. Run the `changeDefaultFont.reg` file by double-clicking on it. Confirm that you want to add the information to the registry.

5. Restart your PC for the changes to take effect.
### How to restore the original Windows Default System Font

1. Go to [https://github.com/016622/registryHacks/tree/main/changeFont](https://github.com/016622/registryHacks/tree/main/changeFont) and download the `revertToWindowsFont.reg` file.

2. Run the `revertToWindowsFont.reg` file by double-clicking on it. Confirm that you want to add the information to the registry.

3. Restart your PC for the changes to take effect.

## Disable Language Indicator on Taskbar

To disable the language indicator on the taskbar in Windows 11, follow these steps:

1. Access the **Windows Settings** and navigate to the **Time & Language** tab.

2. Within the **Time & Language** tab, select the **Typing** section and click **Advanced keyboard settings**.

3. From the **Advanced keyboard settings** window, toggle off the **Use the desktop language bar when it's available** option.

4. Click **Language bar options** and change the **Language Bar** menu to **Hidden**.

5. Press **OK** to save and exit the options menu.

## Block Windows 10/11 from automatically downloading updates

1. Open Windows Settings.

2. Navigate to **Network & Internet**.

3. Select **Ethernet** or **Wi-Fi**.

4. Toggle **Metered Connections** on.

## Disable automatic driver update

1. Open **Windows Control Panel**.

2. Navigate to **System and Security**.

3. Select **System**.

4. Use the **Advanced system settings** button.

5. Press **Hardware**.

6. Go to **Device Installation Settings**.

7. Set it to **No (your device might not work as expected)**.

## Remove "This PC" in Windows 10

1. Visit [this link](https://github.com/016622/registryHacks/tree/main/removeFolders).

2. Download the the .zip file and extract it.

3. Depending on whether you are running a 32-bit or 64-bit version of Windows, navigate to either the `32-bit` or `64-bit` folder.

4. Either run the `Remove All User Folders From This PC 64-bit.reg`, `Remove All User Folders From This PC 32-bit.reg` or navigate to the `Individual Folders` and run the registry file for the folder you want to remove.

5. If you want to revert the changes, run the `Restore All User Folders To This PC 64-bit.reg`, `Restore All User Folders To This PC 32-bit.reg` or again or as above navigate to the `Individual Folders` and run the registry file for the folder you want to restore.

## Remove Web Search in Start

:::warning
Please do not run any other regedit commands you only downloaded, you can trust this one, cause you can see everything changes.
:::

1. Visit [this link](https://github.com/016622/registryHacks/tree/main/removeWebsearch).

2. Download the the .reg file and execute it.

3. Reboot your computer.

##
