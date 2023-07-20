import { useEffect } from 'react';
import 'react-gallery-carousel/dist/index.css';
import CarrosselMetaAds from './Carrossel';
import './style.css';

export default function MetaAds() {
  useEffect(() => {
    document.title = 'beeks | MetaAds';
  }, []);

  return (
    <>
      <div className="email-container">
        <div className="email-img">
          <CarrosselMetaAds />
        </div>
        <div className="email-txt">
          <h2>MetaAds</h2>
          <p>Lorem ipsum dolor</p>
        </div>
      </div>
    </>
  );
}
