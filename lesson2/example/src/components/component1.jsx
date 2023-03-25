
import { useState } from "react";
import component2 from "./component2";


const Component1 = ()=>{

    const [number, setNumber] = useState(2);
    const countAdd = () => {
        return setNumber(number + 2);
    }
    const countMinus = () =>{
        return setNumber(number - 3)
    }


    return(
        <div>
            <h1>Count = {number}</h1>
            <button onClick={countAdd}>+</button>
            <button onClick={countMinus}>-</button>
            
        <component2/>
        </div>
    )

}

export default Component1















































// import { useState } from "react";


// const Component1 = () => {
//     const [count, setCount] = useState(0);

//     const handleCount = () =>{
//         return setCount(count - 1)
//     }
//     const handleCountAdd = () =>{
//         return setCount(count + 1)
//     }
//     return(
//         <div>
        
//             <h1>Count={count}</h1>
//             <button onClick={handleCount}>Ayir</button>
//             <button onClick={handleCountAdd}>Qo'sh</button>
           
            

//         </div>
//     )
// }

// export default Component1;