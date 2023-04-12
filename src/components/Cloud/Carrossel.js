import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import cloud00 from '../../assets/images/cloud00.jpg';
import cloud01 from '../../assets/images/cloud01.jpg';
import cloud02 from '../../assets/images/cloud02.jpg';
import cloud03 from '../../assets/images/cloud03.jpg';

export default function CarrosselCloud() {
  const altTxt = 'Soluções Cloud';
  const images = [
    { src: cloud00, alt: altTxt },
    { src: cloud01, alt: altTxt },
    { src: cloud02, alt: altTxt },
    { src: cloud03, alt: altTxt },
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
