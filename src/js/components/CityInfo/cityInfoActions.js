export const types = {
    UPDATE_CITY_DESCRIPTION: 'UPDATE_CITY_DESCRIPTION',
  };
  
export function updateCityDescription(city) {
    return{
    type: types.UPDATE_CITY_DESCRIPTION,
    payload: fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=fafb4e84068a1d08c96168be3bef89b4`)
            .then(response => response.json())
            .then(data => {
            return {
                lat: data.coord.lat,
                lon: data.coord.lon,
                name: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                temp_low: data.main.temp_min,
                temp_high: data.main.temp_max,
                windspeed: data.wind.speed
            };
        })
        .catch(error => {
            console.error(error);
        })
      }
  }