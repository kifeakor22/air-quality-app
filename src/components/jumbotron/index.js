import React from 'react'
import './style.css'

const Jumbotron = ()=> {
    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='image'></div>
                <div className="jumbotron">
                    <h1 className='display-4'>Air Quality Monitor</h1>
                    <p className='lead'>Welcome to our user-friendly air quality monitoring app! Enter your location and get real-time updates on air quality. We pull data from reliable sources for accurate and up-to-date information.</p>
                    <p className='lead'>Our app empowers you with knowledge to make informed decisions about your health. Get real-time air quality updates to protect yourself and loved ones from harmful pollutants. Whether you're an environmental enthusiast, health-conscious or curious, our app is perfect for you.</p>
                    <hr className="my-4"/>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Jumbotron