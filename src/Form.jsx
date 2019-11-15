import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1
    };
  }

  handleSubmit = e => {
    this.props.noOfFactions(this.state.value);
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="sel1">Number of players:</label>
          <select
            className="form-control col-6"
            id="sel1"
            onChange={e => {
              this.setState({ value: e.target.value });
            }}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default Form;
