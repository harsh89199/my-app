import React, { Component } from "react";

// Define the state interface for the component
interface VirtualDomState {
  text: string;
}

// Class Component with TypeScript
class VirtualDom extends Component<{}, VirtualDomState> {
  constructor(props: {}) {
    super(props);

    // Initialize the state
    this.state = {
      text: "this is intial",
    };
  }

  // Event handler for button click
  handleClick = () => {
    this.setState({ text: "Welcome to the Virtual DOM!" });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default VirtualDom;
