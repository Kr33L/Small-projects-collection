import Resume from '@/components/Resume';
export default function ResumePage() {
	return (
		<div className="flex flex-col justify-center bg-blue-200">
			<div
				className="mx-auto my-4 bg-white px-6 text-center shadow-inner" //TODO: make this text not take up the whole page width and be centered
			>
				Download my resume&nbsp;
				<a
					href="/Karol_Olechno_resume.pdf"
					className="text-blue-500 underline hover:text-black"
					download="Karol_Olechno_resume">
					here!
				</a>
			</div>
			<div className="flex justify-center">
				<Resume />
			</div>
		</div>
	);
}
