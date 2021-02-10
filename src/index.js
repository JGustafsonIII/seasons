import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    // Prompts the user for the location
    window.navigator.geolocation.getCurrentPosition(
      // If the user accepts then it will update the latitude
      (position) => this.setState({ lat: position.coords.latitude }),
      // If the user denies then the error message will be updated
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('My component was just updated.');
  }

  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
