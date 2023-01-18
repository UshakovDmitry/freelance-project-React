
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

         <ul className="header__links">
            <li><Link to="/studios" className="link">Студии</Link></li>
            <li><Link to="/cities" className="link">Города</Link></li>
            <li><Link to="/vacancies" className="link">Вакансии</Link></li>
            <li><Link to="/formodels" className="link">Для моделей</Link></li>
            <li><Link to="/about" className="link">О нас</Link></li>
         </ul>

         <button className="header__button">Подобрать студию</button>

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
 