import React, { Suspense } from 'react'
import { NavLink } from 'react-router-dom'
import { useSpring, animated as a, config } from '@react-spring/web'
import { useDate } from '../../context/ArticleProvider'
import { useAuth } from '../../context/AuthProvider'
import DeleteButton from './DeleteButton';

const Image = React.lazy(() => import('./Image'));

const ArticleSummery = ({ id, article, author, authorId, title, image, createdAt}) => {

	const reveal = useSpring({
		config: config.slow,
		from: { opacity: 0, y: 50 },
		to: {
			opacity: 1,
			y: 0,
		},
	});

	const { currentUser } = useAuth();
  const date = useDate(createdAt);
 const isAuthor = currentUser && currentUser.uid === authorId;

	return (
		<a.article
		id={id}
		style={reveal} 
		className='h-96 flex flex-col space-y-2'>
			<Suspense fallback={<div>Loading...</div>}>
        <Image link={image}/>
			</Suspense>
			<time className='text-lg font-bold'>.{date}</time>
			<h3 className='text-2xl font-extrabold	'>_{title}</h3>
			<p className='text-xl font-bold	'>@{author}</p>
			<p className='truncate h-fit' dangerouslySetInnerHTML={{__html: article}} />
			<hr className='border-1 border-zinc-900'/>
			<div className='flex items-enter justify-between'>
				<NavLink to={`/insights/articles/${id}`} >
					Read more &rarr;
				</NavLink>
				{isAuthor && (<DeleteButton id={id} image={image}/>) }
			</div>
		</a.article>
	)
}

export default ArticleSummery
