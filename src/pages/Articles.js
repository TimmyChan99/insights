import React from 'react'
import ArticleSummery from '../componentes/articles/ArticleSummery'

const Articles = () => {
	const list = [1, 2, 3, 4, 5, 6, 7]
	return (
		<ul className='w-5/6 grid grid-cols-1 gap-4 mx-auto'>
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
