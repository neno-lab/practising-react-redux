import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const useStyle = {
    color: '#f15b2a',
  };

  return (
    <nav>
      <NavLink to='/' activeStyle={useStyle} exact>
        Home
      </NavLink>
      {' | '}
      <NavLink to='/courses' activeStyle={useStyle}>
        Courses
      </NavLink>
      {' | '}
      <NavLink to='/about' activeStyle={useStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
