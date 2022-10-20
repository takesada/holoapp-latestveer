import {StreamCard} from "../atoms/streamCard.jsx"
import styled from 'styled-components'



export const Recommendation =()=>{
    return(
        <RecommendationDiv>
            <StreamCard
                img="/imgs/5億年ぶりの9月15日.jpg"
                songName={"合縁事変"}
            />
            <StreamCard
                img="/imgs/kakero.jpg"
                songName={"駆けろ"}
            />
            <StreamCard
                img="/imgs/GETCHA.jpg"
                songName={"GETCHA"}
            />
            <StreamCard
                img="/imgs/Lower.jpg"
                songName={"Lower"}
            />

        </RecommendationDiv>
    )
}

const RecommendationDiv=styled.div`
margin-left:160px;
display:flex;
`