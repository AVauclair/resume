import "./../styles/HeaderStyles.css";

const Header = () => {
  return (
    <header>
      <nav className="menu">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Образование</a>
          </li>
          <li>
            <a>Стаж</a>
          </li>
          <li>
            <a>Проекты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
