import React, { Component } from "react";

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      overTen: false
    };
  }

  //method to handle click
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  //Component event
  componentDidUpdate(props, state) {
    if (
      this.state.count > 10 &&
      this.state.count !== state.count &&
      !this.state.overTen
    ) {
      console.log("Updating Over Ten ");
      this.setState({ overTen: true });
    }
  }

  //render method

  render() {
    let { count } = this.state;

    //creating variable and accesing using {}

    return (
      <div>
        <h1>
          <center>You Clicked the button {count} times.</center>
        </h1>

        {this.state.overTen ? <h3>Beat the High Score of 10! </h3> : null}

        <span>
          <center>
            <button onClick={() => this.handleClick()}>CLick Me</button>
          </center>
        </span>
      </div>
    );
  }
}

export default Application;
