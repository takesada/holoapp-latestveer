import {StreamCard} from "../atoms/streamCard.jsx"
import styled from 'styled-components'



export const MyFav =()=>{
    return(
        <StreamWrapDiv>
            <StreamCard
                img="/imgs/5億年ぶりの9月15日.jpg"
                songName={"合縁事変"}
                songDate={"15/09/22"}
            />
            <StreamCard
                img="/imgs/kakero.jpg"
                songName={"駆けろ"}
                songDate={"07/08/21"}
            />
            <StreamCard
                img="/imgs/CapSule.jpg"
                songName={"CapSule"}
                songDate={"04/04/22"}
            />
            <StreamCard
                img="/imgs/NEXT COLOR PLANET.jpg"
                songName={"NEXT COLOR PLANET"}
                songDate={"22/03/20"}
            />
            <StreamCard
                img="/imgs/Animal.jpg"
                songName={"Animal"}
                songDate={"27/01/22"}
            />
            <StreamCard
                img="/imgs/29082021kyuuniutaitakunaru.jpg"
                songName={"MAGE OF VIOLET"}
                songDate={"29/08/21"}
            />
            <StreamCard
                img="/imgs/5億年ぶりの9月15日.jpg"
                songName={"なにやってもうまくいかない"}
                songDate={"15/09/22"}
            />
        </StreamWrapDiv>
    )
}

const StreamWrapDiv=styled.div`
margin-left:160px;
display:flex;
overflow-x: scroll;
&::-webkit-scrollbar {
  height: 14px; /* スクロールバーの高さ */
}
&::-webkit-scrollbar-thumb {
  background: white; /* ツマミの色 */
  border-radius: 7px;}
&::-webkit-scrollbar-track {
  background: #878585; /* トラックの色 */
  border-radius: 7px; /* トラック両端の丸み */
}
`