import { BsMailbox, BsInstagram } from 'react-icons/bs';
import './style.css';

export default function Contato() {
  return (
    <>
      <div className="contact">
        <div className="contact-content">
          <div className="contact-content-img"></div>
          <div className="contact-content-txt">
            <h2>Contato</h2>
            <br />
            <p>
              <strong>
                Descubra como podemos ajudar a potencializar seu negócio.
              </strong>
            </p>
            <br />
            <div className="contact-social">
              <p>Nossas redes sociais:</p>
              <a
                href="https://www.instagram.com/somosbeeks/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </div>
            <div className="contact-data">
              <div className="contact-item">
                <div className="contact-ico">
                  <BsMailbox />
                </div>
                <div className="contact-info">
                  <a href="mailto:contato@gb.ind.br">contato@beeks.com.br</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
