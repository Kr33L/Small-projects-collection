'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { CheckIcon } from '@radix-ui/react-icons';

export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
		setTheme(theme);
	}, [theme]);

	if (!mounted) return null;
	return (
		<>
			<span>The current theme is: {theme}</span>
			{['light', 'dark'].map((mode) => (
				<button
					key={mode}
					onClick={() => setTheme(mode)}
					className="hover:underline">
					<span>{mode} mode</span>
					{mode === theme && <CheckIcon className="inline" />}
				</button>
			))}
		</>
	);
}
