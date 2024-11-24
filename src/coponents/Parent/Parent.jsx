import React, { useState } from "react";
import Child from "../Child/Child";
import Navbar from "../Navbar/Navbar";

export default function Parent() {
  let [counter, setcounter] = useState(1);

  function update() {
    counter++;
    setcounter(counter);
  }

  return (
    <>
      
      <Child counter={counter} update={update} />
    </>
  );
}
