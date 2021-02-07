// EVENTUALLY THIS WILL BE REPLACED WITH AN INTERNAL REST API

import { chunkArray } from "@util";

type FeatureObj = {
  title: string;
  desc: string;
};

const features: FeatureObj[] = [
  {
    title: "Full OBS Integration!",
    desc:
      "Stream-Pi integrates with OBS through the socket plugin, and doesn't require you to set up hotkeys like some other alternatives. As long as OBS is running, the Stream-Pi can detect all of your scenes, sources, and transitions and be able to control it all!",
  },
  {
    title: "Cross Platform Compatibility!",
    desc:
      "We want Stream-Pi to be accessible, so we plan to release it on every major platform; iOS, Android, PC, Linux, and Smart Fridges! Ok maybe not that last one haha ... unless?",
  },
  {
    title: "Open Source!",
    desc:
      "Stream-Pi is a free to use software package. It's still in its growing stages and we're constantly adding more support. The code is available so if you've got an idea or want to make your own plugin, we're all for it!",
  },
  {
    title: "Twitter Integration!",
    desc:
      "Stream-Pi integrates with Twitter API to be able to make tweets with the push of a button! Great for easily making tweets when you're about to stream!",
  },
  {
    title: "HotKey Support",
    desc:
      "Easily setup hotkeys / macros for gaming, video editing, whatever you need!",
  },
  {
    title: "Media Key Support",
    desc:
      "Easily take control of your music and videos without having to be in the application playing them!",
  },
  {
    title: "Play Audio Files",
    desc: "Use your Stream-Pi as a sound board, this is great for broadcasts!",
  },
];

const plannedFeatures: FeatureObj[] = [
  {
    title: "Twitch Integration",
    desc:
      "Imagine being able to control your Twitch.tv experience with the push of a few buttons! Changing your game, Twitch's API has a lot to offer in the way of possibilities!",
  },
  {
    title: "Spotify Integration",
    desc:
      "The next planned feature for Stream-Pi is the ability to control Spotify, full control of play/pause, volume, skip/rewind, playing playlists and adding songs to playlists!",
  },
  {
    title: "IFTTT Support",
    desc:
      "IFTTT is already a well supported module from controlling everything from a smart house to making tweets on your behalf. We want to be able to integrate that experience with the Stream-Pi to allow for maximum control!",
  },
  {
    title: "Computer Control",
    desc:
      "What if you could press a button that would Launch OBS, move it to another monitor, open up discord, and minimize everything else on the computer? Well we're going to see if we can't figure out how to do that!",
  },
  {
    title: "Adobe Integration",
    desc:
      "Video editing is a pain in the butt sometimes, what if Stream-Pi could control your video or photoeditor beyond the use of hotkeys? What if we could take advantage of full API integration?",
  },
];

export const chunkedFeatures = chunkArray(features, 3);
export const chunkedPlanFeatures = chunkArray(plannedFeatures, 3);
