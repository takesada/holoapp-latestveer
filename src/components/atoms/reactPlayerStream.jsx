import ReactPlayer from "react-player";

export const ReactPlayerStream=(props)=>{
  return(
    <div>
    <ReactPlayer
    url='{props.url}?t={props.time}'
    />
    <SP>{props.songName}</SP>
    <SP>{props.songDate}</SP>
    </div>
  )
}

const SP =styled.p`
width:150px;
text-align:center;
margin:0 auto;
font-family: Times New Roman;
`