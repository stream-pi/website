---
lastUpdated: "2021-04-06 12:11:00"
streamPiVersion: "1.0.0"
editedBy: "SamuelQuinones"
---

# Setup Stream-Pi on Raspberry-Pi

The instructions below will go over how to set up a **Stream-Pi Client** on a **RaspberryPi** or a **Linux arm7** device.

If you have any questions please reach out to us on [the Official Stream-Pi Discord Server](https://discord.gg/BExqGmk).

On some arm7 systems, specifically the RaspberryPi 3 you may experience a where your icon pictures will not render. This only seems to happen when the device is in console mode. Ensure your device is getting the appropriate power it needs and usually this can fix it. In the event that it does not, you can use use Desktop/GUI mode.

## Desktop vs Console Mode

Generally, **_we recommend console mode_** as Desktop mode may result in slower / poorer performance.

## Client Instructions

The below steps have **anchors** associated with them, so you can quickly navigate with the browser's url bar `/install/client/[PLATFORM]#step-1` for example.

### Step 1

If you downloaded '.zip' file directly from github onto the device you can skip to step 2.

You'll need to get the '.zip' file onto your device, you can always download it directly or you can download on another machine and copy over to this one using like FileZilla, VNC Viewer, or TeamViewer.

### Step 2

You'll need to install some additional packages on the system before we continue proper:

- libpangoft2-1.0-0
- libcairo2-dev

On Raspbian/Debian based distros, open your terminal and run:

```bash
$ sudo apt install libpangoft2-1.0-0 libcairo2-dev
```

### Step 3

Now that the release '.zip' file is on the device, extract the '.zip' file to a place that is easy for you to remember / easy to access. Also make sure you will always have permission to access this folder.

For example:

```nginx
/home/<YOURNAME>/StreamPiClient
```

Where `StreamPiClient` holds the unpacked files from the zip. Most programs that unzip will extract its contents to a folder with the same name as the zip file, this is fine too.

What you want to avoid is something like this:

```nginx
/home/<YOURNAME>/StreamPiClient/StreamPi-FROM-GITHUB
```

Do not save the '.zip' file contents in any directory above `/home/<YOURNAME>` as this will have permissions issues!

### Step 4

The Stream-Pi client needs access to the input devices on the RaspberryPi System. To give it this permission we need to edit the `/etc/udev/rules.d/99-com.rules` file. To do this open up your terminal and run the following command:

```bash
$ sudo nano /etc/udev/rules.d/99-com.rules
```

A bunch of text will then pop up on the screen, this is the file. You'll need to add the following chunk of text to the bottom of the file:

```nginx
SUBSYSTEM=="input*", PROGRAM="/bin/sh -c '\
        chown -R root:input /sys/class/input/*/ && chmod -R 770 /sys/class/input/*/;\
'"
```

Be weary that keyboard shortcuts to paste this chunk of text don't work when running the nano editor. To copy, cut or paste you'll need to use <kbd>Shift</kbd> while you do so.

With the new block of text added, you can hit <kbd>Ctrl</kbd> <kbd>S</kbd> then press `Y` to confirm the changes and `Enter` to confirm the name. Then <kbd>Ctrl</kbd> <kbd>C</kbd> to close nano editor.

**Please now REBOOT your RaspberryPi**

### Step 5

We need to make some changes to the RaspberryPi's configuration, There are three things we need to do:

1. Change the GPU memory split to be at least 128 MB
2. Switch the Video Driver
3. We'll change the system into console mode

We can do all of this using the RaspberryPi Config, open your terminal and run the following command:

```bash
$ sudo raspi-config
```

A window should pop up that looks like this:

![raspi-config main screen](https://raw.githubusercontent.com/raspberrypi/documentation/master/configuration/images/raspi-config.png)

Use the `up` and `down` arrow keys to move the highlighted selection between the options available. Pressing the `right` arrow key will jump out of the Options menu and take you to the `<Select>` and `<Finish>` buttons. Pressing `left` will take you back to the options. Alternatively, you can use the `Tab` key to switch between these.

### Step 5 - GPU Memory

Navigate down to `7 Advanced Options`

You should now see a menu item called `Memory Split`, navigate to it, press enter and then change the memory size to `128 MB`.

Once the new value is set, hit the right arrow key and navigate to `<Ok>`. Press enter to confirm any additional messages.

### Step 5 - Video Driver

Still in the advanced options menu, navigate to

Next we'll change the video driver...

### Step 5 - Console Mode

Finally we'll change it so the device so that it boots into console mode...

### Step 6

When you're done, exit raspi-config if you are not prompted to reboot you can go back into your terminal and run:

```bash
$ sudo reboot
```

### Step 7

These steps differ slightly depending on if you are in Desktop / Console mode. Navigate into your new Stream-Pi directory using the terminal.

```bash
$ cd /home/<YOURNAME>/StreamPiClient
# OR
$ cd ~/StreamPiClient
```

### Step 7 - Console

Once you change into this directory, run the `run` script from the terminal like so:

```bash
$ ./run_console
# you MAY need root permissions, so also try
$ sudo ./run_console
```

If you run with `sudo` then start on boot **WILL NOT WORK**.

### Step 7 - Desktop

Once you change into this directory, run the `run` script from the terminal like so:

```bash
$ ./run_desktop
# you MAY need root permissions, so also try
$ sudo ./run_desktop
```

If you run with `sudo` then start on boot **WILL NOT WORK**.

### Step 8

Stream-Pi **_SHOULD_** now launch, if it does not please take a look at our common troubleshooting steps.

Go through the setup, making sure to read the EULA.

This setup will allow you to name your device and look for the server to pair with.

### You're Done!

That's it! Stream-Pi should now run and you can add set up a server if you have not yet done so.
