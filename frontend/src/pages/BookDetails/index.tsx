import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import BookScore from 'components/BookScore';

import './styles.css';
import ListReviews from './components/ListReviews';
import { Book, LiteraryGenrerEnum } from 'types/book';
import { Link } from 'react-router-dom';

const BookDetails = () => {
  const book: Book = {
    id: 1,
    description: 'Good',
    name: 'Jogador Nº1',
    author: 'Daniel',
    numberOfPages: 356,
    publishingCompany: 'Aleph',
    countReview: 23,
    score: 4.5,
    reviews: [
      {
        id: 1,
        note: 5,
        opinion:
          'Livro incrível! Com certeza um dos 3 melhores livros que já li na vida!',
        date: '2024-04-15T10:00:00Z',
        user: {
          id: 1,
          firstName: 'Lucas',
          lastName: 'Marques',
          email: 'lucasmarquesff@hotmail.com',
        },
      },
      {
        id: 2,
        note: 4,
        opinion: 'Um ótimo passatempo e uma aventura muito gostosa de se ler.',
        date: '2024-04-16T10:00:00Z',
        user: {
          id: 1,
          firstName: 'Lara',
          lastName: 'Cobar',
          email: 'lara@hotmail.com',
        },
      },
    ],
    image:
      'https://m.media-amazon.com/images/I/917GI-fesVL._AC_UF1000,1000_QL80_.jpg',
    literaryGenreEnum: LiteraryGenrerEnum.ADVENTURE,
  };

  return (
    <div className="book-details-container">
      <div className="base-card book-details-card">
        <Link to="/books">
          <div className="goback-container">
            <ArrowIcon />
            <h2>VOLTAR</h2>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img
                src="https://m.media-amazon.com/images/I/917GI-fesVL._AC_UF1000,1000_QL80_.jpg"
                alt="Nome do Livro"
              />
            </div>
            <div className="name-review-container">
              <h1>Jogador Nº1</h1>
              <BookScore count={23} score={4.5} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição do Livro</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, libero.
              </p>
            </div>
            <div className="review-container">
              <h1>Avalie</h1>
              <div className="review-score-container">
                <h2>Informe sua nota:</h2>
                <p>4.5</p>
              </div>
              <div className="review-opinion-container">
                <h2>Deixe sua opinião:</h2>
                <p>Muito Legal!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="base-card reviews-container">
        {book?.reviews.map((review) => (
          <ListReviews review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
};

export default BookDetails;
