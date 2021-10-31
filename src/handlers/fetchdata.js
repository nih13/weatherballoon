import axios from "axios"
import { WEATHER_API_BASE_URL, API_KEY } from "../constants"

export const fetchdata = async (cityName) => {
    return axios.get(WEATHER_API_BASE_URL + "/weather", {
        params: {
            q: cityName,
            units: "metric",
            appid: API_KEY
        }
    }).then(
        (res) => {
            return {
                temp: res.data.main.temp
            }
        }
    )
}


