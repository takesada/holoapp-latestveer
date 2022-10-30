import { StreamCard } from "../atoms/streamCard"
import { useEffect, useState } from "react";
import styled from 'styled-components'
import { useRouter } from "next/router";

export const Streaming290821=()=>{
      const data = [
        {time: 72, url: "https://youtu.be/i7oDE-5Q-5o",img:"/imgs/29082021kyuuniutaitakunaru.jpg",songName:"MAGE OF VIOLET", songTime:"29/08/21" },
        {time: 420, url: "https://youtu.be/i7oDE-5Q-5o",img:"/imgs/29082021kyuuniutaitakunaru.jpg",songName:"Beautiful World", songTime:"29/08/21" },
        {time: 796, url: "https://youtu.be/i7oDE-5Q-5o",img:"/imgs/29082021kyuuniutaitakunaru.jpg",songName:"RE:I AM", songTime:"29/08/21" }];
      const data2=[ 
        {time: 1258,url: "https://youtu.be/i7oDE-5Q-5o",img:"/imgs/29082021kyuuniutaitakunaru.jpg",songName:"Kanden", songTime:"29/08/21"},
        {time: 1684,url: "https://youtu.be/i7oDE-5Q-5o",img:"/imgs/29082021kyuuniutaitakunaru.jpg",songName:"Kaikai Kitan", songTime:"29/08/21"},
        {time: 1935,url: "https://youtu.be/i7oDE-5Q-5o",img:"/imgs/29082021kyuuniutaitakunaru.jpg",songName:"READYMADE", songTime:"29/08/21"}];
      const data3=[ 
        {time: 2207,url: "https://youtu.be/i7oDE-5Q-5o",img:"/imgs/29082021kyuuniutaitakunaru.jpg",songName:"Odo", songTime:"29/08/21"},
        {time: 2478,url: "https://youtu.be/i7oDE-5Q-5o",img:"/imgs/29082021kyuuniutaitakunaru.jpg",songName:"Kaibutsu / Monster", songTime:"29/08/21"},
        {time: 2753,url: "https://youtu.be/i7oDE-5Q-5o",img:"/imgs/29082021kyuuniutaitakunaru.jpg",songName:"Hitchcock", songTime:"29/08/21"}];
      const data4=[ 
        {time: 2999,url: "https://youtu.be/i7oDE-5Q-5o",img:"/imgs/29082021kyuuniutaitakunaru.jpg",songName:"Itte", songTime:"29/08/21"},
        {time: 3361,url: "https://youtu.be/i7oDE-5Q-5o",img:"/imgs/29082021kyuuniutaitakunaru.jpg",songName:"Bye Bye Rainy", songTime:"29/08/21"},
        {img:"/imgs/nightsky.jpg"}];
      const [url, setUrl] = useState();
      const [time, setTime] = useState();
      const router = useRouter();
      const onClick = (t, url) => {
            setTime(t);
            setUrl(`${url}?t=${t}`);
          };
        useEffect(() => {
        if (time !== undefined) {
            //送るデータは{ state: { url(このurlはパラメータ名): url(このurlは上で定義した変数) } }の形にする
            router.push({pathname:`/moviePage`,  query: { url: url } });
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
            <WrapperDiv>
            {data4.map((a) => {
            return (
            <div key="">
                <StreamCard
                img={a.img}
                songName={a.songName}
                songDate={a.songTime}
                onClick={()=>onClick(a.time,a.url)}
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