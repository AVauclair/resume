import { useState } from "react";
import avatar from "/src/assets/avatar.jpg";
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
            <a>Проекты</a>
          </li>
        </nav>
      </header>
      <main>
        <div className="home">
          <div className="person">
            <img src={avatar} className="avatar"></img>
            <div>Давид Сироджов</div>
            <div>React-разработчик</div>
          </div>
          <div className="about">
            <h3>Обо мне</h3>
            <div className="info">
              <p>Возраст: 22</p>
              <p>Навыки: HTML, CSS, TypeScript, React, Redux</p>
              <p>Образование: техник-программист</p>{" "}
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
