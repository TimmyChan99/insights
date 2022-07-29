import React, {useState, useContext, useEffect} from 'react'
import { collection, query, orderBy, onSnapshot, addDoc, deleteDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { db, storage} from '../firebase';

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
			const resp = await addDoc(articlesRef, article)
			return resp		
	}

  const uploadImage = async (file) => {
		const name = `${Date.now()}-${file.name}`;
		const storageRef = ref(storage, name);
		const uploadTask = uploadBytesResumable(storageRef, file);
		const url = await uploadTask.then(snapshot => getDownloadURL(snapshot.ref));
		return url;
	}

	const deleteImageFromStorage = async (url) => {
		const imageRef = ref(storage, url);
		const resp = await deleteObject(imageRef);
		return resp;
	}

	const deleteArticle = async (id, url) => {
      const resp = await deleteDoc(doc(articlesRef, id));
     deleteImageFromStorage(url);
			return resp
	}

	const value = {
	 articles,
	 addArticle,
	 uploadImage,
	 deleteArticle,
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
