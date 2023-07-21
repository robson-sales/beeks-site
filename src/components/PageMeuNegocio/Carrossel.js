import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import meuNegocio0 from '../../assets/images/meunegocio1.png';
import meuNegocio1 from '../../assets/images/meunegocio2.png';
import meuNegocio2 from '../../assets/images/meunegocio3.png';

export default function CarrosselMeuNegocio() {
  const altTxt = 'Ilustrações de Meu Negócio';
  const images = [
    { src: meuNegocio0, alt: altTxt },
    { src: meuNegocio1, alt: altTxt },
    { src: meuNegocio2, alt: altTxt },
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
