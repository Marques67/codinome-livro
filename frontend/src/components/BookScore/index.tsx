import BookStars from 'components/BookStars';
import './styles.css';

type Props = {
  score: number;
  count: number;
};

function BookScore({ score, count }: Props) {
  return (
    <div className="codinome-livros-score-container">
      <p className="codinome-livros-score-value">
        {score > 0 ? score.toFixed(1) : '-'}
      </p>
      <BookStars score={score} />
      {count === 1 ? (
        <p className="codinome-livros-score-count">{count} avaliação</p>
      ) : (
        <p className="codinome-livros-score-count">{count} avaliações</p>
      )}
    </div>
  );
}

export default BookScore;
