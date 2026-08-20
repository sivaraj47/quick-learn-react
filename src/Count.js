import React from 'react';   
import {useState} from 'react';
import "./count.css";

function Count(){
const [count, setCount] = useState(0);

return (
    <>
    <div className="count">
    <h1>{count}</h1>
    <div className="buttons">
    <button onClick={() => setCount(count + 1)}>count</button>
    <button onClick={() => setCount(count - 1)}>decrease</button>
     <button onClick={() => setCount(0)}>Reset</button>
     </div></div>
    </>
);


}
 export default Count;
 