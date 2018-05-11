import React from "react";

const CrossIcon = ({ color, onClick }) => {
  return (
    <span className="fui-cross" style={{ color }} onClick={() => onClick()} />
  );
};

export default CrossIcon;
