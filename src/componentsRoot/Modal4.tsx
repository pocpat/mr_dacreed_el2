import React from "react";

type Modal4Props = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal4: React.FC<Modal4Props> = ({ isVisible, onClose, children }) => {

  if (!isVisible) return null;
  const handleClose = () => {
    onClose();
  };

  const handleInnerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };


  return (
    <div
      className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleClose}
      id="wrapper"
    >
      <div className=" flex w-[600px]  flex-col" onClick={handleInnerClick}>
        {/* <button
          className="place-self-end rounded border-0 bg-red-500 px-6 py-2 text-xl text-white hover:bg-red-600 focus:outline-none "
          onClick={onClose}
        >
          X
        </button> */}

        <div className="flex h-[300px] flex-col items-center justify-center rounded-lg bg-white ">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Modal4;
