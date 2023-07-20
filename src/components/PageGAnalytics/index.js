import { useEffect } from 'react';
import 'react-gallery-carousel/dist/index.css';
import CarrosselAnalytics from './Carrossel';
import './style.css';

export default function GoogleAnalytics() {
  useEffect(() => {
    document.title = 'beeks | Google Analytics';
  }, []);

  return (
    <>
      <div className="email-container">
        <div className="email-img">
          <CarrosselAnalytics />
        </div>
        <div className="email-txt">
          <h2>Google Analytics</h2>
          <p>
            O Google Analytics é uma poderosa ferramenta de análise de dados
            fornecida pelo Google que permite acompanhar e compreender o
            desempenho do seu site. Com ele, é possível obter informações
            valiosas sobre o tráfego do site, o comportamento dos usuários e as
            ações realizadas por eles.{' '}
          </p>
          <p>
            Os benefícios do Google Analytics para o seu negócio são inúmeros.
            Em primeiro lugar, ele oferece insights detalhados sobre o
            público-alvo do seu site, permitindo entender quem são seus
            visitantes, de onde eles vêm e como interagem com o conteúdo. Isso
            possibilita ajustar sua estratégia para atender melhor às
            necessidades do seu público.{' '}
          </p>
          <p>
            Além disso, o Google Analytics auxilia no monitoramento do
            desempenho das suas campanhas de marketing digital. Com dados
            precisos sobre as fontes de tráfego e as conversões, você pode tomar
            decisões mais informadas sobre onde investir seus recursos de
            marketing para obter o melhor retorno sobre o investimento.{' '}
          </p>
          <p>
            Para maximizar o potencial do seu negócio, é essencial aproveitar
            todo o poder do Google Analytics. Conte com a nossa experiência e
            expertise para implementar e interpretar corretamente os dados, a
            fim de impulsionar o crescimento da sua empresa. Entre em contato
            conosco agora mesmo e descubra como o Google Analytics pode levar o
            seu negócio ao próximo nível!{' '}
          </p>
        </div>
      </div>
    </>
  );
}
