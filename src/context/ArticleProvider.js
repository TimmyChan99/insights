import React, {useState, useContext, useEffect} from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';

const ArticleContext = React.createContext();

export const useArticle = () => {
	return useContext(ArticleContext)
}

const ArticleProvider = ({ children }) => {

	const [articles, setArticles] = useState([]);
	const articlesRef = collection(db, 'articles');
	
	useEffect(() => {
		const q = query(articlesRef, orderBy('title', 'desc'));
		
		const unsubscribe = onSnapshot(q, (snapshot) => {
			const articles = snapshot.docs.map(doc => {
				return {
					id: doc.id,
					...doc.data()
				}
			})
			setArticles(articles)
		})

		return unsubscribe
	}, [])


	const value = {
	 articles,
	}

	return (
		<ArticleContext.Provider 
		value={value}
		>
			{ children}
		</ArticleContext.Provider>
	)
}

export default ArticleProvider
