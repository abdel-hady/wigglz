'use client';

import { Accordion, AccordionTab } from 'primereact/accordion';
import React from 'react';
import '../../assets/css/accordion.css';

interface Tab {
	header: React.ReactNode;
	body: React.ReactNode;
}

interface CustomAccordionProps {
	tabs: Tab[];
}

export default function CustomAccordion({ tabs }: CustomAccordionProps) {
	return (
		<Accordion className="accordion bg-unset">
			{tabs.map((tab) => (
				<AccordionTab
					className="custom_accordion_card"
					header={tab.header}
				>
					{tab.body}
				</AccordionTab>
			))}
		</Accordion>
	);
}
