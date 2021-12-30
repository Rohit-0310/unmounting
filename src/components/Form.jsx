import { useEffect, useState } from "react";

export const Form = () =>{

    const [counter , setCounter] = useState(0);
    const [age ] = useState(0);

    console.log("Before useEffect");

    useEffect(() => {
        console.log("First Effect")
    }, [age] )

    useEffect(() => {
        console.log("Second useEffect");
    }, [counter] );

    console.log("After useEffect");

    return (
        <div>
            <h3>Counter: {counter} </h3>
            <button
                onClick={() => {
                    setCounter(counter - 10)
                }} >Remove 10</button>
            <button
                onClick={() => {
                    setCounter(counter + 10)
                }} >Add 10</button>

        </div>
    );
};

// https://fakestoreapi.com/products