import React, { useState } from "react";

export const theme = {
    backgroundColor: "green"
};
export const setTheme = (val) => {
    theme.backgroundColor = val
    console.log(111, val);
}
// const [theme,setTheme] = useState({backgroundColor: "green"})

export const ThemeContext = React.createContext(theme);