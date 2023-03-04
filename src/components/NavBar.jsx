import { NavLink, Outlet } from 'react-router-dom';
import '../styles/NavBar.css';
import UserIcon from '../icons/userIcon';

const links = [
  { path: '/', text: 'BOOKS' },
  { path: 'categories', text: 'CATEGORIES' },
];

const NavBar = () => (
  <div className="wrapper">
    <div className="NavBar">
      <div className="Bookstore">Bookstore CMS</div>
      <div className="containerLinks">
        <ul>
          {links.map((link) => (
            <li className="nameLinks" key={link.text}>
              <NavLink className="links" to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="iconCont">
        <UserIcon />
      </div>
    </div>
    <Outlet />
  </div>
);

export default NavBar;
