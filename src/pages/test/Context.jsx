import React from 'react'
import { theme, setTheme, ThemeContext } from "./themecontext.js"
import ContextDemo from './ContextDemo.jsx'


function Context() {

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            <div>父组件</div>
            <ContextDemo />
        </ThemeContext.Provider>
    )
}

export default Context