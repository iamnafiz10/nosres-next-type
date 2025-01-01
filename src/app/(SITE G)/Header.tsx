'use client';
import React, {useState} from 'react';
import LogoImg from "@/../public/assets/images/logo.svg";
import {IoIosArrowDown} from "react-icons/io";
import bsImg1 from "@/../public/assets/images/bs1.svg";
import bsImg2 from "@/../public/assets/images/bs2.svg";
import bsImg3 from "@/../public/assets/images/bs3.svg";
import {HiUserCircle} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";
import {HiOutlineBars3} from "react-icons/hi2";
import {Modal} from "flowbite-react";
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

    // 👇️ Toggle class on click Show And Hide Account (Icon)
    const [isAccountVisible, setAccountVisible] = useState(false);
    const handleAccountClick = () => {
        const account = document.getElementById('account_dropdown_menu');
        if (account) {
            if (isAccountVisible) {
                account.classList.remove('show-account-dropdown-menu');
            } else {
                account.classList.add('show-account-dropdown-menu');
            }
            setAccountVisible(!isAccountVisible);
        }
    };

    const [openModal, setOpenModal] = useState(false);

    // Search Text
    const [searchText, setSearchText] = useState('');

    const handleClearText = () => {
        setSearchText('');
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
                                <span className="font-[500] text-xl">Business</span>
                            </Link>
                        </div>

                        <div className="hidden lg:flex search-bar relative">
                            <input
                                type="text"
                                className="border text-[14px] border-gray-300 rounded pl-10 py-1 focus:outline-none focus:border-primary focus:ring-0"
                                placeholder="Search..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                            {searchText && (
                                <div
                                    className="absolute right-0 inset-y-0 flex items-center cursor-pointer"
                                    onClick={handleClearText}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="-ml-1 mr-3 h-4 w-4 text-gray-400 hover:text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </div>
                            )}
                            <div className="absolute left-0 inset-y-0 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 ml-3 text-gray-400 hover:text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="nav hidden lg:flex items-center text-[14px] gap-6">
                            <div className="zero group">
                                <Link href='#'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Overview
                                </Link>
                            </div>

                            <div className="one group">
                                <Link href='/'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Solutions
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
                                                    <Image src={bsImg1} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Sell on Nosres
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Open a store and reach customers from all over
                                                            the world.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={bsImg2} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Nosres Fulfillment
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Scale your business by getting orders to customers{`'`}
                                                            homes faster and safer.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={bsImg3} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Nosres Ads
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Reach and engage customers when they
                                                            are searching for products, brands, etc.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="two group">
                                <Link href='/'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Getting Started
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
                                                    <Image src={bsImg1} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Start Selling
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Open a store and reach customers from all over
                                                            the world.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={bsImg2} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Join Nosres Fulfillment
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Scale your business by getting orders to customers{`'`}
                                                            homes faster and safer.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={bsImg3} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Create an Ad
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Reach and engage customers when they
                                                            are searching for products, brands, etc.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="three group">
                                <Link href='#'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Support
                                </Link>
                            </div>

                            <div className="fore">
                                <div className="dropdown inline-block relative">
                                    <div onClick={handleAccountClick}
                                         className="text-center mt-2 cursor-pointer text-primary transition relative">
                                        <HiUserCircle size={35}/>
                                    </div>

                                    <div id="account_dropdown_menu"
                                         className="account-dropdown-menu absolute text-gray-700 pt-1 for-account transition-all ease-linear duration-300 bg-white rounded shadow border">
                                        <div className="container">
                                            <div
                                                className="col flex items-center px-2 h-[85px]">
                                                <div className="flex items-center gap-3">
                                                    <HiUserCircle size={70} className="text-primary"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-semibold text-[14px]">
                                                            Nosres Account
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <p className="mt-2">
                                                <Link href='#' className="text-primary">
                                                    Sign in
                                                </Link> to your Nosres Account or <Link href='#'
                                                                                        className="text-primary">
                                                create
                                            </Link> one. A Nosres account gives you access to
                                                all Nosres services.
                                            </p>
                                            <div className="flex justify-start text-center">
                                                <Link href='/'
                                                      className="mt-2 w-[120px] py-2 flex text-[14px] items-center justify-center gap-2 border rounded text-primary hover:bg-primary hover:text-white hover:border-primary">
                                                    Learn More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                        <div className="m-4 search-bar flex lg:hidden relative">
                            <input
                                type="text"
                                className="border w-full text-[14px] border-gray-300 rounded pl-10 py-1 focus:outline-none focus:border-primary focus:ring-0"
                                placeholder="Search nosres.com"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                            {searchText && (
                                <div
                                    className="absolute right-0 inset-y-0 flex items-center cursor-pointer"
                                    onClick={handleClearText}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="-ml-1 mr-3 h-4 w-4 text-gray-400 hover:text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </div>
                            )}
                            <div className="absolute left-0 inset-y-0 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 ml-3 text-gray-400 hover:text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>

                        <details className="group pb-0 p-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                <Link href='#'>Overview</Link>
                            </summary>
                        </details>

                        <details className="group px-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                Solutions
                                <IoIosArrowDown
                                    className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-180"/>
                            </summary>
                            <ul className="mt-4 space-y-4">
                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Sell on Nosres</Link>
                                </li>

                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Nosres Fulfillment</Link>
                                </li>

                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Nosres Ads</Link>
                                </li>
                            </ul>
                        </details>

                        <details className="group px-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                Getting Started
                                <IoIosArrowDown
                                    className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-180"/>
                            </summary>
                            <ul className="mt-4 space-y-4">
                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Start Selling</Link>
                                </li>

                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Join Nosres Fulfillment</Link>
                                </li>

                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Create an Ad</Link>
                                </li>
                            </ul>
                        </details>

                        <Link href='#' onClick={() => setOpenModal(true)}
                              className="w-full px-4 text-center text-gray-700 hover:text-primary transition relative">
                            <div
                                className="border-b border-gray-300 pl-4 pb-3 text-[14px] font-normal flex gap-2 items-center">
                                <span>Account</span>
                                <HiUserCircle size={22}/>
                            </div>
                        </Link>

                        {/* Mobile Account Modal */}
                        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                            <Modal.Header></Modal.Header>
                            <Modal.Body>
                                <div className="container">
                                    <div
                                        className="col flex items-center px-2 h-[85px]">
                                        <div className="flex items-center gap-3">
                                            <HiUserCircle size={70}/>
                                            <div className="text">
                                                <h2 className="text-[#252C32] font-semibold text-[14px]">
                                                    Nosres Account
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <p className="mt-2">
                                        <Link href='#' className="text-primary">
                                            Sign in
                                        </Link> to your Nosres Account or <Link href='#' className="text-primary">
                                        create
                                    </Link> one. A Nosres account gives you access to
                                        all Nosres services.
                                    </p>
                                    <div className="flex justify-start text-center">
                                        <Link href='/'
                                              className="mt-2 w-[120px] py-2 flex text-[14px] items-center justify-center gap-2 border rounded text-primary hover:bg-primary hover:text-white hover:border-primary">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;