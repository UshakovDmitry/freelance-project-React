import React from "react";
import Card from "../components/Card/Card";
import logo from "../images/Girl.png";
import img_banner from "../images/Banner.png";
import img_1 from "../images/1.png";
import img_2 from "../images/2.png";
import img_3 from "../images/3.png";
import home_icone from "../images/home.svg";
import office_icone from "../images/office.svg";




const Home = () => {
  return (
    <div>
      <div>
      <div className="div1">
        <h1 className="title">Вебстудии в России</h1>

        <img className="img" title={"CASH ROOM"} p={"Новосибирск"} src={logo} />

        <div className="studios">
          <h2 className="h2">Вебстудии в твоем городе</h2>
          <button className="button2">Выбрать город</button>
        </div>
      </div>

      <div className="banner">
        <img
          className="banner__img"
          title={"CASH ROOM"}
          p={"Новосибирск"}
          src={img_banner}
        />
      </div>
      <h2 className="h3">Лучшие вебстудии России</h2>

      <div className="main__grid">
        <Card
          img={home_icone}
          info={"удаленно"}
          title={"CASH ROOM"}
          p={"Новосибирск"}
          // active={isActive}
          src={img_1}
        />
        <Card
          img={office_icone}
          info={"в офисе"}
          title={"BEAR BRICK"}
          p={"Санкт-Петербург"}
          // // active={isActive}
          src={img_2}
        />
        <Card
          img={home_icone}
          info={"удаленно"}
          title={"Gmodels"}
          p={"Новосибирск"}
          // active={isActive}
          src={img_3}
        />
        <Card
          img={office_icone}
          info={"в офисе"}
          title={"CASH ROOM"}
          p={"Москва"}
          src={img_1}
        />
        <Card
          img={office_icone}
          info={"в офисе"}
          title={"BEAR BRICK"}
          p={"Санкт-Петербург"}
          src={img_2}
        />
        <Card
          img={home_icone}
          info={"удаленно"}
          title={"Gmodels"}
          p={"Москва"}
          src={img_3}
        />
        <Card
          img={office_icone}
          info={"в офисе"}
          title={"CASH ROOM"}
          p={"Новосибирск"}
          src={img_1}
        />
        <Card
          img={home_icone}
          info={"удаленно"}
          title={"BEAR BRICK"}
          p={"Санкт-Петербург"}
          src={img_2}
        />
        <Card
          img={office_icone}
          info={"в офисе"}
          title={"Gmodels"}
          p={"Новосибирск"}
          src={img_3}
        />
        <Card
          img={office_icone}
          info={"в офисе"}
          title={"CASH ROOM"}
          p={"Москва"}
          src={img_1}
        />
        <Card
          img={home_icone}
          info={"удаленно"}
          title={"BEAR BRICK"}
          p={"Санкт-Петербург"}
          src={img_2}
        />
        <Card
          img={office_icone}
          info={"в офисе"}
          title={"Gmodels"}
          p={"Новосибирск"}
          src={img_3}
        />
      </div>
    </div>
    </div>
  );
};

export default Home;
