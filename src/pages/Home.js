import React from 'react'

const Home = () => {
	return (
	<main className='w-full h-[90vh] flex flex-col justify-center items-center'>
				<div className='flex flex-col items-end w-2/3 sm:w-1/2 lg:w-3/6 space-x-5'>
					<div className='bg-zinc-900 uppercase w-full'>
						<h1 className='text-7xl sm:text-7xl lg:text-8xl font-extrabold text-white text-right'>Insights.</h1>
					</div>
					<div className='text-4xl flex flex-col font-extrabold text-right text-zinc-900'>
							<h3>Thoughts</h3>
							<h3>Ideas</h3>
							<h3>Experiences</h3>
					</div>
				</div>
	</main>
	)
}

export default Home
