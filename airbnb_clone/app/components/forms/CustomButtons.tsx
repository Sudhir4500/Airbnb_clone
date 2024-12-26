interface CustomButtonsprops{
    label:string;
    className?:string;
    onClick:()=>void;
}

const CustomButtons: React.FC<CustomButtonsprops> = ({
    label,
    onClick,
    className
}) => {
  return (
    <div 
    onClick={onClick}
    className= {`w-full py-4 bg-airbnb hover:bg-airbnbDark transition rounded-xl text-white cursor-pointer text-center ${className}`}>
     {label}
    </div>
  )
}

export default CustomButtons
