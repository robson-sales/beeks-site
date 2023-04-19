import { useEffect } from 'react';
import './style.css';
import pageNotFound from '../../assets/images/404.svg';

export default function NotFound() {
  useEffect(() => {
    document.title = 'beeks | Página não encontrada';
  }, []);

  return (
    <>
      <div className="nf-banner">
        <h2>Página não encontrada</h2>
        <div className="nf-banner-img">
          <img src={pageNotFound} alt="Ilustração de um robô com erro" />
        </div>
      </div>
    </>
  );
}
