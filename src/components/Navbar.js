import Link from 'next/link';

export default function Navbar() {
	return (
		<div className="flex justify-center sm:py-10">
			<nav className="container fixed flex h-16 justify-evenly bg-black py-4 text-white transition-all sm:top-2 sm:max-w-sm sm:rounded-xl sm:border-4 sm:border-green-400">
				<Link
					href="/"
					className="rounded-full transition-all hover:bg-zinc-700">
					Home
				</Link>
				<Link
					href="/projects"
					className=" rounded-full  transition-all hover:bg-zinc-700 hover:text-lg">
					Projects
				</Link>
				<Link
					href="/resume"
					className=" rounded-full transition-all hover:bg-zinc-700 hover:text-lg">
					Resume
				</Link>
			</nav>
		</div>
	);
}
