import Reservation from "@/app/components/Properties/Reservation"
import Image from "next/image"

const PropertyDetailPage = () => {
  return (
    <main className=" max-w-[1500px] mx-auto px-6 pb-6">
        <div className=" w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
            <Image
             fill
            src='/beach_1.jpg'
            alt="properties_img"
           className=" w-full h-full object-cover"
            />
        </div>
        <div className=" mt-4 grid grid-cols-1 md:grid-cols-5 gap-4 ">
            <div className=" py-6 pr-6 col-span-3">
                <h1 className="mb-4 text-4xl">Property name</h1>
                <span className=" mb-6 block text-lg text-gray-600"> 4 Guest -2 bedrooms-1 bathroom</span>
                <hr/>
                <div className="  py-6 flex  items-center space-x-4">
                <Image
                    src="/hj.jpg"
                    width={50} // Set a default width
                    height={50} // Ensure height matches width for a square shape
                    alt="Profile Picture"
                     layout="fixed"
                    className=" w-[45px] h-[45px] object-cover rounded-full overflow-hidden"
                />
                    <p><strong>kajal</strong> is your house owner</p>

                </div>
                <hr/>
                <p className=" mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsa, perferendis ullam autem aperiam amet laboriosam quisquam iure quia doloremque culpa! Officia, error.</p>
            </div>
            <Reservation/>

        </div>

    </main>
    )
}

export default PropertyDetailPage
