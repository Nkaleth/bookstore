import { Route, Routes } from 'react-router-dom';
import Categories from '../routes/Categories';
import Home from '../routes/Home';
import NotMatch from '../routes/NoMatch';
import NavBar from './NavBar';

function BookstoreApp() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="books" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default BookstoreApp;
