import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delBookAPI } from '../redux/books/bookSlice';
import '../styles/Book.css';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  return (
    <article className="bookWrapper">
      <section className="book">
        <p className="category">{category}</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <section className="buttonsBook">
          <button className="buttonStyle" type="button">Comments</button>
          <div className="vertical-divider" />
          <button className="buttonStyle" type="button" onClick={() => { dispatch(delBookAPI(id)); }}>remove</button>
          <div className="vertical-divider" />
          <button className="buttonStyle" type="button">Edit</button>
        </section>
      </section>
      <div className="progress-container">
        <div className="circular-progress-container"><div className="circular-progress" /></div>
        <div className="progress-stat">
          <p className="percent-complete">64%</p>
          <p className="completed">Completed</p>
        </div>
        <div className="progress-divider" />
        <div className="current-chapter-container">
          <div>
            <p className="current-chapter-label">CURRENT CHAPTER</p>
            <p className="current-chapter">Chapter 17</p>
          </div>
          <div><button className="primary-button" type="button">UPDATE PROGRESS</button></div>
        </div>
      </div>
    </article>
  );
};

Book.propTypes = { title: PropTypes.string.isRequired };
Book.propTypes = { author: PropTypes.string.isRequired };
Book.propTypes = { id: PropTypes.string.isRequired };
Book.propTypes = { category: PropTypes.string.isRequired };
export default Book;
