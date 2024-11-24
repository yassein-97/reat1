
import React, { useState } from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';



export default function Home() {

  let  [counter, setcounter] = useState(1);
  function updateCounter(){
    
    counter ++;
    setcounter(counter);
    console.log(counter);
    
  }
  return (
    <>
    
    <h1 className='demo'>counter :{counter}</h1>
    <button onClick={updateCounter} className='bg-teal-600 p-3 rounded-lg' >Click</button>
    </>
  )
}
