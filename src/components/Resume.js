'use client';

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import useWindowScale from '@/hooks/useWindowScale';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.js',
	import.meta.url,
).toString();

export default function Resume() {
	const [isOpen, setIsOpen] = useState(false);
	const scale = useWindowScale();

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
					onClick={() => setIsOpen(!isOpen)}>
					here
				</button>
				&nbsp;to view my resume!
			</div>
			{isOpen && (
				<>
					<Document className="shadow-lg" file="/Karol_Olechno_resume.pdf">
						<Page pageNumber={1} scale={scale} />
					</Document>
				</>
			)}
		</div>
	);
}
