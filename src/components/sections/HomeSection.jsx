import "./../../styles/sectionsStyles/HomeSectionStyles.css";
import avatar from "/src/assets/avatar.jpg";
import htmlICO from "/src/assets/html.png";
import cssICO from "/src/assets/css.png";
import typescriptICO from "/src/assets/typescript.png";
import reactICO from "/src/assets/react.png";
import reduxICO from "/src/assets/redux.png";

const HomeSection = () => {
  return (
    <section className="home-section">
      <div className="home">
        <div className="person-container">
          <div className="person">
            <img src={avatar} className="person__avatar"></img>
            <div className="person__info">
              <div>Давид Сироджов</div>
              <div>React-разработчик</div>
            </div>
          </div>
        </div>
        <div className="about">
          <h3 className="skills">Навыки</h3>
          <div className="skills__images">
            <img src={htmlICO} />
            <img src={cssICO} />
            <img src={typescriptICO} />
            <img src={reactICO} />
            <img src={reduxICO} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
