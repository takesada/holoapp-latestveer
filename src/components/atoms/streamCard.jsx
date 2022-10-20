import styled from "styled-components";
import Image from "next/image";

export const StreamCard = (props) => {
  return (
    <StyledStreamCard onClick={props.onClick}>
      <Image src={props.img} width={280} height={200} alt={"thumbnail"} />
      <SP>{props.songName}</SP>
      <SP>{props.songDate}</SP>
    </StyledStreamCard>
  );
};

const StyledStreamCard = styled.div`
margin-left:30px;
`

const SP =styled.p`
width:150px;
text-align:center;
margin:0 auto;
font-family: Times New Roman;
`
