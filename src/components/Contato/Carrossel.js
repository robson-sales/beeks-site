import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import contact1 from '../../assets/images/contact01.webp';
import contact2 from '../../assets/images/contact02.webp';
import contact3 from '../../assets/images/contact03.webp';
import contact4 from '../../assets/images/contact04.webp';
import contact5 from '../../assets/images/contact05.webp';

export default function CarrosselContato() {
  const altTxt = 'Ilustrações de contato';
  const images = [
    { src: contact1, alt: altTxt },
    { src: contact2, alt: altTxt },
    { src: contact3, alt: altTxt },
    { src: contact4, alt: altTxt },
    { src: contact5, alt: altTxt },
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
