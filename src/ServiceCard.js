import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceCard(props) {
  const navigate = useNavigate();
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card p-3 shadow h-100">
        <img
          src={props.serviceimg}
          alt={props.altText}
          className="card-img-top mx-auto"
          style={{ height: "125px", width: "200px", backgroundSize: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.text}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary w-100" onClick={() => navigate(props.path)}>
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}


