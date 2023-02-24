import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <article className="bookWrapper">
    <section className="book">
      <p>{title}</p>
      <p>{author}</p>
    </section>
    <section className="buttonBook">
      <button type="button">remove</button>
    </section>
  </article>
);

Book.propTypes = { title: PropTypes.string.isRequired };
Book.propTypes = { author: PropTypes.string.isRequired };

export default Book;
