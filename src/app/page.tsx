
import "tailwindcss";
import Calc from "./calc";


export default function Home() {
  return (
   <>
      <div className="w-full h-[100vh] bg-blue-950  flex justify-center items-center" >
        <Calc/>

      </div>
   </>
  );
}
