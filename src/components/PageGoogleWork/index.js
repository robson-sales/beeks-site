import { useNavigate } from 'react-router-dom';
import 'react-gallery-carousel/dist/index.css';
import CarrosselGw from './Carrossel';
import './style.css';

export default function Cloud() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contato');
  };

  return (
    <>
      <div className="cloud-container">
        <div className="cloud-img">
          <CarrosselGw />
        </div>
        <div className="cloud-txt">
          <h2>Google Workplace: o futuro já chegou</h2>
          <p>
            A beeks está pronta para ajudar a sua empresa a dar um salto na
            produtividade com o Google Workplace! Com essa poderosa suíte de
            ferramentas colaborativas, você poderá aumentar a eficiência dos
            seus processos e colaborar de forma mais efetiva com sua equipe, não
            importa onde esteja.
          </p>
          <p>
            O Google Workplace é uma solução completa para comunicação,
            produtividade e colaboração em equipe. Com ele, você terá acesso a
            ferramentas como Gmail, Google Drive, Google Agenda, Google Meet e
            muitas outras, todas integradas de forma inteligente para maximizar
            a sua produtividade.
          </p>

          <p>Com o Google Workplace, você poderá:</p>

          <ul>
            <li>
              Criar e compartilhar documentos, planilhas e apresentações em
              tempo real, com acesso instantâneo a todas as atualizações e
              comentários;
            </li>
            <li>
              Colaborar com sua equipe em projetos, tarefas e calendários, com
              atualizações em tempo real e notificações de mudanças;
            </li>
            <li>
              Participar de reuniões virtuais com qualidade de vídeo e áudio em
              alta definição, independente da localização dos participantes;
            </li>
            <li>
              Gerenciar suas informações de contato, e-mails e tarefas em um só
              lugar, de forma segura e organizada.
            </li>
          </ul>
          <p>
            Não perca mais tempo com soluções desatualizadas e pouco eficientes.
            Fale agora mesmo com a beeks e comece a transformar a sua empresa
            com o Google Workplace!
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
