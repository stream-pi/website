---
lastUpdated: "2021-03-14 17:05:10"
streamPiVersion: "1.0.0"
editedBy: "SamuelQuinones"
---

# Setup Stream-Pi on Windows

The instructions below will go over how to set up a **StreamPi Server** on a **Windows** (x86) 64-Bit operating system.

If you have any questions please reach out to us on [the Official Stream-Pi Discord Server](https://discord.gg/BExqGmk).

## Server Instructions

The below steps have **anchors** associated with them, so you can quickly navigate with the browser's url bar `/install/server/[PLATFORM]#step-1` for example.

### Step 1

Assuming you have already downloaded the '.zip' file from github, extract the '.zip' file to a place that is easy for you to remember / easy to access. Also make sure you will always have permission to access this folder.

![2-extract-the-zip-file.png](/images/screenshots/server/windows-x64/2-extract-the-zip-file.png)
<br />
![3-extraction-of-the-zip-file](/images/screenshots/server/windows-x64/3-extraction-of-the-zip-file.png)

For example:

```
C:\Users\<YOURNAME>\StreamPiServer
```

Where `StreamPiServer` holds the unpacked files from the zip. Most programs that unzip will extract its contents to a folder with the same name as the zip file, this is fine too.

![4-zip-file-successfully-extracted](/images/screenshots/server/windows-x64/4-zip-file-successfully-extracted.png)
<br />
![5-rename-the-folder-to-fit-your-needs](/images/screenshots/server/windows-x64/5-rename-the-folder-to-fit-your-needs.png)

What you want to avoid is something like this:

```
C:\Users\<YOURNAME>\StreamPiServer\StreamPi-FROM-GITHUB
```

Do **not** save the '.zip' file contents to any directory within either;

```
C:\Program Files
```

Or,

```
C:\Program Files (x86)
```

As this will have permissions issues!

### Step 2

With the files extracted, navigate into your new Stream-Pi directory and look for a `run.vbs` file, double click it.

![6-double-click-the-run-script-to-launch](/images/screenshots/server/windows-x64/6-double-click-the-run-script-to-launch.png)
<br/>
![7-open-the-run-vbs-script-file](/images/screenshots/server/windows-x64/7-open-the-run-vbs-script-file.png)

You **WILL** see a pop up from windows relating to your firewall asking you to allow traffic to public/private networks. This usually happens only once, during first time setup. If you're running Stream-Pi Server on a private network, make sure you have selected the option of allowing it to access private network checked. **BE SURE TO CLICK ALLOW**.

Denying access will prevent the server from connecting to the client.

![8-allow-stream-pi-server-through-the-windows-firewall](/images/screenshots/server/windows-x64/8-allow-stream-pi-server-through-the-windows-firewall.png)

### Step 3

Stream-Pi **_SHOULD_** now launch, if it does not please take a look at our common troubleshooting steps.

![9-stream-pi-server-initial-startup](/images/screenshots/server/windows-x64/9-stream-pi-server-initial-startup.png)

Go through the setup, making sure to read the EULA.

![10-accepting-the-stream-pi-eula](/images/screenshots/server/windows-x64/10-accepting-the-stream-pi-eula.png)

This setup will allow you to name your device and customize the port the server runs on.

![11-setting-a-stream-pi-server-nickname-port](/images/screenshots/server/windows-x64/11-setting-a-stream-pi-server-nickname-port.png)

### You're Done!

That's it! Stream-Pi should now run and you can add a client if you have not already done so!

![12-stream-pi-server-setup-is-complete](/images/screenshots/server/windows-x64/12-stream-pi-server-setup-is-complete.png)
