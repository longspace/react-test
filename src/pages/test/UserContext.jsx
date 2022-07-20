import React, { createContext, useState } from 'react'
export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLogin, setIsLogin] = useState(false);

    const login = () => {
        setUserInfo({ userName: 'alex', salary: '35k' })
        setIsLogin(true)
    }

    const logout = () => {
        setUserInfo(null)
        setIsLogin(false)
    }

    return (
        <UserContext.Provider value={{ userInfo, isLogin, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

