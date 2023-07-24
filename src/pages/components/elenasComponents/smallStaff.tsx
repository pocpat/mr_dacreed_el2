import React from 'react'

const SmallStaff = () => {
  return (
    <div>smallStaff:
        <br></br>
        <div>
<h2 className='bg-primary-content font-bold text-neutral-500'>file input</h2>
<input type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
</div>


<div>
<h2 className='bg-primary-content font-bold text-neutral-500'>loading</h2>
<span className="loading loading-ring loading-lg"></span>
<span className="loading loading-infinity loading-lg"></span>
<span className="loading loading-spinner text-primary"></span>
<span className="loading loading-spinner text-secondary"></span>
<span className="loading loading-spinner text-accent"></span>
<span className="loading loading-spinner text-neutral"></span>
<span className="loading loading-spinner text-info"></span>
<span className="loading loading-spinner text-success"></span>
<span className="loading loading-spinner text-warning"></span>
<span className="loading loading-spinner text-error"></span>
</div>
<div>
<h2 className='bg-primary-content font-bold text-neutral-500'>steps</h2>
<ul className="steps">
  <li className="step step-info">Fly to moon</li>
  <li className="step step-info">Shrink the moon</li>
  <li className="step step-info">Grab the moon</li>
  <li className="step step-error" data-content="?">Sit on toilet</li>
</ul>


</div>















    </div>
  )
}

export default SmallStaff