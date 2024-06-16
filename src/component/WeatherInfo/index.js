import { useCallback, useEffect, useState } from "react"

import { RiCelsiusFill } from "react-icons/ri";

import SearchView from "../SearchView"
import Loader from "../Loader"
import AppContext from "../../context/AppContext"

import "./index.css"

// response constants
const responseConstant = {
    success: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS",
}


const WeatherInfo = () => {

    const[status, setStatus] = useState(responseConstant.inProgress);
    const[errorMsg, setErrorMassage] = useState('');
    const[weatherDetails, setWeatherDetails] = useState([])
    const[cityName, setCityName] = useState('');

    const changeCityName = useCallback(cityName => {
        setCityName(cityName);
    })

    const getData = async() => {
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=74e5a81c2f24e9f50829aafa36066706`;
        const response = await fetch(api)
        
        if(response.ok){            
            const data = await response.json();
            setWeatherDetails(data)
            setStatus(responseConstant.success)
        }else{
            setErrorMassage(response.error)
            setStatus(responseConstant.failure)
        }
    }

    useEffect(() => {
        if(cityName !== ''){
            getData();
        }
    }, [cityName])

    // Convert Fahrenheit to Celsius
    const fahrenheitToCelsius = (fahrenheit) => {        
        const celsius = (fahrenheit - 32) * 5 / 9;
        return Math.floor(celsius);
    }

    // fetching time from seconds
    const formatTime = (seconds) => {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const date = new Date(seconds * 1000);
    
        const dayName = daysOfWeek[date.getUTCDay()];
    
        let hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
    
        // Determine the period (AM/PM)
        const period = hours >= 12 ? "pm" : "am";
    
        // Convert hours from 24-hour to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
    
        // Format the minutes to always be two digits
        const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    
        // Combine everything into the final format
        return `${dayName}, ${hours}:${formattedMinutes} ${period}`;
    }

    const successView = () =>(
        <AppContext.Consumer>
            {
                value => {
                    const{isDark} = value
                    const {name, main, wind, weather, dt} = weatherDetails

                    return (

                        <div className="container-fluid container-md mt-5 mb-5 d-flex justify-content-center">
                            <div className="row weather-bg p-3">
                                <div className="col-12">
                                    <p className={`city-name ${isDark ? 'text-light' : null}`}>{name}</p>
                                </div>
                                <div className="col-12 col-md-5 col-lg-4 mb-4">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div className="align-self-center">
                                            <p className={`weather-discription-p ${isDark ? 'text-light': null}`}>{weather[0].description}</p>
                                        </div>
                                        <div>
                                            <p className={`temp-p ${isDark ? 'text-light' : null}`}>
                                                {fahrenheitToCelsius(main.temp)}
                                                <span className="temp-icon">
                                                    <RiCelsiusFill />
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* other info */}
                                <div className="col-12 col-md-7 col-lg-8 mb-4 mt-md-4">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p className="info-p">Precipitation: 0%</p>
                                            <p className="info-p">Humidity: {main.humidity}0%</p>
                                            <p className="info-p">Wind: {wind.speed} km/h</p>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className={`waether-title ${isDark ? 'text-light': null}`}>weather</p>
                                            <p className="time-p">{formatTime(dt)}</p>
                                            <img src="https://img.freepik.com/premium-vector/sun-cloud-with-rainbow-lightning-snowflake-drops_261524-2421.jpg?w=740" alt="weather icon" className="small-image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </AppContext.Consumer>
    );

    const failureView = () => (
        <AppContext.Consumer>
            {
                value => {
                    const{isDark} = value

                    return (
                        <div className="container-md container-fluid mt-5 mb-5">
                            <div className="row">
                                <div className="col-12">
                                    <div className="p-5 d-flex flex-column justify-content-center align-items-center">
                                        <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544961.jpg?t=st=1718451829~exp=1718455429~hmac=bf2f53e9cfdaf88e9dc1f063bb81da1a6975408720e3df821657f4be79e26a21&w=740" alt="error" className="failure-image" />
                                        <h3 className={`error-msg ${isDark ? 'text-light': 'text-danger'}`}>{errorMsg}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    )
                }
            }
        </AppContext.Consumer>
    );

    const renderWeatherViews = () =>{
        switch(status){
            case responseConstant.success: return successView();
            case responseConstant.failure: return failureView();
            case responseConstant.inProgress: return <Loader />
            default: return null;
        }
    }

    return (
        <>
            <SearchView changeCityName={changeCityName} />
            {cityName !== '' ? renderWeatherViews() : null}            
        </>
    ) 
}

export default WeatherInfo