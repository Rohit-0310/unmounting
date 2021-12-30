import { useEffect, useState } from "react"

export const Timer = () => {
    const [counter, setCounter] = useState(5);
    useEffect(() => {
        setInterval(() => {
            // setCounter(counter - 1);
            setCounter((p) => {
                if(p === 0) {
                    return 0;
                }
                return p-1;
            })
        }, 1000);
    }, []);
    return <li>Counter is : {counter} </li>
}