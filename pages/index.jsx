import { TopPageCards } from "../src/components/atoms/topPageCards";
import { TopPageDiscription } from "../src/components/atoms/topPageDescription";
import { TopPageContent } from "../src/components/organisms/topPagecontent";
import styled from "styled-components";
import Link from "next/link";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import {SideBar} from "../src/components/atoms/sideBar.jsx"
import { SideBarMargin } from '../src/components/atoms/sideBarMargin.jsx';
import Head from "next/head";

const Home = () => {
  const onClickSuiseiFanWeb = () => {
    window.open(
      "https://virtualyoutuber.fandom.com/wiki/Hoshimachi_Suisei",
      "_blank"
    );
  };
  const onClickSuiseTwitter = () => {
    window.open(
      "https://twitter.com/suisei_hosimati?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      "_blank"
    );
  };
  const onClickSuiseYoutube = () => {
    window.open(
      "https://www.youtube.com/channel/UC5CwaMl1eIgY8h02uZw7u8A",
      "_blank"
    );
  };

  return (
    <ContainerDiv>
      <Head>
        <title>Hoshiyomi App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SideBar/>
      <SideBarMargin/>
      <MainDiv>
        <TopPageContent />

        <TopPageDiscription />

        <WrapperDiv>
          <TopPageCards
            onClick={onClickSuiseiFanWeb}
            content={"About hoshimati suisei →"}
            detailContent={
              "If you want to know more about her, please smash this buttom!"
            }
          />

          <Link href="/singingStreamPage">
            <TopPageCards
              content={"Suisei's Song →"}
              detailContent={
                "You can listen to the music that Suisei sang in the streaming of live broadcast ."
              }
            />
          </Link>
          <TopPageCards
            onClick={onClickSuiseTwitter}
            icon={<FaTwitter />}
            content={"星街すいせい☄️ホロライブ0期生 →"}
            detailContent={"You can know the latest information."}
          />
          <TopPageCards
            onClick={onClickSuiseYoutube}
            icon={<FaYoutube />}
            content={"Suisei Channel →"}
            detailContent={"There are many collaboration videos, game videos, and singing videos, so please enjoy both singing and non-singing videos!"}
          />
        </WrapperDiv>
      </MainDiv>
    </ContainerDiv>
  );
};

export default Home;

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
`;

const MainDiv = styled.div`
  min-height: 1000px;
  padding: 64px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerDiv = styled.div`
  display: flex;
  padding: 0 32px;
`;
