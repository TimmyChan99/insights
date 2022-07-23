import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../componentes/header/Header';
import Articles from '../pages/Articles';
import ArticleDetails from '../componentes/articles/ArticleDetails';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import AuthProvider from '../componentes/auth/AuthProvider';


const Layout = () => {
	return (
		<AuthProvider>
		<Router>
		<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/articles' element={<Articles />} />
				<Route path='articles/details' element={<ArticleDetails />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/signin' element={<SignIn />} />
			</Routes>
		</Router>
		</AuthProvider>
	)
}

export default Layout
