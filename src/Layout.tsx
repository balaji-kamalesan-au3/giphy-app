// I was wondering about how to design the UI So I just went to giphy and designed something similar to it

// This Layout has the base Layout for the Home and Trending Page

import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Logo from "./Assets/logo-spin.gif";
import useDarkSide from "Controller/useDarkMode";
import { useState } from "react";

function Layout() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked : boolean) => {
        // @ts-ignore
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <div className="min-h-[100vh] dark:bg-[#181818] dark:text-white  ">
            <header className=" min-h-[70px] max-h-[75px] mx-[2%] px-[3%] border-b-[3px] border-b-black flex items-center justify-between   ">
                <Link to="/">
                <div className="flex items-center  cursor-pointer">
                    <img
                        src={Logo}
                        className="h-[90px] mr-[5px]"
                        alt="Giphy Logo"
                    />
                    <div className="text-[30px] font-[700]">
                        GIPHY
                    </div>
                </div>
                </Link>
                <div>
                <label className=" inline-flex items-center cursor-pointer">
                    <div className="flex  flex-col justify-center items-center ">
                        <div className="relative">
                            <input type="checkbox" value="" className="sr-only peer" onChange={(e) => toggleDarkMode(e.target.checked)}  checked={darkSide}/>
                            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" >

                            </div>
                        </div>
                        <div className="ms-3 pt-[5px] text-sm font-[800] text-gray-900 dark:text-gray-300">{darkSide?"Dark Mode":"Light Mode"}</div>
                        </div>
                </label>
                </div>
            </header>
            <div className="my-[10px]">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
