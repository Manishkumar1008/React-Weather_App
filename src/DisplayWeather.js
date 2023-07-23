import React from "react";
import './DisplayWeather.css';


function DisplayWeather(props){
    const {data}=props

    
    return (<div>
        { 
            <React.Fragment>
            <div className="displayweather">
            <h3>{data.name} {data.sys.country}</h3>
            <span>as of {new Date().toLocaleTimeString()}</span>
            <h1>
            {(data.main.temp-273.15).toFixed(2)}
            <sup>o</sup>
            </h1>
           <span>{data.weather[0].main}</span> 
           <span>{data.weather[0].description}</span>
        </div>
        <div className="weatherdetails">
            <div className="section1">
                <table>
                    <tr>
                        <td>
                            <h3>High/Low:</h3>
                        </td>
                        <td>
                        <span> {(data.main.temp_max-273.15).toFixed(2)}/
                            {(data.main.temp_min-273.15).toFixed(2)}<sup>o</sup>c
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>Humidity:</h3>
                        </td>
                        <td>
                            <span>{data.main.humidity}%</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>Pressure:</h3>
                        </td>
                        <td>
                            <span>{data.main.pressure} hPa</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>Visibility:</h3>
                        </td>
                        <td>
                            <span>{data.visibility/1000} km</span>
                        </td>
                    </tr>
                </table>

            </div>
            <div className="section2">
                <table>
                    <tr>
                        <td>
                            <h3>Wind:</h3>
                        </td>
                        <td>
                        <span> {
                            Math.floor(data.wind.speed*18)/5
                        } Km/hr
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>Wind direction:</h3>
                        </td>
                        <td>
                            <span>{data.wind.deg}<sup>o</sup>deg</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>Sunrise:</h3>
                        </td>
                        <td>
                            <span>{new Date(data.sys.sunrise*1000).toLocaleTimeString()}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>Sunset:</h3>
                        </td>
                        <td>
                            <span>{new Date(data.sys.sunset*1000).toLocaleTimeString()}</span>
                        </td>
                    </tr>
                </table>

            </div>
            {console.log(data)}
            
        </div>
            </React.Fragment>


            
            
        }
        
        
    </div>);


}

export default DisplayWeather;