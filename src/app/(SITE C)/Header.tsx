'use client';
import React, {useState} from 'react';
import {AiOutlineClose} from "react-icons/ai";
import {IoIosArrowDown} from "react-icons/io";
import {HiOutlineBars3} from "react-icons/hi2";

import WhoImg1 from '@/../public/assets/images/job/culture.svg';
import WhoImg2 from '@/../public/assets/images/job/benefits.svg';

import UbImg1 from '@/../public/assets/images/job/internship.svg';
import UbImg2 from '@/../public/assets/images/job/recent-graduate.svg';
import LogoImg from '@/../public/assets/images/logo.svg';
import Link from "next/link";
import Image from "next/image";
function Header() {
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
                                <span className="font-[500] text-[18px]">Careers</span>
                            </Link>
                        </div>

                        <div className="nav hidden lg:flex items-center text-[14px] gap-6">
                            <div className="one group">
                                <Link href='/'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Jobs
                                </Link>
                            </div>

                            <div className="two group">
                                <Link href='/'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Life at Nosres
                                    <IoIosArrowDown className="icon transform group-hover:rotate-180 transition"/>
                                </Link>

                                {/* Dropdown Mega Menu */}
                                <div
                                    className="for-who-we-are absolute invisible group-hover:visible max-h-0 group-hover:max-h-[200px] transition-all ease-linear duration-300 top-full left-0 right-0 overflow-hidden w-full bg-white border">
                                    <div className="container">
                                        <div className="grid grid-cols-3 gap-2 h-[102px] pt-2 pb-0">
                                            <Link href='/about'
                                                  className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={WhoImg1} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Culture
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Learn about our vision, mission, core values,
                                                            and work ethics.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={WhoImg2} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Benefits
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Learn what types of benefits we provide our
                                                            employees and their loved ones.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="three group">
                                <Link href='/'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Pathway Programs
                                    <IoIosArrowDown className="icon transform group-hover:rotate-180 transition"/>
                                </Link>

                                {/* Dropdown Mega Menu */}
                                <div
                                    className="for-who-we-are absolute invisible group-hover:visible max-h-0 group-hover:max-h-[102px] transition-all ease-linear duration-300 top-full left-0 right-0 overflow-hidden w-full bg-white border">
                                    <div className="container">
                                        <div className="grid grid-cols-3 gap-2 h-[200px] pt-2">
                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={UbImg1} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Internship Program
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Careers opportunities for current undergraduate
                                                            and graduate students enrolled in university programs.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={UbImg2} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Recent Graduate Program
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Careers opportunities for recent graduates from
                                                            qualifying educational institutions.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="fore group">
                                <Link href='/'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Blog
                                </Link>
                            </div>

                            <div className="five group">
                                <button
                                    className="text-primary hover:bg-primary hover:text-white rounded px-4 py-1 border text-[14px]">
                                    Create a Profile
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
                                Life at Nosres
                                <IoIosArrowDown
                                    className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-180"/>
                            </summary>
                            <ul className="mt-4 space-y-4">
                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='#'>Culture</Link>
                                </li>
                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='#'>Benefits</Link>
                                </li>
                            </ul>
                        </details>

                        <details className="group px-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                Pathway Programs
                                <IoIosArrowDown
                                    className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-180"/>
                            </summary>
                            <ul className="mt-4 space-y-4">
                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='#'>Internship Program</Link>
                                </li>
                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='#'>Recent Graduate Program</Link>
                                </li>
                            </ul>
                        </details>

                        <details className="group px-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                <Link href='#'>Blog</Link>
                            </summary>
                        </details>

                        <div className="flex p-4 pt-0 profile">
                            <button
                                className="text-primary rounded hover:bg-primary hover:text-white px-4 py-1 border text-[14px]">
                                Create a Profile
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
        ;
}

export default Header;