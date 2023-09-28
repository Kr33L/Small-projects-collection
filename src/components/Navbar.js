'use client';

import Link from 'next/link';

export default function Navbar() {
	return (
		<div className="justify-center pb-20 sm:flex sm:py-10">
			<nav className="container fixed z-50 flex h-10 justify-center bg-white py-1 shadow-inner sm:top-4 sm:max-w-xs sm:rounded-md sm:border-2">
				{[
					['Home', '/'],
					['Projects', '/projects'],
					['Resume', '/resume'],
					['Blog', '/blog'],
				].map(([title, url]) => (
					<Link key={title} href={url} className="rounded-xl px-2 pt-1 transition-all hover:px-2 hover:pt-3 ">
						{title}
					</Link>
				))}
			</nav>
		</div>
	);
}
