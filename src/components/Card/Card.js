function Card(props) {
  return (
    <div className="card">
      <img className="card__img" src={props.src} />
      <h2 className="card__title">{props.title}</h2>
      <p className="card__paragraf">{props.p}</p>
      <div className={props.active ? "card__info-dis" : "card__info"}>
        <img className="card__icone" src={props.img} />
        <p className="card__icone-text">{props.info}</p>
      </div>
    </div>
  );
}

export default Card;
