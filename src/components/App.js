import React from "react";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      degree: null,
      iscelsiusSelected: true,
      convertedRoomTemperature: ""
    };
  }

  handleChange = event => {
    this.setState({
      degree: event.target.value
    });
  };

  changeToCelsius = () => {
    this.setState({
      iscelsiusSelected: true
    });
  };
  changeToFarenheit = () => {
    this.setState({
      iscelsiusSelected: false
    });
  };

  handleSubmit = () => {
    const { iscelsiusSelected } = this.state;
    if (iscelsiusSelected === true) {
      this.setState({
        convertedRoomTemperature: ((this.state.degree - 32) * 5) / 9
      });
    } else if (iscelsiusSelected === false) {
      this.setState({
        convertedRoomTemperature: (this.state.degree * 9) / 5 + 32
      });
    } else {
      this.setState({
        convertedRoomTemperature: "Enter the room temperature"
      });
    }
  };

  handleReset = () => {
    this.setState({
      degree: 0,
      convertedRoomTemperature: ""
    });
  };
  render() {
    return (
      <div className="container">
        <input
          className="typeBox"
          placeholder="Enter the room temperature"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />
        <div className="temperature">
          <label>
            <input
              className="celsius"
              type="radio"
              onChange={this.changeToCelsius}
              checked={this.state.iscelsiusSelected}
            />
            Celsius
          </label>
          <label>
            <input
              className="farenheit"
              type="radio"
              onChange={this.changeToFarenheit}
              checked={!this.state.iscelsiusSelected}
            />
            Farenheit
          </label>
        </div>
        <br />
        <button className="submit" onClick={this.handleSubmit}>
          Convert
        </button>
        <br />
        <button className="reset" onClick={this.handleReset}>
          Reset
        </button>
        <div className="result">
          {this.state.iscelsiusSelected === true ? (
            <p className="celsius-display">
              Converted Room Temperature for Celsius is :
            </p>
          ) : (
            <p className="farenheit-display">
              Converted Room Temperature for Farenheit is :
            </p>
          )}
          <p className="degree">{this.state.convertedRoomTemperature}</p>
        </div>
      </div>
    );
  }
}

export default App;
