import React from 'react'
// import test from "../../assets/Images/img-5.jpg"

export default function Child(props) {
    // console.log(props.counter);
    console.log(props);
    
    let {counter, update} = props;
    // let arr = [1,2,3];
    // let [x,y,z] = arr;

    // let person = {
    //     name: "ahmed",
    //     age: 25
    // }

    // let {name, age} = person;
    // console.log(name, age);
    

    // console.log(x,y,z);
    
    
  return (
    <>
    <h3>counter : {counter}</h3>
    {/* <img src={test} alt="" /> */}
    <img src="../../../src/assets/Images/img-5.jpg" alt="" />
    <button onClick={function(){update()}} className='bg-teal-600 p-3 rounded-lg' >Click</button>
    </>
  )
}
