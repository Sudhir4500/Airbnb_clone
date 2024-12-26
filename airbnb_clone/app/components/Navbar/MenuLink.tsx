'use client';
interface MenuLinkprops{
    label:string;
    onclick:()=>void;
}

const MenuLink: React.FC<MenuLinkprops> = ({
    label,
    onclick
}) => {
  return (
    <div 
    onClick={onclick}
    className=" px-5 py-4 hover:bg-gray-100 transition">
      {label}
    </div>
  )
}

export default MenuLink
