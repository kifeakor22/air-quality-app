import React from "react";
import "./style.css";
import healthData from "./health.json";

const Health = ({ dominentpol }) => {
  const filteredData = healthData.filter((item) => item.id === dominentpol);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        {filteredData.map((item) => (
          <div
            style={{ width: "18rem" }}
            key={item.id}
          >
            <div className="risk mb-3">
              <strong>{item.name}:</strong><br></br> 
              {item["health risk"]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Health;
