import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../componentes/header/Header';
import Articles from '../pages/Articles';
import ArticleDetails from '../componentes/articles/ArticleDetails';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import AuthProvider from '../context/AuthProvider';
import PrivateRoute from '../componentes/auth/PrivateRoute';
import Profile from '../pages/Profile';
import ArticleProvider from '../context/ArticleProvider';


const Layout = () => {
	return (
		<AuthProvider>
		<ArticleProvider>
			<Router>
			<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/articles' element={<Articles />} />
				  <Route path='articles/:articleID' element={<ArticleDetails />} />
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
		</ArticleProvider>
		</AuthProvider>
	)
}

export default Layout
