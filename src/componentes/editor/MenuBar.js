import React from 'react'

const MenuBar = ({ editor }) => {
	if (!editor) {
    return null
  }

	const style = 'bg-zinc-900 text-white  py-1 px-3 rounded-sm';

	return (
		<div className='space-x-2 space-y-2'>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${editor.isActive('bold') ? 'is-active' : ''} ${style}`}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${editor.isActive('italic') ? 'is-active' : ''} ${style}`}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`` + `${editor.isActive('strike') ? 'is-active' : ''} ${style}`}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={`` + `${editor.isActive('code') ? 'is-active' : ''} ${style}`}
      >
        code
      </button>
      <button 
			className={style}
			onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </button>
      <button 
			className={style}
			onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`` + `${editor.isActive('paragraph') ? 'is-active' : ''} ${style}`}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${editor.isActive('heading1') ? 'is-active' : ''} ${style}`}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${editor.isActive('heading2') ? 'is-active' : ''} ${style}`}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`${editor.isActive('heading3') ? 'is-active' : ''} ${style}`}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`` + `${editor.isActive('heading4') ? 'is-active' : ''} ${style}`}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={`` + `${editor.isActive('heading5') ? 'is-active' : ''} ${style}`}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={`` + `${editor.isActive('heading6') ? 'is-active' : ''} ${style}`}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`` + `${editor.isActive('bulletList') ? 'is-active' : ''} ${style}`}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`` + `${editor.isActive('orderedList') ? 'is-active' : ''} ${style}`}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`` + `${editor.isActive('codeBlock') ? 'is-active' : ''} ${style}`}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`` + `${editor.isActive('blockquote') ? 'is-active' : ''} ${style}`}
      >
        blockquote
      </button>
      <button 
			className={style}
			onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button 
			className={style}
			onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button>
      <button 
			className={style}
			onClick={() => editor.chain().focus().undo().run()}>
        undo
      </button>
      <button 
			className={style}
			onClick={() => editor.chain().focus().redo().run()}>
        redo
      </button>
    </div>
	)
}

export default MenuBar
