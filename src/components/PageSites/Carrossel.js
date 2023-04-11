import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import site1 from '../../assets/images/site01.webp';
import site2 from '../../assets/images/site02.webp';
import site3 from '../../assets/images/site03.webp';
import site4 from '../../assets/images/site04.webp';
import site5 from '../../assets/images/site05.webp';
import site6 from '../../assets/images/site06.webp';

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
