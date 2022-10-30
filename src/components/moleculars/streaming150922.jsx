import { StreamCard } from "../atoms/streamCard"
import { useEffect, useState } from "react";
import styled from 'styled-components'
import { useRouter } from "next/router";

export const Streaming150922=()=>{
    //動画のurlと再生開始時間をまとめたデータ。バックエンドがある場合はAPIがこういった形でデータを返してくる
    const data = [
      {time: 225, url: "https://youtu.be/3zd5C_6jMQ4",img:"/imgs/5億年ぶりの9月15日.jpg",songName:"Ice Cream Syndrome", songTime:"15/09/22" },
      {time: 1017, url: "https://youtu.be/3zd5C_6jMQ4",img:"/imgs/5億年ぶりの9月15日.jpg",songName:"CITRUS", songTime:"15/09/22" },
      {time: 1350, url: "https://youtu.be/3zd5C_6jMQ4",img:"/imgs/5億年ぶりの9月15日.jpg",songName:"Aien-Jihen", songTime:"15/09/22" }];
    const data2=[ 
      {time: 1689,url: "https://youtu.be/3zd5C_6jMQ4",img:"/imgs/5億年ぶりの9月15日.jpg",songName:"I'm Your Treasure Box * You have found captain Marine in a treasure chest", songTime:"15/09/22"},
      {time: 2077,url: "https://youtu.be/3zd5C_6jMQ4",img:"/imgs/5億年ぶりの9月15日.jpg",songName:"Nani Yatte mo Umaku Ikanai", songTime:"15/09/22"},
      {time: 2335,url: "https://youtu.be/3zd5C_6jMQ4",img:"/imgs/5億年ぶりの9月15日.jpg",songName:"Fleeting Lullaby", songTime:"15/09/22"}];
    const data3=[ 
      {time: 2335,url: "https://youtu.be/3zd5C_6jMQ4",img:"/imgs/5億年ぶりの9月15日.jpg",songName:"Koko de Kiss Shite", songTime:"15/09/22"},
      {time: 2335,url: "https://youtu.be/3zd5C_6jMQ4",img:"/imgs/5億年ぶりの9月15日.jpg",songName:" Marunouchi Sadistic", songTime:"15/09/22"},
      {img:"/imgs/nightsky.jpg"}];

    //次のページへ送るためのurl
    const [url, setUrl] = useState();
    //動画開始時間
    const [time, setTime] = useState();
    //useNavigateで次のページへ遷移すると同時にurlを送る。次のページではuseLocationでここで送ったurlを取得できる
    const router = useRouter();
    //見たい動画をクリックした時にする処理。その動画のurl(url)と開始時刻(t)を受け取り設定する。
    const onClick = (t, url) => {
      setTime(t);
      setUrl(`${url}?t=${t}`);
    };
    //timeの初期値はundefinedであるが、ボタンを押すことで特定の開始時刻が設定される。つまり、オンクリックの処理が終わったら、この処理が動きページ遷移をする。
    useEffect(() => {
      if (time !== undefined) {
        //送るデータは{ state: { url(このurlはパラメータ名): url(このurlは上で定義した変数) } }の形にする
        router.push({pathname:`/moviePage`,  query: { url: url }, });
      }
    }, [time]);
    return(
        <div>
        <WrapperDiv>
        {data.map((x) => {
        return (
          <div key="">
            <StreamCard
            img={x.img}
            songName={x.songName}
            songDate={x.songTime}
            onClick={()=>onClick(x.time,x.url)}
            />   
        </div>
        );
        })}
        </WrapperDiv> 
        <WrapperDiv>
        {data2.map((y) => {
          return (
            <div key="">
              <StreamCard
              img={y.img}
              songName={y.songName}
              songDate={y.songTime}
              onClick={()=>onClick(y.time,y.url)}
              />
            </div>
          );
        })}
        </WrapperDiv>
        <WrapperDiv>
        {data3.map((z) => {
          return (
            <div key="">
              <StreamCard
              img={z.img}
              songName={z.songName}
              songDate={z.songTime}
              onClick={()=>onClick(z.time,z.url)}
              />
            </div>
          );
        })}
        </WrapperDiv>
        </div>
    )
}

const WrapperDiv = styled.div`
display:flex;
margin:0 auto;
`
