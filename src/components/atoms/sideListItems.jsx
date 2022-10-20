import styled from "styled-components";

const SideListItems =(props)=>{
    return(
        <div>
            <WrapAtag href={props.link}>
                <p>{props.icon}</p>
                <StyledP>{props.name}</StyledP>
            </WrapAtag>
        </div>
    )
}

const WrapAtag=styled.a`
display:flex;
text-align:center;
`

const StyledP=styled.p`

`

export default SideListItems