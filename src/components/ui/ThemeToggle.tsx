'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, DesktopIcon, SunIcon } from '@radix-ui/react-icons';
import useMounted from '@/hooks/useMounted';
import clsx from 'clsx';

export default function ThemeToggle({ className }: { className?: string }) {
	const mounted = useMounted();
	const { theme, setTheme } = useTheme();

	const themeMap = [
		{ mode: 'light', title: 'Light theme', icon: <SunIcon /> },
		{ mode: 'system', title: 'System theme', icon: <DesktopIcon /> },
		{ mode: 'dark', title: 'Dark theme', icon: <MoonIcon /> },
	];

	if (!mounted) return null; // SSR
	return (
		<div className={className}>
			{themeMap.map(({ mode, title, icon }) => (
				<button
					key={mode}
					title={title}
					onClick={() => setTheme(mode)}
					className={clsx(
						theme === mode ? 'bg-secondary drop-shadow-2xl' : 'bg-background',
						'border-b border-accent p-1 hover:border hover:shadow-lg hover:after:h-px active:shadow-inner sm:relative',
					)}>
					{icon}
				</button>
			))}
		</div>
	);
}
