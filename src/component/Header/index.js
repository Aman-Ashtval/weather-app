import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

import AppContext from "../../context/AppContext";

import "./index.css"

const Header = () => {

    return (
        <AppContext.Consumer>
            {
                value => {
                    const{isDark, onToggleAppTheme} = value

                    return (
                        <header className="container-md container-fluid header-bg">
                            <div className="d-flex align-items-center">
                                <img src="https://img.freepik.com/premium-vector/tropical-climate-flat-illustration_120816-37137.jpg?w=740" alt="weather logo" className="logo-image" />
                                <h3 className="logo-text">OpenWeather</h3>
                            </div>
                            <button type="button" className="btn-style" onClick={onToggleAppTheme}>
                                {
                                    isDark ? <IoMdSunny className="text-white" /> : <FaMoon />
                                }
                            </button>
                        </header>
                    )
                }
            }
        </AppContext.Consumer>
    )
}

export default Header