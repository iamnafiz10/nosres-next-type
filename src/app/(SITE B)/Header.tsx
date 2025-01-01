"use client";
import React, {useState} from 'react';
import {usePathname} from 'next/navigation';
import Link from "next/link";
import {HiOutlineMenuAlt2, HiUserCircle} from "react-icons/hi";
import Image from "next/image";
import LogoImg from "@/../public/assets/images/logo.svg";
import {GoQuestion} from "react-icons/go";
import {
    HiOutlineArrowRightOnRectangle, HiOutlineBell, HiOutlineCircleStack, HiOutlineCreditCard,
    HiOutlineHome,
    HiOutlineIdentification,
    HiOutlineQuestionMarkCircle, HiOutlineShieldCheck
} from "react-icons/hi2";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsMenuOpen((prev: boolean) => !prev);
    };

    // 👇️ Toggle class on click Show And Hide Account (Icon)
    const [isAccountVisible, setAccountVisible] = useState<boolean>(false);
    const handleAccountClick = () => {
        const account: HTMLElement | null = document.getElementById('account_da_dropdown_menu');
        if (account) {
            if (isAccountVisible) {
                account.classList.remove('show-account-da-dropdown-menu');
            } else {
                account.classList.add('show-account-da-dropdown-menu');
            }
            setAccountVisible((prev: boolean) => !prev);
        }
    };

    const currentYear: number = new Date().getFullYear()

    // For menu active
    const pathname = usePathname();
    return (
        <>
            {/* Top Bar */}
            <nav
                className="fixed flex items-center h-[50px] top-0 z-50 w-full bg-white border-b border-gray-200">
                <div className="px-3 w-full py-2 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button onClick={toggleSidebar} type="button"
                                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                <span className="sr-only">Open sidebar</span>
                                <HiOutlineMenuAlt2 className="w-6 h-6"/>
                            </button>
                            <Link href="/" className="flex ms-2 gap-2 md:me-24">
                                <Image src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                <span
                                    className="font-[500] text-[18px] self-center whitespace-nowrap">Account</span>
                            </Link>
                        </div>

                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div className="flex items-center gap-4">
                                    <Link href='#' className="flex items-center gap-1">
                                        <GoQuestion/>
                                        <h4 className="text-[14px]">Help</h4>
                                    </Link>

                                    <div className="five">
                                        <div className="dropdown inline-block relative">
                                            <div onClick={handleAccountClick}
                                                 className="text-center mt-2 cursor-pointer text-gray-700 hover:text-primary transition relative">
                                                <HiUserCircle className="text-primary" size={35}/>
                                            </div>

                                            <div id="account_da_dropdown_menu"
                                                 className="account-dropdown-menu absolute text-gray-700 pt-1 for-account transition-all ease-linear duration-300 bg-white rounded shadow border">
                                                <div className="container">
                                                    <div className="px-3 py-3" role="none">
                                                        <Link href='/' className="flex box items-center gap-3">
                                                            <div className="one">
                                                                <HiUserCircle className="w-10 h-10 text-primary"/>
                                                            </div>
                                                            <div className="two">
                                                                <h4 className="text-[14px] font-[500]">John Doe</h4>
                                                                <p>@janedoe</p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <hr/>
                                                    <ul className="py-2" role="none">
                                                        <li>
                                                            <Link href='/'
                                                                  className="px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-100 hover:text-primary">
                                                                <HiOutlineQuestionMarkCircle size={25}/>
                                                                <div className="text-[14px]"
                                                                     role="menuitem">Help & Support
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href='/'
                                                                  className="px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-100 hover:text-primary">
                                                                <HiOutlineArrowRightOnRectangle size={25}/>
                                                                <div className="text-[14px]"
                                                                     role="menuitem">Sign Out
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <aside id="logo-sidebar"
                   className={`fixed top-0 ${isMenuOpen ? 'left-0' : '-left-[1000px]'} sm:left-0 z-40 w-64 h-screen pt-0 transition-all duration-300 ease-in-out border-r border-gray-200 sm:translate-x-0`}
                   aria-label="Sidebar">
                <div className="h-full px-3 pb-4 pt-20 overflow-y-auto bg-white">
                    <ul className="space-y-1 font-medium">
                        <li>
                            <div
                                className="flex items-center text-[14px] p-2 rounded-lg hover:bg-gray-100 group">
                                <HiUserCircle size={30}
                                              className="text-primary w-7 transition duration-75 group-hover:text-primary"/>
                                <span className="ms-3 font-semibold">John Doe</span>
                            </div>
                        </li>

                        <hr/>
                        <li>
                            <Link href='b-home' className="flex items-center p-2 rounded-lg hover:bg-gray-100 group">
                                <HiOutlineHome size={25}
                                               className={`w-7 transition duration-75 group-hover:text-primary ${pathname === '/b-home' ? 'text-primary' : ''}`}/>
                                <span className={`ms-3 ${pathname === '/b-home' ? 'font-semibold' : ''}`}>Home</span>
                            </Link>
                        </li>

                        <li>
                            <Link href='personal-info'
                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <HiOutlineIdentification size={25}
                                                         className={`w-7 transition duration-75 group-hover:text-primary ${pathname === '/information' ? 'text-primary' : ''}`}/>
                                <span className={`ms-3 ${pathname === '/information' ? 'font-semibold' : ''}`}>Personal Information</span>
                            </Link>
                        </li>

                        <li>
                            <Link href='security'
                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <HiOutlineShieldCheck size={25}
                                                      className={`w-7 transition duration-75 group-hover:text-primary ${pathname === '/security' ? 'text-primary' : ''}`}/>
                                <span
                                    className={`ms-3 ${pathname === '/security' ? 'font-semibold' : ''}`}>Security</span>
                            </Link>
                        </li>

                        <li>
                            <Link href='billing'
                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <HiOutlineCreditCard size={20}
                                                     className={`w-7 transition duration-75 group-hover:text-primary ${pathname === '/billing' ? 'text-primary' : ''}`}/>
                                <span
                                    className={`ms-3 ${pathname === '/billing' ? 'font-semibold' : ''}`}>Billing</span>
                            </Link>
                        </li>

                        <li>
                            <Link href='notification'
                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <HiOutlineBell size={20}
                                               className={`w-7 transition duration-75 group-hover:text-primary ${pathname === '/notification' ? 'text-primary' : ''}`}/>
                                <span
                                    className={`ms-3 ${pathname === '/notification' ? 'font-semibold' : ''}`}>Notifications</span>
                            </Link>
                        </li>

                        <li>
                            <Link href='data-privacy'
                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <HiOutlineCircleStack size={20}
                                                      className={`w-7 transition duration-75 group-hover:text-primary ${pathname === '/data-privacy' ? 'text-primary' : ''}`}/>
                                <span className={`ms-3 ${pathname === '/data-privacy' ? 'font-semibold' : ''}`}>Data & Privacy</span>
                            </Link>
                        </li>
                    </ul>

                    <div className="bottom-div absolute left-6 bottom-10">
                        <div className="flex space-x-2">
                            <Link href='/' className="text-[12px] hover:text-primary">Terms</Link>
                            <Link href='/' className="text-[12px] hover:text-primary">Privacy</Link>
                            <Link href='/' className="text-[12px] hover:text-primary">Support</Link>
                        </div>
                        <h6 className="mt-1 text-gray-500 text-[12px]">
                            © {currentYear} Nosres Inc. All rights reserved.
                        </h6>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Header;