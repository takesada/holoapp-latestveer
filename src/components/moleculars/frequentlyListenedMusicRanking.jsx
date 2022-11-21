import {StreamCard} from "../atoms/streamCard.jsx"
import styled from 'styled-components'
import Link from "next/link.js"



export const FrequentlyListenedMusicRanking =()=>{
    return(
        <RecommendationDiv>
            <Link href="https://youtu.be/IKKar5SS29E">
            <StreamCard
                img="/imgs/GHOST.jpg"
                songName={"1.   GHOST"}
            />
            </Link>
            <Link href="https://youtu.be/mBuHQeL-OO8">
            <StreamCard
                img="/imgs/template.jpg"
                songName={"2.   template"}
            />
            </Link>
            <Link href="https://youtu.be/EjlMPu5sEgw">
            <StreamCard
                img="/imgs/GETCHA.jpg"
                songName={"3.   GETCHA"}
            />
            </Link>
            <Link href="https://youtu.be/r1ZVPTCOCSQ">
            <StreamCard
                img="/imgs/shakunetunite.jpg"
                songName={"4.   灼熱にて純情"}
            />
            </Link>
            <Link href="https://youtu.be/88QKF3yuiyI">
            <StreamCard
                img="/imgs/wicked.jpg"
                songName={"5.   wicked"}
            />
            </Link>
        </RecommendationDiv>
    )
}

const RecommendationDiv=styled.div`
margin-left:160px;
display:flex;
`