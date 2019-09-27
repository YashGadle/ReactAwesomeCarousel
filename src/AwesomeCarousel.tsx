import React from 'react';

import { Img } from './Img';

interface Props {
	images: string[];
	imageWidth: number;
	imageHeight: number;
}

const Carousel: React.FC<Props> = props => {
	const [support, setSupport] = React.useState(true);
	const { images, imageHeight, imageWidth } = props;

	React.useEffect(() => {
		if ('IntersectionObserver' in window) {
			setSupport(true);
		} else {
			setSupport(false);
		}
	}, []);

	return support ? (
		<div id="carousel" className="Carousel">
			{[null, ...images, null].map((image, index) =>
				image ? (
					<Img
						key={image}
						url={image}
						width={imageWidth}
						height={imageHeight}
						index={index}
					/>
				) : (
					<div
						key={index}
						style={{
							minWidth: '20rem',
							height: imageHeight,
							position: 'relative'
						}}
					></div>
				)
			)}
		</div>
	) : (
		<strong>Unsupported API - 'IntersectionObserver'</strong>
	);
};

export default Carousel;
