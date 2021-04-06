---
lastUpdated: "2021-04-06 12:06:20"
streamPiVersion: "1.0.0"
editedBy: "SamuelQuinones"
---

# Setup Stream-Pi on Linux

The instructions below will go over how to set up a **Stream-Pi Server** on a **Linux 64-Bit** operating system.

If you have any questions please reach out to us on [the Official Stream-Pi Discord Server](https://discord.gg/BExqGmk).

## Server Instructions

The below steps have **anchors** associated with them, so you can quickly navigate with the browser's url bar `/install/server/[PLATFORM]#step-1` for example.

### Step 1

Assuming you have already downloaded the '.zip' file from github, extract the '.zip' file to a place that is easy for you to remember / easy to access. Also make sure you will always have permission to access this folder.

For example:

```nginx
/home/<YOURNAME>/StreamPiServer
```

Where `StreamPiServer` holds the unpacked files from the zip. Most programs that unzip will extract its contents to a folder with the same name as the zip file, this is fine too.

What you want to avoid is something like this:

```nginx
/home/<YOURNAME>/StreamPiServer/StreamPi-FROM-GITHUB
```

Do not save the '.zip' file contents in any directory above `/home/<YOURNAME>` as this will have permissions issues!

### Step 2

With the files extracted, open your terminal and navigate into your new Stream-Pi directory:

```bash
$ cd /home/<YOURNAME>/StreamPiServer
# OR
$ cd ~/StreamPiServer
```

Once you change into this directory, run the `run` script from the terminal like so:

```bash
$ ./run
# you MAY need root permissions, so also try
$ sudo ./run
```

If you run with `sudo` then start on boot **WILL NOT WORK**.

### Step 3

Stream-Pi **_SHOULD_** now launch, if it does not please take a look at our common troubleshooting steps.

Go through the setup, making sure to read the EULA.

This setup will allow you to name your device and customize the port the server runs on.

### You're Done!

That's it! Stream-Pi should now run and you can add a client if you have not already done so!
