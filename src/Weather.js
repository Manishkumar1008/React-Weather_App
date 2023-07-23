import React ,{useState}from "react";
import DisplayWeather from "./DisplayWeather";


function Weather(){

    const APIKEY="9887feb3061740cb3144def118d7b9a9";

    const [place,setPlace]=useState({
        city:""
    });

    const [weather,setWeather]=useState([]);

    async function weatherData(e){

        e.preventDefault();

        if(place.city==="")
        alert("Please enter valid city")
        else{
            const data= await fetch( 
                `https://api.openweathermap.org/data/2.5/weather?q=${place.city},${place.country}&appid=${APIKEY}`
                ).then(res => (res.json()))
                .then(data=> (data));

                setWeather({
                    data:data
                });

        }
    }

    const handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        
        if(name==="city")
        setPlace({...place,city:value})

    }
    console.log(weather.data);

    return (
        <div>
            <h1>Weather App</h1>
            <form>
            <input type="text" name="city" placeholder="city"  onChange={handleChange}/>
            &nbsp; &nbsp; &nbsp;
            <button onClick={(e)=>weatherData(e)}>Submit</button>
            </form>
            {
                
                weather.data!==undefined?weather.data.cod===200?
                <div> 
                <DisplayWeather data={weather.data} />
                </div>:<div><h1>City not found </h1><h1>Enter a valid name</h1></div>
                :null
    
            }
            
        </div>
    )
}

export default Weather;