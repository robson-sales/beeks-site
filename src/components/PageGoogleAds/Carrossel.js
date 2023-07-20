import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import gads0 from '../../assets/images/gads0.png';
import gads1 from '../../assets/images/gads1.png';
import gads2 from '../../assets/images/gads2.png';
import gads3 from '../../assets/images/gads3.png';
import gads4 from '../../assets/images/gads4.png';
import gads5 from '../../assets/images/gads5.png';

export default function CarrosselTrafego() {
  const altTxt = 'Ilustrações de gestão de tráfego';
  const images = [
    { src: gads0, alt: altTxt },
    { src: gads1, alt: altTxt },
    { src: gads2, alt: altTxt },
    { src: gads3, alt: altTxt },
    { src: gads4, alt: altTxt },
    { src: gads5, alt: altTxt },
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
