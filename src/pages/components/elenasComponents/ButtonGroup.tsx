import React from "react";

const ButtonGroup = () => {
  const [isMultipleChoiceClicked, setMultipleChoiceClicked] = React.useState(false);
  const [isOpenEndedClicked, setOpenEndedClicked] = React.useState(false);
  const [isDragDropClicked, setDragDropClicked] = React.useState(false);
  const [isTrueFalseClicked, setTrueFalseClicked] = React.useState(false);
  const [isSequenceClicked, setSequenceClicked] = React.useState(false);
  const [isMultimediaClicked, setMultimediaClicked] = React.useState(false);

  return (
    <>
      <div className="btn-group btn-group-vertical">
        <button className="btn" onClick={() => setMultipleChoiceClicked(!isMultipleChoiceClicked)}>
          Multiple Choice
        </button>
        {isMultipleChoiceClicked && <div>Multiple Choice</div>}

        <button className="btn" onClick={() => setOpenEndedClicked(!isOpenEndedClicked)}>
          Open-ended
        </button>
        {isOpenEndedClicked && <div>Open-ended</div>}

        <button className="btn" onClick={() => setDragDropClicked(!isDragDropClicked)}>
          Drag/Drop
        </button>
        {isDragDropClicked && <div>Drag/Drop</div>}

        <button className="btn" onClick={() => setTrueFalseClicked(!isTrueFalseClicked)}>
          True/False
        </button>
        {isTrueFalseClicked && <div>True/False</div>}

        <button className="btn" onClick={() => setSequenceClicked(!isSequenceClicked)}>
          Sequence
        </button>
        {isSequenceClicked && <div>Sequence</div>}

        <button className="btn" onClick={() => setMultimediaClicked(!isMultimediaClicked)}>
          Multimedia
        </button>
        {isMultimediaClicked && <div>Multimedia</div>}
      </div>
    </>
  );
};

export default ButtonGroup;

