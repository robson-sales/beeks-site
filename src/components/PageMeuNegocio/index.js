import { useEffect } from 'react';
import 'react-gallery-carousel/dist/index.css';
import CarrosselMeuNegocio from './Carrossel';
import './style.css';

export default function GoogleMeuNegocio() {
  useEffect(() => {
    document.title = 'beeks | Google Meu Negócio';
  }, []);

  return (
    <>
      <div className="email-container">
        <div className="email-img">
          <CarrosselMeuNegocio />
        </div>
        <div className="email-txt">
          <h2>Google Meu Negócio</h2>
          <p>Lorem ipsum dolor</p>
        </div>
      </div>
    </>
  );
}
