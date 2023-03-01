import Book from './Book';

const books = [
  {
    id: 'lolvlad1',
    title: 'Lolita',
    author: 'Vladimir Navokob',
  },
  {
    id: 'madgus2',
    title: 'Madamme Bovary',
    author: 'Gustave Flaubert',
  },
];

const BookList = () => (
  <div className="library">
    {books.map((book) => (
      <Book key={book.title} title={book.title} author={book.author} />
    ))}
  </div>
);

export { books, BookList };
