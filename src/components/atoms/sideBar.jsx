import React from 'react';
import styled from 'styled-components'
import Link from 'next/link'

export const SideBar = () => {
  return (
    <ContainerDiv>
      {/* <section className="sidebar-topics"> */}
        <SideBarItem>
        <Link href="/">
          <span>Home</span>
        </Link>
        </SideBarItem>
        <SideBarItem>
        <Link href="/myLibraryPage">
          <span>My library</span>
        </Link>
        </SideBarItem>
        <SideBarItem>
        <Link href="/myFavPage">
          <span>My Fav</span>
        </Link>
        </SideBarItem>
      {/* </section> */}

      {/* your library */}
      <SideBarLibraryDiv>
        <SideBarLibraryH4>Suisei Library</SideBarLibraryH4>
        <SideBarItem>
          <Link href="/collabSongsPage">
            {/* <FontAwesomeIcon className="icon" icon={faUser} /> */}
            <span>Colab songs</span>
          </Link>
          </SideBarItem>
          <SideBarItem>
          <Link href="/originalSongsPage">
            {/* <FontAwesomeIcon className="icon" icon={faRecordVinyl} /> */}
            <span>Original songs</span>
          </Link>
          </SideBarItem>
          <SideBarItem>
          <Link
            href="/coverSongsPage"
          >
            {/* <FontAwesomeIcon className="icon" icon={faMusic} /> */}
            <span>Cover songs</span>
          </Link>
        </SideBarItem>
      </SideBarLibraryDiv>
      </ContainerDiv>
      // {/* Footer on mobile */}
      // <section className="sidebar-mobile">
      //   <Link href="/">
      //     <span>Home</span>
      //   </Link>

      //   <Link
      //     href="/myFavPage"
      //   >
      //     <span>My Fav</span>
      //   </Link>
      // </section>
  );
};

const ContainerDiv=styled.div`
grid-area: sidebar;
padding: 50px 32px;
/* min-width: 150px;
max-width: 200px; */
height: 100%; /* Full-height: remove this if you want "auto" height */
width: 160px; /* Set the width of the sidebar */
position: fixed;
top: 0; /* Stay at the top */
left: 0;
background-color: #878585;
overflow-x: hidden; /* Disable horizontal scroll */
overflow-y: scroll;
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
    padding-top: 20px;
    z-index: 0;
`

const SideBarLibraryDiv=styled.div`
    margin-top: 100px;
`
const SideBarLibraryH4=styled.h4`
    font-weight: 400;
    margin-left: 12px;
    color: var(--secondary-text-color)
`

const SideBarItem=styled.div`
    display: block;
    color: var(--text-color);
    text-decoration: none;
    margin: 20px 0;
    &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.6);
  }`