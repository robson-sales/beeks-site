import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import analytics0 from '../../assets/images/analytics1.png';
import analytics1 from '../../assets/images/analytics2.png';
import analytics2 from '../../assets/images/analytics3.png';

export default function CarrosselAnalytics() {
  const altTxt = 'Ilustrações de Analytics';
  const images = [
    { src: analytics0, alt: altTxt },
    { src: analytics1, alt: altTxt },
    { src: analytics2, alt: altTxt },
  ];

  return (
    <Carousel
      images={images}
      isAutoPlaying={true}
      autoPlayInterval={3000}
      hasThumbnails={false}
      hasSizeButton={false}
      hasIndexBoard={false}
    />
  );
}
