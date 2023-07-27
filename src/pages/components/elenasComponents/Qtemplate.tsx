import React from 'react'

const Qtemplate = () => {
  return (
    <div className="border-box"
    style={{width: "100%", height: '100vh'}}>
        <h1>Title</h1>
        <textarea
        placeholder="Bio"
        className="textarea-bordered textarea textarea-xs w-full "
      ></textarea>
      <h1>Sub-heading</h1>
      <textarea
        placeholder="Bio"
        className="textarea-bordered textarea textarea-xs w-full"
      ></textarea>
        <h1>description</h1>
        <textarea
        placeholder="Bio"
        className="textarea-bordered textarea textarea-md w-full"
      ></textarea>

    </div>
  )
}

export default Qtemplate