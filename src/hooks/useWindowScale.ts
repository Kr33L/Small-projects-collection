'use client';

import { useState, useEffect } from 'react';

export default function useWindowScale() {
	const [scale, setScale] = useState(1.6);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			const ratio = (width <= 1024 && (width / 1024) * 1.6) || 1.6;
			setScale(ratio);
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize);
			handleResize();

			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);

	return scale;
}
