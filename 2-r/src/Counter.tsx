import { useState, type ChangeEvent } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const chg = (event: ChangeEvent<HTMLInputElement>) => {
        setCount(Number(event.target.value));
    }
    return(
        <input type='text' value={count} onChange={chg}></input>
    );
}
export default Counter;