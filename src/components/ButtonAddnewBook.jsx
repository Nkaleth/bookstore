import { useDispatch } from 'react-redux';
import { AddBook } from '../redux/books/bookSlice';

const ButtonAddnewBooks = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const newbook = { title, author };
    dispatch(AddBook(newbook));
    event.target.reset();
  };
  return (
    <section className="addBookWrapper">
      <p>Add a new book:</p>
      <form className="addBooksStyle" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" name="title" required />
        <input type="text" placeholder="Author" name="author" required />
        <button type="submit">AddBook</button>
      </form>
    </section>
  );
};

export default ButtonAddnewBooks;

// const AddnewBooks = () => (
//   <section className="addBookWrapper">
//     <p>Add a new book:</p>
//     <form>
//       <input type="text" placeholder="Title" />
//       <input type="text" placeholder="Author" />
//       <button type="submit">Addbook</button>
//     </form>
//   </section>
// );
// export default AddnewBooks;
