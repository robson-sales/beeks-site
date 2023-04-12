import { useNavigate } from 'react-router-dom';
import 'react-gallery-carousel/dist/index.css';
import CarrosselEmail from './Carrossel';
import './style.css';

export default function Email() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contato');
  };

  return (
    <>
      <div className="email-container">
        <div className="email-img">
          <CarrosselEmail />
        </div>
        <div className="email-txt">
          <h2>E-mail com domínio personalizado: diferencial</h2>
          <p>
            Um endereço de e-mail com um domínio personalizado é uma escolha
            inteligente para qualquer empresa. Além de fornecer uma aparência
            profissional e credibilidade, pode oferecer diversas vantagens
            competitivas.
          </p>
          <p>
            Qual dos dois e-mails te passa mais confiança:{' '}
            <strong>
              <s>pedro@gmail.com</s>
            </strong>{' '}
            ou{' '}
            <strong style={{ color: 'blue' }}>pedro@suaempresa.com.br</strong>?
          </p>
          <p>
            É mais fácil de lembrar e reconhecer pelos seus clientes, parceiros
            de negócios e fornecedores. Isso pode ajudar a fortalecer a marca da
            sua empresa e torná-la mais memorável.
          </p>
          <p>
            Uma vantagem competitiva é a capacidade de personalizar a aparência
            dos seus e-mails com um domínio personalizado. Você pode adicionar
            sua logo, imagens e outros elementos de design para tornar seus
            e-mails mais atraentes e profissionais.
          </p>
          <p>
            Um e-mail com domínio próprio pode ajudar a fortalecer sua marca e
            criar uma imagem mais profissional e confiável para sua empresa.
            Isso pode ser fundamental para ganhar a confiança de clientes e
            parceiros de negócios, o que leva a mais oportunidades de negócios e
            maior crescimento para sua empresa.
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