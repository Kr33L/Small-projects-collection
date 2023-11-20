'use client';

//REDUNDANT - USED FOR DISPLAYING PDF IN CANVAS ON PAGE

import { useState, useEffect } from 'react';

type WindowScaleParams = {
	parentWidth: number;
	desiredRatio?: number;
};

export default function useWindowScale({ parentWidth, desiredRatio }: WindowScaleParams) {
	const [scale, setScale] = useState(desiredRatio || 1.6);

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
