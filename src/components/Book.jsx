import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveBook } from '../redux/books/bookSlice';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  return (
    <article className="bookWrapper">
      <section className="book">
        <p>{title}</p>
        <p>{author}</p>
      </section>
      <section className="buttonBook">
        <button type="button" onClick={() => { dispatch(RemoveBook(id)); }}>remove</button>
      </section>
    </article>
  );
};

Book.propTypes = { title: PropTypes.string.isRequired };
Book.propTypes = { author: PropTypes.string.isRequired };
Book.propTypes = { id: PropTypes.string.isRequired };
export default Book;
