import { useNavigate } from 'react-router-dom';
import '../../Styles/solutionStyle.css';
import googleCloud from '../../assets/images/google-cloud.webp';
import googleCloudServices from '../../assets/images/google-cloud-services.webp';
import googleDatacenter from '../../assets/images/google-datacenter.webp';

export default function PageGcp() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contato');
  };

  return (
    <>
      <div className="section-gw">
        <div className="section-gw-content">
          <div className="section-gw-content-img">
            <img src={googleCloud} alt="Logotipo do Google Cloud Platform" />
          </div>
          <div className="section-gw-content-txt">
            <p>
              A <strong>Google Cloud Platform</strong> é uma plataforma de
              computação em nuvem oferecida pela Google. Ela permite que
              empresas de todos os tamanhos acessem recursos de computação,
              armazenamento, análise de dados e inteligência artificial em
              escala global. A plataforma foi projetada para ajudar as empresas
              a executar suas operações de maneira mais eficiente, permitindo
              que elas se concentrem em seus negócios principais.
            </p>

            <p>
              Ela também oferece uma ampla variedade de serviços, incluindo
              computação em nuvem, armazenamento em nuvem, banco de dados,
              análise de dados, inteligência artificial e aprendizado de
              máquina. Esses serviços são executados em infraestrutura de alta
              qualidade, com uma rede global de data centers que fornecem alta
              disponibilidade e desempenho.
            </p>

            <p>
              Ao usa-la, as empresas podem economizar tempo e dinheiro, pois não
              precisam investir em hardware caro ou em equipes de TI
              especializadas. Além disso, a plataforma é altamente escalável,
              permitindo que as empresas aumentem ou diminuam rapidamente a
              capacidade de computação e armazenamento de acordo com suas
              necessidades.
            </p>
          </div>
        </div>
      </div>

      <div className="section-gw">
        <div className="section-gw-content">
          <div className="section-gw-content-img">
            <img
              src={googleCloudServices}
              alt="Infográfico com alguns serviços da GCP"
            />
          </div>
          <div className="section-gw-content-txt">
            <p>
              A Google Cloud Platform também é altamente segura e oferece
              recursos de segurança líderes do setor, como criptografia de dados
              em repouso e em trânsito, autenticação de usuário e controle de
              acesso baseado em função. Isso permite que as empresas protejam
              seus dados e garantam a conformidade com regulamentações
              governamentais e do setor.
            </p>

            <p>
              Através dela é possível potencializar os negócios de uma empresa
              de várias maneiras. Primeiro, ela pode melhorar a eficiência
              operacional, permitindo que as empresas executem suas operações de
              maneira mais eficiente e com maior agilidade. Em segundo lugar,
              ela pode ajudar as empresas a inovar mais rapidamente, fornecendo
              acesso a recursos de inteligência artificial e aprendizado de
              máquina para análise de dados avançada e insights em tempo real.
              Finalmente, a plataforma pode ajudar as empresas a expandir sua
              presença globalmente, permitindo que elas acessem novos mercados e
              clientes.
            </p>
          </div>
        </div>
      </div>

      <div className="section-gw">
        <div className="section-gw-content">
          <div className="section-gw-content-img">
            <img
              src={googleDatacenter}
              alt="Corredor com varias tubulações de resfriamento dos servidores da GCP"
            />
          </div>
          <div className="section-gw-content-txt">
            <p>
              <strong>
                Ao oferecer recursos de computação, armazenamento e análise de
                dados de alto desempenho e segurança, a plataforma permite que
                as empresas se concentrem em seus negócios principais e se
                tornem mais eficientes, inovadoras e globais.
              </strong>
            </p>
            <p>
              <strong>
                Quer saber mais sobre como a Google Cloud Platform pode te
                ajudar?
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
