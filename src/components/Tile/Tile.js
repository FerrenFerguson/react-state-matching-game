import React from "react";

import "./Tile.css";

const Tile = (props) => {
  const dynamicColor =
    props.selecteprops.matched ? { backgroundColor: props.color } : null;
  return (
    <div className="Tile" style={dynamicColor}>
      {props.selected || props.matched ? <props.svg /> } : null
    </div>
  );
};

export default Tile;
