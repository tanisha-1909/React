import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./1.4InfoBox.css"



export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1725739887778-2f55fa02e168?q=80&w=2023&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            
            <h1 style={{color:"brown"}}>Weather Info-{info.weather}</h1>
            <br></br>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <div>Temperature= {info.temp}&deg;C</div>
                    <div>Humidity= {info.humidity}&deg;C</div>
                    <div>Min Temp= {info.tempMin}&deg;C</div>
                    <div>Max Temp= {info.tempMax}&deg;C</div>
                    <div>The weather feels like {info.feelslike}&deg;C</div>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}