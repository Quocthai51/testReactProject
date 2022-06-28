import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar(){
      return (
        <nav className="navBar navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="https://reactjs.org">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="https://reactjs.org">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://reactjs.org">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="https://reactjs.org">Action</a>
          <a className="dropdown-item" href="https://reactjs.org">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="https://reactjs.org">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="https://reactjs.org">Disabled</a>
      </li>
    </ul>
   
  </div>
</nav>


  

      );
}


export default NavBar;