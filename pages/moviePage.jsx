import ReactPlayer from "react-player";
import { BrowserRouter, Router, useLocation } from "react-router-dom";
export const MoviePage = () => {
  //送られてきたデータを受け取る
  const location = useLocation();
  //送られてくるデータは{ state: { url: url } }となっているため、location.state.urlで欲しいurlの値を取得できる
  //もし送られてくるデータがこの形なら{ state: { a: url } } 、location.state.aでurlの値を取得できる
  return (
    <>
      <ReactPlayer url={location.state.url} />
      <p>{location.state.url}</p>
    </>
  );
};