import { useEffect, useState } from "react"

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

const image = "https://ssl.gstatic.com/onebox/weather/64/sunny.png";


const WeatherInfo = () => {

    const[status, setStatus] = useState(responseConstant.success);
    const[errorMsg, setErrorMassage] = useState('');
    const[weatherDetails, setWeatherDetails] = useState([])

    const getData = async() => {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=haridwar&appid=74e5a81c2f24e9f50829aafa36066706')
        
        if(response.ok){            
            const data = await response.json();
            setWeatherDetails(data)
            setStatus(responseConstant.successView)
        }else{
            setErrorMassage(response.error)
            setStatus(responseConstant.failure)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const successView = () =>(
        <AppContext.Consumer>
            {
                value => {
                    const{isDark} = value

                    return (
                        <div className="weather-bg p-3">  
                            <p className="city-name">Haridwar</p>
                            <div className="col-4 border">
                                <div className="p-3 d-flex justify-content-between align-items-end">
                                    
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
                        <div className="col-12">
                            <div className="p-5 d-flex flex-column justify-content-center align-items-center">
                                <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544961.jpg?t=st=1718451829~exp=1718455429~hmac=bf2f53e9cfdaf88e9dc1f063bb81da1a6975408720e3df821657f4be79e26a21&w=740" alt="error" className="failure-image" />
                                <h3 className={`error-msg ${isDark ? 'text-light': 'text-danger'}`}>{errorMsg}</h3>
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
            <SearchView />
            <div className="container-md container-fluid mt-5 mb-5">
                <div className="row">
                    {renderWeatherViews()}
                </div>
            </div>
        </>
    ) 
}

export default WeatherInfo