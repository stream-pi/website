---
lastUpdated: "2021-05-03 12:25:00"
streamPiVersion: "1.0.0"
editedBy: "rnayabed, SamuelQuinones"
---

# Setup Stream-Pi on Raspberry-Pi

The instructions below will go over how to set up **Stream-Pi Client** on a **RaspberryPi** running **Raspberry Pi OS 32-Bit**. For a general Linux ARMv7 tutorial for other systems, follow the `Linux ARMv7` tutorial.

**This method is NOT to be followed if your Raspberry Pi is running a 64 bit OS.**. Linux aarch64 builds are in the works, and will be available from the next release.

If you have any questions please reach out to us on [the Official Stream-Pi Discord Server](https://discord.gg/BExqGmk).

Unlike Server, Stream-Pi Client has two main methods of running on Raspberry Pi and other ARMv7 devices. Desktop Mode and Console Mode.

## Desktop vs Console Mode

Desktop Mode is to be used when you want to use Stream-Pi as a standard app with its window that you can resize and adjust. 

Console Mode is to be used when you want a clean look without any windowing system.

Generally, **_we recommend console mode_** as Desktop mode may result in slower / poorer performance due to lack of hardware acceleration.


**There is a bug in the latest release which prevents some ARMv7 devices like the Raspberry Pi 3 (Raspberry Pi OS) to render icons while running Stream-Pi in console mode. The only solution then is to run Stream-Pi Client in Desktop mode. This issue has been already patched and will no longer be there in future releases.**


## Instructions

The below steps have **anchors** associated with them, so you can quickly navigate with the browser's url bar `/install/client/[PLATFORM]#step-1` for example.

## Step 1

If you downloaded '.zip' file directly from github onto the device you can skip to step 2.

You'll need to get the '.zip' file onto your device, you can always download it directly or you can download on another machine and copy over to this one using like FileZilla, VNC Viewer, Team Viewer, or SCP.

## Step 2

You'll need to install some additional packages on the system before we continue proper:

- libpangoft2-1.0-0
- libcairo2-dev

To install them, run:

```bash
$ sudo apt install libpangoft2-1.0-0 libcairo2-dev
```

## Step 3

Now that the release '.zip' file is on the device, extract the '.zip' file to a place that is easy for you to remember / easy to access. Also make sure you will always have permission to access this folder.

For example:

```nginx
/home/pi/StreamPiClient
```

Be careful to not extract the zip in directories which cant be edited by non-root as it will cause Stream-Pi to not work correctly. For example: `/home/`.

## Step 4

**This step is required only for those who wish to use Stream-Pi in console mode. Skip this if you plan to use desktop mode.**

Stream-Pi Client takes over touch and other input devices when run in console mode, since there is no DM to get those services from. To give it this permission we need to edit the `/etc/udev/rules.d/99-com.rules` file. Open up your terminal and run the following command:

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

**After saving, reboot your Pi.**

## Step 5

We need to make some changes to the Raspberry Pi's configuration, There are three things we need to do:

1. Assign required GPU Memory.
2. Select GPU Driver.
3. Select Desktop/Console boot mode.
4. Reboot

We can do all of this using the Raspberry Pi Config, open your terminal and run the following command:

```bash
$ sudo raspi-config
```

A window should pop up that looks like this:

![raspi-config main screen](https://raw.githubusercontent.com/raspberrypi/documentation/master/configuration/images/raspi-config.png)

Use the `up` and `down` arrow keys to move the highlighted selection between the options available. Pressing the `right` arrow key will jump out of the Options menu and take you to the `<Select>` and `<Finish>` buttons. Pressing `left` will take you back to the options. Alternatively, you can use the `Tab` key to switch between these.

#### 1. Assign required GPU Memory

Navigate down to `7 Advanced Options`

You should now see a menu item called `Memory Split`, navigate to it, press enter and then change the memory size to `128 MB`.

Once the new value is set, hit the right arrow key and navigate to `<Ok>`. Press enter to confirm any additional messages.

#### 2. Select GPU Driver

Still in the advanced options menu, navigate to `GPU Driver`.

Select the **FAKE KMS** Driver and press enter to choose it.

#### 3. Select Desktop/Console Mode 

Go back to the main menu, and navigate to `System Options.`

Select the option `Boot / Auto login`.

If you plan to run Stream-Pi with Desktop mode, choose `Desktop autologin`, or else if you want to run Stream-Pi with Console Mode, choose `Console autologin`

Instead of autologin, you may choose the other option available for password prompt as well. 

#### 4. Reboot

Now go ahead and reboot your Raspberry Pi.

## Step 6 - Installation Done, now first run.

All required prerequisites and configuration to run Stream-Pi Client has been done. The instructions below show how you to run it.

First navigate to the directory where Stream-Pi Client is extracted. For example: 

```bash
$ cd /home/pi/Stream-Pi-Client
```

If you want to run it on console mode, run:

```bash
$ ./run_console
```

If you want to run it on desktop mode, run :

```bash
$ ./run_desktop
```

**DO NOT run Stream-Pi Client as root. This may break the auto startup mechanism.**

## Thats it!

Stream-Pi Client should now launch and greet you with a "Welcome!" Message. Proceed through the first time setup by agreeing to the license, and setting the required properties like the Width and Height of your screen, and the Server IP.

## Troubleshoot

If you cant get it to work or need additional support, please dont hesitate to reach us out on [Discord](https://discord.gg/BExqGmk).
