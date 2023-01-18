
import {Outlet, Link } from "react-router-dom";

// import Studios from '../../pages/Studios.js'
// import Cities from '../../pages/Cities.js'
// import Vacancies from '../../pages/Vacancies.js'
// import ForModels from '../../pages/ForModels.js'
// import About from '../../pages/About.js'

// import './Layout.css';
import '../../index.css'
 
const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="h1">WEB CENTER</h1>


        <div className="header__links">
          <Link to="/studios">Студии</Link>
          <Link to="/cities">Города</Link>
          <Link to="/vacancies">Вакансии</Link>
          <Link to="/formodels">Для моделей</Link>
          <Link to="/about">О нас</Link>
          <button className="header__button">Подобрать студию</button>
        </div>

        </div>
      </header>
    
      <main className="container">
      <Outlet />
      </main>
     
      <footer>Footer</footer>

    </>
  );
};

export default Layout;
 