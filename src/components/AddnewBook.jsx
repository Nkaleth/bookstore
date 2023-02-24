const AddnewBooks = () => (
  <section className="addBookWrapper">
    <p>Add a new book:</p>
    <form action="" method="post">
      <input type="text" placeholder="Title" required />
      <input type="text" placeholder="Author" required />
      <button type="button">AddBook</button>
    </form>
  </section>
);

export default AddnewBooks;
