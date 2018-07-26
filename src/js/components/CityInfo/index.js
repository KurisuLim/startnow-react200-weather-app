import { connect } from 'react-redux';
import CityInfo from './CityInfo';

function mapStoreToProps(store) {
  return {
    lat: store.info.lat,
    lon: store.info.lon,
    name: store.info.name,
    temp: store.info.temp,
    pressure: store.info.pressure,
    humidity: store.info.humidity,
    temp_low: store.info.temp_low,
    temp_high: store.info.temp_high,
    windspeed: store.info.windspeed    
  };
}


export default connect(mapStoreToProps)(CityInfo);;