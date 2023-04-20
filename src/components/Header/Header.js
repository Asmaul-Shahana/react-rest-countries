import React from 'react';

const Header = (props) => {
    return (
        <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container ">
    <a className="navbar-brand" href="App.js">REST Countries</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="App.js">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="App.js">Countries</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://restcountries.com/v3.1/all">All list</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

            <h1>A Visit to Every Country in the World</h1>
            <h3>Total Countries: {props.length}</h3>
        </div>
    );
};

export default Header;