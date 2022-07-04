import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import { webRouters } from "./routes/index"

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <div className='nav-box'>
        <Link to="/">首页</Link>&nbsp;
        <Link to="/test/index">路由测试页</Link>
        <Link to="/test/reducer">useReducer</Link>
        <Link to="/test/context">useContext</Link>
        <Link to="/test/callback">useCallBack</Link>
        <Link to="/test/memo">useMemo</Link>
      </div>
      <Routes>
        {
          webRouters.map(item => {
            return <Route path={item.path} element={<item.element />} key={item.path}></Route>
          })
        }
        <Route path="*" element={<h1>404 page not found</h1>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
