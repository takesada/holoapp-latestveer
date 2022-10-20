import { useState } from "react";
// import AdditionSettings from "./components/additionalInfo";
import CoverRadioStations from "../src/components/atoms/coverRadioStation.jsx";
// import github from "./images/github.png";
import play from "../public/imgs/playbuttonwhite.png";
import AudioControls from "../src/components/atoms/audioControl.jsx";
import pauseImg from "../public/imgs/media-pause-button.png";
// import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import styled from 'styled-components'
import Link from "next/link.js";
import Head from "next/head.js";


const CoverSongsPage=()=> {
  const [BtnClass, setBtnClass] = useState("PlayPause"); //pause play change
  const [BtnClass2, setBtnClass2] = useState("playBtn");
  const [playPauseImg, setPlayPause] = useState(play);

  const [livestream, playLiveStream] = useState(true);
  const [pauseScreen, setPauseScreen] = useState("pauseScreen");
  const [currentLivestream, setLivestream] = useState(
    ""
  );

  const [stationName, setStationName] = useState("LofiGirl");


  const [youtubeChannal, setYoutubeChannal] = useState("");

  const handlePausePlaySwitch = (e) => {
    let className = e.target.className;

    if (className === "PlayPause" || className === "playBtn") {
      setPlayPause(pauseImg);
      setBtnClass("PlayPause2");
      setBtnClass2("playBtn2");
      start();
    } else if (className === "PlayPause2" || className === "playBtn2") {
      setPlayPause(play);
      setBtnClass("PlayPause");
      setBtnClass2("playBtn");
      pause();
    }
  };

   

  const start = () => {
    playLiveStream(false);
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
  };

  const pause = () => {
    setPauseScreen("pauseScreen");
    playLiveStream(false);
  };

  const [video, setVideo] = useState(
    `https://youtu.be/3Ws77QjW8lA`
  );

  // <------------- Radio Change section -------------->
  const Tricologe = () => {
    setVideo("https://youtu.be/WFWw821wozI");
    setStationName("Ambient Renders");
    // setYoutubeChannal(
    //   "https://www.youtube.com/channel/UCXbXfisDHV_gDjawCKTyTIw"
    // );
    setLivestream(
      "https://youtu.be/Rc_-keez4xs"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  
  const GhostCityTokyo = () => {
    setVideo("https://youtu.be/VPBqpyub4Kc");
    setStationName("AnimeVibe");
    // setYoutubeChannal("https://www.youtube.com/c/AnimeVibe");
    setLivestream(
      "https://youtu.be/tuZty35Fk7M"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const Lower = () => {
    setVideo("https://youtu.be/899x5rU9mX8");
    setStationName("Chilled Cow");
    // setYoutubeChannal("https://www.youtube.com/c/LofiGirl");
    setLivestream(
      "https://youtu.be/1KUZHKI-BDk"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };


  const Phony = () => {
    setVideo("https://youtu.be/XD1t7JHbge0");
    setStationName("ChillHop Music");
    // setYoutubeChannal("https://www.youtube.com/c/Chillhopdotcom/videos");
    setLivestream(
      "https://youtu.be/N029UUlH1Dc"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };


  const CryBaby   = () => {
    setVideo("https://youtu.be/x_PCBmDGfrc");
    setStationName("Chilled Cow");
    // setYoutubeChannal("https://www.youtube.com/c/LofiGirl");
    setLivestream(
      "https://youtu.be/7wbd6ffvXm8"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };


  return (
    <div>
    <Head>
      <title>Cover Songs Page</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <InterfaceContainer>
      <RadioContainer>
        <Logo>
          <Link href="/">Hoshiyomi App</Link>
        </Logo>
        <SubHeading></SubHeading>
        <RadioStationsContainer>
          <CoverRadioStations
            Tricologe={Tricologe}
            GhostCityTokyo={GhostCityTokyo}
            Lower={Lower}
            Phony={Phony}
            CryBaby={CryBaby}
          />
        </RadioStationsContainer>
        <Link href="/"><SP>Back to Home</SP></Link>
      </RadioContainer>
      <AudioControlContainer>
        <AudioControls
        plauPause={handlePausePlaySwitch}
        buttonClass={BtnClass}
        playPauseImage={playPauseImg}
        buttonClass2={BtnClass2}
        LiveStreamAudio={currentLivestream}
        LiveStreamPlayPause={livestream}
        />
      </AudioControlContainer>
      <VideoContainer>
        <ReactPlayer
          width="140%"
          height="100%"
          loop="true"
          playing={livestream}
          volume="mute"
          url={video}
        />
      </VideoContainer>

    </InterfaceContainer>
    </div>
  );
}

const InterfaceContainer=styled.div`
  width: 98%;
  height: 97vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const RadioContainer=styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  align-content: flex-end;`

const Logo=styled.div`
  width: 150%;
  height: 10%;
  text-align: center;
  font-size: 32px;
  color: white;
  font-family: 'Sriracha', cursive;
  font-weight: 300;
  transform: scale(1, 0.9);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
      &:hover {
    cursor: pointer;
    color: #2dcde4;}`

const SubHeading=styled.div`
  width: 99%;
  height: 7%;
  text-align: center;
  font-size: 20px;
  color: white;
  margin-bottom: 2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 7px;
  transform: scale(1, 0.9);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  text-decoration-line: underline;`

const RadioStationsContainer=styled.div`
  width: 99%;
  height: 70%;
  box-shadow: 1px 0px 0 white;
  text-align: center;
  display: flex;
  justify-content: end;
  z-index: 1;`

const AudioControlContainer=styled.div`
  height: 100%;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-left: 11rem;
  z-index: 1;`

const VideoContainer=styled.div`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  top: auto;
  left: -50px;`


const SP=styled.p`
text-align:center;
font-size: 20px;
&:hover {
    cursor: pointer;
    color: #2dcde4;}
`
export default CoverSongsPage;