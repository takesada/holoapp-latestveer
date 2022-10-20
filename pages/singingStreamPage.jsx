import styled from 'styled-components'
import 'react-pro-sidebar/dist/css/styles.css';
import {SideBar} from "../src/components/atoms/sideBar.jsx"
import {SingingStreamContents} from "../src/components/organisms/singingStreamContents.jsx"
import {SearchBar} from "../src/components/atoms/searchBar.jsx"
import { SideBarMargin } from '../src/components/atoms/sideBarMargin.jsx';
import Head from 'next/head.js';

const SingingStreamPage=()=>{

    return(
        <StreamWrapper>
        <Head>
            <title>Singing Stream Page</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <SideBar/>
        <SideBarMargin/>
        <div>
        <SearchBar/>
        <SingCardContainer>
            <SingingStreamContents/>
        </SingCardContainer>
        </div>
        </StreamWrapper>
    )
}


const SingCardContainer=styled.div`
margin:0 auto;
`
const StreamWrapper=styled.div`
display:flex;
margin:0 auto;`



export default SingingStreamPage;