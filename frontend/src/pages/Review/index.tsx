import BookCard from 'components/BookCard';
import NavBar from 'components/Navbar';

const Review = () => {
  return (
    <>
      <NavBar />
      <div className="container my-4">
        <BookCard />
      </div>
    </>
  );
};

export default Review;
