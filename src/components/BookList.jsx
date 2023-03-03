import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookItems } from '../redux/books/bookSlice';
import Book from './Book';

const BookList = () => {
  const { bookItems, isLoading } = useSelector((store) => store.books);
  const { current: Mybooks } = useRef(bookItems);
  // console.log(bookItems, isLoading, 'BooksItems Type:', typeof (bookItems));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch, Mybooks]);

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
