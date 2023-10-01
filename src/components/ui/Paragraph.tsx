import clsx from 'clsx';
import { ReactNode } from 'react';

export default function Paragraph({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return <p className={clsx(className, 'inline')}>{children}</p>;
}
