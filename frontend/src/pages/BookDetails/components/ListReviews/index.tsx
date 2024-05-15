import { Review } from 'types/review';
import './styles.css';
import BookStars from 'components/BookStars';
import { ReactComponent as Avatar } from 'assets/images/avatar-people.svg';

type Props = {
  review: Review;
};

const ListReviews = ({ review }: Props) => {
  return (
    <div className="list-reviews">
      <div className="review-note-username">
        <Avatar />
        <span className="review-username">
          {review.user.firstName + ' ' + review.user.lastName}
        </span>
        <BookStars score={review.note} />
      </div>
      <div className="review-text-container">
        <p className="review-text">{review.opinion}</p>
      </div>
    </div>
  );
};

export default ListReviews;
