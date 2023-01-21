import Button from "../components/Button/Button";
import minibanner from '../minibanner.png'
import icone from '../images/X - clear-filter.png'

const Studios = () => {
  return (
    <>
      <h1 className="h1__page">Студии</h1>

      <div className="button__wrapper">
        <Button bgcolor={"FFFFFF"} text={"Выбрать город"} />
        <Button bgcolor={"37f69b"} text={"Вакансии в студиях"} />
      </div>
      <div className="banner__wrapper">
        <img src={minibanner} />
        <img src={minibanner} />
      </div>
      <h2 className="studios__h2">Лучшие студии России</h2>
      <div className="button__wrapper2">
      <Button bgcolor={"FFFFFF"} color={"8F9AA0"} text={"Город"} />
      <Button bgcolor={"FFFFFF"} color={"8F9AA0"} text={"Тип вакансии"} />
      <Button bgcolor={"FFFFFF"} color={"8F9AA0"} text={"Возраст"} />
      <Button bgcolor={"FFFFFF"} color={"8F9AA0"} text={"Пол"} />
      <Button bgcolor={"FFFFFF"} color={"8F9AA0"} text={"Операторы"} />
      <Button bgcolor={"FFFFFF"} color={"8F9AA0"} text={"Оплата игрушек"} />
      <Button bgcolor={"FFFFFF"} color={"8F9AA0"} text={"Продвижение за счет студии"} />
      <div className="clear_filter">
        <img src={icone} />
        <a className="clear__text">Очистить фильтр</a>
      </div>
      
      </div>
     
     
    </>
  );
};

export default Studios;
