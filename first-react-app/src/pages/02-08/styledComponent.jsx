import React from "react";
import { styled } from "styled-components";

const StyledComponent = () => {
  const Wrapper = styled.div`
    background-color: white;
  `;
  const Title = styled.h1`
    color: red;
  `;

  return (
    <>
      <Wrapper>
        <Title>This is the styled component</Title>
      </Wrapper>
    </>
  );
};

export default StyledComponent;
