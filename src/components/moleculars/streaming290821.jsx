import { StreamCard } from "../atoms/streamCard"
import styled from 'styled-components'

export const Streaming290821=()=>{
    return(
        <div>
            <WrapperDiv>
            <StreamCard
            img="/imgs/29082021kyuuniutaitakunaru.jpg"
            songName={"MAGE OF VIOLET"}
            songDate={"15/09/22"}
            />
            <StreamCard
            img="/imgs/29082021kyuuniutaitakunaru.jpg"
            songName={"Beautiful World"}
            songDate={"15/09/22"}
            />
            <StreamCard
            img="/imgs/29082021kyuuniutaitakunaru.jpg"
            songName={"RE:I AM"}
            songDate={"15/09/22"}
            />
        </WrapperDiv>
        <WrapperDiv>
            <StreamCard
            img="/imgs/29082021kyuuniutaitakunaru.jpg"
            songName={"Kanden"}
            songDate={"15/09/22"}
            />
            <StreamCard
            img="/imgs/29082021kyuuniutaitakunaru.jpg"
            songName={"Kaikai Kitan "}
            songDate={"15/09/22"}
            />
            <StreamCard
            img="/imgs/29082021kyuuniutaitakunaru.jpg"
            songName={"READYMADE"}
            songDate={"15/09/22"}
            />
        </WrapperDiv>
        <WrapperDiv>
            <StreamCard
            img="/imgs/29082021kyuuniutaitakunaru.jpg"
            songName={"Odo"}
            songDate={"15/09/22"}
            />
            <StreamCard
            img="/imgs/29082021kyuuniutaitakunaru.jpg"
            songName={"Kaibutsu / Monster"}
            songDate={"15/09/22"}
            />
            <StreamCard
            img="/imgs/29082021kyuuniutaitakunaru.jpg"
            songName={"Hitchcock"}
            songDate={"15/09/22"}
            />
        </WrapperDiv>
        <WrapperDiv>
        <StreamCard
            img="/imgs/29082021kyuuniutaitakunaru.jpg"
            songName={"Itte"}
            songDate={"15/09/22"}
            />
            <StreamCard
            img="/imgs/29082021kyuuniutaitakunaru.jpg"
            songName={"Bye Bye Rainy"}
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