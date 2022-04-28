import React, {useContext} from 'react';
import styles from '../NavBar/NavBar.module.css';
import cx from 'classnames';
import {Link } from 'react-router-dom';
import { AppContext } from '../../contexts';

// use Context and implement open-close function

const NavBar = () => {
  const {
    state: { isMenuOpen },
    openMenu,
    closeMenu,
  } = useContext(AppContext);

  const classnames = cx(styles.container, {
    [styles.openMenu]: isMenuOpen,
  });

  return (
    <nav className={classnames}>
      <button onClick={closeMenu}>X</button>
    <ul>
      <li>
        <Link to='/loader'>Loader</Link>
      </li>
      <li>
        <Link to='/clicker'>Clicker</Link>
      </li>
      <li>
        <Link to='/signup'>SignUpPage</Link>
      </li>
      <li>
        <Link to='/chat'>ChatPage</Link>
      </li>
    </ul>
  </nav>
  )
};

export default NavBar;
