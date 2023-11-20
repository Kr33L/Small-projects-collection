export const metadata = {
	title: 'Karol Olechno | Home',
	description: "Karol Olechno's personal website showcasing his projects, skills and more.",
};

export default function HomePage() {
	return (
		<p className="relative flex max-w-prose translate-y-1/2 flex-col text-2xl sm:translate-x-28 sm:translate-y-1/3">
			<span>
				My name is <span className="font-bold duration-1000">Karol.</span>
			</span>
			<span className="mt-8">I am based in</span>
			<span className="font-bold duration-1000"> West London.</span>
			<span className="mt-8">I make</span>
			<span className="font-mono font-bold duration-1000">pixel-perfect websites.</span>
		</p>
	);
}
