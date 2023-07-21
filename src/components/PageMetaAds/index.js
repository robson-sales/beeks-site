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
          <p>
            Aumente seus resultados com a poderosa ferramenta de publicidade da
            Meta, abrangendo redes sociais populares como Facebook, Instagram e
            WhatsApp. Com segmentação precisa, alcance amplo e formatos
            envolventes de anúncios, você pode impulsionar sua marca e alcançar
            novos clientes.
          </p>
          <p>
            Com recursos avançados de segmentação, permite direcionar anúncios
            para públicos específicos, maximizando o retorno sobre o
            investimento. Sua ampla rede de alcance inclui várias plataformas,
            aumentando a visibilidade da marca.
          </p>
          <p>
            Com formatos de anúncios envolventes, como vídeo, carrosséis e
            histórias, é possível criar experiências personalizadas para os
            usuários, aumentando o interesse em produtos ou serviços.
          </p>
          <p>
            Implemente o Meta Ads em sua empresa e experimente um novo nível de
            sucesso no marketing digital. Entre em contato conosco agora mesmo!
          </p>
        </div>
      </div>
    </>
  );
}
