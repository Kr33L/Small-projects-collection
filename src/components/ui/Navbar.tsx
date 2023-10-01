'use client';

import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className="flex justify-evenly py-2">
			{[
				['Home', '/'],
				['Projects', '/projects'],
				['Blog', '/blog'],
				['Resume', '/resume'],
			].map(([title, url]) => (
				<div key={title} className="px-4">
					<Link href={url}>{title}</Link>
				</div>
			))}
		</nav>
	);
}
