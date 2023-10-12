import './globals.css';
import { M_PLUS_1_Code } from 'next/font/google';
import { clsx } from 'clsx';

import ThemeProvider from '@/lib/ThemeProvider';
import Navbar from '@/components/ui/Navbar';
import ThemeToggle from '@/components/ui/ThemeToggle';

const font = M_PLUS_1_Code({ subsets: ['latin'] });

export const metadata = {
	title: 'Karol Olechno ',
	description: "Karol Olechno's personal website showcasing his projects, skills and more.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={clsx(font.className, 'text-md min-h-screen bg-background text-text transition-all duration-300')}>
				<ThemeProvider attribute="class">
					<div className="mx-auto min-h-screen max-w-screen-lg border-x border-accent">
						<ThemeToggle className="fixed top-0 z-50 flex flex-col sm:-translate-x-8 sm:translate-y-2" />
						<Navbar className="fixed bottom-0 left-1/2 flex w-11/12 -translate-x-1/2 transform items-center justify-between sm:relative sm:w-4/5" />
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
