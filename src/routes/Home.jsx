import AddnewBooks from '../components/AddnewBook';
import BookList from '../components/BookList';

const Home = () => (
  <div className="books">
    <BookList />
    <AddnewBooks />
  </div>
);

export default Home;
