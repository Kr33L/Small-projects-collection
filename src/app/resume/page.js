export default function Resume() {
	return (
		<div className="flex justify-center">
			<span> Download my resume&nbsp;</span>
			<a
				href="/Karol_Olechno_resume.pdf"
				className="underline"
				download="Karol_Olechno_resume">
				here!
			</a>
			<iframe
				className="container h-screen w-full"
				src="/Karol_Olechno_resume.pdf"
			/>
		</div>
	);
}
