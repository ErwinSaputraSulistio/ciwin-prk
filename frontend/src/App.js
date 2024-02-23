import './App.css'
import { useRef, useState } from 'react'
import NumberAPI from './services/api/Number'

const App = () => {
  const numberRef = useRef()
  const [result, setResult] = useState([])

  const generateNumber = async(action) => {
    const data = {
      number: numberRef.current.value
    }
    // This code can be refactored later to prevent DRY
    if(action === 'Triangle') {
      const result = await NumberAPI.Triangle(data)
      if(result.data.result) { setResult(result.data.result) }
    }
    else if(action === 'Odd') {
      const result = await NumberAPI.Odd(data)
      if(result.data.result) { setResult(result.data.result) }
    }
    else {
      const result = await NumberAPI.Prime(data)
      if(result.data.result) { setResult(result.data.result) }
    }
  }

  return (
    // This code below is also really ugly, can be splitted into few components
    // But for now, I'll leave it like this
    <div className='appForm'>
      <input placeholder='Input Angka' ref={ numberRef } type='number'/>
      <div className='buttomFormGroup'>
        <button 
          className='buttonForm' 
          onClick={ () => { generateNumber('Triangle') } }
        >
          Generate Segitiga
        </button>
        <button 
          className='buttonForm' 
          onClick={ () => { generateNumber('Odd') } }
        >
          Generate Ganjil
        </button>
        <button 
          className='buttonForm' 
          onClick={ () => { generateNumber('Prime') } }
        >
          Generate Prima
        </button>
      </div>
      <div>
        <h2>Result</h2>
        <div>
          {
            result.map((number, index) => {
              return(<div key={`number-${index}`}>{ number }</div>)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
