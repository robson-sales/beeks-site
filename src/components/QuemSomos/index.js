import './style.css';
import manTech from '../../assets/images/man-tech.jpg';
import girlsTech from '../../assets/images/girls-tech.jpg';

export default function QuemSomos() {
  return (
    <>
      <div className="section">
        <div className="section-content">
          <div className="section-content-txt">
            <h2>Somos beeks</h2>
            <br></br>
            <br></br>
            <p>
              A beeks nasceu da nosso jeito inconformado de enxergar o mundo.
              Entendemos que a tecnologia está aqui para facilitar a vida de
              empresas e pessoas, e não ser um bicho de sete cabeças. Tudo
              deveria ser tão simples quanto mandar um WhatsApp.
            </p>
          </div>
          <div className="section-content-img">
            <img src={manTech} />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-content">
          <div className="section-content-img">
            <img src={girlsTech} />
          </div>
          <div className="section-content-txt">
            <h2>O que nos move</h2>
            <br></br>
            <br></br>
            <p>
              Queremos te ajudar a alcançar seu potencial máximo, através de
              ferramentas e serviços digitais que tornem seu dia-a-dia mais
              fácil, rápido, social e intuitivo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
