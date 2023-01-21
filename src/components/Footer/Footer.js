import {Link}  from "react-router-dom";
import '../../index.css'
const Footer = () => {
    return (
<footer>
<div className="footer">
  <h2 className="footer__h2">WEBСAM CENTER</h2>
  <ul className="header__links header__links_green">
    <li><Link to="/studios" className="link">Студии</Link></li>
    <li><Link to="/cities" className="link">Города</Link></li>
    <li><Link to="/vacancies" className="link">Вакансии</Link></li>
    <li><Link to="/formodels" className="link">Для моделей</Link></li>
    <li><Link to="/about" className="link">О нас</Link></li>
 </ul>
  <ul className="footer__list-1">
    <li className="footer__li">Вебкам студия Москвы</li>
    <li className="footer__li">Вебкам студия Санкт-Петербурга</li>
    <li className="footer__li">Вебкам студия Казани</li>
    <li className="footer__li">Вебкам студия Сочи</li>
  </ul>
  <ul className="footer__list-1">
    <li className="footer__li">Вебкам студия Перми</li>
    <li className="footer__li">Вебкам студия Калининграда</li>
    <li className="footer__li">Вебкам студия Подмывалово</li>
    <li className="footer__li">Вебкам студия Алматы</li>
  </ul>
  <img className="" />
  <p className="">R</p>
</div>
</footer>
    )
}

export default Footer;