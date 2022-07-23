import React, { useRef} from 'react'
import { useSpring, animated as a, config } from '@react-spring/web'

const SignUp = () => {

	const reveal = useSpring({
		config: config.slow,
		from: { opacity: 0, y: 50 },
		to: {
			opacity: 1,
			y: 0,
		},
	});

	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();

	const handleSignUp = (event) => {
		event.preventDefault();
	
	}


	return (
		<a.div style={reveal} className='sm:w-2/3 lg:w-2/5 m-auto space-y-7 flex flex-col justify-center items-center mt-[10%]'>
			
			<h1 className='font-extrabold text-3xl'>Register</h1>

			<form 
			onSubmit={handleSignUp}
			className='w-5/6 space-y-9 flex flex-col '>

				<div className='h-14 flex items-center justify-around'>
					<label className='text-lg sm:text-xl font-medium'>Name</label>
					<input 
					ref={nameRef}
					className='border-b border-zinc-900 w-3/5'
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
					className='border-b border-zinc-900 w-3/5'
					type='password' 
					name='password' />
				</div>

				<button 
				className='text-lg text-xl font-medium bg-zinc-900 text-white w-3/5 m-auto h-9'
				type='submit'
				>Sign Up</button>
			</form>
		</a.div>
	)
}

export default SignUp
