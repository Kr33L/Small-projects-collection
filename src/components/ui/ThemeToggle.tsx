'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, DesktopIcon, SunIcon } from '@radix-ui/react-icons';
import useMounted from '@/hooks/useMounted';
import clsx from 'clsx';

type ThemeToggleParams = {
	className?: string;
};

export default function ThemeToggle({ className }: ThemeToggleParams) {
	const mounted = useMounted();
	const { theme, setTheme } = useTheme();

	const themes = [
		{ mode: 'light', name: 'Light Mode', icon: <SunIcon /> },
		{ mode: 'system', name: 'System Mode', icon: <DesktopIcon /> },
		{ mode: 'dark', name: 'Dark Mode', icon: <MoonIcon /> },
	];

	return mounted ? (
		<div className={className}>
			{themes.map(({ mode, name, icon }) => (
				<button
					key={mode}
					title={name}
					onClick={() => setTheme(mode)}
					className={clsx(
						theme == mode ? 'bg-secondary drop-shadow-2xl' : 'bg-background',
						'border-b border-accent p-1 duration-0 after:absolute after:bottom-0 after:left-0 after:right-0 after:bg-accent hover:shadow-lg hover:after:h-px active:shadow-inner sm:relative',
					)}>
					{icon}
				</button>
			))}
		</div>
	) : null;
}
