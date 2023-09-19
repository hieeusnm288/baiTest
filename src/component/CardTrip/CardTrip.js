import React from "react";
import { Rate } from "antd";
import moment from "moment/moment";
import "./CardTrip.scss";
function CardTrip({ img, price, name, des, rate, view, date }) {
  return (
    <div className="card-trips">
      <img src={img} />
      <p className="price">$ {price}</p>
      <div className="content">
        <p className="name">{name}</p>
        <p className="sub-name">{des}</p>
        <div className="rate-and-date">
          <div className="rate">
            <Rate disabled defaultValue={rate} /> {view} reviews
          </div>
          <div className="date">{moment(date, "YYYY-MM-DD").fromNow()}</div>
        </div>
      </div>
    </div>
  );
}

export default CardTrip;
