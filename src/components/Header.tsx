import { Link } from '@tanstack/react-router';

import { useState } from 'react';
import { Home, Menu, X, Brackets } from 'lucide-react';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header className='p-4 flex items-center bg-[#6f00ff] text-white shadow-lg'>
				<button
					onClick={() => setIsOpen(true)}
					className='p-2 hover:bg-[#6f00ff] rounded-lg transition-colors'
					aria-label='Open menu'
				>
					<Menu size={24} />
				</button>
				<h1 className='ml-4 text-xl font-semibold'>
					<Link to='/'>JSON to WHAT?</Link>
				</h1>
			</header>

			<aside
				className={`fixed top-0 left-0 h-full w-80 bg-black text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className='flex items-center justify-between p-4 border-b border-gray-700'>
					<h2 className='text-xl font-bold'>Menu</h2>
					<button
						onClick={() => setIsOpen(false)}
						className='p-2 hover:bg-gray-800 rounded-lg transition-colors'
						aria-label='Close menu'
					>
						<X size={24} />
					</button>
				</div>

				<nav className='flex-1 p-4 overflow-y-auto'>
					<Link
						to='/'
						onClick={() => setIsOpen(false)}
						className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2'
						activeProps={{
							className:
								'flex items-center gap-3 p-3 rounded-lg bg-[#6f00ff] hover:bg-[#6f00ff] hover:text-white transition-colors mb-2',
						}}
					>
						<Home size={20} />
						<span className='font-medium'>Home</span>
					</Link>

					{/* <Link
						to='/json-to-what'
						onClick={() => setIsOpen(false)}
						className='flex items-center gap-/3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2'
						activeProps={{
							className:
								'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
						}}
					>
						<Brackets size={20} />
						<span className='font-medium'>JSON to WHAT?</span>
					</Link> */}
				</nav>
			</aside>
		</>
	);
}
