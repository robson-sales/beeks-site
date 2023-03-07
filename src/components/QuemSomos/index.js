import './style.css';
import laptop from '../../assets/images/laptop-hands.jpg';
import growth from '../../assets/images/growth.jpg';

const QuemSomos = () => (
  <>
    <div className="section">
      <div className="section-content">
        <div className="section-content-txt">
          <h2>Nossa história</h2>
          <br></br>
          <br></br>
          <p>
            Há mais de 10 anos, o mundo dos negócios era muito diferente. Nosso
            sonho era transformar as empresas, quebrando amarras e permitindo
            que os colaboradores pudessem trabalhar de qualquer lugar, de forma
            organizada e ágil. Foi assim que nasceu a SantoDigital, oferecendo o
            G Suite, agora Google Workspace, e consultoria de tecnologia em
            cloud. Neste período, crescemos de forma acelerada, atingindo hoje a
            marca de mais de 2000 empresas migradas. Para que isto acontecesse
            com eficiência, desenvolvemos soluções estratégicas que aceleram
            adoções, migrações, aplicações e infraestrutura interna para
            soluções digitais e inovadoras de alta performance baseadas em Cloud
            Computing.
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
            ferramentas e serviços digitais que tornem seu dia-a-dia mais fácil,
            rápido, social e intuitivo.
          </p>
        </div>
      </div>
    </div>
  </>
);
export default QuemSomos;
