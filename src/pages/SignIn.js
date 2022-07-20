import React from 'react'
import { useSpring, animated as a, config } from '@react-spring/web'

const SignIn = () => {

	const reveal = useSpring({
		config: config.slow,
		from: { opacity: 0, y: 50 },
		to: {
			opacity: 1,
			y: 0,
		},
	});

	return (
		<a.div style={reveal} className='sm:w-2/3 lg:w-2/5 m-auto space-y-7 flex flex-col justify-center items-center mt-[10%]'>
			
			<h1 className='font-extrabold text-3xl'>Log In</h1>

			<form className='w-5/6 space-y-9 flex flex-col '>

				<div className='h-14 flex items-center justify-around'>
					<label className='text-lg sm:text-xl font-medium'>Email</label>
					<input 
					className='border-b border-zinc-900 w-3/5 focus:outline-none'
					type='email' />
				</div>

				<div className='h-14 flex items-center justify-around'>
					<label className='text-lg sm:text-xl font-medium'>Password</label>
					<input 
					className='border-b border-zinc-900 w-3/5'
					type='password' />
				</div>

				<button 
				className='text-lg text-xl font-medium bg-zinc-900 text-white w-3/5 m-auto h-9'
				type='submit'
				>Sign In</button>
			</form>
		</a.div>
	)
}

export default SignIn
