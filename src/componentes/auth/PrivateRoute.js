import React from 'react'
import { useAuth } from '../../context/AuthProvider'
import { Navigate} from 'react-router-dom'


const PrivateRoute = ({ children }) => {
	const {currentUser} =  useAuth();
	
	return (
		<>
				{
					currentUser ? (
						 children 
					) : (
						<Navigate to='/insights/' />
					)
				}
		</>		
	)
}

export default PrivateRoute
