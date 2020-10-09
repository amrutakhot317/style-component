import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: #203040;
`;

export const Input = styled.input`
  padding: 1rem;
  border: 0.1rem #c0c0c0 solid;
`;
export const Button = styled.button`
  background: ${(props) => (props.primary ? "#203040" : "white")};
  color: ${(props) => (props.primary ? "white" : "#203040")};
  text-align: center;
  flex: 1;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkcyan;
  border-radius: 3px;

  &:hover {
    background-color: #203040;
    color: white;
  }
`;

export const StyledButton = styled.button`
  background-color: #203040;
  font-size: 22px;
  color: white;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
`;

export const Label = styled.label`
  color: #8d8d8d;
  position: absolute;
  background: #ffffff;
`;
