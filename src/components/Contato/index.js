import { useEffect } from 'react';
import { BsMailbox, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import 'react-gallery-carousel/dist/index.css';
import CarrosselContato from './Carrossel';
import './style.css';

export default function Contato() {
  useEffect(() => {
    document.title = 'beeks | Contato';
  }, []);

  return (
    <>
      <div className="contact-container">
        <div className="contact-img">
          <CarrosselContato />
        </div>
        <div className="contact-txt">
          <h2>Contato</h2>
          <p>
            Quer descobrir como podemos te ajudar a potencializar seu negócio e
            trazer sua empresa para a era digital?.
          </p>
          <p>
            <strong>Fale com a gente! 🤓</strong>
          </p>
          <br />
          <div className="contact-social">
            <p>Nossas redes sociais:</p>
            <a
              href="https://www.instagram.com/somosbeeks/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram style={{ color: 'magenta' }} />
            </a>
          </div>
          <div className="contact-data">
            <div className="contact-item">
              <div className="contact-ico">
                <BsMailbox />
              </div>
              <div className="contact-info">
                <a href="mailto:contato@beeks.com.br">contato@beeks.com.br</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-ico">
                <BsWhatsapp style={{ color: 'green' }} />
              </div>
              <div className="contact-info">
                <a
                  href="https://api.whatsapp.com/send?phone=5511973667727"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link para nosso WhatsApp"
                >
                  (11) 97366-7727
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
