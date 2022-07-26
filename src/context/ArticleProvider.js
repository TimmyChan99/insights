import React, {useState, useContext, useEffect} from 'react'
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from '../firebase';

const ArticleContext = React.createContext();

export const useArticle = () => {
	return useContext(ArticleContext)
}

const ArticleProvider = ({ children }) => {

	const [articles, setArticles] = useState([]);
	const articlesRef = collection(db, 'articles');
	const q = query(articlesRef, orderBy('title', 'desc'));

	useEffect(() => {
		const fuc = async () => {
		const Snapshot = await getDocs(q);

		Snapshot.forEach((doc) => {
			console.log(doc.id, " => ", doc.data()); })
		}
	
	 fuc();
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
