import React from "react";
import styled from "styled-components";

const Styled = () => {
  const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    color: #203040;
  `;

  const Button = styled.button`
    background: ${(props) => (props.primary ? "#203040" : "#ffffff")};
    color: ${(props) => (props.primary ? "#ffffff" : "#203040")};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid Blue;
    border-radius: 3px;
  `;

  return (
    <>
      {" "}
      <Title>
        <h1>Styled-Component-Example </h1>
      </Title>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </>
  );
};

export default Styled;
