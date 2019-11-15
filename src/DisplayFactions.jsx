import React, { Component } from "react";

class DisplayFactions extends Component {
  createRender = () => {
    const render = [];

    this.props.factions.forEach((element, index) => {
      render.push(
        <span key={element}>
          <p>
            Player {index + 1}: {element}
          </p>
          <img src={"images/" + element + ".jpg"} alt={element} />
        </span>
      );
    });

    return render;
  };

  render() {
    return <div>{this.createRender()}</div>;
  }
}

export default DisplayFactions;
