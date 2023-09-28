import '@/styles/globals.css';
import { M_PLUS_1_Code } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { Providers } from '@/components/Providers';

const font = M_PLUS_1_Code({ subsets: ['latin'] });

export const metadata = {
	title: 'Karol Olechno',
	description: "Karol Olechno's personal website showcasing his projects, skills and more.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<Providers attribute="class">
				<body className={`${font.className} m-auto max-w-screen-md bg-blue-50 `}>
					<Navbar />
					<div className="shadow-inset bg-white">{children}</div>
				</body>
			</Providers>
		</html>
	);
}
