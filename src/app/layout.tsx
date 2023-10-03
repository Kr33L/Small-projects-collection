import './globals.css';
import { M_PLUS_1_Code } from 'next/font/google';
import { clsx } from 'clsx';

import ThemeProvider from '@/lib/ThemeProvider';
import Wrapper from '@/components/ui/Wrapper';
import Navbar from '@/components/ui/Navbar';
import ThemeToggle from '@/components/ui/ThemeToggle';

const font = M_PLUS_1_Code({ subsets: ['latin'] });

export const metadata = {
	title: 'Karol Olechno ',
	description:
		"Karol Olechno's personal website showcasing his projects, skills and more.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning className="h-screen">
			<body
				className={clsx(
					font.className,
					'h-screen border border-accent bg-background text-xl text-text transition-all duration-100',
				)}>
				<ThemeProvider attribute="class">
					<Wrapper className="mx-auto my-auto h-full max-w-screen-lg border-x">
						<ThemeToggle className="fixed top-0 z-50 flex flex-col sm:-translate-x-12" />
						<Navbar />
						{children}
					</Wrapper>
				</ThemeProvider>
			</body>
		</html>
	);
}
