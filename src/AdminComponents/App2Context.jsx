import React from 'react'
import { createContext } from 'react'
 
export const App2Context = createContext()
const App2ContextProvider = (props) => {
  
   const value={

   }
    return (
    <App2Context.Provider value={value}>
        {props.children}
    </App2Context.Provider>
  )
}

export default App2ContextProvider

