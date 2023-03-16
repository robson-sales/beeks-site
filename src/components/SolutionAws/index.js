import { useNavigate } from 'react-router-dom';
import '../../Styles/solutionStyle.css';
import awsLogo from '../../assets/images/aws-logo.png';
import awsServers from '../../assets/images/aws-server.png';
import awsServices from '../../assets/images/aws-services.png';

export default function PageAws() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contato');
  };

  return (
    <>
      <div className="section-gw">
        <div className="section-gw-content">
          <div className="section-gw-content-img">
            <img src={awsLogo} alt="Logotipo da AWS" />
          </div>
          <div className="section-gw-content-txt">
            <p>
              A <strong>Amazon Web Services (AWS)</strong> é uma plataforma de
              computação em nuvem oferecida pela Amazon, que fornece uma ampla
              gama de serviços de infraestrutura de TI, como armazenamento de
              dados, processamento de dados, hospedagem de sites, análise de
              dados e muito mais. A AWS é uma das plataformas de nuvem mais
              populares do mundo e é utilizada por empresas de todos os tamanhos
              para otimizar seus negócios.
            </p>

            <p>
              A AWS oferece uma série de benefícios para as empresas, incluindo
              a redução de custos e a melhoria da eficiência operacional. Ao
              utilizar a AWS, as empresas podem economizar em custos de hardware
              e software, já que não precisam comprar e manter seus próprios
              servidores, equipamentos de rede e software. Em vez disso, elas
              pagam apenas pelos serviços que utilizam na nuvem da AWS.
            </p>

            <p>
              Além disso, a AWS é altamente escalável, o que significa que as
              empresas podem aumentar ou diminuir o uso dos recursos da nuvem de
              acordo com as necessidades do negócio. Isso é particularmente útil
              para empresas que experimentam picos sazonais no tráfego do site
              ou no volume de dados processados. Com a AWS, as empresas podem
              aumentar a capacidade de seus servidores rapidamente, sem precisar
              adquirir mais hardware.
            </p>
          </div>
        </div>
      </div>
      <div className="section-gw">
        <div className="section-gw-content">
          <div className="section-gw-content-img">
            <img
              src={awsServers}
              alt="Corredor de um datacenter da AWS com seus servidores"
            />
          </div>
          <div className="section-gw-content-txt">
            <p>
              Outro benefício da AWS é que ela fornece uma ampla gama de
              ferramentas e serviços de análise de dados, que permitem às
              empresas coletar e processar grandes quantidades de dados em tempo
              real. Isso pode ajudar as empresas a obter insights valiosos sobre
              seus clientes, aprimorar seus produtos e serviços e tomar decisões
              de negócios mais informadas.
            </p>

            <p>
              Além disso, a AWS é altamente segura e confiável, oferecendo uma
              série de recursos de segurança para proteger os dados das empresas
              na nuvem. A AWS é compatível com diversas normas de segurança e
              privacidade, como a GDPR e a HIPAA, garantindo que as empresas
              possam cumprir as regulamentações aplicáveis a seus negócios.
            </p>
          </div>
        </div>
      </div>
      <div className="section-gw">
        <div className="section-gw-content">
          <div className="section-gw-content-img">
            <img
              src={awsServices}
              alt="Infográfico contextualizando alguns serviços da AWS"
            />
          </div>
          <div className="section-gw-content-txt">
            <p>
              <strong>
                Ao adotar a AWS, as empresas podem se concentrar em seu core
                business, enquanto a plataforma gerencia a infraestrutura de TI
                de maneira eficiente e confiável.
              </strong>
            </p>
            <p>
              <strong>Quer saber mais sobre como a AWS pode te ajudar?</strong>
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
