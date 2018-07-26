import { types } from './cityInfoActions';

const defaultState = {
  lat: '',
  lon: '',
  name: '',
  temp: '',
  pressure: '',
  humidity: '',
  temp_low: '',
  temp_high: '',
  windspeed: ''

};

export default function cityInfoReducer (state = defaultState, action) {
  
  const { type, payload } = action;

  switch (type) {
    case types.UPDATE_CITY_DESCRIPTION + '_PENDING': {
        return {
            ...state,
            description: '..loading..'
        }
    }

    // Here in the case of the update description action 
    case types.UPDATE_CITY_DESCRIPTION + '_FULFILLED': {
      // we'll return an object
      return {
        // with all the previous state
        ...state,
        // but overwriting the description
        lat: payload.lat,
        lon: payload.lon,
        name: payload.name,
        temp: payload.temp,
        pressure: payload.pressure,
        humidity: payload.humidity,
        temp_low: payload.temp_low,
        temp_high: payload.temp_high,
        windspeed: payload.windspeed        

      };
    }
    default: {
      return state;
    }
  }
}