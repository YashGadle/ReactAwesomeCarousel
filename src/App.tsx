import React from 'react';

import img1 from './res/img1.jpg';
import img2 from './res/img2.jpg';
import img3 from './res/img3.jpg';
import img4 from './res/img4.jpg';
import img5 from './res/img5.jpg';
import img6 from './res/img6.jpg';
import img7 from './res/img7.jpg';

import Carousel from './AwesomeCarousel';
// import { Carousel } from 'react-carousel-gallery';

import './styles.css';

const images = [img7, img1, img2, img3, img4, img5, img6];
// const images = [
// 	'https://wallpaperaccess.com/full/32819.jpg',
// 	'https://i.pinimg.com/originals/ec/bb/9f/ecbb9fd1619bbb263e50f59ae9cf1a81.jpg',
// 	'https://mspoweruser.com/wp-content/uploads/2018/10/surfacestudio2-large.jpg',
// 	'https://recoverit.wondershare.com/images/article/02/cool-wallpapers-for-android-phones-10.jpg',
// 	'https://stmed.net/sites/default/files/cool-wallpapers-25185-977077.jpg'
// ];

const App: React.FC = () => {
	return (
		<div style={{ display: 'flex', height: '100vh' }}>
			<Carousel images={images} imageHeight={600} imageWidth={600} />
		</div>
	);
};

export default App;
