import React from "react";

let accumulator = 0;
const Counter = (prop) =>{
    accumulator++;
    console.log(accumulator)
    return(
        <>
            <div className="p-4 d-flex bg-black text-white rounded-2" style={{fontSize: "40px"}}>
                <div className="p-5 m-2 bg-dark rounded-4 "><i className="far fa-clock"></i></div>
                <div className="p-5 m-2 bg-dark rounded-4">{Math.floor(accumulator/100000)%10}</div>
                <div className="p-5 m-2 bg-dark rounded-4">{Math.floor(accumulator/10000)%10}</div>
                <div className="p-5 m-2 bg-dark rounded-4">{Math.floor(accumulator/1000)%10}</div>
                <div className="p-5 m-2 bg-dark rounded-4">{Math.floor(accumulator/100)%10}</div>
                <div className="p-5 m-2 bg-dark rounded-4">{Math.floor(accumulator/10)%10}</div>
                <div className="p-5 m-2 bg-dark rounded-4">{Math.floor(accumulator%10)}</div> 
            </div>
        </>
    );
    
    
}

export default Counter;