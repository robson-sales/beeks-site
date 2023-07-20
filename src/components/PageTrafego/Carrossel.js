import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import email1 from '../../assets/images/trafego1.jpg';
import email2 from '../../assets/images/trafego2.jpg';
import email3 from '../../assets/images/trafego3.jpg';
import email4 from '../../assets/images/trafego4.jpg';

export default function CarrosselTrafego() {
  const altTxt = 'Ilustrações de gestão de tráfego';
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
