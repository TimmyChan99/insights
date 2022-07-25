import React, {useState, useEffect, useContext} from 'react'
import {auth} from '../../firebase'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'

const AuthContext = React.createContext();

export const useAuth= () => {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged(setCurrentUser)
	}, [])

	
	const signup = (email, password, name) => {
		createUserWithEmailAndPassword(auth, email, password)
     return updateProfile(auth.currentUser, {
			displayName: name
		}) 
	}

 const value = {
	currentUser,
	signup
 }

	return (
		<AuthContext.Provider
		value={value}
		>
			{ children } 
		</AuthContext.Provider>
	)
}

export default AuthProvider
