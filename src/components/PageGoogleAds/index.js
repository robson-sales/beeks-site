import { useEffect } from 'react';
import 'react-gallery-carousel/dist/index.css';
import CarrosselTrafego from './Carrossel';
import './style.css';

export default function GoogleAds() {
  useEffect(() => {
    document.title = 'beeks | Google Ads';
  }, []);

  return (
    <>
      <div className="email-container">
        <div className="email-img">
          <CarrosselTrafego />
        </div>
        <div className="email-txt">
          <h2>Google Ads</h2>
          <p>
            O Google Ads é uma plataforma de publicidade online desenvolvida
            pelo Google, permitindo que empresas promovam produtos, serviços e
            marcas por meio de anúncios em várias plataformas da empresa.
            Benefícios das campanhas patrocinadas no Google Ads:
          </p>

          <ul>
            <li>
              Alcance Segmentado: Direcione anúncios para o público certo, com
              base em interesses, localização e palavras-chave.
            </li>
            <li>
              Controle de Orçamento: Defina limites diários ou mensais de
              gastos, garantindo controle total do investimento.
            </li>
            <li>
              Medição de Resultados: Acompanhe métricas em tempo real para
              otimizar desempenho e retorno sobre o investimento.
            </li>
            <li>
              Agilidade e Rapidez: Lance campanhas rapidamente, respondendo a
              oportunidades momentâneas do mercado.
            </li>
            <li>
              Diversos Formatos de Anúncio: Utilize anúncios de texto, imagem,
              vídeo e interativos para maior engajamento.
            </li>
            <li>
              Visibilidade e Reconhecimento: Alcance destaque nos resultados de
              pesquisa, aumentando a confiança e autoridade da marca.
            </li>
            <li>
              Aumento da Credibilidade: Anúncios patrocinados conferem maior
              confiabilidade aos olhos dos usuários.
            </li>
            <li>
              Flexibilidade e Otimização: Realize ajustes contínuos para
              melhorar o desempenho das campanhas.
            </li>
            <li>
              Compatibilidade Móvel: Alcance também o público mobile, essencial
              nos dias de hoje.
            </li>
          </ul>

          <p>
            Aproveite todos os benefícios oferecidos pelas campanhas
            patrocinadas no Google Ads e impulsione o sucesso do seu negócio
            online. Conte com a beeks para gestão de tráfego otimizado para suas
            campanhas, alcance resultados sólidos e eleve sua presença no
            mercado. Entre em contato conosco com a gente!{' '}
          </p>
        </div>
      </div>
    </>
  );
}
