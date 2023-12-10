import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";


const Navbar = () => {
    const [show,setShow]=useState(false);

    const showHandler=()=>{
        setShow(!show)
    };


    return (
        <div className="w-full h-[90px] bg-slate-900">
            {/* container */}
            <div className="container max-w-screen-2xl h-full mx-auto p-4 text-white flex items-center justify-between">
             {/* logo */}
             <div>
                <h1 className="capitalize text-lg md:text-4xl font-bold">logo</h1>
             </div>
             {/* list */}
             <div className="hidden md:flex">
                <ul className="flex items-center text-white">
                    <li className="list">Home</li>
                    <li className="list">About</li>
                    <li className="list">Setting</li>
                    <button className="btn">LOGO2</button>
                </ul>
             </div>
             {/* hamburger menu */}
             <div onClick={showHandler} className="block md:hidden">
                {show ? <HiOutlineX fontSize={30} color="#fff" className="text-white"/>:<HiMenu fontSize={30} color="#fff" className="text-white"/>}
             </div>
             {/* mobile menu */}
             <div className={show ? "bg-slate-800 w-full absolute left-0 top-[90px] flex justify-center items-center text-center transition-all duration-500 ease-in-out md:hidden":"absolute top-[-100%]"}>
             <ul>
                    <li className="list">Home</li>
                    <li className="list">About</li>
                    <li className="list">Setting</li>
                    <button className="btn m-8">LOGO2</button>
                </ul>
             </div>
            </div>
        </div>
    );
}

export default Navbar;

