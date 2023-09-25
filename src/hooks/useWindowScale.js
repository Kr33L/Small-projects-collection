'use client';

import { useState, useEffect } from 'react';

const breakpoints = [375, 768, 1024];

export default function useWindowScale() {
	const [scale, setScale] = useState(1);

	useEffect(() => {
		const windowExists = typeof window !== 'undefined';
		const windowIsMobile = window.innerWidth <= breakpoints[2];

		const handleResize = () => {
			if (windowIsMobile) {
				setScale(() => window.innerWidth / breakpoints[0]);
			} else {
				setScale(() => window.innerWidth / breakpoints[1]);
			}
		};

		if (windowExists) {
			window.addEventListener('resize', handleResize);
			handleResize();
			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);

	return scale;
}
