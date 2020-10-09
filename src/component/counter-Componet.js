import { increment, decrement } from "../Actions/type";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import styled from "styled-components";

const Count = () => {
  const count = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <>
      {" "}
      <h1>Counter </h1>
      <div className="counter">
        <StyledButton
          className="btn-primary"
          onClick={() => dispatch(increment())}
        >
          +
        </StyledButton>
        <div className="count-name"> {count}</div>
        <StyledButton onClick={() => dispatch(decrement())}>-</StyledButton>
      </div>
    </>
  );
};

export default Count;

const StyledButton = styled.button`
  background-color: #203040;
  font-size: 22px;
  color: white;
`;
