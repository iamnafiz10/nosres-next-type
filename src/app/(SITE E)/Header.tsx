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
                <header className="py-4 flex items-center h-[50px] lg:py-2 shadow-sm bg-white w-full lg:relative z-50"
                        style={{
                            position: 'fixed',
                        }}
                >
                    <div className="container flex items-center justify-between">
                        <div className="logo">
                            <Link href='/' className="flex items-center gap-2">
                                <Image src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                <span className="font-[500] text-[18px]">Legal</span>
                            </Link>
                        </div>

                        <div className="nav hidden lg:flex items-center text-[14px] gap-6">
                            <div className="one group">
                                <Link href='#'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Ethics and Compliance
                                </Link>
                            </div>
                            <div className="one group">
                                <Link href='#'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Terms
                                </Link>
                            </div>
                            <div className="one group">
                                <Link href='#'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Privacy Policy
                                </Link>
                            </div>
                            <div className="one group">
                                <Link href='#'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Terms of Sale
                                </Link>
                            </div>
                            <div className="one group">
                                <Link href='#'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Seller Terms
                                </Link>
                            </div>
                            <div className="one group">
                                <Link href='#'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Other Policies
                                </Link>
                            </div>
                            <div className="one group">
                                <Link href='#'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Support
                                </Link>
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
                    <div className="navbar-wrapper px-4 pt-20 space-y-5">
                        <details className="group pb-0 p-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                <Link href='#'>Jobs</Link>
                            </summary>
                        </details>
                        <details className="group px-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                <Link href='#'>Terms</Link>
                            </summary>
                        </details>
                        <details className="group px-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                <Link href='#'>Privacy Policy</Link>
                            </summary>
                        </details>
                        <details className="group px-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                <Link href='#'>Terms of Sale</Link>
                            </summary>
                        </details>
                        <details className="group px-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                <Link href='#'>Seller Terms</Link>
                            </summary>
                        </details>
                        <details className="group px-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                <Link href='#'>Other Policies</Link>
                            </summary>
                        </details>
                        <details className="group px-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                <Link href='#'>Support</Link>
                            </summary>
                        </details>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;