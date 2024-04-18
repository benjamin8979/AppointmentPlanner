import React from "react";

export const Tile = ({name, description}) => {

  const objectArray = Object.values(description).filter((item) => item !== name);
  return (
    <>
        <div className="tile-container">
          <p className="tile-title">{name}</p>
        </div>
        <div>
          {objectArray.map((item) => <p className="tile">{item}</p>)}
        </div>
    </>

  );
};
