import logo from '../images/logo.svg';
import { useState } from 'react';
import menuData from '../content/header-menu.json'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = menuData.map((item) =>
        <li className="text-slate-200 text-[15px] md:text-[18px] font-bold" key={item.id.toString()}>{item.title}</li>
    );

    return (
        <header className="header max-width py-10">
            <div className="container">
                <div className="flex items-center justify-between">
                <article className="flex items-center">
                    <img src={logo} alt="" />

                    <nav className="hidden md:block md:ml-11">
                    <ul className="flex items-start justify-start gap-7">
                        {menuItems}
                    </ul>
                    </nav>
                </article>

                {isOpen && (
                    <div className="md:hidden absolute left-5 right-5 top-[96px] rounded bg-slate-900 text-slate-200 text-center py-10 px-7 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 md:flex md:items-center">
                    <nav>
                        <ul className="flex flex-col items-center justify-center gap-[34px]">
                            {menuItems}
                        </ul>
                    </nav>
                    <ul className="flex flex-col items-center justify-center text-[15px] md:text-[18px] font-bold pt-8 mt-8 border-gray-500 border-t">
                        <li>
                            <button className="text-slate-400">Login</button>
                        </li>
                        <li className="mt-7 w-full">
                            <button className="btn px-12 py-3 rounded-full w-full">Sign Up</button>
                        </li>
                    </ul>
                    </div>
                )}

                <div className="hidden md:block">
                    <ul className="flex items-center ml-5 text-[15px] md:text-[18px] font-bold">
                    <li className="my-5 md:my-0 md:mr-5">
                        <button className="text-slate-400">Login</button>
                    </li>
                    <li>
                        <button className="btn px-12 py-3 rounded-full w-full">Sign Up</button>
                    </li>
                    </ul>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="uppercase text-sm tracking-wide md:hidden"
                >
                    {isOpen ? "Close" : "Menu"}
                </button>
                </div>
            </div>
        
      </header>
    )
}
