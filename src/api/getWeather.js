import axios from 'axios'
import apiUrl from '../apiConfig'

const apiKey = '&appid=20b0c7e54f51b63e8da6cf5b9c85645c'
const apiUnits = '&units=imperial'

export const getWeather = (city, country) => {
  return axios({
    url: apiUrl + city + ',' + country + apiKey + apiUnits,
    method: 'GET'
  })
}
