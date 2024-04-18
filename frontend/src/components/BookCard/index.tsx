import './styles.css';
import { Book } from 'types/book';
import BookScore from 'components/BookScore';

type Props = {
  book: Book;
};

function BookCard({ book }: Props) {
  return (
    <div className="base-card book-card">
      <div className="card-top-container">
        <img src={book.image} alt={book.name} />
      </div>
      <div className="card-bottom-container">
        <h6>{book.name}</h6>
        <BookScore count={book.countReview} score={book.score} />
      </div>
    </div>
  );
}

export default BookCard;
