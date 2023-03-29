import React from "react";
import "./style.css";
import healthData from "./health.json";

const Health = ({ dominentpol }) => {
  const filteredData = healthData.filter((item) => item.id === dominentpol);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h3>Pollutants description</h3>
        {filteredData.map((item) => (
          <div
            className="card airstat"
            style={{ width: "18rem" }}
            key={item.id}
          >
            <ul
              className="list-group list-group-flush"
              style={{ listStyleType: "none" }}
            >
              <li>
                <span className="bold">{item.name}:</span> {item.about}
                <div className="risk">{item["health risk"]}</div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Health;
