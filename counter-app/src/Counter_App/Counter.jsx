import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {

    const [count, setCount]=useState(0);
  return (
    <div className='ctnr'>
       <header className='title'>
        <h1>Counter App</h1>
         <h2>{count}</h2>
         </header>

<section className='btn-grp'>
        <button className='inc' onClick={()=>setCount(count+1)}>Increment</button>
        <button className='reset' onClick={()=>setCount(0)}>Reset</button>
        <button className='dec' onClick={()=>setCount(count-1)}>Decrement</button>

</section>

</div>
    
  )
}

export default Counter