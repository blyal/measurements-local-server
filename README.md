# Running the local server

This guide will help you to run the local server in order to send the ping tests, as part of the Measurements tool.

## Prerequisites

Before you start, please make sure that you have the following:

- A macOS or Windows computer
- An internet connection

## For Mac:

### A. Installing Node.js

1. Open a web browser and go to https://nodejs.org
2. Click the "Download" button to download the Node.js installer for macOS.
3. Double-click the downloaded installer file to start the installation process.
4. Follow the instructions in the installer to complete the installation.

### B. Running Terminal

Terminal is included in macOS by default. You can find it in the Utilities folder, which is located in the Applications folder.

1. Open the Finder and navigate to the Applications folder.
2. Open the Utilities folder.
3. Double-click the Terminal application to open it.

### C. Running the Server on a Mac

1. In the terminal, navigate to the directory containing the server files and this readme. For example, if the "measurements-local-server" folder/directory is in your Downloads folder, you can navigate to that directory by typing:

`cd ~/Downloads/measurements-local-server`

2. Start the local server by running the following command:

`nodemon icmp.js`

3. The server should now be running. You can test this by clicking the "Check Status Local Server" button in the web app.

4. To stop the server, go to the terminal window and press `Ctrl+C`

## For Windows:

### A. Installing Node.js

1. Open a web browser and go to https://nodejs.org
2. Click the "Download" button to download the Node.js installer for Windows.
3. Double-click the downloaded installer file to start the installation process.
4. Follow the instructions in the installer to complete the installation.

### B. Installing PowerShell

PowerShell is included in Windows 10 by default. If you are using an older version of Windows, you may need to download and install PowerShell separately.

1. Open a web browser and go to https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-7.2
2. Follow the instructions on the page to download and install PowerShell.

### C. Running the Server on Windows

1. Open PowerShell by pressing the Windows key + R and typing "powershell" in the Run dialog box. Then click "OK" or press Enter.
2. In PowerShell, navigate to the directory containing the server files and this readme. For example, if the "measurements-local-server" folder/directory is in your Downloads folder, you can navigate to that directory by typing:

`cd $HOME\Downloads\measurements-local-server`

3. Start the local server by running the following command:

`nodemon icmp.js`

4. The server should now be running. You can test this by clicking the "Check Status Local Server" button in the web app.

5. To stop the server, go back to the PowerShell window and press `Ctrl+C` to stop the server.

## Troubleshooting

If you encounter any issues while running the server, please refer to the error messages in the Terminal (macOS) or PowerShell (Windows). If issues persist, contact the developer.
