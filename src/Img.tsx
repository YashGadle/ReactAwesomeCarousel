import React from 'react';

import classnames from 'classnames';

interface Props {
	url: string;
	index: number;
	width: string | number;
	height: string | number;
}

export const Img: React.FC<Props> = props => {
	const [imageType, setImageType] = React.useState('landscape');
	const { url, width, height, index } = props;

	const addObserver = (img: HTMLImageElement) => {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach(entry => {
					// console.log(entry);
					const x = document.getElementById(
						'image-container-' + index
					);
					if (entry.isIntersecting) {
						img.style.opacity = '1';
						// if (img.naturalWidth > img.naturalHeight)
						// 	x.style.width = '800px';
						// else x.style.height = '650px';
						if (img.naturalWidth < img.naturalHeight)
							x.style.transform = 'scale(1)';
						else x.style.transform = 'scale(1.2)';
					} else {
						img.style.opacity = '0.5';
						// if (img.naturalWidth > img.naturalHeight)
						// 	x.style.width = '600px';
						// else x.style.height = '600px';
						if (img.naturalWidth < img.naturalHeight)
							x.style.transform = 'scale(0.8)';
						else x.style.transform = 'scale(0.9)';
					}
				});
			},
			{
				root: document.querySelector('#carousel'),
				rootMargin: '0px',
				threshold: 0.9
			}
		);

		observer.observe(img);
	};

	return (
		<div
			id={'image-container-' + index}
			className={classnames({
				'carousel-image-portrait': imageType === 'portrait',
				'carousel-image-landscape': imageType === 'landscape'
			})}
			style={{
				width: imageType === 'landscape' ? width : 'fit-content',
				height: imageType === 'portrait' ? height : 'fit-content'
			}}
		>
			<img
				id={'img'}
				src={url}
				style={{ opacity: 0.5, transition: '0.5s opacity' }}
				onLoad={e => {
					const {
						naturalHeight,
						naturalWidth
					} = e.target as HTMLImageElement;
					if (naturalWidth < naturalHeight) setImageType('portrait');
					else setImageType('landscape');

					addObserver(e.target as HTMLImageElement);
				}}
			/>
		</div>
	);
};
