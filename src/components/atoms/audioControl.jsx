import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import mute from "../../../public/imgs/muteButton.png";
import volumeOn from "../../../public/imgs/volumeOnIcon.png";
import Image from "next/image";
import styled from 'styled-components'

let lastPlayedVolume = 0;

const AudioControls = ({
  plauPause,
  buttonClass,
  LiveStreamAudio,
  LiveStreamPlayPause,
}) => {
  const [volume, setVolume] = useState(0.35);

  return (
    <AudioControl>
      <LiveStreamPlayer>
      <ReactPlayer
        className="liveStreamPlayer"
        playing={LiveStreamPlayPause}
        volume={volume}
        url={LiveStreamAudio}
      />
      </LiveStreamPlayer>
    </AudioControl>
  );
};

const AudioControl=styled.div`
    width: 99%;
    height: 100px;
    text-align: center;
    font-size: 48px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
    margin-top: auto;
    z-index: 1;`

const LiveStreamPlayer=styled.div`
position: absolute;
right: 0;
bottom: 0;`

export default AudioControls;