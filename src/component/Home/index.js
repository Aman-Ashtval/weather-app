import Header from "../Header"
import AppContext from "../../context/AppContext"
import SearchView from "../SearchView"
import WeatherInfo from "../WeatherInfo"

import "./index.css"

const Home = () => {

    return (
        <AppContext.Consumer>
            {
                value => {
                    const {isDark} = value

                    return (
                        <div className={`home-bg ${isDark ? 'dark' : null}`}>
                            <Header />
                            <WeatherInfo />
                        </div>
                    )
                }
            }
        </AppContext.Consumer>
    )
}

export default Home