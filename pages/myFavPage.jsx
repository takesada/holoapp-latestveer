import {SideBar} from "../src/components/atoms/sideBar.jsx"
import {SearchBar} from "../src/components/atoms/searchBar.jsx"
import styled from 'styled-components'
import {MyFav} from "../src/components/organisms/myFav.jsx"
import { FrequentlyListenedMusicRanking } from "../src/components/moleculars/frequentlyListenedMusicRanking.jsx"
import Head from "next/head.js"

const MyFavPage =()=>{
    return(
        <div>
            <Head>
            <title>My Fav Page</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <SideBar/>
            <SearchBar/>
            <WordDiv>Your Favourite Songs</WordDiv>
            <MyFav/>
            <WordDiv>Frequently Listened Music Ranking Top5</WordDiv>
            <FrequentlyListenedMusicRanking/>
        </div>
    )
}
const WordDiv=styled.div`
font-size:30px;
color:white;
margin-left:170px;
margin-top:50px;
`
export default MyFavPage