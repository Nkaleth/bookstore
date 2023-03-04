import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBookAPI } from '../redux/books/bookSlice';
import '../styles/AddnewBook.css';

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
    const newbook = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Classic',
    };
    dispatch(addBookAPI(newbook));
    setTitle('');
    setAuthor('');
  };
  return (
    <section className="addBookWrapper">
      <p className="titleForm">Add a new book:</p>
      <form className="addBooksStyle" onSubmit={handleSubmit}>
        <input className="inputNewBook" type="text" placeholder="Title" name="title" value={title} required onChange={newTitle} />
        <input className="inputNewBook" type="text" placeholder="Author" name="author" value={author} required onChange={newAuthor} />
        <button className="addButton" type="submit">Add Book</button>
      </form>
    </section>
  );
};

export default ButtonAddnewBooks;
