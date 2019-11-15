import React, { Component } from "react";
import "./App.css";
import Form from "./Form.jsx";
import DisplayFactions from "./DisplayFactions.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomFactions: null
    };
  }

  pickFactions = noOfFactions => {
    const colors = {
      blue: ["Terrans", "Lantids"],
      yellow: ["Xenos", "Gleens"],
      brown: ["Taklons", "Ambas"],
      red: ["Hadsch Hallas", "Ivits"],
      orange: ["Geodens", "Bal T'aks"],
      black: ["Firaks", "Bescods"],
      white: ["Nevlas", "Itars"]
    };
    const factions = [];

    for (let i = 0; i < noOfFactions; i++) {
      const keys = Object.keys(colors);
      const selectedColor = keys[(keys.length * Math.random()) << 0];
      const selectedFaction =
        colors[selectedColor][
          (colors[selectedColor].length * Math.random()) << 0
        ];
      factions.push(selectedFaction);
      delete colors[selectedColor];
    }

    this.setState({ randomFactions: factions });
  };

  render() {
    let displayFactions = <span></span>;

    if (this.state.randomFactions) {
      displayFactions = (
        <DisplayFactions factions={this.state.randomFactions} />
      );
    }

    return (
      <div>
        <div className="container col-2">
          <Form noOfFactions={this.pickFactions} />
        </div>
        <div className="container">{displayFactions}</div>
      </div>
    );
  }
}

export default App;
