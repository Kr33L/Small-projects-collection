'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Navbar() {
	const pathName = usePathname();

	const links = [
		['Home', '/'],
		['Projects', '/projects'],
		['Blog', '/blog'],
		['Resume', '/Karol_Olechno_resume.pdf'],
	];

	// Filter out the links not needed in production
	if (process.env.NODE_ENV === 'production') {
		links.splice(1, 2); // Remove the first three links
	}

	return (
		<nav className="fixed bottom-0 left-1/2 flex w-11/12 -translate-x-1/2 transform items-center justify-between sm:relative sm:w-4/5">
			<div className="flex w-full justify-around sm:space-x-2">
				{links.map(([title, url]) => (
					<Link
						href={url}
						key={title}
						className={clsx(
							pathName == url && 'bg-secondary drop-shadow-sm',
							'w-full border-b border-accent py-1 text-center transition-all duration-100 hover:shadow-lg active:shadow-inner',
						)}>
						<span>{title}</span>
					</Link>
				))}
			</div>
		</nav>
	);
}
