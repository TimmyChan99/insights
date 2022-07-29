import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider'

const SignUp = () => {

	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

	const handleSignUp =  async (event) => {
		event.preventDefault();
	  
		try {
			setError('')
			setLoading(true)
		  await signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value)
			navigate('/articles')
		} catch(error) {
			const errorCode = error.code;
			setError(errorCode);
		}

		setLoading(false)
	}


	return (
		<div className='sm:w-2/3 lg:w-2/5 m-auto space-y-7 flex flex-col justify-center items-center mt-[10%]'>
			
			<h1 className='font-extrabold text-3xl'>Register</h1>
      {error && (<p className='text-xl font-bold text-red-600'>{error}</p>)}
			<form 
			onSubmit={handleSignUp}
			className='w-5/6 space-y-9 flex flex-col '>

				<div className='h-14 flex items-center justify-around'>
					<label className='text-lg sm:text-xl font-medium'>Name</label>
					<input 
					ref={nameRef}
					className='border-b border-zinc-900 w-3/5 focus:outline-none'
					type='text' 
					name='name' />
				</div>

				<div className='h-14 flex items-center justify-around'>
					<label className='text-lg sm:text-xl font-medium'>Email</label>
					<input 
					ref={emailRef}
					className='border-b border-zinc-900 w-3/5 focus:outline-none'
					type='email' 
					name='email' />
				</div>

				<div className='h-14 flex items-center justify-around'>
					<label className='text-lg sm:text-xl font-medium'>Password</label>
					<input 
					ref={passwordRef}
					className='border-b border-zinc-900 w-3/5 focus:outline-none'
					type='password' 
					name='password' />
				</div>

			{	!loading ? (
			  <button 
				  className='text-lg text-xl font-medium bg-zinc-900 text-white w-3/5 m-auto h-9'
				  type='submit'
				>Sign Up</button>) : (
				<button 
				  className='text-xl font-medium bg-zinc-500 text-white w-3/5 m-auto h-9'
				  type='submit'
				>Signing up...</button>
				)
			}  
			
			</form>
			<div className='sm:text-lg'>
				Already have an account? <Link className='font-bold underline' to='/signin'>Sign In</Link>
			</div>
		</div>
	)
}

export default SignUp
