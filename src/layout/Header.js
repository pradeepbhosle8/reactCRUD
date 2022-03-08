
import React from 'react';
import {Link} from 'react-router-dom'


const Header = () => {
  return (
   
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">

<ul className="navbar-nav">
  <li className="nav-item">
    <Link className="nav-link" data-widget="pushmenu" to="#" role="button"><i className="fas fa-bars"></i></Link>
  </li>
  <li className="nav-item d-none d-sm-inline-block">
    <Link to="/" className="nav-link">Home</Link>
  </li>
  <li className="nav-item d-none d-sm-inline-block">
    <Link to="/about" className="nav-link">About</Link>
  </li>
  <li className="nav-item d-none d-sm-inline-block">
    <Link to="/contact" className="nav-link">Contact</Link>
  </li>
</ul>



</nav>
  
  );
}

export default Header;

