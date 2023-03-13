import './style.css';
import contact from '../../assets/images/contact.jpg';

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
            <p>Teremos prazer em te ouvir e responder suas dúvidas.</p>
            <br />
            <p>
              ✉️ <a href="mailto:contato@beeks.com.br">contato@beeks.com.br</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
