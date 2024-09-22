import { useState } from "react";
import avatar from "/src/assets/avatar.jpg";
import htmlICO from "/src/assets/html.png";
import cssICO from "/src/assets/css.png";
import typescriptICO from "/src/assets/typescript.png";
import reactICO from "/src/assets/react.png";
import reduxICO from "/src/assets/redux.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <nav className="menu">
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
        </nav>
      </header>
      <main>
        <div className="home">
          <div className="personContainer">
            <div className="person">
              <img src={avatar} className="avatar"></img>
              <div className="personInfo">
                <div>Давид Сироджов</div>
                <div>React-разработчик</div>
              </div>
            </div>
          </div>

          <div className="about">
            <h3 className="skills">Навыки</h3>
            <div className="skillsImages">
              <img src={htmlICO} />
              <img src={cssICO} />
              <img src={typescriptICO} />
              <img src={reactICO} />
              <img src={reduxICO} />
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
