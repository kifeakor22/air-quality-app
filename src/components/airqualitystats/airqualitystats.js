import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import pollutantsData from "./pollutants.json";

const Airquality = ({ aqi, dominentpol, iaqi }) => {
  let bgColor;
  const pollutants = pollutantsData[0];

  return (
    <>
      <div className="d-flex justify-content-center pollutant-container">
        <div className="card airstat order-first">
          <div className="aqi">Air Quality Index Score: {aqi}</div>
          <div className="aqi">Main Pollutant: {dominentpol}</div>
          {iaqi && (
            <div>
              {Object.keys(iaqi)
                .filter(
                  (key) =>
                    key !== "w" &&
                    key !== "t" &&
                    key !== "h" &&
                    key !== "p" &&
                    key !== "wg"
                )
                .map((key) => {
                  if (iaqi[key].v <= 50) {
                    bgColor = "var(--vgoodColor)";
                  } else if (iaqi[key].v >= 51) {
                    bgColor = "var(--fairColor)";
                  } else if (iaqi[key].v >= 101) {
                    bgColor = "var(--poorColor)";
                  } else if (iaqi[key].v >= 201) {
                    bgColor = "var(--vpoorColor)";
                  }
                  return (
                    
                    <div className="card">
                      <ul
                        className="list-group list-group-flush card-item"
                        style={{
                          listStyleType: "none",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: 0,
                        }}
                      >
                        <li key={key}>
                          {key}: {Math.floor(iaqi[key].v)}
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="fa-beat card-item"
                            style={{
                              color: bgColor,
                              border: "1px solid white",
                              borderRadius: "50%",
                            }}
                            title={`${key}: ${Math.floor(iaqi[key].v)}`}
                          />
                        </li>
                      </ul>
                    </div> 
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Airquality;
