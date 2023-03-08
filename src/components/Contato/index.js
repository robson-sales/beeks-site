import './style.css';
import contact from '../../assets/images/contact.jpg';
import wap from '../../assets/images/wap.png';

export default function Contato() {
  return (
    <>
      <div className="contact">
        <div className="contact-content">
          <div className="contact-content-img">
            <img src={contact} />
          </div>
          <div className="contact-content-txt">
            <h2>Contato</h2>
            <br />
            <p>Descubra como podemos ajudar a potencializar seu negócio.</p>
            <br />
            <p></p>
            <p>☎️ (11) 5555-1234</p>
            <p>
              <img src={wap} className="icon" /> (11) 9999-2345
            </p>
            <p>
              ✉️ <a href="mailto:contato@beeks.com.br">contato@beeks.com.br</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
