'use client';

import { useState, useEffect } from 'react';

export default function useWindowScale() {
	const [scale, setScale] = useState(2);

	useEffect(() => {
		const divideWidth = (width) => {
			return (window.innerWidth / width).toFixed(2);
		};
		const handleResize = () => {
			setScale(() => (window.innerWidth >= 1024 ? divideWidth(950) : divideWidth(700)));
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize);
			handleResize();

			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);

	// useEffect(() => {
	// 	console.log(`Window size: ${window.innerWidth} x ${window.innerHeight}`);
	// }, [scale]);

	// console.log(`Scale: ${scale}`);

	return scale;
}
