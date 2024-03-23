import BookStars from 'components/BookStars';
import './styles.css';

import BookImg from 'assets/images/book.png';
import BookScore from 'components/BookScore';

const BookCard = () => {
  return (
    <div className="base-card book-card">
      <div className="card-top-container">
        <img src={BookImg} alt="Nome do livro" />
      </div>
      <div className="card-bottom-container">
        <h6>Nome do livro</h6>
        <BookScore count={movie.count} score={movie.score} />
      </div>
    </div>
  );
};

export default BookCard;
