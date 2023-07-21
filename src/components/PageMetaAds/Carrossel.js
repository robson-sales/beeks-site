import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import metaAds0 from '../../assets/images/metaads1.png';
import metaAds1 from '../../assets/images/metaads2.png';
import metaAds2 from '../../assets/images/metaads3.png';

export default function CarrosselMetaAds() {
  const altTxt = 'Ilustrações de Meu Negócio';
  const images = [
    { src: metaAds0, alt: altTxt },
    { src: metaAds1, alt: altTxt },
    { src: metaAds2, alt: altTxt },
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
