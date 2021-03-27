---
lastUpdated: "2021-03-13 18:25:29"
streamPiVersion: "1.0.0"
editedBy: "SamuelQuinones"
---

# Setup Stream-Pi on Linux

The instructions below will go over how to set up a **Stream-Pi Client** on a **Linux 64-Bit** operating system.

If you have any questions please reach out to us on [the Official Stream-Pi Discord Server](https://discord.gg/BExqGmk).

## Client Instructions

The below steps have **anchors** associated with them, so you can quickly navigate with the browser's url bar `/install/client/[PLATFORM]#step-1` for example.

### Step 1

Assuming you have already downloaded the '.zip' file from github, extract the '.zip' file to a place that is easy for you to remember / easy to access. Also make sure you will always have permission to access this folder.

For example:

```
/home/<YOURNAME>/StreamPiClient
```

Where `StreamPiClient` holds the unpacked files from the zip. Most programs that unzip will extract its contents to a folder with the same name as the zip file, this is fine too.

What you want to avoid is something like this:

```
/home/<YOURNAME>/StreamPiClient/StreamPi-FROM-GITHUB
```

Do not save the '.zip' file contents in any directory above `/home/<YOURNAME>` as this will have permissions issues!

### Step 2

With the files extracted, open your terminal and navigate into your new Stream-Pi directory:

```bash
$ cd /home/<YOURNAME>/StreamPiClient
# OR
$ cd ~/StreamPiClient
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

This setup will allow you to name your device and look for a server to connect to.

### You're Done!

That's it! Stream-Pi should now run and you can add attempt to connect to your server.