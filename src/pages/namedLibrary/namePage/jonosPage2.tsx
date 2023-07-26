import React from "react";

const jonosPage2 = () => {
  return (
    <div>
      <div className="w-100 grid grid-cols-3 gap-4 p-4">
        <div className="col-span-1 bg-gray-400">
          <h1 className="text-white">Left content goes here</h1>
        </div>
        <div className="col-span-1 bg-gray-600">
          <h1 className="text-white">Middle content goes here</h1>
        </div>
        <div className="col-span-1 bg-gray-800">
          <h1 className="text-white">Right content goes here</h1>
        </div>
      </div>
    </div>
  );
};

export default jonosPage2;

// <div>
//   <div
//     className="grid grid-cols-3 gap-4 bg-red-400 "
//     style={{ width: "100vw" }}
//   >
//     <div className="col-span-15 h-80 bg-gray-900" style={{ width: "20%" }}>
//       <h1 className="text-white">Left content goes here</h1>
//     </div>
//     <div className="col-span-70 h-80 bg-gray-800" style={{ width: "150%" }}>
//       <h1 className="text-white">Middle content goes here</h1>
//     </div>
//     <div className="col-span-15 h-80 bg-gray-700" style={{ width: "20%" }}>
//       <h1 className="text-white">Right content goes here</h1>
//     </div>
//   </div>
// </div>
