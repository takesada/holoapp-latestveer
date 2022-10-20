import styled from "styled-components";
export const TopPageCards = (props) => {
  return (
    <Card onClick={props.onClick}>
      <h2>
        {props.icon}
        {props.content}
      </h2>
      <p>{props.detailContent}</p>
    </Card>
  );
};

const Card = styled.a`
  width:300px;
  height:220px;
  margin: 16px;
  padding: 24px;
  text-align: center;
  color: inherit;
  border: 1px solid #eaeaea;
  border-radius: 100px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
  &:hover {
    color: #2dcde4;
    cursor: pointer;
    opacity: 0.6;
  }
`;
