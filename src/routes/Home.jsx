import AddnewBooks from '../components/AddnewBook';
import Book from '../components/Book';

const Home = () => (
  <div className="books">
    <Book title="Lolita" author="Vladimir Navokob" />
    <Book title="Madamme Bovary" author="Gustave Flaubert" />
    <AddnewBooks />
  </div>
);

export default Home;
