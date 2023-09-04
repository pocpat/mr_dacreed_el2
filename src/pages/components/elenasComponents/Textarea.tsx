import React from "react";

const Textarea = () => {
  return (
    <>
      <h2 className="bg-primaryd-content font-bold text-neutral-500">
        Textarea
      </h2>
      {/* xs */}
      <textarea
        placeholder="Bio"
        className="textarea textarea-bordered textarea-xs w-full max-w-xs"
      ></textarea>
      {/* sm */}
      <textarea
        placeholder="Bio"
        className="textarea textarea-bordered textarea-sm w-full max-w-xs"
      ></textarea>
      {/* md */}
      <textarea
        placeholder="Bio"
        className="textarea textarea-bordered textarea-md w-full max-w-xs"
      ></textarea>
      {/* lg */}
      <textarea
        placeholder="Bio"
        className="textarea textarea-bordered textarea-lg w-full max-w-xs"
      ></textarea>
      {/* blue */}
      <textarea className="textarea textarea-info" placeholder="Bio"></textarea>
      {/* green */}
      <textarea
        className="textarea textarea-success"
        placeholder="Bio"
      ></textarea>
      {/* orange */}
      <textarea
        className="textarea textarea-warning"
        placeholder="Bio"
      ></textarea>
      {/* pink */}
      <textarea
        className="textarea-secondaryd textarea"
        placeholder="Bio"
      ></textarea>
      {/* purple */}
      <textarea
        className="textarea-primaryd textarea"
        placeholder="Bio"
      ></textarea>
      {/* With form control and labels */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your bio</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Bio"
        ></textarea>
        <label className="label">
          <span className="label-text-alt">Your bio</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </div>
    </>
  );
};

export default Textarea;
