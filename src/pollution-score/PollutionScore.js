import { useEffect, useState } from "react"
import axios from "axios"
//get geo object as prop
const PollutionScore = ({geo}) => {
    // destructuring lat lng from geo object
    const {lat, lng} = geo
let city = "london"
const [loading, setLoading] = useState(false)
const [aqiData, setAqiData] = useState(null)

    const getAQI = async () => {
                // const lat = "51.5072"
                // const lng = "-0.118092"
        try{
            setLoading(true)
            // .env file and added to gitignore
            const response  = await axios.get(`http://api.waqi.info/feed/geo:${lat};${lng}/?token=${process.env.REACT_APP_AQI_TOKEN}`)
            console.log(response.data)
            if(response.data){
                setAqiData(response.data)
                setLoading(false)
            }
        }
        //if promise fails, catch and show error (+ for slow loading)
        catch(err){
            console.log(err)
            setLoading(false)
        }
        
    }
//3rd party api calls with every search
    useEffect(() => {
        getAQI()
        //dependency array, dependant on geo prop
    }, [city, geo])

return (

    <div>
    <h1>AQI Data</h1>
        {loading && <h2>Loading AQI Data</h2> }
        {aqiData&& <h2>AQI for  {city} is {aqiData.data.aqi} </h2>}
    </div>
)

}

export default PollutionScore