import { NavLink } from 'react-router-dom';
import ThemeSwitcher from '../../../Atoms/ThemeSwitcher/ThemeSwitcher';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="burger-menu">☰</div>
            <nav className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/destinations">Destinations</NavLink>
                <NavLink to="/hotels">Hotels</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </nav>
      </div>
      <div className="header-right">
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
