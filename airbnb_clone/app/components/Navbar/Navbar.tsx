import Image from "next/image";
import Link from "next/link";
import SearchFilters from './SearchFilters'
import Usernav from "./Usernav";
import AddProperty from "./AddProperty";

const Navbar= () => {
    return (
        <nav className=" w-full fixed top-0 left-0 py-6 border-b bg-white z-10 ">
            <div className=" max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/">
                    <Image src="/logo (1).png"
                    alt="logo of clone"
                    width={180}
                    height={38}
                    />
                    </Link>

                    <div className=" flex space-x-6">
                        <SearchFilters/>
                    </div>

                    <div className=" flex items-center space-x-6">
                    <AddProperty/>
                        <Usernav/>
                    </div>

                </div>

            </div>
        </nav>

    )
}

export default Navbar;