import { clsx } from 'clsx';
import { Key, ReactNode } from 'react';

export default function Wrapper(
	{ children, className }: { children: ReactNode; className?: string },
	key?: Key,
) {
	return (
		<div className={clsx(className, 'p-2 shadow-inner')} key={key}>
			{children}
		</div>
	);
}
