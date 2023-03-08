import './style.css';
import coffee from '../../assets/images/coffee.jpg';
import girlsTech from '../../assets/images/girls-tech.jpg';

export default function QuemSomos() {
  return (
    <>
      <div className="qs-banner">
        <div className="qs-banner-img">
          <img src={coffee} />
        </div>
        <div className="qs-text-over-left">
          <h2>Somos beeks</h2>
          <br />
          <p>
            A beeks nasceu da nosso jeito inconformado de enxergar o mundo.
            Entendemos que a tecnologia está aqui para facilitar a vida de
            empresas e pessoas, e não ser um bicho de sete cabeças. Tudo deveria
            ser tão simples quanto mandar uma mensagem no WhatsApp.
          </p>
        </div>
      </div>
      <div className="qs-banner">
        <div className="qs-banner-img">
          <img src={girlsTech} />
        </div>
        <div className="qs-text-over-left">
          <h2>O que nos move</h2>
          <br />
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
