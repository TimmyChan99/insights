import React from 'react'
import ArticleSummery from '../componentes/articles/ArticleSummery'
import { useArticle } from '../context/ArticleProvider'



const Articles = () => {
	const { articles } = useArticle()

	return (
		<ul className='w-5/6 grid grid-cols-1 gap-7 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{ articles.map((article) => {
        return (
					<li key={article.id}>
						<ArticleSummery {...article} />
					</li>
				)
			})}
		</ul>
	)
}

export default Articles
