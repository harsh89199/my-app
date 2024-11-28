import React from "react";

const ActualDom: React.FC = () => {
  return (
    <div>
      <button
        onClick={() => {
          const textElement = document.getElementById("text") as HTMLElement;
          textElement.innerText = "Welcome to the Actual DOM!";
        }}
      >
        Click me
      </button>
      <h1 id="text"></h1>
    </div>
  );
};

export default ActualDom;

