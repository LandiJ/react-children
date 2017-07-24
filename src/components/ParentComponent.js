import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import DisplayComponent from "./DisplayComponent";
export default class ParentComponent extends Component {
  constructor(props) {
    super(props);

    //we are really in a *bind* here.... :)
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //fix it...

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: ""
    };
  }
  handleInput(e) {
    var whatToSay = this.state.whatToSay;
    whatToSay = e.target.value;
    this.setState({ whatToSay });
  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({
      whatToSay: this.state.whatToSay,
      whatWasSaid: this.state.whatToSay
    });
    console.log(this.state.whatWasSaid);
    //clear our input by resetting state
    this.setState({ whatToSay: "" });
  }
  render() {
    return (
      <div>
        Smart Component: I have a function, but something isn't working? I also need to pass that function to the ChildComponent.
        <div>
          <input
            onChange={this.handleInput}
            type="text"
            placeholder="Say It, Don't Spray It!"
            value={this.state.whatToSay}
          />
        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit} />
          <DisplayComponent sayWhat={this.state.whatWasSaid} />
        </div>
      </div>
    );
  }
}
