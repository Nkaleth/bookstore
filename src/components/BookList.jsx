import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const { bookItems } = useSelector((store) => store.books);
  return (
    <div className="library">
      {bookItems.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  );
};
export default BookList;
