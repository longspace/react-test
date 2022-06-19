import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import { webRouters } from "./routes/index"

function App() {
  return (
    <div style={{textAlign:"center"}}>
      <Link to="/">首页</Link>&nbsp;
      <Link to="/test/index">路由测试页</Link>
      <Routes>
        {
          webRouters.map(item => {
            return <Route path={item.path} element={<item.element />} key={item.path}></Route>
          })
        }
      </Routes>
    </div>
  );
}

export default App;
