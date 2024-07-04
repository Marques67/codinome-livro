import { Book } from 'types/book';
import GenreBadge from '../GenreBadge';

import './styles.css';
import BookCrudScore from '../BookCrudScore';

type Props = {
  book: Book;
};

function BookCrudCard({ book }: Props) {
  return (
    <div className="base-card book-crud-card">
      <div className="book-crud-card-top-container">
        <img src={book.image} alt={book.name} />
      </div>
      <div>
        <div className="book-crud-card-bottom-container">
          <h6>{book.name}</h6>
          <BookCrudScore count={book.countReview} score={book.score} />
        </div>
        <div className="book-crud-genre-container">
          {book.literaryGenreEnum.map((genre) => (
            <GenreBadge literaryGenre={genre} key={genre} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookCrudCard;