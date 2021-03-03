---
lastUpdated: "2021-03-01"
streamPiVersion: "1.0.0"
---

# Setup Stream-Pi on Windows

The instructions below will go over how to set up a StreamPi Server on a Windows 64 Bit operating system.

If you have any questions please reach out to us on [the Official Stream-Pi Discord](https://discord.gg/BExqGmk).

## Server Instructions

The below steps have **anchors** associated with them, so you can quick navigate with the browser's url bar `/install/server/[PLATFORM]#step-1` for example.

### Step 1

Assuming you already downloaded the zip file from github, extract the zip file to place that is easy for you to remember / easy to access. Also make sure you will always have permission to access this folder.

For example:

```
C:\Users\<YOURNAME>\StreamPiServer
```

Where `StreamPiServer` holds the unpacked files from the zip. Most programs that unzip will extract its contents to a folder with the same name as the zip file, this is fine too.

What you want to avoid is something like this:

```
C:\Users\<YOURNAME>\StreamPiServer\StreamPi-FROM-GITHUB
```

### Step 2

With the files extracted, navigate into your new StreamPi directory and look for a `run.vbs` file, double click it.

You **WILL** see a pop up from windows relating to your firewall asking you to allow traffic to public/private networks. This usually happens only once, during first time setup. If youre running Stream-Pi Client on a private network, make sure you have the option of allowing it to access private network checked. **BE SURE TO CLICK ALLOW**.

Denying access will prevent the server from connectiing to the client.

### Step 3

Stream-Pi ***SHOULD*** now launch, if it does not please take a look at our common troubleshooting steps.

Go through the setup, making sure to read the EULA.

This setup will allow you to name your device and customize the port the server runs on.

### You're Done!

That's it! Stream-Pi should now run and you can add a client if you have not already done so!
