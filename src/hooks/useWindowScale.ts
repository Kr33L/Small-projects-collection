'use client';

import { useState, useEffect } from 'react';

export default function useWindowScale() {
	const [scale, setScale] = useState(2);

	useEffect(() => {
		const divideWidth = (width: number): number => {
			return Number((document.body.clientWidth / width).toFixed(2));
		};
		const handleResize = () => {
			setScale(() =>
				document.body.clientWidth >= 1024
					? divideWidth(1500)
					: divideWidth(700),
			);
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize);
			handleResize();

			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);

	return scale;
}
