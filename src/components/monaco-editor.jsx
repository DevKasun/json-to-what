import { useRef } from 'react';
import Editor from '@monaco-editor/react';

function MonacoEditorComponent({ value, onChange }) {
	const editorRef = useRef(null);

	function handleEditorDidMount(editor, monaco) {
		editorRef.current = editor;
	}

	return (
		<Editor
			height='80vh'
			defaultLanguage='javascript'
			defaultValue='// some comment'
			onMount={handleEditorDidMount}
		/>
	);
}

export default MonacoEditorComponent;
