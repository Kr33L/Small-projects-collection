'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import ThemeToggle from './ThemeToggle';
import Wrapper from './Wrapper';

export default function Navbar() {
	const pathname = usePathname();

	return (
		<nav className="fixed bottom-0 left-1/2 flex w-11/12 -translate-x-1/2 transform items-center justify-between sm:relative sm:w-4/5">
			<Wrapper className="flex w-full justify-around sm:space-x-2">
				{[
					['Home', '/'],
					['Projects', '/projects'],
					['Blog', '/blog'],
					['Resume', '/resume'],
				].map(([title, url]) => (
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
			</Wrapper>
		</nav>
	);
}
