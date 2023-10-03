import { clsx } from 'clsx';
import { Key, ReactNode } from 'react';

export default function Wrapper(
	{ children, className }: { children: ReactNode; className?: string },
	key?: Key,
) {
	return (
		<div className={clsx(className, 'border-accent p-2')} key={key}>
			{children}
		</div>
	);
}
