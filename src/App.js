import { Component } from 'react';

import AppContext from './context/AppContext'
import Home from './component/Home';


import './App.css';

class App extends Component{

  state = {isDark: false}

  onToggleAppTheme = () => this.setState(prevState => ({isDark: !prevState.isDark}))
  
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
