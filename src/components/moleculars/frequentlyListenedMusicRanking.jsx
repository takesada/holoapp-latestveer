import {StreamCard} from "../atoms/streamCard.jsx"
import styled from 'styled-components'



export const FrequentlyListenedMusicRanking =()=>{
    return(
        <RecommendationDiv>
            <StreamCard
                img="/imgs/GHOST.jpg"
                songName={"1.   GHOST"}
            />
            <StreamCard
                img="/imgs/template.jpg"
                songName={"2.   template"}
            />
            <StreamCard
                img="/imgs/GETCHA.jpg"
                songName={"3.   GETCHA"}
            />
            <StreamCard
                img="/imgs/stellersteller.jpg"
                songName={"4.   stellersteller"}
            />
            <StreamCard
                img="/imgs/wicked.jpg"
                songName={"5.   wicked"}
            />
        </RecommendationDiv>
    )
}

const RecommendationDiv=styled.div`
margin-left:160px;
display:flex;
`