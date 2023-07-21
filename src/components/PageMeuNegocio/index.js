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
          <p>
            O Google Meu Negócio é uma poderosa ferramenta oferecida pelo Google
            que permite que empresas locais aumentem sua visibilidade na
            internet. Ao criar um perfil no Google Meu Negócio, você pode
            fornecer informações essenciais sobre sua empresa, como horário de
            funcionamento, endereço, telefone e site. Você também pode adicionar
            fotos, responder a avaliações e interagir com seus clientes.
          </p>
          <p>
            Ele coloca sua empresa no mapa literalmente! Quando as pessoas
            procuram produtos ou serviços relacionados ao seu negócio na
            Pesquisa Google ou no Google Maps, seu perfil aparece entre os
            resultados, aumentando sua exposição.
          </p>
          <p>
            Ele também aumenta a confiança dos clientes. Ao ver informações
            detalhadas sobre sua empresa, fotos do local e avaliações positivas
            de outros clientes, as pessoas se sentem mais confortáveis em
            visitar ou entrar em contato com você.
          </p>
          <p>
            O Google Meu Negócio facilita o engajamento com seus clientes. Você
            pode responder a perguntas, agradecer avaliações positivas e
            resolver problemas, mostrando que se importa com a satisfação dos
            seus consumidores.
          </p>
          <p>
            Implementar o Google Meu Negócio é uma oportunidade única para sua
            empresa alcançar um público mais amplo, conquistar novos clientes e
            construir uma presença digital sólida. Se você deseja melhorar sua
            visibilidade online, aumentar suas vendas e criar uma conexão mais
            próxima com seus clientes. Não perca tempo, fale com a gente!
          </p>
        </div>
      </div>
    </>
  );
}
