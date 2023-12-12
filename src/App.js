import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    // Update the time every second
    this.intervalID = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.intervalID);
  }

  updateTime() {
    this.setState({
      currentTime: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.currentTime}.</h2>
      </div>
    );
  }
}
