import React, { useContext }  from 'react'
import { ThemeContext } from "./themecontext.js"

const Child = () => {
    const {theme}= useContext(ThemeContext)
    return (
        <div style={{ background: theme.backgroundColor }}>dddd</div>
    )
}

function ContextDemo() {
    const {setTheme}= useContext(ThemeContext)
    // console.log("bgColor",bgColor)
    return (
        <div>
            <button onClick={() => setTheme("pink")}>非顶层组件改变颜色</button>
            <Child />
        </div>
    )
}

export default ContextDemo