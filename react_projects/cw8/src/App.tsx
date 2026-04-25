import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import './App.css'

function App() {
  let info = '';

  return (
    <>
    <div className="container mt-5">
      <h1>hello world</h1>
      <button onClick={(e) => {
        // console.log(e)
        // alert('kliknieto przycisk!')

          info = new Date().toLocaleTimeString();
          console.log(info)
        }} 
        className='btn btn-primary'> Kliknij
      </button>
      <hr />
      <p></p>
    </div>
    </>
  )
}

export default App
