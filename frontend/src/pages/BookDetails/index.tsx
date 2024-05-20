import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import BookScore from 'components/BookScore';

import './styles.css';
import ListReviews from './components/ListReviews';
import { Book } from 'types/book';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from 'util/requests';
import { useEffect, useState } from 'react';
import BookInfoLoader from './BookInfoLoader';
import BookDetailsLoader from './BookDetailsLoader';

type urlParam = {
  bookId: string;
};

const BookDetails = () => {
  const { bookId } = useParams<urlParam>();
  const [book, setBook] = useState<Book>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/books/${bookId}`)
      .then((response) => {
        setBook(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [bookId]);

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
            {isLoading ? (
              <BookInfoLoader />
            ) : (
              <>
                <div className="img-container">
                  <img src={book?.image} alt={book?.name} />
                </div>
                <div className="name-review-container">
                  <h1>{book?.name}</h1>
                  {book && (
                    <BookScore count={book?.countReview} score={book?.score} />
                  )}
                </div>{' '}
              </>
            )}
          </div>
          <div className="col-xl-6">
            {isLoading ? (
              <BookDetailsLoader />
            ) : (
              <>
                <div className="description-container">
                  <h2>Descrição do Livro</h2>
                  <p>{book?.description}</p>
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
              </>
            )}
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
