import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { AddBook } from '../redux/books/bookSlice';

const ButtonAddnewBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const newTitle = (event) => {
    setTitle(event.target.value);
  };

  const newAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newbook = { title, author };
    dispatch(AddBook(newbook));
    setTitle('');
    setAuthor('');
  };
  return (
    <section className="addBookWrapper">
      <p>Add a new book:</p>
      <form className="addBooksStyle" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" name="title" value={title} required onChange={newTitle} />
        <input type="text" placeholder="Author" name="author" value={author} required onChange={newAuthor} />
        <button type="submit">AddBook</button>
      </form>
    </section>
  );
};

export default ButtonAddnewBooks;
