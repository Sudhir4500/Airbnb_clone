import Image from "next/image";

const PropertyListItem = () => {
  return (
    <div className=" cursor-pointer">
      <div className=" relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src="/beach_1.jpg"
          sizes="(max-width: 768px) 768px, (max-width: 1200px) 768px, 100vw"
          className="hover:scale-110 transition h-full object-cover w-full"
          alt="beach_house"
        />
      </div>
      <div className=" mt-2">
        <p className=" text-lg font-semibold">Property name</p>
      </div>
      <div className=" mt-2">
        <p className=" text-sm text-gray-500"><strong>$200</strong> Per night</p>

      </div>
    </div>
  );
};

export default PropertyListItem;
