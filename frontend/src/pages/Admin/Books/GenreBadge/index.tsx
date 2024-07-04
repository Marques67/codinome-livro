import { LiteraryGenrerEnum } from 'types/book';

import './styles.css';

type Props = {
  literaryGenre: LiteraryGenrerEnum;
};

const GenreBadge = ({ literaryGenre }: Props) => {
  return <div className="genre-badge-container">{literaryGenre}</div>;
};

export default GenreBadge;
