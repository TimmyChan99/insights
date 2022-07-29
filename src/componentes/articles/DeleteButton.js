import React from 'react';
import { useArticle } from '../../context/ArticleProvider';


const DeleteButton = ({ id, image }) => {
	const { deleteArticle } = useArticle();
	
	const handleDelete = () => {
			deleteArticle(id, image);
	}
	return (
		<div>
			<button 
			className='font-medium bg-zinc-900 text-white p-1'
			type='button'
			onClick={() => handleDelete()}
			>
        Delete
			</button>
			</div>
	)
}

export default DeleteButton
