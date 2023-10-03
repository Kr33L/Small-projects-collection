import Wrapper from '@/components/ui/Wrapper';
import Resume from '@/components/content/Resume';

export const metadata = {
	title: 'Karol Olechno | Resume ',
	description: "Karol Olechno's resume page, here you can find his resume.",
};

export default function ResumePage() {
	return (
		<>
			<Wrapper>
				<p className="text-center">
					Download&nbsp;
					<a href="/Karol_Olechno_resume.pdf" download="Karol_Olechno_resume">
						<span className="text-accent underline hover:text-secondary">
							here
						</span>
						!
					</a>
				</p>
			</Wrapper>
			<Resume />
		</>
	);
}
