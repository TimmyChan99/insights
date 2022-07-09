import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
	<main className='w-full h-screen flex flex-col justify-center'>
			<div className='flex flex-col items-center sm:items-start sm:flex-row h-2/3 sm:space-x-5 space-y-5'>
				<div className='flex flex-col w-1/2 items-end space-x-5'>
					<div className='bg-zinc-900 uppercase'>
						<h1 className='text-4xl sm:text-7xl lg:text-8xl font-extrabold text-white text-right'>Insights.</h1>
					</div>
					<div className='text-3xl flex flex-col font-extrabold text-right text-zinc-900'>
							<h3>Thoughts</h3>
							<h3>Ideas</h3>
							<h3>Experiences</h3>
					</div>
				</div>
				<div className='flex flex-col w-1/2 uppercase text-white space-y-3 font-bold text-center'>
					<Link to='/signin' className='bg-zinc-900 py-3 sm:w-1/2'>Sign In</Link>
					<Link to='/signup' className='bg-zinc-900 py-3 sm:w-1/2'>Sign Up</Link>
				</div>
			</div>
	</main>
	)
}

export default Home
