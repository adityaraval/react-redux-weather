import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather=>weather.main.temp);
    const pressures = cityData.list.map(weather=>weather.main.pressure);
    const humidities = cityData.list.map(weather=>weather.main.humidity);
    const { lon,lat } = cityData.city.coord;
    return(
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} color="orange" unit="K" />
        </td>
        <td>
          <Chart data={pressures} color="green" unit="hPA" />
        </td>
        <td>
          <Chart data={humidities} color="blue" unit="%" />
        </td>
      </tr>
    );
  }
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Pressure (K)</th>
            <th>Temperature (hPA)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}){
  //{weather} ==> const weather = state.weather /// above code ///
  return {weather};  /// {weather} === {weather:weather}
}

export default connect(mapStateToProps)(WeatherList);
