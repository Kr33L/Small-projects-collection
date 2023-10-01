import './globals.css';
import { M_PLUS_1_Code } from 'next/font/google';
import { clsx } from 'clsx';

import ThemeProvider from '@/components/ThemeProvider';
import Wrapper from '@/components/ui/Wrapper';
import Navbar from '@/components/ui/Navbar';
import ThemeToggle from '@/components/ui/ThemeToggle';

const font = M_PLUS_1_Code({ subsets: ['latin'] });

export const metadata = {
	title: 'Karol Olechno',
	description:
		"Karol Olechno's personal website showcasing his projects, skills and more.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<ThemeProvider attribute="class">
				<body>
					<Wrapper
						className={clsx(
							font.className,
							'mx-auto max-w-screen-lg border bg-background text-text',
						)}>
						<Wrapper className="flex max-w-prose justify-between">
							<ThemeToggle />
						</Wrapper>
						<Wrapper className="w-full border bg-background">
							<Navbar />
						</Wrapper>
						<Wrapper>{children}</Wrapper>
					</Wrapper>
				</body>
			</ThemeProvider>
		</html>
	);
}
