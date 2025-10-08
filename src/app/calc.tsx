"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { div, mul, sub, sum } from "./store/cartSlices";

export default function Calc() {

    const [ firstNum , setFirstNum ] = useState(0)
    const [ SecondNum , setSecondNum ] = useState(0)
    const [ hasResult , setHasResult ] = useState(false)
    const result = useSelector((state : RootState) => state.calculation.value)
    const dipatch = useDispatch()

    // if we use CONTEXT
    // const context = useContext(calcContext)
    // if (!context) return null
    // const { restul , calc }  = context    

  return (
    <div className="calcCont bg-white/10 backdrop-blur-lg text-white w-[90%] max-w-md p-8 rounded-3xl shadow-[0_5px_20px_rgba(255,255,255,0.2)] border border-white/20 sm:flex-col">
      {/* Inputs */}
      <div className="inputs flex sm:flex-row gap-4 justify-center mb-8 flex-col  ">
        <input
          type="number"
          placeholder="First number"
          className="sm:w-43 w-[100%] p-2 rounded-xl bg-white/20 text-white text-center placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
          
          value={firstNum}
          onChange={ ((e) => setFirstNum(+e.target.value) )}
          // IF WE USE CONTEXT { calculate("sum" , firstNum , SecondNum )}
        />
        <input
          type="number"
          placeholder="Second number"
          className="sm:w-43 w-[100%]   p-2 rounded-xl bg-white/20 text-white text-center placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={SecondNum}
          onChange={((e) => setSecondNum(+e.target.value) )}
        />
      </div>

      {/* Buttons */}
      <div className="buttons flex flex-wrap justify-center gap-4">
        <button  onClick={()=> { 
          dipatch(sum({a : firstNum , b : SecondNum})) 
          setHasResult(true)
        } }
        className="px-6 py-2 rounded-xl bg-[#B5C7E7] text-blue-950 font-medium hover:bg-[#A8BCDF] transition">
          Sum
        </button>
        <button   onClick={()=>   { 
        dipatch(sub({a : firstNum , b : SecondNum}));
        setHasResult(true) }} 

        className="px-6 py-2 rounded-xl bg-[#EAD7E6] text-blue-950 font-medium hover:bg-[#DFC7DA] transition">
          Sub
        </button>
        <button  onClick={()=> { dipatch(div({a : firstNum , b : SecondNum}))
          setHasResult(true)}}
         className="px-6 py-2 rounded-xl bg-[#D6EADF] text-blue-950 font-medium hover:bg-[#C4E0D2] transition">
          Div
        </button>
        <button onClick={()=> {dipatch(mul({a : firstNum , b : SecondNum}))
        setHasResult(true)}}
         className="px-6 py-2 rounded-xl bg-[#F8E3C8] text-blue-950 font-medium hover:bg-[#F3D6B2] transition">
          Mul
        </button>
      </div>
      {hasResult && (
              <div className="result mt-[2vh] w-[100%] text-center ">
        <span >{result}</span>
      </div>
      )}

    </div>
  );
}
