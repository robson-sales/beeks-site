import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
      <div className="banner">
        <div className="text-over-left">
          <h2>
            Coloque a tecnologia <br />
            para trabalhar a seu <br />
            favor e avance na <br />
            era digital <br /> <br />A parte nerd 🤓
            <br />é com a gente
          </h2>
          <br />
          <br />
          <button
            type="submit"
            onClick={handleContact}
            className="button-action"
          >
            Fale com a gente
          </button>
        </div>
      </div>
      <div className="funil">
        <h2>Soluções que ajudam sua empresa a crescer</h2>
        <div className="funil-cards">
          <div className="conhecimento funil-box">
            <h3>Conhecimento</h3>
            <p>Google Meu Negócio</p>
            <p>Google Ads </p>
            <p>Meta Ads</p>
          </div>
          <div className="consi-conver funil-box">
            <h3>Consideração / Conversão</h3>
            <p>Site responsivo</p>
            <p> E-mail personalizado</p>
          </div>
          <div className="ferramentas funil-box">
            <h3>Ferramentas</h3>
            <p>Google Analytics</p>
            <p>Google Workspace</p>
            <p>Cloud Computing</p>
          </div>
        </div>
      </div>
    </>
  );
}
