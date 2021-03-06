import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';
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

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message='Please accept location request' />;
  }

  render() {
    return <div className='border red'>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
