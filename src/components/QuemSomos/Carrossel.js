import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import quem01 from '../../assets/images/quem01.png';
import quem02 from '../../assets/images/quem02.png';
import quem03 from '../../assets/images/quem03.png';
import quem04 from '../../assets/images/quem04.png';
import quem05 from '../../assets/images/quem05.png';

export default function CarrosselContato() {
  const altTxt = 'Ilustrações de contato';
  const images = [
    { src: quem01, alt: altTxt },
    { src: quem02, alt: altTxt },
    { src: quem03, alt: altTxt },
    { src: quem04, alt: altTxt },
    { src: quem05, alt: altTxt },
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
