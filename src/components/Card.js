import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-items">
        <img className="card-img" src={props.img}  />
        <h1 className="card-name">{props.name}</h1>
        <h3 className="card-age">{props.age}</h3>
        <h3 className="card-email">{props.email}</h3>
        <button className="card-btn">Contact me</button>
        <button className="card-btn">About me</button>
      </div>
    </div>
  );
}
