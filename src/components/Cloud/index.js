import { useNavigate } from 'react-router-dom';
import 'react-gallery-carousel/dist/index.css';
import CarrosselContato from './Carrossel';
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
          <CarrosselContato />
        </div>
        <div className="cloud-txt">
          <h2>Gestão de cloud: temos!</h2>
          <p>
            Aqui na beeks, oferecemos serviços personalizados para gerenciamento
            de nuvem quem atendam às suas necessidades, utilizando os serviços
            de nuvem da AWS, Azure e Google Cloud.
          </p>
          <p>
            Ao migrar para a nuvem, você pode aproveitar várias vantagens, como
            maior escalabilidade, flexibilidade e segurança. Além disso, migrar
            para a nuvem pode reduzir significativamente seus custos
            operacionais, eliminando a necessidade de investir em hardware e
            infraestrutura.
          </p>
          <p>
            Temos experiência em gerenciamento de nuvem e podemos ajudá-lo a
            minimizar riscos de segurança, garantir a conformidade e aumentar a
            eficiência operacional.
          </p>
          <p>
            Trabalhamos com você para garantir que sua solução de nuvem seja
            personalizada para atender às suas necessidades exclusivas,
            permitindo que você se concentre no crescimento do seu negócio.
          </p>
          <p>
            Se você está procurando uma solução confiável, flexível e econômica
            para gerenciamento de nuvem, fale com a gente. Estamos prontos para
            te mostrar como a nuvem pode ajudar a impulsionar seus negócios!
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
