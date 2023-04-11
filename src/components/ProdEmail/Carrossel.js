import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import email1 from '../../assets/images/email01.png';
import email2 from '../../assets/images/email02.png';
import email3 from '../../assets/images/email03.png';
import email4 from '../../assets/images/email04.png';

export default function CarrosselContato() {
  const altTxt = 'Ilustrações de e-mail';
  const images = [
    { src: email1, alt: altTxt },
    { src: email2, alt: altTxt },
    { src: email3, alt: altTxt },
    { src: email4, alt: altTxt },
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
