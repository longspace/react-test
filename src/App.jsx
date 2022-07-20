import { Button } from 'antd';
import React, { useContext } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import { UserContext } from './pages/test/UserContext';
import { webRouters } from "./routes/index"

function App() {
	const { userInfo, isLogin, login, logout } = useContext(UserContext)
	return (
		<div style={{ textAlign: "center" }}>
			<div className='nav-box'>
				<Link to="/">首页</Link>&nbsp;
				<Link to="/test/index">路由测试页</Link>
				<Link to="/test/reducer">useReducer</Link>
				<Link to="/test/context">useContext</Link>
				<Link to="/test/callback">useCallBack</Link>
				<Link to="/test/memo">useMemo</Link>
				{
					isLogin ? <Button onClick={() => logout()}>{userInfo.userName}，退出</Button> : <Button onClick={() => login()}>登录</Button>
				}
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
