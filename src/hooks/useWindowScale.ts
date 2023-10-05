'use client';

import { useState, useEffect } from 'react';

export default function useWindowScale(parentWidth: number, desiredRatio: number) {
	const [scale, setScale] = useState(1.6);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			const ratio = (width <= parentWidth && (width / parentWidth) * desiredRatio) || desiredRatio;
			setScale(ratio);
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize);
			handleResize();

			return () => window.removeEventListener('resize', handleResize);
		}
	}, [desiredRatio, parentWidth]);

	return scale;
}
