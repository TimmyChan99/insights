import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'
import { useArticle, useDate } from '../context/ArticleProvider'
import ArticleSummery from '../componentes/articles/ArticleSummery'

const Profile = () => {
	const { currentUser } = useAuth();
	const { articles } = useArticle();
	const articlesList = articles.filter(article => article.authorId === currentUser.uid);
	
	return (
		<div className='flex flex-col sm:flex-row sm:space-x-10 mt-12 justify-center'>
			<aside
			className='h-36 sm:h-[40vh] sm:w-3/12 bg-zinc-900 text-white flex sm:flex-col items-center justify-around sm:justify-center sm:space-y-12'>
			 <div className='text-center text-lg'>
				 <p>@ {currentUser.displayName}</p>
				<p>{currentUser.email}</p>
			 </div>
				<div className='text-center text-lg'>
					<p>Articles:</p>
					<p className='text-5xl'>{articlesList.length}</p>
				</div>
				<button 
				className='text-lg font-medium bg-white text-zinc-900 w-36 sm:w-4/5 h-9'
				type='button'
				>
				  <Link to='/newpost'>New Article</Link>
				</button>
			</aside>
			<ul className='w-5/6 sm:w-6/12 grid grid-cols-1 lg:grid-cols-2 gap-7 my-10 mx-auto'>
				{articlesList.map(article => (
					<li key={article.id}>
						<ArticleSummery {...article} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default Profile
