import React from "react";
import { useSelector } from "react-redux";
import OutputComponent from "./OutputComponent";

const ActionComponent = () => {
  const count = useSelector((state) => state.counterReducer);
  console.log(count);
  return (
    <div className="App">
      <div className="App-header">
        {" "}
        <OutputComponent count={count} />
        <button>Increment</button> - <button>Decrement</button>
      </div>
    </div>
  );
};

export default ActionComponent;
