import Image from "next/image";
const Categories=()=>{
    return(
        <div className=" pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className=" pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-100 hover:opacity-100">
                <Image src='/cat_icn.jpg'
                alt="Breakfast logo"
                width={20}
                height={20}
                />
                <span className=" text-xs">
                   Bed & Breakfasts
                </span>

            </div>
            <div className=" pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-100 hover:opacity-100">
                <Image src='/cat_icn.jpg'
                alt="Breakfast logo"
                width={20}
                height={20}
                />
                <span className=" text-xs">
                  villa
                </span>

            </div>
            <div className=" pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-100 hover:opacity-100">
                <Image src='/icn_category_beach.jpeg'
                alt="Breakfast logo"
                width={20}
                height={20}
                />
                <span className=" text-xs">
                   beach
                </span>

            </div>
            <div className=" pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-100 hover:opacity-100">
                <Image src='/cat_icn.jpg'
                alt="Breakfast logo"
                width={20}
                height={20}
                />
                <span className=" text-xs">
                 cottege
                </span>

            </div>
            <div className=" pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-100 hover:opacity-100">
                <Image src='/icn_category_beach.jpeg'
                alt="Breakfast logo"
                width={20}
                height={20}
                />
                <span className=" text-xs">
                   beach
                </span>

            </div>

          
        </div>

    )
}
export default Categories;