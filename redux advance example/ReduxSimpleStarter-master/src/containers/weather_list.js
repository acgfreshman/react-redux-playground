import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines'

class WeatherList extends React.Component{
    renderWeather(cityData){
        //pull off data
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);


        return (
            <tr key={name}>
                <td>{ name }</td>
                <td>
                    <Sparklines height={120} width={180} data={temps}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                </td>
            </tr>
        );



    }

    render(){
        return <table>
            <thead className="table table-hover">
            <tr>
                <th>City</th>
                <th>Temperature</th>
                <th>Pressure</th>
                <th>Humidity</th>
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