import { useNavigate } from 'react-router-dom';
import '../../Styles/solutionStyle.css';
import workplace from '../../assets/images/google-workspace.webp';
import screen from '../../assets/images/workspace_motion_still.webp';
import illustration from '../../assets/images/google-workspace-illustration.webp';

export default function PageGW() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contato');
  };

  return (
    <>
      <div className="section-gw">
        <div className="section-gw-content">
          <div className="section-gw-content-img">
            <img src={workplace} alt="Logotipo do Google Workplace" />
          </div>
          <div className="section-gw-content-txt">
            <p>
              O Google Workplace é uma plataforma de produtividade e colaboração
              na nuvem que oferece um conjunto completo de ferramentas de
              comunicação, gerenciamento de documentos e organização de tarefas
              para empresas de todos os tamanhos. Anteriormente conhecido como G
              Suite, o Google Workplace oferece um conjunto de aplicativos que
              inclui Gmail, Google Drive, Google Agenda, Google Meet, Google
              Chat, Google Docs, Google Planilhas, Google Apresentações, Google
              Forms, entre outros.
            </p>
          </div>
        </div>
      </div>
      <div className="section-gw">
        <div className="section-gw-content">
          <div className="section-gw-content-img">
            <img src={screen} alt="Screenshot da tela inicial do Gmail" />
          </div>
          <div className="section-gw-content-txt">
            <p>
              Com o Google Workplace, as empresas podem potencializar seus
              negócios de diversas maneiras. Veja algumas das principais
              vantagens que ele oferecer:
            </p>
            <p>
              <strong>Aumento da produtividade:</strong> Com o Google Workplace,
              as pessoas podem colaborar em tempo real em documentos, planilhas
              e apresentações. Isso significa que é possível trabalhar em equipe
              de forma mais eficiente e reduzir o tempo gasto em trocas de
              e-mails e reuniões presenciais.
            </p>

            <p>
              <strong>Melhoria na comunicação:</strong> O Google Workplace
              oferece diversas ferramentas de comunicação, como o Google Meet e
              o Google Chat, que permitem realizar videoconferências, chamadas
              de voz e trocar mensagens instantâneas de forma integrada. Isso
              ajuda a manter a comunicação entre equipes mais ágil e eficiente.
            </p>

            <p>
              <strong>Armazenamento seguro na nuvem:</strong> Com o Google
              Drive, os usuários podem armazenar e compartilhar arquivos de
              forma segura na nuvem. Isso significa que os arquivos estarão
              disponíveis em qualquer dispositivo, em qualquer lugar do mundo,
              desde que haja acesso à internet.
            </p>

            <p>
              <strong>Acesso remoto:</strong> O Google Workplace permite que os
              funcionários trabalhem de forma remota, sem precisar estar no
              escritório. Isso significa que é possível ter equipes distribuídas
              em diferentes locais, sem que isso afete a produtividade ou a
              qualidade do trabalho.
            </p>

            <p>
              <strong>Redução de custos:</strong> Ao utilizar o Google
              Workplace, as empresas podem reduzir os custos com infraestrutura
              de TI, já que não é necessário investir em servidores, licenças de
              software e equipamentos caros. Além disso, o Google Workplace tem
              uma opção de assinatura mensal que se adapta ao tamanho da sua
              empresa.
            </p>
          </div>
        </div>
      </div>
      <div className="section-gw">
        <div className="section-gw-content">
          <div className="section-gw-content-img">
            <img
              src={illustration}
              alt="Ilustração com os serviços do Google Workplace"
            />
          </div>
          <div className="section-gw-content-txt">
            <p>
              <strong>
                Se você quer levar sua empresa para o próximo nível, o Google
                Workplace pode ser a solução ideal para suas necessidades de
                produtividade e colaboração.
              </strong>
            </p>
            <p>
              <strong>
                Quer saber mais sobre como o Google Workplace pode te ajudar?
              </strong>
            </p>
            <br />
            <button type="submit" onClick={handleContact}>
              Fale com a gente
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
