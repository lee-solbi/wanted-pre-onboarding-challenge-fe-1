import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/signUp' element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
