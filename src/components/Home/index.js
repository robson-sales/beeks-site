import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line object-curly-newline
import { BsInstagram, BsLinkedin, BsFacebook } from 'react-icons/bs';
import './style.css';

export default function Home() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contato');
  };

  useEffect(() => {
    document.title = 'beeks | Soluções Digitais';
  }, []);

  return (
    <>
      {/* Seção Banner */}
      <div className="banner">
        <div className="text-black">
          <h2>Seu negócio mais conhecido, com mais vendas e resultados</h2>
          <br />
          <h3>
            Criamos <strong>estratégias únicas</strong> para você alcançar as
            <strong> pessoas certas</strong>, na <strong>hora certa</strong> e{' '}
            <strong> maximizar</strong> suas <strong>vendas</strong> e{' '}
            <strong>resultados</strong> através{' '}
            <strong>gestão de tráfego pago</strong>.
          </h3>
          <br />
          <br />
          <button
            type="submit"
            onClick={handleContact}
            className="button-action"
          >
            Fale com o especialista
          </button>
        </div>
        <div className="image-right"></div>
      </div>
      {/* Seção Metodo */}
      <div className="metodo">
        <p>🥷🏼 Método</p>
        <h2>Como funciona</h2>
        <div className="metodo-cards">
          <div className="metodo-box">
            <h3>1. Análise do negócio</h3>
            <p>
              Analisamos o potencial digital do seu negócio para criar uma
              estratégia alinhada aos seus objetivos.
            </p>
          </div>
          <div className="metodo-box">
            <h3>2. Identificação de públicos</h3>
            <p>
              Detalhamento dos públicos ideais. Eles serão utilizados nas
              campanhas para maximizar o resultado.
            </p>
          </div>
          <div className="metodo-box">
            <h3>3. Estratégia de campanhas</h3>
            <p>
              Definimos estratégias e estruturas de campanhas e anúncios
              alinhadas aos seus objetivos.
            </p>
          </div>
          <div className="metodo-box">
            <h3>4. Análise de resultados</h3>
            <p>
              Campanhas no ar, monitoramos os indicadores e resultados.
              Entendemos o que está funcionando.
            </p>
          </div>
          <div className="metodo-box">
            <h3>5. Otimizações de campanhas</h3>
            <p>
              Ajustamos o que não funciona. Periodicamente otimizamos campanhas
              para mais resultado.
            </p>
          </div>
        </div>
      </div>
      {/* Seção Certificações */}
      <div className="bg-primary-color">
        <p>🏆 Diferenciais</p>
        <h2>Nossas Certificações</h2>
        <div className="bg-primary-color-cards">
          <div className="bg-primary-color-box gads"></div>
          <div className="bg-primary-color-box analytics"></div>
          <div className="bg-primary-color-box metaads"></div>
        </div>
      </div>
      {/* Seção Expert */}
      <div className="banner">
        <div className="image-expert"></div>
        <div className="text-black">
          <p>🤓 Especialista</p>
          <h2>Robson Sales</h2>
          <br />
          <h3>
            Tem mais de <strong>15 anos de experiência</strong> na área de{' '}
            <strong>tecnologia</strong>, sendo os últimos 7 dedicados a{' '}
            <strong>gestão de produtos</strong>. Durante esta jornada, aprendeu
            que <strong>bons produtos sem os usuários certos fracassam</strong>.
            E através da <strong>gestão de tráfego pago</strong> encontrou um
            meio para aumentar os resultados de produtos, serviços e negócios.
            <br />
            Experiência em <strong>Meta Ads</strong> e{' '}
            <strong>Google Ads</strong>.
          </h3>
          <br />
          <br />
          <button
            type="submit"
            onClick={handleContact}
            className="button-action"
          >
            Fale com o especialista
          </button>
        </div>
      </div>
      {/* Seção Onde estamos */}
      <div className="bg-primary-color">
        <h3>Onde estamos</h3>
        <div className="bg-prim-icons">
          <a
            href="https://www.instagram.com/somosbeeks/"
            target="_blank"
            rel="noreferrer"
            aria-label="Link para o perfil do Instagram da beeks"
          >
            <BsInstagram color="white" fontSize="30px" />
          </a>
          <a
            href="https://www.facebook.com/somosbeeks"
            target="_blank"
            rel="noreferrer"
            aria-label="Link para a página do Facebook da beeks"
          >
            <BsFacebook color="white" fontSize="30px" />
          </a>
          <a
            href="https://www.linkedin.com/company/somosbeeks/"
            target="_blank"
            rel="noreferrer"
            aria-label="Link para a página do LinkedIn da beeks"
          >
            <BsLinkedin color="white" fontSize="30px" />
          </a>
        </div>
        <div className="bg-prim-icons">
          <a
            href="mailto:contato@beeks.com.br"
            aria-label="E-mail de contato da beeks: contato@beeks.com.br"
          >
            ✉️ contato@beeks.com.br
          </a>
        </div>
      </div>
    </>
  );
}
