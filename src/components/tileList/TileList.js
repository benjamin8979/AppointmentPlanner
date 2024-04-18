import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({items}) => {
  return (
    <div>
        <ul>
          {
            items.map((item) =>
              <li><Tile name={item.name} description={item.description}/></li>
            )
          }
        </ul>
    </div>
  );
};
