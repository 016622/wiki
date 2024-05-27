# List of Windows Tweaks

## Windows God Mode Folder

### How to create a Windows God Mode Folder on Windows 10

1. Create a new folder and name it as desired.
2. Append the string `.{ED7BA470-8E54-465E-825C-99712043E01C}` to the end of the folder name.

## Change System Font

### How to ACTUALLY Change the Windows Default System Font (and restore it if anything goes wrong)

1. Find a font you like which is either already on your computer or download it.
2. Copy the following code into a new file.

```reg
Windows Registry Editor Version 5.00

 [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Fonts]


 "Segoe UI (TrueType)"=""


 "Segoe UI Bold (TrueType)"=""


 "Segoe UI Bold Italic (TrueType)"=""


 "Segoe UI Italic (TrueType)"=""


 "Segoe UI Light (TrueType)"=""


 "Segoe UI Semibold (TrueType)"=""


 "Segoe UI Symbol (TrueType)"=""


 [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\FontSubstitutes]


 "Segoe UI"="REPLACE ME WITH THE NEW FONT"

```

3. Fill out the last line with the name of the font you are going to use.
4. Save the filename as `update_system_font.reg`.
5. Also save it as type "All Files `(*.*)`"
6. Open Windows Explorer and navigate to the folder where the `update_system_font.reg` file is located.
7. Run the file.
8. Restart Windows.

:::warning
Please do not run any other regedit commands you only downloaded, you can trust this one, cause you can see everything changes.
:::

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
