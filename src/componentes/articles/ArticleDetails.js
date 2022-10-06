import React from 'react';
import { useParams } from 'react-router-dom';
import { useSpring, animated as a, config } from '@react-spring/web'
import { useArticle, useDate } from '../../context/ArticleProvider'

const ArticleDetails = () => {

	const reveal = useSpring({
		config: config.slow,
		from: { opacity: 0, y: 50 },
		to: {
			opacity: 1,
			y: 0,
		},
	});

  const { articleID } = useParams();
	const { articles } = useArticle()
  const articleDetail = articles.find(article => article.id === articleID) || {};
	const date = useDate(articleDetail.createdAt)
	const convertStringToHTML = (string) => {
		const parser = new DOMParser();
		const doc = parser.parseFromString(string, 'text/html');
		return doc.body.innerHTML;
	}
	console.log(convertStringToHTML(articleDetail.article));

	return (
		<a.article style={reveal} className='w-4/5 xl:w-3/5 grid grid-cols-3 relative m-auto'>
				<h3 className='text-5xl font-extrabold col-span-3 flex items-center justify-center text-center h-36'>{articleDetail.title}</h3>
			<div className='flex flex-col col-span-3 lg:col-span-1 items-center text-center space-y-2 h-fit lg:sticky top-20'>
			  <p className='text-xl font-bold	'>@{articleDetail.author}</p>
				<time className='text-lg font-bold'>{date}</time>
			</div>
			<div className='h-fit col-span-3 lg:col-span-2 p-5' dangerouslySetInnerHTML={{__html: articleDetail.article}}/>
			
		
		</a.article>
	)
}

export default ArticleDetails
