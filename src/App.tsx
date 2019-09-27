import React from 'react';

import img1 from './res/img1.jpg';
import img2 from './res/img2.jpg';
import img3 from './res/img3.jpg';
import img4 from './res/img4.jpg';
import img5 from './res/img5.jpg';
import img6 from './res/img6.jpg';
import img7 from './res/img7.jpg';
import img8 from './res/img8.jpg';

import Carousel from './AwesomeCarousel';

import './App.scss';

const images = [img7, img1, img2, img3, img4, img5, img6, img8];

const App: React.FC = () => {
	return <Carousel images={images} imageHeight={600} imageWidth={600} />;
};

export default App;
