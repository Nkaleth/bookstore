import ButtonAddnewBooks from '../components/ButtonAddnewBook';
import BookList from '../components/BookList';

const Home = () => (
  <div className="books">
    <BookList />
    <ButtonAddnewBooks />
  </div>
);

export default Home;
