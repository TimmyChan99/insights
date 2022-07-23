import React, {useState, useEffect} from 'react'
import {auth} from '../../firebase'

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged(setCurrentUser)
	}, [])

	return (
		<AuthContext.Provider
		value={{currentUser}}
		>
			{ children } 
		</AuthContext.Provider>
	)
}

export default AuthProvider
