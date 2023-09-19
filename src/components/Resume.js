'use client';

import { useState, useEffect, useRef } from 'react';
import * as pdfjs from 'pdfjs-dist';

export function Resume() {
	const [isOpen, setIsOpen] = useState(false);
	const canvasRef = useRef(null);

	const handlePdfConversion = async () => {
		pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
		const pdf = await pdfjs.getDocument('/Karol_Olechno_resume.pdf').promise;
		const page = await pdf.getPage(1);
		const viewport = page.getViewport({ scale: 1.5 });
		const canvas = canvasRef.current;

		if (canvas) {
			const context = canvas.getContext('2d');
			canvas.height = viewport.height;
			canvas.width = viewport.width;
			page.render({
				canvasContext: context,
				viewport,
			});
		}
	};

	const handleOpen = () => {
		if (!isOpen) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		handlePdfConversion();
	}, [isOpen]);

	return (
		<div className="container flex flex-col items-center">
			<div>
				Download my resume&nbsp;
				<a
					href="/Karol_Olechno_resume.pdf"
					className="text-blue-500 underline hover:text-black"
					download="Karol_Olechno_resume">
					here!
				</a>
			</div>
			<div>
				Click&nbsp;
				<button
					className="py-2 text-blue-500 underline hover:text-black"
					onClick={handleOpen}>
					here
				</button>
				&nbsp;to view my resume!
			</div>
			{isOpen && <canvas className="shadow-2xl" ref={canvasRef} />}
		</div>
	);
}
