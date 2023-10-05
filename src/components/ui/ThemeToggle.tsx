'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { MoonIcon, DesktopIcon, SunIcon } from '@radix-ui/react-icons';
import useMounted from '@/hooks/useMounted';
import Wrapper from './Wrapper';
import clsx from 'clsx';

export default function ThemeToggle({ className }: { className?: string }) {
	const mounted = useMounted();
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setTheme(theme);
	}, [setTheme, theme]);

	if (!mounted) return null; // SSR
	return (
		<Wrapper className={className}>
			{['light', 'system', 'dark'].map((mode) => (
				<button
					key={mode}
					title={{ light: 'Light theme', system: 'System theme', dark: 'Dark theme' }[mode]}
					onClick={() => setTheme(mode)}
					className={clsx(
						theme == mode ? 'bg-secondary drop-shadow-2xl' : 'bg-background',
						'border-b border-accent p-1 duration-0 after:absolute after:bottom-0 after:left-0 after:right-0 after:bg-accent hover:shadow-lg hover:after:h-px active:shadow-inner sm:relative',
					)}>
					{{ light: <SunIcon />, system: <DesktopIcon />, dark: <MoonIcon /> }[mode]}
				</button>
			))}
		</Wrapper>
	);
}
