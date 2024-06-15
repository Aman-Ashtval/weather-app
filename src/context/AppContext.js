import React from 'react'

const AppContext = React.createContext({
  isDark: false,
  onToggleAppTheme: () => {},
})

export default AppContext