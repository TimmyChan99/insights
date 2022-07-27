import React from 'react'
import { useAuth } from '../context/AuthProvider'

const Profile = () => {
	const { currentUser } = useAuth();

	return (
		<div>Welome {currentUser.displayName}</div>
	)
}

export default Profile
