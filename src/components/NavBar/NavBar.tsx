import "./NavBar.css";

export const NavBar = () => {
  return (
    <header>
      <div className="header-container">
        <a href="/">
          <img src="../../../public/images/logo.png" alt="Logo" />
        </a>

        <nav>
          <input type="checkbox" id="menu-hamburguer" />
          <label htmlFor="menu-hamburguer">
            <div className="menu">
              <span className="hamburguer"></span>
            </div>
          </label>

          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Experience">Experience</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
