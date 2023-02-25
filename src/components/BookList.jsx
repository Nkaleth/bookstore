import Book from './Book';

const books = [
  { title: 'Lolita', author: 'Vladimir Navokob' },
  { title: 'Madamme Bovary', author: 'Gustave Flaubert' },
];

const BookList = () => (
  <div className="library">
    {books.map((book) => (
      <Book key={book.title} title={book.title} author={book.author} />
    ))}
  </div>
);

export default BookList;
