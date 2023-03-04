import ButtonAddnewBooks from '../components/ButtonAddnewBook';
import BookList from '../components/BookList';

const Home = () => (
  <div className="books">
    <BookList />
    <div className="horizontal_div" />
    <ButtonAddnewBooks />
  </div>
);

export default Home;
