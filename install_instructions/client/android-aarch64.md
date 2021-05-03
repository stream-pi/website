---
lastUpdated: "2021-03-22 11:50:12"
streamPiVersion: "1.0.0"
editedBy: "SamuelQuinones"
---

# Setup Stream-Pi on Android

The instructions below will go over how to set up a **Stream-Pi Client** on **64-Bit Android devices**. 

**32-Bit Android devices are NOT supported.**

**Currently the latest public builds are supported only till Android 10. Android 11 introduces new storage API and moves away from previous storage implementations. It has been patched and fixed and will be available in the next public release.**

If you have any questions please reach out to us on [the Official Stream-Pi Discord Server](https://discord.gg/BExqGmk).

## Client Instructions

The below steps have **anchors** associated with them, so you can quickly navigate with the browser's url bar `/install/client/[PLATFORM]#step-1` for example.

There are two sets of instructions for android, take note of which applies to you based on **your operating system**.
## For devices running Oreo or **newer** (>= 8.0)

### Step 1

Download the **Stream-Pi Client** `.apk` file from the [Github](https://github.com/stream-pi/client/releases). The **OFFICIAL** apk will only ever be hosted here. A Google Play release is coming soon. **Do NOT download from other sources.**

### Step 2

Install the app by either 

a) tapping on the completed download on your mobile browser 

or

b) navigating to your Downloads folder via a file browser

You may get a security prompt to allow Unknown sources. Click on allow.

You may get another security prompt that the developer is not trusted by Google Play. Click 'Install Anyways'.

The App should now safely install.

## For devices running **older** versions of Android (< 8.0)

### Step 1

Download the **Stream-Pi Client** `.apk` file from the [Github](https://github.com/stream-pi/client/releases). The **OFFICIAL** apk will only ever be hosted here. A Google Play release is coming soon. **Do NOT download from other sources.**

### Step 2

Navigate to `Settings > Security Settings > Install from unknown sources` (link may vary depending on device).

### Step 3

Navigate to your Downloads folder then tap on the downloaded **Stream-Pi Client** `.apk` file.

You may get a security prompt to allow Unknown sources. Click on allow.

You may get another security prompt that the developer is not trusted by Google Play. Click 'Install Anyways'.

The app should safely install.

## Permissions

The app requires `Storage` permissions to be granted for it to work properly.

Navigate to `Settings > Apps & Notifications > App Info > Stream-Pi Client` and grant `Storage` permission to the app (link may vary depending on device).

## You're Done!

That's it! Stream-Pi should now run and greet you with the "Welcome" Message.
