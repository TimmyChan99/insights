import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../componentes/header/Header';
import Articles from '../pages/Articles';
import ArticleDetails from '../componentes/articles/ArticleDetails';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import AuthProvider from '../componentes/auth/AuthProvider';
import PrivateRoute from '../componentes/auth/PrivateRoute';
import Profile from '../pages/Profile';


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
				<Route 
				  path='/profile' 
					element={
					 <PrivateRoute>
					  <Profile />
					 </PrivateRoute>
				  }
				/>
			</Routes>
		</Router>
		</AuthProvider>
	)
}

export default Layout
