import { serverTimestamp } from 'firebase/firestore';
import React, {useRef, useState} from 'react'
import { useArticle } from '../context/ArticleProvider';
import { useAuth } from '../context/AuthProvider';
import Editor from '../componentes/editor/Editor';

const NewPost = () => {
	const { currentUser } = useAuth();
	const { addArticle, uploadImage } = useArticle();
	const imageRef = useRef();
	const InitialState = { title: '', article: '' ,createdAt: serverTimestamp(), author: currentUser.displayName, authorId: currentUser.uid };
	const [data, setData] = useState(InitialState);
	const [value, setValue] = useState('');
	console.log(value);

	const handleImage = async () => {
		await uploadImage(imageRef.current.files[0]).then(url => {
			setData({ ...data, image: url });
		});
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
    setData({ ...data, [name]: value });
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({...data, article: value});
		addArticle({...data, article: value});
		// addArticle(data);
		e.target.reset();
	}

	return (
		<div className='sm:w-2/3 lg:w-3/5 m-auto space-y-7 flex flex-col justify-center items-center mt-[10%]'>
		<h1 className='font-extrabold text-3xl'>New Article</h1>
		
			<form
			onSubmit={handleSubmit}
			className='w-full space-y-9 flex flex-col'>
				<div className='h-14 flex items-center justify-around'>
					<label className='text-lg sm:text-xl font-medium'>Image</label>
					<input
					onChange={handleImage}
					ref={imageRef} 
					className='w-3/5' 
					name='image' 
					type="file" 
					/>
				</div>

				<div className='h-14 flex items-center justify-around'>
					<label className='text-lg sm:text-xl font-medium '>title</label>
					<input 
					className='border-b border-zinc-900 w-3/5 focus:outline-none'
					name='title'
					type="text"
					onChange={handleChange}
					/>
				</div>

				<div className=' flex items-center justify-around'>
					<label className='text-lg sm:text-xl self-start font-medium'>Article</label>
					
					<Editor value={value} setValue={setValue} />
				</div>

				<button 
				className='text-lg text-xl font-medium bg-zinc-900 text-white w-3/5 m-auto h-9'
				type='submit'
				>Post</button>

			</form>

		</div>
	)
}

export default NewPost
