import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import NavBar from 'components/Navbar';

import './styles.css';
import ButtonIcon from 'components/ButtonIcon';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <div>
              <h1>Encontre agora sua próxima leitura</h1>
              <p>
                Ajudaremos você a acabar com a dúvida e decidir o próximo livro
                que irá ler
              </p>
            </div>

            <ButtonIcon />
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
