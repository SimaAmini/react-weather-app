import React, { Component } from 'react';
import { getLocation } from './services/location.service';
import { getWeather, getweekForcast } from './services/weather.service';
import './App.scss';

import Today from './components/today';
import Header from './components/header';
import Footer from './components/footer';

export class App extends Component {
  state = {
    city: '',
    country: '',
    currently: {},
    daily: {},
    coords: {}
  };
  async componentDidMount() {
    try {
      const { city, country, loc } = await getLocation();
      // const location = { city: city, country: country };
      const { currently, daily } = await getweekForcast(loc);

      console.log('currently', currently);
      console.log(daily);

      this.setState({ city, country, currently, daily });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { city, country, currently, daily } = this.state;
    return (
      <div className="container">
        <Header city={city} country={country} />
        <Today weather={currently} />
        <Footer daily={daily} />
      </div>
    );
  }
}

export default App;
