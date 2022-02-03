import React from 'react';
import { Link } from 'react-router-dom';
import {GoMail, GoHome} from 'react-icons/go'
import {SiCodeproject} from 'react-icons/si'

const Nav = () =>{
  return (
  <div>
      <Link to="/projects">
          {/* <p>projects</p> */}
          
          <SiCodeproject/>
      </Link>
      <Link to="/contact-me">
      <GoMail/>
      </Link>
      <Link to="/">
          <GoHome/>
      </Link>
  </div>
  );
}

export default Nav;
