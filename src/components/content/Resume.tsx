'use client';

//REDUNDANT

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import { Document, Page, pdfjs } from 'react-pdf';
import useWindowScale from '@/hooks/useWindowScale';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Resume() {
	const scale = useWindowScale({ parentWidth: 1024, desiredRatio: 1.6 });

	return (
		<Document className="flex justify-center" file="/Karol_Olechno_resume.pdf">
			<Page pageNumber={1} scale={scale} />
		</Document>
	);
}
