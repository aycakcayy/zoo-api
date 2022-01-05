import React from 'react';
import routes from '../../routes';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-dark ">
        <Link className="navbar-brand text-light" to="/">
          Zoo
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {routes
            .filter((item) => item.isNav)
            .map((item, index) => (
              <a
                className="navbar-nav nav-item nav-link text-light"
                key={index}
              >
                <Link to={item.path}>{item.title}</Link>
              </a>
            ))}
        </div>
      </nav>
    </div>
  );
}
export default Nav;
