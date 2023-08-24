import React, { useState } from 'react'

const Component = () => {
    const [input, setInput] = useState('')
  return (
    <div >
        <h1 className='bg-green-900 z-7'>Component</h1>
<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='Title'
/>
<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='subHeading'
/>

<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='description'
/>

<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='question'
/>

<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='answer1'
/>

<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='answer2'
/>

<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='answer3'
/>

<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='answer4'
/>

<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='answer5'
/>


<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='answer6'
/>


<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='answer5'
/>


<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='guidance'
/>







    </div>
  )
}

export default Component