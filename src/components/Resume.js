'use client';

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import styles from './styles/Resume.module.scss';

import { Document, Page, pdfjs } from 'react-pdf';
import useWindowScale from '@/hooks/useWindowScale';

export default function Resume() {
	const scale = useWindowScale();

	pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

	return (
		<div>
			<Document file="/Karol_Olechno_resume.pdf">
				<Page className={styles.page} pageNumber={1} scale={scale} />
			</Document>
		</div>
	);
}
