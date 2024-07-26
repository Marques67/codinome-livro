import { Book } from 'types/book';
import GenreBadge from '../GenreBadge';
import { v4 as uuidv4 } from 'uuid';

import './styles.css';
import BookCrudScore from '../BookCrudScore';

type Props = {
  book: Book;
};

function BookCrudCard({ book }: Props) {
  const genres = (book.literaryGenreEnumSet || []).map(
    (item) => item.literaryGenreEnum
  );

  return (
    <div className="base-card book-crud-card">
      <div className="book-crud-card-top-container">
        <img src={book.image} alt={book.name} />
      </div>
      <div className="book-crud-card-description">
        <div className="book-crud-card-bottom-container">
          <h6>{book.name}</h6>
          <BookCrudScore count={book.countReview} score={book.score} />
        </div>
        <div className="book-crud-genre-list">
          {genres.map((genre) => (
            <div key={uuidv4()} className="book-crud-genre-container">
              <GenreBadge literaryGenre={genre} />
            </div>
          ))}
        </div>
      </div>
      <div className="book-crud-buttons-container">
        <button className="btn btn-outline-danger book-crud-card-button book-crud-card-button-first">
          EXCLUIR
        </button>
        <button className="btn btn-outline-secondary book-crud-card-button">
          EDITAR
        </button>
      </div>
    </div>
  );
}

export default BookCrudCard;
