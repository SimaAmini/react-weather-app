import React, { Component } from 'react';
import { getLocation } from '../services/location.service';
import { getWeather, getweekForcast } from '../services/weather.service';

export class Today extends Component {
  state = {
    city: '',
    main: {
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0
    },
    weather: [{}],
    days: []
  };
  async componentDidMount() {
    try {
      const { city } = await getLocation();
      this.props.onLocationChange(city);
      const { main, weather } = await getWeather(city);
      this.setState({ city, weather, main });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const weather = this.state.weather[0];

    return (
      <div className="today-container">
        <div className="today">
          <span className="today__title">Today</span>
          <div className="today__tempicon">
            <span className="today__icon">
              <i className={`owi owi-${weather.icon}`}></i>
            </span>
            <span className="today__temperature">
              {this.state.main.temp} &#8451;
            </span>
          </div>
          <span className="today__status">{weather.main}</span>
        </div>
      </div>
    );
  }
}

export default Today;
