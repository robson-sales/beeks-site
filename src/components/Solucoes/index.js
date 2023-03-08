import './style.css';
import laptop from '../../assets/images/laptop-hands.jpg';

export default function Solucoes() {
  return (
    <>
      <div className="section">
        <div className="section-content">
          <div className="section-content-txt">
            <h2>Soluções</h2>
            <p>Lorem ipsum</p>
          </div>
          <div className="section-content-img">
            <img src={laptop} />
          </div>
        </div>
      </div>
    </>
  );
}
