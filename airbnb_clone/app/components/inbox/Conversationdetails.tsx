'use client';
import CustomButtons from "../forms/CustomButtons"


const Conversationdetails = () => {
  return (
    <>
    <div className=" max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className=" w-[80%] py-4 px-6 rounded-xl bg-gray-200">
    <p className=" font-bold text-gray-500">Sudhir</p>
    <p className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className=" w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
    <p className=" font-bold text-gray-500">James</p>
    <p className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>

    <div className=" mt-4 py-4 px-6 flex border border-gray-300 rounded-xl space-x-4">
    <input
    type="text"
    placeholder="Type your message"
    className=" w-full p-2 rounded-xl bg-gray-200"
    />

    <CustomButtons
    label="Send"
    onClick={()=> console.log("clicked")}
    className=" w-[100px]"/>
    </div>
</>
  )
}

export default Conversationdetails
