import { createFileRoute } from '@tanstack/react-router';
import Editor from '@monaco-editor/react';

export const Route = createFileRoute('/')({ component: App });

function App() {
	return (
		<div className='flex flex-row gap-4'>
			<div className='w-1/2'>
				<h3 className='text-lg font-bold pb-2'>JSON</h3>
				<Editor height='70vh' defaultLanguage='json' theme='vs-dark' />
			</div>
			<div className='w-1/2'>
				<h3 className='text-lg font-bold pb-2'>TypeScript</h3>
				<Editor
					height='70vh'
					defaultLanguage='typescript'
					theme='vs-dark'
				/>
			</div>
		</div>
	);
}
