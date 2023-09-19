import "./CardNew.scss";
import moment from "moment";
function CardNew({ img, date, name, content }) {
  return (
    <div className="card-new">
      <img src={img} />
      <div className="content-card">
        <p className="date">{moment(date).format("LL")}</p>
        <p className="name">{name}</p>
        <p className="content">{content}</p>
        <p className="read-more">{`Read More >`}</p>
      </div>
    </div>
  );
}

export default CardNew;
