import { Book } from 'types/book';
import GenreBadge from '../GenreBadge';
import { v4 as uuidv4 } from 'uuid';

import './styles.css';
import BookCrudScore from '../BookCrudScore';
import { Link } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';

type Props = {
  book: Book;
  onDelete: Function;
};

function BookCrudCard({ book, onDelete }: Props) {
  const genres = (book.literaryGenreEnumSet || []).map(
    (item) => item.literaryGenreEnum
  );

  const handleDelete = (bookId: number) => {
    if (!window.confirm('Tem certeza que deseja deletar?')) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `books/${bookId}`,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      onDelete();
    });
  };

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
        <button
          onClick={() => handleDelete(book.id)}
          className="btn btn-outline-danger book-crud-card-button book-crud-card-button-first"
        >
          EXCLUIR
        </button>
        <Link to={`/admin/books/${book.id}`}>
          <button className="btn btn-outline-secondary book-crud-card-button">
            EDITAR
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BookCrudCard;
