import './styles.css';
import { Book } from 'types/book';
import BookImg from 'assets/images/book.png';
import BookScore from 'components/BookScore';

type Props = {
  book: Book;
};

function BookCard({ book }: Props) {
  return (
    <div className="base-card book-card">
      <div className="card-top-container">
        <img src={BookImg} alt="Nome do livro" />
      </div>
      <div className="card-bottom-container">
        <h6>{book.name}</h6>
        <BookScore count={book.countReview} score={book.score} />
      </div>
    </div>
  );
}

export default BookCard;
