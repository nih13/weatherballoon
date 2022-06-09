import express from "express"
import { APP_PORT } from "./constants"
import { fetchdata } from "./handlers/fetchdata"

const app = express()

app.get('/', async (req, res) => {
    let city = req.query.cityName
    let apiData = await fetchdata(city)
    res.send(apiData)
})

// app.listen(APP_PORT, () => {
//     console.log(`Example app listening at http://localhost:${APP_PORT}`)
// })

module.exports.handler = serverless(app);