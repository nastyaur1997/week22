function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">Суперсилы: {props.superpowers}</p>
        <p className="card-text">{props.info}</p>
        <img src={props.imgLink} alt={props.title} />
      </div>
    </div>
  );
}
export default Card;
