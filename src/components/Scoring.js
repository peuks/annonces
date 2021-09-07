import React, { useEffect, useState } from "react";


const Scoring = ({type, score}) => {

  return (
    <div className="energie">
      {["A", "B", "C", "D", "E", "F", "G"].map((e) => {
        return (
          <div
            className={`energie__item energie_item ${e} ${
              e == score
                ? "energie__item ener"
                : ""
            }`}
          >
            {e}
          </div>
        );
      })}
    </div>
    
  );
};

export default Scoring;
