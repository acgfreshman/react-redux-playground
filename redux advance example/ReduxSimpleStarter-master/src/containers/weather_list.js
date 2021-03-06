import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines'
import Chart from '../components/chart';

class WeatherList extends React.Component{
    renderWeather(cityData){
        //pull off data
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td>{ name }</td>
                <td><Chart data={temps} color="orange" unit="K"/></td>
                <td><Chart data={pressures} color="green" unit="hPa"/></td>
                <td><Chart data={humidities} color="black" unit="%"/></td>
            </tr>
        );

    }

    render(){
        return <table>
            <thead className="table table-hover">
            <tr>
                <th>City</th>
                <th>Temperature (K)</th>
                <th>Pressure (hPa)</th>
                <th>Humidity %</th>
            </tr>
            </thead>
            <tbody>
            {this.props.weather.map(this.renderWeather)}
            </tbody>
        </table>;
    }

}

function mapStateToProps(state){
    return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList)