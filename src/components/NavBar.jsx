import { NavLink, Outlet } from 'react-router-dom';
import '../styles/NavBar.css';

const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];

const NavBar = () => (
  <div className="wrapper">
    <div className="NavBar">
      <div>Logo</div>
      <div className="links">
        <ul>
          {links.map((link) => (
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="userProfile">UserProfile</div>
    </div>
    <Outlet />
  </div>
);

export default NavBar;
