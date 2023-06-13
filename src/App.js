import './App.css';
import Header from './components/Header.js';
import React, {useState} from 'react';
// object destructuring


function App() {
  const[num, setNum] = useState(0);
  // array destructuring
  // const arr = [1,2,4]
  // const [a,b,c] = arr;
  // const newarr = [1,2,setNum]
  // const [a,b,setNum] = newarr;

  const inc = (n) => {
    setNum(num+n); 
  }

  function dec(n) {
    setNum(num-n);  
  }

  return (
    <div className='App'>
      <Header />
      <div className='main'>
        {/* <h1 className='heading'>1</h1> */}
        <h1 className='heading'>{num}</h1>
        <div className='buttons'>
          
        {/* <button className='btn' onClick={inc}>increment</button>
        <button className='btn' onClick={dec}>decrement</button> */}

        {/* passing args to inc and dec - add callback () => */}
        <button className='btn' onClick={() => inc(2)}>increment</button>
        <button className='btn' onClick={() => dec(1)}>decrement</button>
        </div>
      </div>
    </div> 
  );
}

export default App;