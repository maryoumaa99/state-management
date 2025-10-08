 "use client"

import { createContext, useState } from "react"

interface calcContexType {
    result : number ,
    clac: (type : string , a: number , b : number) => void
}

const calcContext = createContext< calcContexType | undefined > (undefined)
export default function ContextProvider({children} : {children : React.ReactNode}) {

    const [ result , setResult ] = useState<number>(0)
    const clac = (type :string, a : number , b : number) => {

        switch (type){
            case "sum" :
                setResult(a+b)
                break;
            
            case "sub" :
                setResult(a-b)
                break;
            
            case "div" :
                setResult(a/b)
                break;
            
            case "mul" :
                setResult(a*b)
                break;
            default :
                setResult(0)
        }
    }

    return (
        <calcContext.Provider value={{ result , clac }}>
            {children}
        </calcContext.Provider>
    )

}