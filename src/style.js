import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: #203040;
`;

export const Button = styled.button`
  background: ${(props) => (props.primary ? "#203040" : "white")};
  color: ${(props) => (props.primary ? "white" : "#203040")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid Blue;
  border-radius: 3px;
`;
