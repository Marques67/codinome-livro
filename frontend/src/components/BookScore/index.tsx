import BookStars from 'components/BookStars';
import './styles.css';

type Props = {
  score: number;
  count: number;
};

function BookScore({ score, count }: Props) {
  return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">
        {score > 0 ? score.toFixed(1) : '-'}
      </p>
      <BookStars score={score} />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  );
}

export default BookScore;
