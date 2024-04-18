import { ReactComponent as MainImage } from 'assets/images/reading-a-book-3.svg';
import './styles.css';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
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
          <div>
            <Link to="/books">
              <ButtonIcon text="ENCONTRE SEU PRÓXIMO LIVRO FAVORITO" />
            </Link>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
