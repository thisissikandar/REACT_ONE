import React from 'react'
import { useState } from 'react'

const Textform = () => {
  const handleUpClick = () => {
    // console.log('UpperCase Was Clicked' +Text);
    let newText = Text.toUpperCase()
    setText(newText)
  }
  const handleLowClick = () => {
    // console.log('UpperCase Was Clicked' +Text);
    let newText = Text.toLowerCase()
    setText(newText)
  }

  const onChange = (e) => {
    // console.log('OnChange was Clicked')
    setText(e.target.value)
  }
  const [Text, setText] = useState('Enter Text here');
  return (
    <>
      <div className='container my-3'>
        <h2>Analizer for text</h2>

        <div className="mb-3">

          <textarea className="form-control" value={Text} onChange={onChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button type="button" onClick={handleUpClick} className="btn btn-primary m-2">Conver To UpperCase</button>
        <button type="button" onClick={handleLowClick} className="btn btn-primary m-2">Conver To LowerCase</button>
      </div>

      <div className="container">
        <h2>Summary</h2>
        <p>{Text.split(' ').length}word and {Text.length} Character</p>
        <p>{0.008*Text.split(' ').length} min</p>
      </div>
    </>
  )
}

export default Textform