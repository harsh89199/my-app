import React, { useEffect, useState } from 'react'

const Couter = () => {
    const [count,setCount]= useState(0);
   useEffect(() => {
    console.log("Count updated:", count);
  }, [count]); 

  return (
    <div>
<h1>header :{count} </h1>
<button onClick={()=>setCount(count+1) }>Increment</button>
<button onClick={()=> setCount(0)}>Reset</button>

    </div>
  )
}

export default Couter