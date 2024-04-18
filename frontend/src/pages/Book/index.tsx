import BookCard from 'components/BookCard';
import { Book, LiteraryGenrerEnum } from 'types/book';

const Books = () => {
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
        opinion: 'Great',
        date: '2024-04-15T10:00:00Z',
      },
    ],
    image:
      'https://m.media-amazon.com/images/I/917GI-fesVL._AC_UF1000,1000_QL80_.jpg',
    literaryGenreEnum: LiteraryGenrerEnum.ADVENTURE,
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <BookCard book={book} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <BookCard book={book} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <BookCard book={book} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <BookCard book={book} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <BookCard book={book} />
        </div>
      </div>
    </div>
  );
};

export default Books;
