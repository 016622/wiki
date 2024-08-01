# List of Windows Tweaks

## Windows God Mode Folder

### How to create a Windows God Mode Folder on Windows 10

1. Create a new folder and name it as desired.

2. Append the string `.{ED7BA470-8E54-465E-825C-99712043E01C}` to the end of the folder name.

## Change System Font

### How to ACTUALLY Change the Windows Default System Font (and restore it if anything goes wrong)

:::warning
Please do not run any other regedit commands you only downloaded, you can trust this one, cause you can see everything changes.
:::

1. Find a font you like which is either already on your computer or download it.

2. Copy the following code into a new file.

```reg
Windows Registry Editor Version 5.00

 [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Fonts]


 "Segoe UI (TrueType)"=""


 "Segoe UI Bold (TrueType)"="THE NEW FONT BOLD"


 "Segoe UI Bold Italic (TrueType)"="THE NEW FONT BOLD ITALIC"


 "Segoe UI Italic (TrueType)"="THE NEW FONT ITALIC"


 "Segoe UI Light (TrueType)"="THE NEW FONT LIGHT"


 "Segoe UI Semibold (TrueType)"="THE NEW FONT SEMIBOLD"


 "Segoe UI Symbol (TrueType)"=""


 [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\FontSubstitutes]


 "Segoe UI"="THE NEW FONT"

```

3. Fill out the last line with the name of the font you are going to use.

4. Save the filename as `update_system_font.reg`.

5. Also save it as type "All Files `(*.*)`"

6. Open Windows Explorer and navigate to the folder where the `update_system_font.reg` file is located.

7. Run the file.

8. Restart Windows.

### How to restore the original Windows Default System Font

1. Open Windows Explorer and navigate to the folder where the `update_system_font.reg` file is located.

2. Edit the `update_system_font.reg` file and replace it with the following:

```reg
Windows Registry Editor Version 5.00

 [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Fonts]


 "Segoe UI (TrueType)"="segoeui.ttf"


 "Segoe UI Black (TrueType)"="seguibl.ttf"



 "Segoe UI Black Italic (TrueType)"="seguibli.ttf"


 "Segoe UI Bold (TrueType)"="segoeuib.ttf"


 "Segoe UI Bold Italic (TrueType)"="segoeuiz.ttf"


 "Segoe UI Emoji (TrueType)"="seguiemj.ttf"


 "Segoe UI Historic (TrueType)"="seguihis.ttf"


 "Segoe UI Italic (TrueType)"="segoeuii.ttf"


 "Segoe UI Light (TrueType)"="segoeuil.ttf"


 "Segoe UI Light Italic (TrueType)"="seguili.ttf"


 "Segoe UI Semibold (TrueType)"="seguisb.ttf"


 "Segoe UI Semibold Italic (TrueType)"="seguisbi.ttf"


 "Segoe UI Semilight (TrueType)"="segoeuisl.ttf"


 "Segoe UI Semilight Italic (TrueType)"="seguisli.ttf"


 "Segoe UI Symbol (TrueType)"="seguisym.ttf"


 "Segoe MDL2 Assets (TrueType)"="segmdl2.ttf"


 "Segoe Print (TrueType)"="segoepr.ttf"


 "Segoe Print Bold (TrueType)"="segoeprb.ttf"


 "Segoe Script (TrueType)"="segoesc.ttf"


 "Segoe Script Bold (TrueType)"="segoescb.ttf"


 [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\FontSubstitutes]

 "Segoe UI"=-
```

3. Run the file.

4. Restart Windows.

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
