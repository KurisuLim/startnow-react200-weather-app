import React from 'react';

import {
  updateCityDescription
} from './cityInfoActions';


export default class CityInfo extends React.Component {
  constructor(props) {
    super(props);
  }

componentWillMount() {
    this.props.dispatch(updateCityDescription('Japan'))
}
render() {
    const { lon, lat, name, temp, pressure, humidity, temp_low, temp_high, windspeed } = this.props;
    return (
      <div className='card border-primary'>
        <div className='card-header text-white bg-primary'>City Information</div>
        <div className='card-body'>
        </div>
        <h2 className="text-center">{name}</h2>
        <p className="text-center">Lat/Lon: {lat} , {lon}</p>
        
        <div className="row">
            <div className="col-4">
                <div className="well text-center">
                    <h7>Temperature (F)</h7>
                    <p className="text-success">{temp}</p>
                </div>
            </div>
            <div className="col-4">
                <div className="well text-center">
                    <h7>Pressure</h7>
                    <p className="text-success">{pressure}</p>
                </div>
            </div>
            <div className="col-4">
                <div className="well text-center">
                    <h7>Humidity</h7>
                    <p className="text-success">{humidity}</p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-4">
                <div className="well text-center">
                    <h7>Lowest Temp (F)</h7>
                    <p className="text-success">{temp_low}</p>
                </div>
            </div>
            <div className="col-4">
                <div className="well text-center">
                    <h7>Highest Temp (F)</h7>
                    <p className="text-success">{temp_high}</p>
                </div>
            </div>
            <div className="col-4">
                <div className="well text-center">
                    <h7>Wind Speed</h7>
                    <p className="text-success">{windspeed} mph</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}