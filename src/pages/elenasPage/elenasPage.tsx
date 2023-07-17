import React from 'react'
import TextEditor from '../components/elenasComponents/TextEditor'
import TextWave from '../components/elenasComponents/TextWave'
import Bird from '../components/elenasComponents/Bird'
const elenasPage = () => {
  return (
    <div>
    <h1>Elenas Components</h1>
<TextEditor/>
<p className="text-pink-500">need to figure out how to start and to end with the wavy shape</p>
<TextWave />
<Bird/>


   </div>
  )
}

export default elenasPage