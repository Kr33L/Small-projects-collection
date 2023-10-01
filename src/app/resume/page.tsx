import Wrapper from '@/components/ui/Wrapper';

import Resume from '@/components/Resume';
import Paragraph from '@/components/ui/Paragraph';

export default function ResumePage() {
	return (
		<>
			<Paragraph>
				Download my resume&nbsp;
				<a href="/Karol_Olechno_resume.pdf" download="Karol_Olechno_resume">
					<span className="text-accent underline hover:text-primary">
						here!
					</span>
				</a>
			</Paragraph>
			<Wrapper className="flex h-full w-full justify-center">
				<Resume />
			</Wrapper>
		</>
	);
}
