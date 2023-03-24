
import React, {useState, useEffect} from 'react'

const Air = (props)=> {
    const [airState, setairStat] = useState ([])
    const [city, setCity] = useState('')
    

    const fetchAirStat = async () => {
        setCity(props.option)
        const data = await fetch(`https://api.waqi.info/feed/${city}/?token=cdcd0887b8ffcd7fd08989ee1d28e5df9c271831`)
        const response = await data.json()

        console.log(city)
        console.log(response)
        
    }

    useEffect(()=> {
        fetchAirStat()
    }, [])

    return(
        <>
        </>
    )
}

export default Air