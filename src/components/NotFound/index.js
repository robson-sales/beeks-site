import './style.css';
import coffee from '../../assets/images/404.svg';

export default function NotFound() {
  return (
    <>
      <div className="nf-banner">
        <h2>Página não encontrada</h2>
        <div className="nf-banner-img">
          <img src={coffee} />
        </div>
      </div>
    </>
  );
}
