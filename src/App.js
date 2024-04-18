
import { useState } from 'react';
import './App.css';
function App() {

  const [value,setvalue]=useState("")

  return (
    <>
      <div className='Container'>
        <h1>Calculater</h1>

        <div className='Calculater'>
          <div className='display'>
            <input type='text' value= {value}></input>
          </div>

          <div className='buttons'>

            <div className='number1'>
              <input type='button' value='AC'onClick={e =>setvalue("")}></input>
              <input type='button' value='DE'onClick={e =>setvalue(value.slice(0,-1))}></input>
              <input type='button' value='.'onClick={e =>setvalue(value+e.target.value)}></input>
              <input type='button' value='/'onClick={e =>setvalue(value+e.target.value)}></input>
            </div>
            <div className='number2'>
              <input type='button' value='7' onClick={e =>setvalue(value+e.target.value)}></input>
              <input type='button' value='8'onClick={e =>setvalue(value+e.target.value)}></input>
              <input type='button' value='9'onClick={e =>setvalue(value+e.target.value)}></input>
              <input type='button' value='+'onClick={e =>setvalue(value+e.target.value)}></input>
            </div>
            <div className='number3'>
              <input type='button' value='4'onClick={e =>setvalue(value+e.target.value)}></input>
              <input type='button' value='5'onClick={e =>setvalue(value+e.target.value)}></input>
              <input type='button' value='6'onClick={e =>setvalue(value+e.target.value)}></input>
              <input type='button' value='-'onClick={e =>setvalue(value+e.target.value)}></input>
            </div>
            <div className='number4'>
              <input type='button' value='1'onClick={e =>setvalue(value+e.target.value)}></input>
              <input type='button' value='2' onClick={e =>setvalue(value+e.target.value)}></input>
              <input type='button' value='3' onClick={e =>setvalue(value+e.target.value)}></input>
              <input type='button' value='*'onClick={e =>setvalue(value+e.target.value)}></input>
            </div>
            <div className='number5'>
              <input type='button' value='0'onClick={e =>setvalue(value+e.target.value)}></input>
              <input type='button' value='00'onClick={e =>setvalue(value+e.target.value)}></input>
              <input type='button' value='%'onClick={e =>setvalue(value+e.target.value)}></input>
              <input type='button' value='=' onClick={e =>setvalue(eval(value))}></input>
            </div>

          </div>


        </div>
      </div>
    </>
  );
}

export default App;
