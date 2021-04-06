---
lastUpdated: "2021-04-06 12:10:32"
streamPiVersion: "1.0.0"
editedBy: "SamuelQuinones"
---

# Setup Stream-Pi on Windows

The instructions below will go over how to set up a **StreamPi Client** on a **Windows (x86)** 64-Bit operating system.

If you have any questions please reach out to us on [the Official Stream-Pi Discord Server](https://discord.gg/BExqGmk).

## Client Instructions

The below steps have **anchors** associated with them, so you can quickly navigate with the browser's url bar `/install/client/[PLATFORM]#step-1` for example.

### Step 1

Assuming you have already downloaded the '.zip' file from github, extract the '.zip' file to a place that is easy for you to remember / easy to access. Also make sure you will always have permission to access this folder.

![2-extracting-the-folder-from-the-zip-file.png](/images/screenshots/client/windows-x64/2-extracting-the-folder-from-the-zip-file.png)
<br/>
![3-extracting-the-folder-from-the-zip-file-continued.png](/images/screenshots/client/windows-x64/3-extracting-the-folder-from-the-zip-file-continued.png)

For Example:

```nginx
C:\Users\<YOURNAME>\StreamPiClient
```

Where `StreamPiClient` holds the unpacked files from the zip. Most programs that unzip will extract its contents to a folder with the same name as the zip file, this is fine too.

![4-opening-up-the-newly-extracted-folder.png](/images/screenshots/client/windows-x64/4-opening-up-the-newly-extracted-folder.png)

What you want to avoid is something like this:

```nginx
C:\Users\<YOURNAME>\StreamPiClient\StreamPi-FROM-GITHUB
```

Do **not** save the '.zip' file contents to any directory within either;

```nginx
C:\Program Files
```

Or,

```nginx
C:\Program Files (x86)
```

As this will have permissions issues!

### Step 2

With the files extracted, navigate into your new Stream-Pi directory and look for a `run.vbs` file, double click it.

![5-using-the-run-vbs-file.png](/images/screenshots/client/windows-x64/5-using-the-run-vbs-file.png)
<br/>
![5a-open-the-run-vbs-script-file.png](/images/screenshots/client/windows-x64/5a-open-the-run-vbs-script-file.png)

You **WILL** see a pop up from windows relating to your firewall asking you to allow traffic to public/private networks. This usually happens only once, during first time setup. If you're running Stream-Pi Client on a private network, make sure you have selected the option of allowing it to access private network checked. **BE SURE TO CLICK ALLOW**.

Denying access will prevent the server from connecting to the Server.

![5b-allow-stream-pi-server-through-the-windows-firewall.png](/images/screenshots/client/windows-x64/5b-allow-stream-pi-server-through-the-windows-firewall.png)

### Step 3

Stream-Pi **_SHOULD_** now launch, if it does not please take a look at our common troubleshooting steps.

![6-launching-stream-pi-for-the-first-time.png](/images/screenshots/client/windows-x64/6-launching-stream-pi-for-the-first-time.png)

Go through the setup, making sure to read the EULA.

![7-accepting-the-terms-of-the-license.png](/images/screenshots/client/windows-x64/7-accepting-the-terms-of-the-license.png)

This setup will allow you to name your device and look for a server to connect to.

![8-naming-your-client-setting-the-ip-address-port-and-resolution.png](/images/screenshots/client/windows-x64/8-naming-your-client-setting-the-ip-address-port-and-resolution.png)

### You're Done!

That's it! Stream-Pi should now run and you can add attempt to connect to your server.

![9-congratulations-you-have-successfully-installed-the-stream-pi-client.png](/images/screenshots/client/windows-x64/9-congratulations-you-have-successfully-installed-the-stream-pi-client.png)
