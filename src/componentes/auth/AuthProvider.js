import React, {useState, useEffect, useContext} from 'react'
import {auth} from '../../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'

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

	const signin = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

 const value = {
	currentUser,
	signup,
	signin
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
