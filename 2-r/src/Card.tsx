import type React from "react";

function Card({title, children}:{title:string, children:React.ReactNode}){
    return(
        <>
            <div className="flex items-center flex-col justify-center border-cyan-600 shadow-[10px_10px_0_0_rgba(0,0,0,1)]  shadow-cyan-100 border-2 border-r-4 border-b-4 m-5 w-[300px] h-auto p-2 bg-blue-50 hover:cursor-pointer hover:shadow-[-10px_-10px_0_0_rgba(0,0,0,1)] hover:shadow-cyan-100 transform transition-all duration-300">
                <h1 className="text-cyan-700 font-semibold text-2xl border-cyan-200 underline drop-shadow-md">{title}</h1>
                <div>{children}</div>
            </div>
        </>
    );
}
export default Card;