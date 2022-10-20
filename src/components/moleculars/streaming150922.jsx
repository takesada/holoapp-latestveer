import { StreamCard } from "../atoms/streamCard"
import { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import styled from 'styled-components'

export const Streaming150922=()=>{
    //動画のurlと再生開始時間をまとめたデータ。バックエンドがある場合はAPIがこういった形でデータを返してくる
    const data = [
      { title: "a3", time: 3, url: "https://youtu.be/qv6UVOQ0F44" },
      { title: "a33", time: 33, url: "https://youtu.be/qv6UVOQ0F44" },
      { title: "a63", time: 63, url: "https://youtu.be/qv6UVOQ0F44" },
      {
        title: "b3",
        time: 3,
        url: "https://www.youtube.com/watch?v=pEChZsRkOG8",
      },
      {
        title: "b33",
        time: 33,
        url: "https://www.youtube.com/watch?v=pEChZsRkOG8",
      },
      {
        title: "b63",
        time: 63,
        url: "https://www.youtube.com/watch?v=pEChZsRkOG8",
      },
    ];
    //次のページへ送るためのurl
    const [url, setUrl] = useState();
    //動画開始時間
    const [time, setTime] = useState();
    //useNavigateで次のページへ遷移すると同時にurlを送る。次のページではuseLocationでここで送ったurlを取得できる
    const navigate = useNavigate();
    //見たい動画をクリックした時にする処理。その動画のurl(url)と開始時刻(t)を受け取り設定する。
    const onClick = (t, url) => {
      setTime(t);
      setUrl(`${url}?t=${t}`);
    };
    //timeの初期値はundefinedであるが、ボタンを押すことで特定の開始時刻が設定される。つまり、オンクリックの処理が終わったら、この処理が動きページ遷移をする。
    useEffect(() => {
      if (time !== undefined) {
        //送るデータは{ state: { url(このurlはパラメータ名): url(このurlは上で定義した変数) } }の形にする
        navigate(`/moviePage`, { state: { url: url } });
      }
    }, [time]);
    return(
        <div>
        <WrapperDiv>
        {data.map((t) => {
        return (
          <div key="">
            <StreamCard
            img="/imgs/5億年ぶりの9月15日.jpg"
            songName={"アイスクリームシンドローム"}
            songDate={"15/09/22"}
            />
          </div>
        );
      })}
            <StreamCard
            img="/imgs/5億年ぶりの9月15日.jpg"
            songName={"CITRUS"}
            songDate={"15/09/22"}
            />
            <StreamCard
            img="/imgs/5億年ぶりの9月15日.jpg"
            songName={"合縁事変"}
            songDate={"15/09/22"}
            />
        </WrapperDiv>
        <WrapperDiv>
            <StreamCard
            img="/imgs/5億年ぶりの9月15日.jpg"
            songName={"I’m Your Treasure Box ＊あなたはマリンせんちょうをたからばこからみつけた。"}
            songDate={"15/09/22"}
            />
            <StreamCard
            img="/imgs/5億年ぶりの9月15日.jpg"
            songName={"なにやってもうまくいかない"}
            songDate={"15/09/22"}
            />
            <StreamCard
            img="/imgs/5億年ぶりの9月15日.jpg"
            songName={"ウタカタララバイ"}
            songDate={"15/09/22"}
            />
        </WrapperDiv>
        <WrapperDiv>
            <StreamCard
            img="/imgs/5億年ぶりの9月15日.jpg"
            songName={"ここでキスして"}
            songDate={"15/09/22"}
            />
            <StreamCard
            img="/imgs/5億年ぶりの9月15日.jpg"
            songName={"丸の内サディスティック"}
            songDate={"15/09/22"}
            />
            <StreamCard
            img="/imgs/5億年ぶりの9月15日.jpg"
            songName={"ウタカタララバイ"}
            songDate={"15/09/22"}
            />
        </WrapperDiv>
        </div>
    )
}

const WrapperDiv = styled.div`
display:flex;
margin:0 auto;
`

// export const TopPage = () => {
//   return (
//     <div>
//       {data.map((t) => {
//         return (
//           <div>
//             <button onClick={() => onClick(t.time, t.url)}>{t.title}</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };