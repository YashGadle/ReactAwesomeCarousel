import React from 'react';

import img1 from './res/img1.jpg';
import img2 from './res/img2.jpg';
import img3 from './res/img3.jpg';
import img4 from './res/img4.jpg';
import img5 from './res/img5.jpg';
import img6 from './res/img6.jpg';
import img7 from './res/img7.jpg';

import { Img } from './Img';

import './App.scss';

const images = [null, img7, img1, img2, img3, img4, img5, img6, null];

const App: React.FC = () => {
	return (
		<div id="carousel" className="Carousel">
			{images.map((image, index) =>
				image ? (
					<Img
						key={image}
						url={image}
						width={600}
						height={600}
						index={index}
					/>
				) : (
					<div
						key={index}
						style={{
							minWidth: '20rem',
							height: 400,
							position: 'relative'
						}}
					></div>
				)
			)}
		</div>
	);
};

export default App;
