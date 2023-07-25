import React from "react";

const ButtonGroup = () => {
    const [clicked, setClicked] = React.useState(false)
  return (
    <>
      <div className="btn-group btn-group-vertical">
        <button className="btn "
        // onClick={() => setClicked(!clicked)}
        > Multi-choice</button>
        <button className="btn">Open-ended</button>
        <button className="btn">Drag/Drop</button>
        <button className="btn">True/False</button>
        <button className="btn">Sequence</button>
        <button className="btn">Multimedia</button>
      </div>
    </>
  );
};

export default ButtonGroup;
