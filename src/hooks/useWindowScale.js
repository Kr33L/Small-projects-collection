import { useState, useEffect } from 'react';

export default function useWindowScale(baseWidth = 750) {
	const [scale, setScale] = useState(window.innerWidth / baseWidth);

	useEffect(() => {
		const handleResize = () => {
			setScale(window.innerWidth / baseWidth);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [baseWidth]);

	return scale;
}
