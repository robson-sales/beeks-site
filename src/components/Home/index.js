import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Home() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contato');
  };

  return (
    <div className="banner">
      <div className="text-over-left">
        <h2>
          Coloque a tecnologia <br />
          para trabalhar a seu <br />
          favor e avance na <br />
          era digital <br /> <br />A parte nerd 🤓
          <br />é com a gente
        </h2>
        <br />
        <br />
        <button type="submit" onClick={handleContact} className="button-action">
          Fale com a gente
        </button>
      </div>
    </div>
  );
}
