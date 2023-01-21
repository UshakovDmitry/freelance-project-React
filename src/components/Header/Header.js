import {Link}  from "react-router-dom";
import '../../index.css'
const Header = () => {
    return (


<header className="header">

<div className="header__wrapper">

  <Link to="/" className="h1">WEB CENTER</Link>

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
    )
}

export default Header;