import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

export const SearchBar=()=> {
  return (
    <MainDiv>
      <Sh1>Hoshiyomi App</Sh1>
      <SearchDiv>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </SearchDiv>
    </MainDiv>
  );
}

const MainDiv=styled.div`
display: flex;
width: 100%;
align-items: center;
flex-direction: column;`

const Sh1=styled.h1`
margin: 10px;
font-size: 40px;
color:white;`

const SearchDiv=styled.div`
width: 30%;
background-color:white;
border-radius: 15px;
`