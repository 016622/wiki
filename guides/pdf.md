# Guide: Downloading View-Only PDF from Google Drive on Windows

## Requirements

Before you begin, make sure you have the following requirements:

- Google Chrome (with no adblock and disable all extensions)
- ImageMagick (for the `convert` command)
- Cygwin

## Step-by-Step Instructions

Follow these steps to download a view-only PDF from Google Drive on your Windows computer:

1. Open the Google Drive PDF file using Google Chrome and access the browser console (press `Ctrl+Shift+I` and select the console option).

2. Visit [https://github.com/elosha/degooglepdf](https://github.com/elosha/degooglepdf).

3. Click on the `downloader.js` file in the repository to view its content. Copy the code provided on that page.

4. Return to the Chrome console tab of the PDF file and paste the copied code into the console. This action will initiate auto-scrolling and further processing.

5. Download the ZIP file of the GitHub repository by clicking the green "Code" button and selecting "Download ZIP."

6. Install Cygwin on your Windows machine by downloading it from [https://www.cygwin.com/](https://www.cygwin.com/).

7. Once Cygwin is installed, open it from the Start menu or by searching for "Cygwin" in the Windows search bar.

8. In the Cygwin terminal, navigate to the directory where your script file is located using the `cd` command. For example, if your script file is in the "E:/Softwares" folder, type `cd E:/Softwares` and press Enter.

9. Make the script file executable using the `chmod` command. For the script named `mkpdf.sh` from the GitHub repository, type `chmod +x mkpdf.sh` and press Enter.

10. After the console command in Chrome has completed its progress, it will download a `.imgpack` file to your computer.

11. Place the downloaded `.imgpack` file and the `mkpdf.sh` script from the GitHub repository in the same folder as your Cygwin directory.

12. Install ImageMagick from [https://imagemagick.org/](https://imagemagick.org/).

13. Execute the script by typing `./mkpdf.sh "filename"` in the Cygwin terminal and press Enter. Replace "filename" with the actual name of the file obtained from the Google Drive PDF console command. For example, if the file name is "cocoeg5.imgpack," type `./mkpdf.sh cocoeg5.imgpack`.

14. The script will automatically generate the PDF for you. Voila! You have successfully obtained the PDF.
