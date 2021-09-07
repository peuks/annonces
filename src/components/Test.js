import React from "react";
import styled from "styled-components";

const Test = ({ color }) => {
  return (
    <TestStyled open={color}>
      <h1>Ceci est un test</h1>
    </TestStyled>
  );
};
const TestStyled = styled.div`
  color: ${(props) => console.log(props.open)};
`;

export default Test;
