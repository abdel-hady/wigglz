import React from 'react';

interface CustomButtonProps {
	text: string;
}
function CustomButton({ text }: CustomButtonProps) {
	return (
		<button type="button" className="btn btn-primary">
			{text}
		</button>
	);
}

export default CustomButton;
