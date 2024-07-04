import BookStars from 'components/BookStars';
import './styles.css';

type Props = {
  score: number;
  count: number;
};

function BookCrudScore({ score, count }: Props) {
  return (
    <div className="codinome-livros-crud-score-container">
      <p className="codinome-livros-crud-score-value">
        {score > 0 ? score.toFixed(1) : '-'}
      </p>
      <BookStars score={score} />
      {count === 1 ? (
        <p className="codinome-livros-crud-score-count">{count} avaliação</p>
      ) : (
        <p className="codinome-livros-crud-score-count">{count} avaliações</p>
      )}
    </div>
  );
}

export default BookCrudScore;
