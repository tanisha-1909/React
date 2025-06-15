import SearchBox from "./1.1SearchBox.jsx"
import InfoBox from "./1.3infoBox.jsx"
import { useState } from "react"

export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Sahara",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    })

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
        <h2 style={{color:"black"}}>Weather App By Tanisha</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    )
}