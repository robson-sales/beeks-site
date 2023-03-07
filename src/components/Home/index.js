import './style.css';
import banner from '../../assets/images/home-banner.jpg';

const Home = () => (
  <div className="banner">
    <div className="banner-img">
      <img src={banner} />
    </div>
    <div className="text-over-left">
      <h2>
        Coloque a tecnologia <br />
        para trabalhar a seu <br />
        favor e avance na <br />
        era digital <br /> <br />A parte nerd 🤓
        <br />é com a gente
      </h2>
    </div>
  </div>
);
export default Home;
