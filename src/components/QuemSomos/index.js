import './style.css';
import laptop from '../../assets/images/laptop-hands.jpg';
import growth from '../../assets/images/growth.jpg';

export default function QuemSomos() {
  return (
    <>
      <div className="section">
        <div className="section-content">
          <div className="section-content-txt">
            <h2>Nossa história</h2>
            <br></br>
            <br></br>
            <p>
              A beeks nasceu da nossa forma inconformada de enxergar o mundo.
              Entendemos que a tecnologia está aqui para facilitar a vida de
              empresas e pessoas, e não ser um bicho de sete cabeças.
            </p>
          </div>
          <div className="section-content-img">
            <img src={laptop} />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-content">
          <div className="section-content-img">
            <img src={growth} />
          </div>
          <div className="section-content-txt">
            <h2>Nossa Missão</h2>
            <br></br>
            <br></br>
            <p>
              Nós queremos te ajudar a alcançar seu potencial máximo, através de
              ferramentas e serviços digitais que tornem seu dia-a-dia mais
              fácil, rápido, social e intuitivo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
