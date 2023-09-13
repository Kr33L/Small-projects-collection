'use client';

import React, { useState } from 'react';
import Button from './Button';

export function Resume() {
	const [open, isOpen] = useState(false);

	return open ? (
		<>
			<Button onClick={() => isOpen(false)}>Fold my resume</Button>
			<div className="flex justify-center">
				<iframe
					className="container h-screen w-full"
					src="/Karol_Olechno_resume.pdf"
				/>
			</div>
		</>
	) : (
		<Button onClick={() => isOpen(true)}>Unfold my resume</Button>
	);
}

export function Download() {
	return (
		<div className="py-4 text-center">
			<span> Download my resume&nbsp;</span>
			<a
				href="/Karol_Olechno_resume.pdf"
				className="text-blue-500 underline hover:text-black"
				download="Karol_Olechno_resume">
				here!
			</a>
		</div>
	);
}
