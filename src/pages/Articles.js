import React from 'react'
import ArticleSummery from '../componentes/articles/ArticleSummery'

const Articles = () => {
	const list = [1, 2, 3, 4, 5, 6, 7]
	return (
		<ul className='w-5/6 grid grid-cols-1 gap-7 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{ list.map((item) => {
        return (
					<li key={item}>
						<ArticleSummery />
					</li>
				)
			})}
		</ul>
	)
}

export default Articles
