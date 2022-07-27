import React, {useState, useContext, useEffect} from 'react'
import { collection, query, orderBy, onSnapshot, addDoc } from "firebase/firestore";
import { db } from '../firebase';

const ArticleContext = React.createContext();

export const useArticle = () => {
	return useContext(ArticleContext)
}

export const useDate = (date) => {
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formateddate = date.toDate().toLocaleDateString('en-US', options);

	return formateddate
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


	const addArticle = async (article) => {
		const docRef = await addDoc(articlesRef, article)
	}

	const value = {
	 articles,
	 addArticle
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
