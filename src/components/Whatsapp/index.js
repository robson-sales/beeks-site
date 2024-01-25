import { BsWhatsapp } from 'react-icons/bs';
import './style.css';

export default function Whatsapp() {
  return (
    <div className="wap-link">
      <a
        href="https://api.whatsapp.com/send?phone=5511973667727"
        target="_blank"
        rel="noreferrer"
        aria-label="Link para acessar nosso WhatsApp de contato"
      >
        <BsWhatsapp color="white" fontSize="38px" />
      </a>
    </div>
  );
}
