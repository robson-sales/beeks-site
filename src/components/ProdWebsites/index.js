import { useNavigate } from 'react-router-dom';
import 'react-gallery-carousel/dist/index.css';
import CarrosselContato from './Carrossel';
import './style.css';

export default function Websites() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contato');
  };

  return (
    <>
      <div className="site-container">
        <div className="site-img">
          <CarrosselContato />
        </div>
        <div className="site-txt">
          <h2>Porque eu deveria ter um website?</h2>
          <p>
            Um website é uma ferramenta essencial para qualquer empresa nos dias
            de hoje. Além de fornecer uma presença online, um site pode oferecer
            diversas vantagens competitivas.
          </p>
          <p>
            É a primeira impressão que um potencial cliente terá da sua empresa.
            Um site bem projetado e com conteúdo relevante pode inspirar
            confiança e credibilidade, o que pode levar a mais negócios.
          </p>
          <p>
            Ele permite que sua empresa alcance um público maior, mesmo além da
            sua localização geográfica. Isso pode aumentar suas chances de
            atrair novos clientes e expandir seus negócios.
          </p>
          <p>
            Também pode oferecer uma plataforma para que você possa se comunicar
            com seus clientes, fornecer suporte ao cliente e receber feedback
            valioso sobre seus produtos e serviços.
          </p>
          <p>
            Outra vantagem competitiva é a capacidade de oferecer vendas online,
            o que pode ampliar ainda mais o alcance da sua empresa e permitir
            que você atinja um público maior.
          </p>
          <p>
            Em resumo, um website é uma ferramenta importante para qualquer
            empresa que busca crescer e expandir seus negócios.
          </p>
          <p>
            Ele pode fornecer uma presença online confiável e profissional, além
            de oferecer diversas vantagens competitivas, como maior alcance,
            comunicação com clientes, vendas online e muito mais.
          </p>
          <button
            type="submit"
            onClick={handleContact}
            className="button-action"
          >
            Fale com a gente
          </button>
        </div>
      </div>
    </>
  );
}
