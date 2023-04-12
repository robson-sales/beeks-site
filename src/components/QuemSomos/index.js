import 'react-gallery-carousel/dist/index.css';
import CarrosselContato from './Carrossel';
import './style.css';

export default function QuemSomos() {
  return (
    <>
      <div className="quem-container">
        <div className="quem-img">
          <CarrosselContato />
        </div>
        <div className="quem-txt">
          <h2>Somos beeks</h2>
          <p>
            A beeks nasceu da nosso jeito inconformado de enxergar o mundo.
            Entendemos que a tecnologia está aqui para facilitar a vida de
            empresas e pessoas, e não ser um bicho de sete cabeças.
          </p>
          <p>
            <strong>
              Tudo deveria ser tão simples quanto mandar uma mensagem no
              WhatsApp.
            </strong>
          </p>
          <h2>O que nos move</h2>
          <p>
            Queremos te ajudar a alcançar seu potencial máximo, através de
            ferramentas e serviços digitais que tornem seu dia-a-dia mais fácil,
            rápido, social e intuitivo.
          </p>
        </div>
      </div>
    </>
  );
}
