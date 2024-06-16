import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import AppContext from "../../context/AppContext";

import './index.css'

const SearchView = props => {
    const{changeCityName} = props

    const[cityName, setCityName] = useState('');

    const onChangeCityName = event => setCityName(event.target.value)

    // key enter event
    const onEnter = event => {
        if(event.key === 'Enter'){
            changeCityName(cityName);
        }
    }

    // onclick event
    const onSearchCity = () => changeCityName(cityName);

    return (
        <AppContext.Consumer>
            {
                value => {
                    const{isDark} = value

                    return (
                        <div className="container-md container-fluid mt-5 mb-5">
                            <div className="row d-flex flex-column align-items-center">
                                <div className="col-10 col-md-8 col-lg-6">
                                    <h3 className={`welcome ${isDark ? 'text-light': 'text-secondary'}`}>Welcome!</h3>
                                    <p className={`discription-p ${isDark ? 'text-light': 'text-secondary'}`}>search weather by city name</p>
                                    <div className="d-flex align-items-center w-100 mt-5">
                                        <input type="search" placeholder="enter city name..." className="search-input" onChange={onChangeCityName} onKeyDown={onEnter} />
                                        <button type="button" className="search-btn" onClick={onSearchCity}>
                                            <FiSearch />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </AppContext.Consumer>        
    )                            
}

export default SearchView