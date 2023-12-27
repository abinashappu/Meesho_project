function Nav() {
    return (
      <nav>
        <div className="nav">
          <div className="nav-1">
            <h1 id="logo">Meesho</h1>
            <input type="text" id="search" placeholder="search by product name" />
          </div>
          <div className="nav-2">
            <ul>
              <li>
                <h2>Download app</h2>
              </li>
              <li>
                <h2>Become a supplier</h2>
              </li>
              <li>
                <h2>Profile</h2>
              </li>
              <li>
                <h2>Card</h2>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  export default Nav;
  