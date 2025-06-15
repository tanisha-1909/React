import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./1.2SearchBox.css"
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    const API_URL= "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="3b476f14be8d99840e0631d7f32765a4";

    let getWeatherInfo= async ()=> {
       let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
       let jsonResponse=await response.json();
       console.log(jsonResponse);
       let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
       }
       console.log(result);
       return result;
    }
    let [city,setCity] = useState("");

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit=async(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
       let newInfo= await getWeatherInfo();
       updateInfo(newInfo);
    }
    return(
        <div className='SearchBox'>
            <h1 style={{color:"black"}}>Search for weather</h1>
            <form onSubmit={handleSubmit}>   
                <TextField id="city" label="cityname" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br><br></br>
                <Button variant='contained' type='submit'>Search</Button>
            </form>
        </div>
    )
}