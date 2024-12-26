'use client'

import { Content } from "next/font/google";

interface Modalprops{
    label:string;
    content:React.ReactElement;


}


const Modal:React.FC<Modalprops> = ({
    label,
    content
}) => {
  return (
    <div className=" flex  items-center justify-center fixed inset-0 z-50 bg-black/60">
        <div className=" relative w-[90%] md:w-[80%] lg:w-[700px] my-6 mx-auto h-auto">
            <div className={` translate duration-600 h-full translate-y-0 opacity-100`}>
                <div className=" rounded-xl w-full h-auto relative flex flex-col bg-white  ">
                        <header className=" h-[60px] relative flex items-center p-6 rounded-t justify-center border-b  border-y-gray-300">
                            <div className="p-3 absolute left-0 hover:bg-gray-300 rounded-full cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            </div>
                    <h2 className=" text-xl font-bold">{label}</h2>
                    </header>
                    <section className=" p-6">
                       {content}
                    </section>
                </div>

            </div>
ggg
        </div>
    </div>
  )
}

export default Modal
