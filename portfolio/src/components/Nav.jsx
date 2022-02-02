import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
  <div>
      <Link to="/projects">
          <p>projects</p>
      </Link>
  </div>
  );
}

export default Nav;
