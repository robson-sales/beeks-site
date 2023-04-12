import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import site1 from '../../assets/images/site01.jpg';
import site2 from '../../assets/images/site02.jpg';
import site3 from '../../assets/images/site03.jpg';
import site4 from '../../assets/images/site04.jpg';
import site5 from '../../assets/images/site05.jpg';
import site6 from '../../assets/images/site06.jpg';

export default function CarrosselContato() {
  const altTxt = 'Ilustrações de websites';
  const images = [
    { src: site1, alt: altTxt },
    { src: site2, alt: altTxt },
    { src: site3, alt: altTxt },
    { src: site4, alt: altTxt },
    { src: site5, alt: altTxt },
    { src: site6, alt: altTxt },
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
