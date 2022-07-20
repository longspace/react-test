import React, { useState } from 'react'
import { ThemeContext } from "./themecontext.js"
import ContextDemo from './ContextDemo.jsx'


function Context() {
    const [theme, setTheme] = useState({
        backgroundColor: "green"
    })
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div>父组件</div>
            <ContextDemo />
        </ThemeContext.Provider>
    )
}

export default Context