'use client';

import { useState, useEffect } from 'react';

const breakpoints = [375, 768, 1024];

export default function useWindowScale() {
	const [scale, setScale] = useState(1);

	useEffect(() => {
		const windowChecks = {
			itExists: typeof window !== 'undefined',
			isMobile: window.innerWidth <= breakpoints[2],
		};

		const handleResize = () => {
			if (windowChecks.isMobile) return setScale(() => window.innerWidth / breakpoints[0]);
			return setScale(() => window.innerWidth / breakpoints[1]);
		};

		if (windowChecks.itExists) {
			window.addEventListener('resize', handleResize);
			handleResize();
			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);

	return scale;
}
