'use client';

import { useState, useEffect } from 'react';

export default function useWindowScale(baseWidth = 750) {
	const [scale, setScale] = useState(null);

	useEffect(() => {
		if (typeof window === 'undefined') return 1;

		setScale(window.innerWidth / baseWidth);

		const handleResize = () => {
			setScale(window.innerWidth / baseWidth);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [baseWidth]);

	return scale;
}
