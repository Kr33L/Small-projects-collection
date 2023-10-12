'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Navbar({ className }: { className?: string }) {
	const pathname = usePathname();

	const links = [
		['Home', '/'],
		['Projects', '/projects'],
		['Blog', '/blog'],
		['Resume', '/resume'],
	];

	// Filter out the links not needed in production
	if (process.env.NODE_ENV === 'production') {
		links.splice(1, 2); // Remove the first three links
	}

	return (
		<nav className={className}>
			{links.map(([title, url]) => (
				<Link
					href={url}
					key={title}
					className={clsx(
						pathname == url && 'bg-secondary drop-shadow-sm',
						'w-full border-b border-accent py-1 text-center transition-all duration-100 hover:shadow-lg active:shadow-inner',
					)}>
					<span>{title}</span>
				</Link>
			))}
		</nav>
	);
}
