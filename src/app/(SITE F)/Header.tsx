'use client';
import React, {useState} from 'react';
import LogoImg from '@/../public/assets/images/logo.svg';
import {AiOutlineClose} from "react-icons/ai";
import {HiOutlineBars3} from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
    // 👇️ Toggle class on click Show And Hide Menu Bar (Button)
    const [isMenuVisible, setMenuVisible] = useState(false);
    const handleClick = () => {
        const nav = document.getElementById('mobile_menu');
        if (nav) {
            if (isMenuVisible) {
                nav.classList.remove('show_menu');
            } else {
                nav.classList.add('show_menu');
            }
            setMenuVisible(!isMenuVisible);
        }
    };
    return (
        <>
            <section id="header-section" className="relative">
                <header className="py-4 lg:py-2 flex items-center h-[50px] shadow-sm bg-white w-full lg:relative z-50"
                        style={{
                            position: 'fixed',
                        }}
                >
                    <div className="container flex items-center justify-between">
                        <div className="logo">
                            <Link href='/' className="flex items-center gap-2">
                                <Image src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                <span className="font-[500] text-[18px]">Support</span>
                            </Link>
                        </div>

                        <div className="nav hidden lg:flex items-center text-[14px] gap-6">
                            <div className="one group">
                                <button
                                    className="text-primary hover:bg-primary hover:text-white rounded px-4 py-1 border text-[14px]">
                                    Contact Us
                                </button>
                            </div>

                            <div className="two group">
                                <button
                                    className="text-primary hover:bg-primary hover:text-white rounded px-4 py-1 border text-[14px]">
                                    Sign In
                                </button>
                            </div>
                        </div>

                        {/* Tab / Mobile Icons */}
                        <div className="lg:hidden tab-mobile flex items-center gap-2">
                            <div onClick={handleClick}
                                 className="text-center text-gray-700 hover:text-primary transition cursor-pointer">
                                <div className="text-2xl">
                                    {isMenuVisible ? <AiOutlineClose/> : <HiOutlineBars3/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Mobile Menu */}
                <div id="mobile_menu" className="block lg:hidden bg-white z-50 overflow-hidden w-full h-[100%]">
                    <div className="navbar-wrapper px-4 pt-20 space-y-1">
                        <div className="flex p-4 pt-0 profile">
                            <button
                                className="text-primary rounded hover:bg-primary hover:text-white px-4 py-1 border text-[14px]">
                                Contact Us
                            </button>
                        </div>
                        <div className="flex p-4 pt-0 profile">
                            <button
                                className="text-primary rounded hover:bg-primary hover:text-white px-4 py-1 border text-[14px]">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;