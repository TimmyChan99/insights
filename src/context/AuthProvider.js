import React, {useState, useEffect, useContext} from 'react'
import { auth, db } from '../firebase'
import { collection, setDoc, doc, serverTimestamp } from "firebase/firestore";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'

const AuthContext = React.createContext();

export const useAuth= () => {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged(setCurrentUser)
	}, [])

	
	const addUser = async (userID, user) => {
		const userRef = collection(db, 'users');
		await setDoc(doc(userRef, userID), {
			...user,
			createdAt: serverTimestamp(),
		})
	}

	const signup = async (email, password, name) => {
		const resp = await createUserWithEmailAndPassword(auth, email, password)
	  updateProfile(auth.currentUser, {
			displayName: name
		})
	 addUser(resp.user.uid, {email, name})
	}

	const signin = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	const signout = () => {
		return signOut(auth)
	}

 const value = {
	currentUser,
	signup,
	signin,
	signout
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
