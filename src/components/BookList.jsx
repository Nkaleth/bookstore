import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookItems } from '../redux/books/bookSlice';
import Book from './Book';

const BookList = () => {
  const {
    bookRemoved, bookAdded, bookItems, isLoading,
  } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch, bookAdded, bookRemoved]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="library">
      {bookItems.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  );
};
export default BookList;
