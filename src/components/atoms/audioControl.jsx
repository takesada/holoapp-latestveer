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
  // playPauseImage,
  // buttonClass2,
  LiveStreamAudio,
  LiveStreamPlayPause,
}) => {
  // const handleMute = (e) => {
  //   let classNameVol = e.target.className;
  //   if (classNameVol === "volumeOn" || classNameVol === "audioOnImg") {
  //     setVolumeImg(mute);
  //     setUnmute("volumeOff");
  //     setUnmute2("audioOffImg");
  //     lastPlayedVolume = volume;
  //     setVolume(0);
  //   } else if (classNameVol === "volumeOff" || classNameVol === "audioOffImg") {
  //     setVolumeImg(volumeOn);
  //     setUnmute("volumeOn");
  //     setUnmute2("audioOnImg");
  //     setVolume(lastPlayedVolume);
  //   }
  // };

  // const [volumeImg, setVolumeImg] = useState(volumeOn);
  const [volume, setVolume] = useState(0.35);

  return (
    <AudioControl>
      {/* <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.9 }}
        onClick={plauPause}
        className={buttonClass}
      >
        <Image src={playPauseImage} className={buttonClass2} alt="" />
      </motion.div> */}
      {/* <div>
        <VolumeDialInput
          type="range"
          min={0}
          max={1}
          value={volume}
          step={0.01}
          onChange={(event) => {
            setVolume(event.target.valueAsNumber);
          }}
        />
      </div> */}
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

// const VolumeDialInput=styled.input`
//     border: #c7c7c7 1px solid;
//     height: 1px;
//     -webkit-appearance: none;
//     width: 100px;
//     margin-top: 4.7rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;margin-left: 6px;
//     margin-left: 3px;
//     border-radius: 30px;
//     background-color: #C0C0C0;`

const LiveStreamPlayer=styled.div`
position: absolute;
right: 0;
bottom: 0;`

export default AudioControls;