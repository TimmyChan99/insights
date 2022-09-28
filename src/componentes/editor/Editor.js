import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor({value, setValue}) {

	const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'code-block'],
      ['clean']
    ],
  }
	
  return <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} placeholder='Add your article here' className='border border-zinc-900 w-3/5 focus:outline-none'/>;
}

export default Editor;
