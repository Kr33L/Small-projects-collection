'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import useMounted from '@/hooks/useMounted';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import Wrapper from './Wrapper';
import clsx from 'clsx';

export default function ThemeToggle({ className }: { className?: string }) {
	const mounted = useMounted();
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setTheme(theme);
	}, [setTheme, theme]);

	if (!mounted) return null;
	return (
		<Wrapper className={className}>
			{['light', 'dark'].map((mode) => (
				<button
					key={mode}
					onClick={() => setTheme(mode)}
					className={clsx(
						theme == mode && 'bg-secondary drop-shadow-2xl',
						theme != mode && 'bg-background',
						'border-b border-accent p-1 duration-0 after:absolute after:bottom-0 after:left-0 after:right-0 after:bg-accent hover:shadow-lg hover:after:h-px active:shadow-inner sm:relative',
					)}>
					{mode == 'light' ? (
						<SunIcon key={mode + 'icon'} className="w-full" />
					) : (
						<MoonIcon key={mode + 'icon'} className="w-full" />
					)}
				</button>
			))}
		</Wrapper>
	);
}
