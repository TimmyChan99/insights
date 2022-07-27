import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSpring, animated as a, config } from '@react-spring/web'
import Image from './Image'
import { useDate } from '../../context/ArticleProvider'

const ArticleSummery = ({ id, article, author, title, image, createdAt}) => {

	const reveal = useSpring({
		config: config.slow,
		from: { opacity: 0, y: 50 },
		to: {
			opacity: 1,
			y: 0,
		},
	});

  const date = useDate(createdAt);

	return (
		<a.article style={reveal} className='h-96 flex flex-col space-y-2'>
      <Image link={image}/>
			<time className='text-lg font-bold'>.{date}</time>
			<h3 className='text-2xl font-extrabold	'>_{title}</h3>
			<p className='text-xl font-bold	'>@{author}</p>
			<p className='truncate h-fit'>{article}</p>
			<hr className='border-1 border-zinc-900'/>
			<NavLink to={`/articles/${id}`} >
			  Read more &rarr;
			</NavLink>
		</a.article>
	)
}

export default ArticleSummery
