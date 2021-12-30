import { useEffect, useState } from "react"

export const Timer = () => {
    const [counter, setCounter] = useState(5);
    useEffect(() => {
        setInterval(() => {
            // setCounter(counter - 1);
            setCounter((p) => p + 1);
        }, 1000);
    }, []);
    return <li>Counter is : {counter} </li>
}