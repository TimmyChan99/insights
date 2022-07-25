import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../componentes/auth/AuthProvider'

const SignIn = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { signin, currentUser } = useAuth();
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	
	const handleSignIn =  async (event) => {
		event.preventDefault();
	  
		try {
			setError('')
			setLoading(true)
		  await signin(emailRef.current.value, passwordRef.current.value)
			console.log(currentUser.displayName);
			
		} catch(error) {
			const errorCode = error.code;
			setError(errorCode);
		}

		setLoading(false)
	}

	return (
		<div className='sm:w-2/3 lg:w-2/5 m-auto space-y-7 flex flex-col justify-center items-center mt-[10%]'>
			
			<h1 className='font-extrabold text-3xl'>Log In</h1>

			<form 
			onSubmit={handleSignIn}
			className='w-5/6 space-y-9 flex flex-col '>

				<div className='h-14 flex items-center justify-around'>
					<label className='text-lg sm:text-xl font-medium'>Email</label>
					<input
					ref={emailRef}
					className='border-b border-zinc-900 w-3/5 focus:outline-none'
					type='email' />
				</div>

				<div className='h-14 flex items-center justify-around'>
					<label className='text-lg sm:text-xl font-medium'>Password</label>
					<input
					ref={passwordRef}
					className='border-b border-zinc-900 w-3/5 focus:outline-none'
					type='password' />
				</div>

				<button 
				className='text-lg text-xl font-medium bg-zinc-900 text-white w-3/5 m-auto h-9'
				type='submit'
				>Sign In</button>
			</form>
			<div className='sm:text-lg'>
				Need an account? <Link className='font-bold underline' to='/signup'>Sign Up</Link>
			</div>
		</div>
	)
}

export default SignIn
