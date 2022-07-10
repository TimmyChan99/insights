import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from './Image'

const ArticleSummery = () => {
	const imgLink = 'https://images.pexels.com/photos/7380126/pexels-photo-7380126.jpeg?cs=srgb&dl=pexels-sena-aykut-7380126.jpg&fm=jpg'
	return (
		<article className='h-96 flex flex-col space-y-2'>
      <Image link={imgLink}/>
			<time className='text-lg font-bold'>.July 07, 2022</time>
			<h3 className='text-2xl font-extrabold	'>_Article Title</h3>
			<p className='text-xl font-bold	'>@Author Name</p>
			<p className='truncate h-fit'>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
			Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
			when an unknown printer took a galley of type and scrambled it to make a type 
			specimen book. It has survived not only five centuries, but also the leap into 
			electronic typesetting, remaining essentially unchanged. It was popularised in 
			the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
			and more recently with desktop publishing software like Aldus PageMaker including
			 versions of Lorem Ipsum.
			</p>
			<hr className='border-1 border-zinc-900'/>
			<NavLink to='/articles/details'>
			  Read more &rarr;
			</NavLink>
		</article>
	)
}

export default ArticleSummery
