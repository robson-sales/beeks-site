import { useNavigate } from 'react-router-dom';
import '../../Styles/solutionStyle.css';
import emailOne from '../../assets/images/email-one.svg';
import emailTwo from '../../assets/images/email-two.svg';

export default function Email() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contato');
  };

  return (
    <>
      <div className="section-gw">
        <div className="section-gw-content">
          <div className="section-gw-content-img">
            <img src={emailOne} alt="Logotipo do Google Workplace" />
          </div>
          <div className="section-gw-content-txt">
            <h2>E-mail com domínio personalizado: diferencial</h2>
            <br />
            <p>
              Ter um endereço de e-mail com um domínio personalizado é uma
              escolha inteligente para qualquer empresa. Além de fornecer uma
              aparência profissional e credibilidade, ter um e-mail
              personalizado pode oferecer diversas vantagens competitivas.
            </p>
            <p>
              Um e-mail com um domínio personalizado é mais fácil de lembrar e
              reconhecer pelos seus clientes, parceiros de negócios e
              fornecedores. Isso pode ajudar a fortalecer a marca da sua empresa
              e torná-la mais memorável.
            </p>
            <p>
              Um e-mail personalizado pode fornecer uma camada extra de
              segurança e privacidade, especialmente se você lidar com
              informações confidenciais. Ao usar um domínio personalizado, você
              tem mais controle sobre quem tem acesso aos seus e-mails e pode
              garantir que apenas funcionários autorizados tenham acesso.
            </p>
          </div>
        </div>
      </div>

      <div className="section-gw">
        <div className="section-gw-content">
          <div className="section-gw-content-img">
            <img
              src={emailTwo}
              alt="Ilustração com os serviços do Google Workplace"
            />
          </div>
          <div className="section-gw-content-txt">
            <p>
              Uma grande vantagem competitiva é a capacidade de personalizar a
              aparência dos seus e-mails com um domínio personalizado. Você pode
              adicionar sua logo, imagens e outros elementos de design para
              tornar seus e-mails mais atraentes e profissionais.
            </p>
            <p>
              Um e-mail personalizado com domínio próprio pode ajudar a
              fortalecer sua marca e criar uma imagem mais profissional e
              confiável para sua empresa. Isso pode ser fundamental para ganhar
              a confiança de clientes e parceiros de negócios, o que pode levar
              a mais oportunidades de negócios e maior crescimento para sua
              empresa.
            </p>
            <p>
              Em resumo, ter um endereço de e-mail com um domínio personalizado
              pode oferecer diversas vantagens competitivas para sua empresa,
              incluindo maior reconhecimento de marca, segurança e privacidade,
              personalização dos e-mails e uma imagem mais profissional e
              confiável.
            </p>
            <br />
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
