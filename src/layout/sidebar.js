import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (

      
<aside className="main-sidebar sidebar-light-primary elevation-4">

<a href="index3.html" className="brand-link">
  {/* <img src="%PUBLIC_URL%/img/AdminLTELogo.png} " alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style="opacity: .8" /> */}
  <span className="brand-text font-weight-light">Dashboard</span>
</a>


<div className="sidebar">

  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
    <div className="image">
      {/* <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"> */}
    </div>
    <div className="info">
      <Link to="/" className="d-block">Pradeep Bhosle</Link>
      {/* <a href='{#}'>Pradeep Bhosle</a> */}
    </div>
  </div>


  <div className="form-inline">
    <div className="input-group" data-widget="sidebar-search">
      <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
      <div className="input-group-append">
        <button className="btn btn-sidebar">
          <i className="fas fa-search fa-fw"></i>
        </button>
      </div>
    </div>
  </div>


  <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

      <li className="nav-item menu-open">
        <Link to="/" className="nav-link active">
          <i className="nav-icon fas fa-tachometer-alt"></i>
          <p>
            Dashboard
            <i className="right fas fa-angle-left"></i>
          </p>
        </Link>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <Link to="./role" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Role</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="./users" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>User</p>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="./index3.html" className="nav-link active">
              <i className="far fa-circle nav-icon"></i>
              <p>Dashboard v3</p>
            </Link>
          </li> */}
        </ul>
      </li>
      
      
      
      
      
      
      
      
      
     
    
  
    </ul>
  </nav>

</div>

</aside>

  );
}

export default Sidebar;
