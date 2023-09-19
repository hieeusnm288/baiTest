import "./CardStyle.scss";

function CardDes({ img, name }) {
  return (
    <div className="card-des">
      <img src={img} />
      <p>{name}</p>
    </div>
  );
}

export default CardDes;
