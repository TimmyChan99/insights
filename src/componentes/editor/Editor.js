import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import  MenuBar  from './MenuBar'
import { useArticle } from '../../context/ArticleProvider'

const Editor = () => {
	let { editorValue } = useArticle()
	const editor = useEditor({
    extensions: [
      StarterKit,
    ],
		editorProps: {
			attributes: {
				class: 'border-2 border-zinc-900 rounded-sm h-48 focus:outline-none w-4/5 m-auto',
			},
		},
		content: ``,
		onUpdate: ({ editor }) => {
		  editorValue = editor.getText()
		}
  })

	

	return (
		<div>
			<MenuBar editor={editor} />
			<EditorContent editor={editor} />
		</div>
	)
}

export default Editor
