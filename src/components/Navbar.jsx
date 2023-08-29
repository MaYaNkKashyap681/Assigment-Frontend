import React from 'react';
import logo from '../assets/logo.svg';
import { navLinksList } from '../constants/navurls';
import NavButtons from './Reusables/NavButtons';
import down from '../assets/down.svg';

const Navbar = () => {
    const renderNavLinks = () => {
        return navLinksList.map(({ text, isDropdown }, index) => (
            <li key={index} className="flex mx-2">
                <h4 className="text-greyx font-semibold text-opacity-60">{text}</h4>
                {isDropdown && <img src={down} className="w-[20px] mt-1 ml-2" alt="icon" />}
            </li>
        ));
    };

    return (
        <nav className="w-full py-4">
            <div className="flex justify-between items-center w-[80%] mx-auto">
                <div>
                    <img src={logo} alt="logo" className="w-[70%]" />
                </div>
                <ul className="flex items-center gap-1">{renderNavLinks()}</ul>
                <div className="flex justify-center gap-3">
                    <NavButtons
                        style="flex items-center justify-center text-sm uppercase font-bold border-greenx border-[1px] px-3 py-[0.4rem] rounded-md text-greenx font-custom1"
                        text="LOG IN"
                    />
                    <NavButtons
                        style="flex items-center justify-center uppercase text-sm bg-greenx text-white border-greenx border-[1px] px-3 py-[0.4rem] rounded-md font-bold font-custom1"
                        text="Start Free"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
