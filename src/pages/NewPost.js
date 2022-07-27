import React, {useRef} from 'react'

const NewPost = () => {
	const titleRef = useRef();
	const articleRef = useRef();
	const imageRef = useRef();

	return (
		<div className='sm:w-2/3 lg:w-3/5 m-auto space-y-7 flex flex-col justify-center items-center mt-[10%]'>
		<h1 className='font-extrabold text-3xl'>New Article</h1>
			<form className='w-full space-y-9 flex flex-col'>
				<div className='h-14 flex items-center justify-around'>
					<label className='text-lg sm:text-xl font-medium'>Image</label>
					<input ref={imageRef} className='w-3/5' type="file" />
				</div>

				<div className='h-14 flex items-center justify-around'>
					<label className='text-lg sm:text-xl font-medium '>title</label>
					<input ref={titleRef} className='border-b border-zinc-900 w-3/5 focus:outline-none' type="text" />
				</div>

				<div className=' flex items-center justify-around'>
					<label className='text-lg sm:text-xl self-start font-medium'>Article</label>
					<textarea ref={articleRef} className='border border-zinc-900 w-3/5 focus:outline-none' type="text" />
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
