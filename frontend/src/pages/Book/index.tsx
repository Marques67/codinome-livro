import BookCard from 'components/BookCard';
import { Book } from 'types/book';

const Books = () => {
  const review = {
    id: 1,
    note: 5,
    opinion: 'Great',
    score: 4,
  };

  const book = {
    id: 1,
    description: 'Good',
    name: 'Flores para Algernon',
    author: 'Daniel',
    numberOfPages: 356,
    publishingCompany: 'Aleph',
    countReview: 23,
    score: 4.5,
    reviews: review,
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <BookCard book={book as unknown as Book} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <BookCard book={book as unknown as Book} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <BookCard book={book as unknown as Book} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <BookCard book={book as unknown as Book} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <BookCard book={book as unknown as Book} />
        </div>
      </div>
    </div>
  );
};

export default Books;
