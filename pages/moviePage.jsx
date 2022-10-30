import { useRouter } from "next/router";
import { useState } from "react";
import {SideBar} from "../src/components/atoms/sideBar.jsx"
import styled from 'styled-components'
import ReactPlayer from "react-player";
const MoviePage = () => {
  //送られてきたデータを受け取る
  const router = useRouter();
  //送られてくるデータは{ state: { url: url } }となっているため、location.state.urlで欲しいurlの値を取得できる
  //もし送られてくるデータがこの形なら{ state: { a: url } } 、location.state.aでurlの値を取得できる
  const [url,setUrl]=useState(router.query.url);
  const [livestream, playLiveStream] = useState(true);
  console.log(url)
  return (
    <>
      <SideBar/>
      <BackgroundDiv>
      <ReactPlayer
      url={"https://youtu.be/ZphCAtkNV7o"}
      width={1312}
      height={569}
      playing={livestream}
      volume="mute"
      loop="true"
      />
      </BackgroundDiv>
      <PlayerWrapDiv>
      <ReactPlayer
      url={router.query.url}
      playing={livestream} />
      </PlayerWrapDiv>
    </>
  );
};

const PlayerWrapDiv=styled.div`
position:absolute;
right:0;
bottom:0;
`

const BackgroundDiv=styled.div`
z-index:-1;
width:100%;
height:100%;
margin-left:-50px;`

export default MoviePage