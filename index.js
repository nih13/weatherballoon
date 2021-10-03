import axios from "axios"

import express from "express"

const app = express()
const port = 4000

app.get('/', async (req, res) => {
    // console.log(req.query.cityName)
    let city = req.query.cityName
    let apiData = await fetchdata(city)
    res.send(apiData)

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

const API_KEY = process.env.API_KEY

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const baseURL = "https://api.openweathermap.org/data/2.5"

const fetchdata = async (cityName) => {
    return axios.get(baseURL + "/weather", {
        params: {
            q: cityName,
            units: "metric",
            appid: API_KEY
        }
    }).then(
        (res) => {
            // return res.data
            return {
                temp: res.data.main.temp
            }

        }
    )

}




