import Footer from '../Footer/Footer.js'
import Header from '../Header/Header'
import {Outlet} from "react-router-dom";

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
     <Header />
      <main className="container">
      <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
 