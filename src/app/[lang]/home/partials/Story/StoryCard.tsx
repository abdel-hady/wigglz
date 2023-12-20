import React from 'react';

interface StoryComponentProps {
	name: string;
	description: string;
	image: string;
}
function OrangeDivider() {
	return (
		<div
			className="orange_line my-2"
			style={{
				width: '25%', minWidth: '90px', height: '3px', backgroundColor: '#F5B2A1',
			}}
		/>
	);
}
export default function StoryCard({
	name, description, image,
}: StoryComponentProps) {
	return (
		<div className="col-12 gap-2">
			<div className="one_video_testimonial py-3" data-toggle="modal" data-src="https://player.vimeo.com/video/698527002" data-isrc="https://i.vimeocdn.com/video/1412521142-d88875a0dd586b0bd8f984d802e8f2709f04888b9a18e0cefc8a811525928393-d_800x800" data-target="#videoTestimonialModal">
				<div>
					<div className="ratio ratio-1x1 position-relative">
						<img loading="lazy" src={image} alt="Caroline Stanbury" className="h-100" style={{ objectFit: 'cover' }} />
						<div className="position-absolute h-100 w-100 d-flex justify-content-center align-items-center white_play_icon" style={{ top: 0, left: 0 }}>
							<img src="https://media.furchildpets.com/images/play_button_vimeo.svg?v2" alt="Caroline Stanbury" style={{ width: '25%' }} />
						</div>
						<div className="position-absolute h-100 w-100 d-flex justify-content-center align-items-center orange_play_icon" style={{ top: 0, left: 0, opacity: 0 }}>
							<img src="https://media.furchildpets.com/images/play_button_vimeo_orange.svg?v2" alt="Caroline Stanbury" style={{ width: '25%' }} />
						</div>
					</div>
				</div>
				<div className="flex-column px-3">
					<div className="text_description subtitle pt-3">{description}</div>
					<OrangeDivider />
					<div className="testimonial_name">{name}</div>
				</div>
			</div>
		</div>
	);
}
