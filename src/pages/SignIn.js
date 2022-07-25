import React, {useState, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../componentes/auth/AuthProvider'

const SignIn = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { signin } = useAuth();
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	
	const handleSignIn =  async (event) => {
		event.preventDefault();
	  
		try {
			setError('')
			setLoading(true)
		  await signin(emailRef.current.value, passwordRef.current.value)
			navigate('/articles')
		} catch(error) {
			const errorCode = error.code;
			setError(errorCode);
		}

		setLoading(false)
	}

	return (
		<div className='sm:w-2/3 lg:w-2/5 m-auto space-y-7 flex flex-col justify-center items-center mt-[10%]'>
			
			<h1 className='font-extrabold text-3xl'>Log In</h1>
      {error && (<p className='text-xl font-bold text-red-600'>{error}</p>)}
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

				{!loading ? (<button 
				className='text-lg text-xl font-medium bg-zinc-900 text-white w-3/5 m-auto h-9'
				type='submit'
				>Sign In</button>) : (
					<button 
				className='text-xl font-medium bg-zinc-500 text-white w-3/5 m-auto h-9'
				type='submit'
				>Login in...</button>
				)}
			</form>
			<div className='sm:text-lg'>
				Need an account? <Link className='font-bold underline' to='/signup'>Sign Up</Link>
			</div>
		</div>
	)
}

export default SignIn
