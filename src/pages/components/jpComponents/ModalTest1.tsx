import React, { useState } from "react";

const ModalTest1 = () => {
  // Step 2: Create a state variable to track the modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  // Step 3: Define the function to handle the onClick event
  const handleLinkClick = () => {
    setModalOpen(true);
  };

  // Step 4: Create the modal component
  const Modal = () => {
    return (
      <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
        <div className="rounded-md bg-white p-8">
          <h1>Modal Content</h1>
          <button
            className="mt-4 rounded-md bg-sky-500/75 px-4 py-2 text-white hover:bg-sky-400/50"
            onClick={() => setModalOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="mt-8">
        {/* Step 1: Render the link with the onClick handler */}
        <a
          href="#"
          className="m-4 rounded-md bg-sky-500/75 p-5 text-sm font-medium text-white hover:bg-sky-400/50"
          aria-current="page"
          onClick={handleLinkClick} // <-- Add the onClick handler here
        >
          Focus on Heading
        </a>

        {/* Render the modal conditionally */}
        {isModalOpen && <Modal />}
      </div>
    </div>
  );
};

export default ModalTest1;
