import styled from "styled-components";
export const TopPageContent = () => {
  const onClickSuisei = () => {
    window.open(
      "https://www.youtube.com/channel/UC5CwaMl1eIgY8h02uZw7u8A",
      "_blank"
    );
  };

  return (
    <TopHeader onClick={onClickSuisei}>Welcome to Hoshiyomi App</TopHeader>
  );
};

// export default TopPageContent;

const TopHeader = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  &:hover {
    color: #2dcde4;
    cursor: pointer;
  }
`;
