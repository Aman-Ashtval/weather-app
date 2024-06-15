import React from 'react'

const AppContext = React.createContext({
  isDark: false,
  changeAppTheme: () => {},
})

export default AppContext