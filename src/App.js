import { Component } from 'react';

import AppContext from './context/AppContext'
import Home from './component/Home';


import './App.css';

class App extends Component{

  state = {isDark: false}

  onToggleAppTheme = () => this.setState(prevState => ({isDark: !prevState.isDark}))

  // getData = async() => {
  //   const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=haridwar&appid=74e5a81c2f24e9f50829aafa36066706')
  //   const data = await response.json();
  //   console.log(data);
  // }
  
  render(){
    const{isDark} = this.state
    return (
    <AppContext.Provider value={{isDark, onToggleAppTheme: this.onToggleAppTheme}}>
      <Home />
    </AppContext.Provider>
    )
  }
}

export default App;
