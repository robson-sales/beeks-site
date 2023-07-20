import { useEffect } from 'react';
import 'react-gallery-carousel/dist/index.css';
import CarrosselTrafego from './Carrossel';
import './style.css';

export default function Trafego() {
  useEffect(() => {
    document.title = 'beeks | Gestão de tráfego';
  }, []);

  return (
    <>
      <div className="email-container">
        <div className="email-img">
          <CarrosselTrafego />
        </div>
        <div className="email-txt">
          <h2>Gestão de tráfego</h2>
          <p>
            A Gestão de Tráfego Pago é o conjunto de estratégias para anunciar
            em plataformas online, como Google Ads e outras. Aumentando a
            visibilidade da sua marca e atraindo visitantes qualificados para o
            seu site, gerando mais oportunidades de conversão.
          </p>
          <p>
            Maior Visibilidade: Através de anúncios segmentados, sua marca ganha
            mais destaque na internet, alcançando potenciais clientes.
          </p>
          <p>
            Segmentação do Público: Utilizamos recursos avançados para atingir
            as pessoas certas, no momento adequado, aumentando a eficácia das
            campanhas.
          </p>
          <p>
            Resultados Mensuráveis: Monitoramos o desempenho em tempo real,
            otimizando estratégias para melhorar o retorno sobre o investimento.
          </p>
          <p>
            Aumento de Conversões: Com anúncios direcionados, suas chances de
            conversão são ampliadas, impulsionando o crescimento do seu negócio.
          </p>
          <p>
            Nossa equipe é certificada pela Google Ads, garantindo estratégias
            atualizadas e resultados comprovados. Trabalhamos para maximizar o
            retorno sobre o investimento, com transparência e relatórios
            detalhados.
          </p>
          <p>
            Aumente a visibilidade, atraia o público certo e converta mais
            clientes com a gente.
          </p>
        </div>
      </div>
    </>
  );
}
