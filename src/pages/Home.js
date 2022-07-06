import React from 'react'

const Home = () => {
	return (
	<main className='w-full h-screen flex flex-col justify-center'>
			<div className='flex flex-col sm:flex-row h-2/3 sm:space-x-5 space-y-5'>
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
					<a href='#' className='bg-zinc-900 py-3 sm:w-1/2'>Sign In</a>
					<a href='#' className='bg-zinc-900 py-3 sm:w-1/2'>Sign Up</a>
				</div>
			</div>
				<hr className='border-black w-2/3 mx-auto' />
				<div className='text-2xl flex mx-auto justify-center space-x-6 w-2/3'>
					<h4><a href='#'>Articles &rarr;</a></h4>
					<h4><a href='#'>Random &rarr;</a></h4>
					<h4><a href='#'>About &rarr;</a></h4>
				</div>
	</main>
	)
}

export default Home
