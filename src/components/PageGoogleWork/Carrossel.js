import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import gw01 from '../../assets/images/gw01.png';
import gw02 from '../../assets/images/gw02.png';
import gw03 from '../../assets/images/gw03.png';
import gw04 from '../../assets/images/gw04.png';

export default function CarrosselGw() {
  const altTxt = 'Google Workplace';
  const images = [
    { src: gw01, alt: altTxt },
    { src: gw02, alt: altTxt },
    { src: gw03, alt: altTxt },
    { src: gw04, alt: altTxt },
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
