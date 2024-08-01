# 🪟 Windows Privacy

::: warning Disclaimer
This is only a rewrite, so if things change, this might be outdated. Here is the [link](https://rentry.org/Pixelated_Pathways#windows-ricing-privacy-customization-optimization) to the original guide.
:::

## ‼️ DO THIS FIRST

::: danger
[Create a Bootable USB Recovery Drive for Windows 10,](/guides/windows/bootableUSB.md) as you could use it to recover or troubleshoot your system in case something goes wrong.
:::

::: warning
Make a habit of creating System Restore Points and Backups of your Registry often:

- [How to Create a System Restore Point in Windows 10](https://www.tenforums.com/tutorials/4571-create-system-restore-point-windows-10-a.html)
- [Create a Backup of the Entire Windows Registry](https://techpp.com/2022/03/11/backup-and-restore-windows-registry-guide/#Method_2_Create_a_Backup_of_the_Entire_Windows_Registry)
  :::

::: info
This will not be an in-depth guide, as a lot of the resources provided have guides or steps within them, or are straightforward and instructions are not needed or are provided on their site.
:::

## 🪟 Tips - Good to know

::: tip Good to Know

> **Use the System File Checker tool to repair missing or corrupted system files,** if some Windows functions aren't working or Windows crashes, use the System File Checker to scan Windows and restore your files.  (**NOTE:** This doesn't replace the fact that you **should** always make a system restore point before changing things)

:::

1. Open an elevated command prompt.
2. Type the following command, and then press Enter. It may take several minutes for the command operation to be completed.

```powershell
DISM.exe /Online /Cleanup-image /Restorehealth
```

3. When it has completed type the following command, and then press Enter.

```powershell
sfc /scannow
```

4. A system restart might be required.

### 📁 Windows & Windows Files

[MAS](https://massgrave.dev/) - Microsoft Activation Scripts: A Windows and Office activator using HWID / Ohook / KMS38 / Online KMS activation methods, with a focus on open-source code and fewer antivirus detections. Be aware of those [Fake Windows Activators](https://pastebin.com/gCmWs2GR)

[Microsoft Software Download Listing](https://msdl.gravesoft.dev/) - Microsoft Software Download Listing lets you browse and download products from Microsoft Software Download pages [Github](https://github.com/gravesoft/msdl).

[List of files by Microsoft®](https://files.rg-adguard.net/) - List of files by Microsoft®

### 🖥️ command-line shell

[Windows Terminal](https://github.com/microsoft/terminal/releases) - The Windows Terminal is a modern, fast, efficient, powerful, and productive terminal application for users of command-line tools and shells like Command Prompt, PowerShell, and WSL.

[PowerShell 7](https://github.com/PowerShell/powershell/releases) - PowerShell is a task automation and configuration management program from Microsoft, consisting of a command-line shell and the associated scripting language.

[WSL](https://learn.microsoft.com/en-us/windows/wsl/install#install-wsl-command) - Windows Subsystem for Linux: Windows Subsystem for Linux is a feature of Windows that allows anyone to run a Linux environment without the need for a separate virtual machine or dual booting.

### 📦 Package Manager

[winget](https://apps.microsoft.com/detail/9nblggh4nns1) - Windows Package Manager

[Scoop](https://scoop.sh/) / [Chocolatey](https://chocolatey.org/install) - Alternatives to Winget

[pip](https://pip.pypa.io/en/stable/installation/) - pip is the package installer for Python. You can use it to install packages from the Python Package Index and other indexes.

[Ninite](https://ninite.com/) - Install and Update All Your Programs at Once

## 🧰 Debloating, Optimisation, Customisation & Privacy

_This section will cover Debloating, Optimising & Tweaking your system along with some Privacy stuff._

> **This section will have somewhat of an order to it. My top recommadations will be listed first and all will follow in and order of what I suggest to use them.**

### 🌟 FIRST

- 🔥 [Chris Titus Tech's Windows Utility](https://github.com/ChrisTitusTech/winutil) - Chris Titus Tech's Windows Utility - Install Programs, Tweaks, Fixes, and Updates

You can just run the following in your powershell (admin):

```powershell
  iwr -useb https://christitus.com/win | iex
```

- ✨ [SophiApp](https://github.com/Sophia-Community/SophiApp) - ⚡ The most powerful open source tweaker on GitHub for fine-tuning Windows 10 & Windows 11

You can just run the following in your powershell (admin):

```powershell
  iwr app.sophia.team -useb | iex
```

- 📌 [Sophia Script for Windows](https://github.com/farag2/Sophia-Script-for-Windows) - ⚡ The most powerful PowerShell module on GitHub for fine-tuning Windows 10 & Windows 11

**This is basically the same thing as the previous but it's the script and not an app. The script is a bit autonomous so I suggest rather using the app SophiApp**

- 📌 [O&O AppBuster](https://www.oo-software.com/en/ooappbuster) - Bust Apps you do not want!

- 📌 [Bulk Crap Uninstaller](https://www.bcuninstaller.com/) - Remove large amounts of unwanted applications quickly.

- 📌 [Revo Uninstaller](https://www.revouninstaller.com/) - Uninstall unwanted programs and their leftovers, quickly and easily!

- 📌 [Uninstalr](https://uninstalr.com/) - Uninstalr is the best Windows uninstaller - Uninstalr is a fast, lightweight and accurate way to uninstall software in Windows.

> That basically covers it for the first section. With these tools you now should have a nice clean, debloated, optimised and fast system.

### 🌟 SECOND

- 🔥 [privacy is sexy](https://privacy.sexy/) - 🔐 Enforce privacy & security best-practices on Windows, macOS and Linux.

- ✨ [Optimizer](https://github.com/hellzerg/optimizer) - The finest Windows Optimizer

- 📌 [Privatezilla](https://github.com/builtbybel/privatezilla#download) - 👀👮🐢🔥Performs a privacy & security check of Windows 10

- 📌 [O&O ShutUp10++](https://www.oo-software.com/en/shutup10) - Free antispy tool for Windows 10 and 11

> and that's the second part. You should now have some robust security, privacy, anti-telementary, anti-data-collection, anti-spying, and so one...

### 🌟 THIRD

- [WPD](https://wpd.app/) - WPD is the most convenient way to configure various privacy settings in Windows.
- [WindowsSpyBlocker](https://github.com/crazy-max/WindowsSpyBlocker) - Block spying and tracking on Windows
- [MajorPrivacy](https://github.com/xanasoft/MajorPrivacy/) - Advanced Privacy Tool for Windows
- [Awesome Windows privacy](https://github.com/TemporalAgent7/awesome-windows-privacy?tab=readme-ov-file) - A list of awesome tools, documentation and scripts for better privacy on Microsoft Windows
- [Debloat Windows 10](https://github.com/W4RH4WK/Debloat-Windows-10) - A Collection of Scripts Which Disable / Remove Windows 10 Features and Apps
- [DisableWinTracking](https://github.com/bitlog2/DisableWinTracking?tab=readme-ov-file) - Uses some known methods that attempt to minimize tracking in Windows 10
- [Windows10Debloater](https://github.com/Sycnex/Windows10Debloater) - Script to remove Windows 10 bloatware.
- [Win11Debloat](https://github.com/Raphire/Win11Debloat) - A simple, easy to use powershell script to remove bloatware apps from windows, disable telemetry, bing in windows search aswell as perform various other changes to declutter and improve your windows experience. This script works for both windows 10 and windows 11.
- [RyTuneX](https://github.com/rayenghanmi/RyTuneX) - RyTuneX is a cutting-edge optimizer built with the WinUI 3 framework, designed to amplify the performance of Windows devices. Crafted for both Windows 10 and 11.
- [Windows 10 Privacy Guide](https://github.com/adolfintel/Windows10-Privacy) - Windows 10 Privacy Guide
- [Comparison of Windows 10 Privacy tools](https://www.ghacks.net/2015/08/14/comparison-of-windows-10-privacy-tools/) - Comparison of Windows 10 Privacy tools

> This was a short one. Items listed in this section is basically leftovers, ones that did not make it to the first and second section thus they are not neccecary if you used the ones in the first and second section.

## 🥈 Honorable Mentions

- [Eylenburg's Tech Website](https://eylenburg.github.io/) - Detailed Comparisons of OS's, Browsers, Environments and Services
- [System Tools, Hardware Tools, Windows ISOs, Customization](https://fmhy.net/system-tools) - System Tools, Hardware Tools, Windows ISOs, Customization
- [Couleur Tweak Tips](https://ctt.cx/) - Couleur Tweak Tips - a comprehensive aggregation of useful resources for enthusiasts looking to expand their toolchain of programs and adopt good practices to enhance the quality of life in daily computer use and video production.
- [CTT Wiki](https://github.com/couleur-tweak-tips/CTT) - Couleur Tweak Tips documentation hosted on GitHub Pages using Material for MkDocs
- [Couleur Tweak Tips Ongoing Projects](https://github.com/couleur-tweak-tips) - Couleur Tweak Tips Ongoing Projects
- [KMS_VL_ALL_AIO](https://raw.githubusercontent.com/abbodi1406/KMS_VL_ALL_AIO/master/KMS_VL_ALL_AIO.cmd) - Right click this link and save as KMS_VL_ALL_AIO.cmd. The BEST windows and office activator.
- [Open-Shell](https://open-shell.github.io/Open-Shell-Menu/) - A collection of utilities bringing back classic features to Windows.
- [QuickBoost](https://github.com/SanGraphic/QuickBoost) - Automated Windows 10 / 11 Tweaking Utility
- [QuickMon](https://github.com/RudolfHenning/QuickMon) - QuickMon is a simple monitoring and alerting tool. It allows you to monitor and alert on various resources/services locally or remotely.
- [Winaero Tweaker](https://winaerotweaker.com/) - It is an all-in-one application that comes with dozens of options for fine-grained tuning of various Windows settings and features
- [Sysinternals Suite](https://learn.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite) - The Sysinternals Troubleshooting Utilities have been rolled up into a single Suite of tools
- [Process Explorer](https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer) - Process Explorer shows you information about which handles and DLLs processes have opened or loaded
- [Pegasun System Utilities](https://pegasun.com/system-utilities) - Maximize PC performance and battery life
- [Blackbird](https://www.getblackbird.net/) - Windows privacy, security and performance
- [Start X Back](https://github.com/echnobas/StartXBack) - A universal crack for Start Is/All Back.
- [Modern Flyouts](https://github.com/ModernFlyouts-Community/ModernFlyouts) - A modern Fluent Design replacement for the old Metro themed flyouts present in Windows.

## 🏎️ Quickies

### 🔑 Some Useful Registry Keys:

- [How to Remove the Folders From “This PC” on Windows 10](/guides/windows/tweaks#remove-this-pc-in-windows-10)
- [Disable Windows Web Search in Start](/guides/windows/tweaks#remove-web-search-in-start)
- [Pin Files to Start on Windows 10](https://github.com/Courage-1984/Pin-Files-to-Start-Windows-10)
- [Show more details in Details pane of File Explorer](https://github.com/Courage-1984/Show-more-details-in-Details-pane-of-File-Explorer)
- [Add Take Ownership to Context Menu in Windows 10](https://github.com/Courage-1984/Add-Take-Ownership-to-Context-Menu)

Index of Reg Keys:

- [Registry Tweaks](https://www.ricing.chloechantelle.com/#advanced)
- [Registry Editing](https://namazso.github.io/nanami-tan/#RegEdit)

### 🪛 Tweaks

- [How to make a Windows GodMode (Control Panel) folder](/guides/windows/tweaks#windows-god-mode-folder)
- [How to ACTUALLY Change the Windows Default System Font](/guides/windows/tweaks#change-system-font)
- [Remove the language indicator](/guides/windows/tweaks#disable-language-indicator-on-taskbar) - Permanently remove language indicator from the taskbar
- [WinSetView](https://github.com/LesFerch/WinSetView) - Globally Set Explorer Folder Views
- [How to Prevent Windows 10 or 11 From Automatically Downloading Updates](/guides/windows/tweaks#block-windows-10-11-from-automatically-downloading-updates)
- [How to stop Windows 10 from automatically updating device drivers](/guides/windows/tweaks#disable-automatic-driver-update)
- [Prevent Windows 10 from Automatically Restarting Your PC After Updating](https://lifehacker.com/prevent-windows-10-from-automatically-restarting-your-p-1723647582)
- [Fix problems that block programs from being installed or removed](https://support.microsoft.com/en-us/topic/fix-problems-that-block-programs-from-being-installed-or-removed-cca7d1b6-65a9-3d98-426b-e9f927e1eb4d) - The Program Install and Uninstall troubleshooter helps you automatically repair issues when you're blocked from installing or removing programs. It also fixes corrupted registry keys.

### 🦠 Online Url and File Analyses

- [VirusTotal](https://www.virustotal.com/) - Analyse suspicious files, domains, IPs and URLs to detect malware and other breaches
- [Hybrid Analysis](https://www.hybrid-analysis.com/) - Free Automated Malware Analysis Service. This is a free malware analysis service for the community that detects and analyzes unknown threats using a unique Hybrid Analysis technology.
- [Cloudflare Radar URL Scanner](https://radar.cloudflare.com/scan) - Understand the security, performance, technology, and network details of a URL with a publicly shareable report.
- [Jotti's malware scan](https://virusscan.jotti.org/) - Jotti's malware scan is a free service that lets you scan suspicious files with several anti-virus programs.
- [ANY-RUN](https://any.run/) - Interactive Online Malware Sandbox
