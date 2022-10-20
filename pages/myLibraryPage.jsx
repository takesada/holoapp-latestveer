import {SideBar} from "../src/components/atoms/sideBar.jsx"
import {SearchBar} from "../src/components/atoms/searchBar.jsx"
import { MyLibrary } from "../src/components/organisms/myLibrary.jsx"
import styled from 'styled-components'
import { Recommendation } from "../src/components/moleculars/recommendation.jsx"
import Head from "next/head.js"

const MyLibraryPage =()=>{
    return(
        <div>
            <Head>
            <title>My Library Page</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <SideBar/>
            <SearchBar/>
            <WordDiv>Your Library</WordDiv>
            <MyLibrary/>
            <WordDiv>Recommendation For You</WordDiv>
            <Recommendation/>
        </div>
    )
}

const WordDiv=styled.div`
font-size:30px;
color:white;
margin-left:170px;
margin-top:50px;`
export default MyLibraryPage