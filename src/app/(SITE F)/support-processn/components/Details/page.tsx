'use client';
import React, {useEffect, useRef, useState} from "react";
import {RxPlus} from "react-icons/rx";
import supportImgOne from '@/../public/assets/images/support/sp1.svg';
import supportImgTwo from '@/../public/assets/images/support/sp2.svg';
import supportImgThree from '@/../public/assets/images/support/sp3.svg';
import supportImgFive from '@/../public/assets/images/support/sp5.svg';
import {HiChevronRight} from "react-icons/hi2";
import {HiOutlineChatBubbleLeftRight, HiOutlineEnvelope} from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import {Modal} from "flowbite-react";

const Page = () => {
    const [activeTab, setActiveTab] = useState('createAccount');

    const handleListItemClick = (tabName: React.SetStateAction<string>) => {
        setActiveTab(tabName);
    };
    // Search Text
    const [searchText, setSearchText] = useState('');

    const handleClearText = () => {
        setSearchText('');
    };

    // Country change popup
    const [openCountryModal, setOpenCountryModal] = useState<boolean>(false);

    // ------------------ Country Select ------------------//
    const [selectedOptionCountry, setSelectedOptionCountry] = useState<string>('');
    const [isOptionsVisibleCountry, setIsOptionsVisibleCountry] = useState<boolean>(false);

    const selectBoxRefCountry = useRef<HTMLDivElement>(null);

    const handleOptionClickCountry = (option: string) => {
        setSelectedOptionCountry(option);
        toggleOptionsVisibilityCountry();
    };

    const toggleOptionsVisibilityCountry = () => {
        setIsOptionsVisibleCountry(!isOptionsVisibleCountry);
    };
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            // @ts-ignore
            if (selectBoxRefCountry.current && !selectBoxRefCountry.current.contains(event.target as Node)) {
                setIsOptionsVisibleCountry(false);
            }
        };

        // @ts-ignore
        document.addEventListener('click', handleOutsideClick);

        return () => {
            // @ts-ignore
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);
    return (
        <>
            <section id="support-process-section">
                <div className="container py-10">
                    {activeTab === 'createAccount' && (
                        <div className="flex items-center gap-2 pb-4 text-[14px]">
                            <Link href='#' className="cursor-pointer text-primary hover:underline">Nosres
                                Support</Link> <HiChevronRight
                            className="text-black"/>
                            <Link href='#' className="text-primary hover:underline"> Nosres Account</Link>
                            <HiChevronRight className="text-black"/>
                            <Link href='#' className="text-primary hover:underline">Account
                                Registration</Link>
                            <HiChevronRight className="text-black"/>
                            <span className="text-[#828D9E]">Create a Nosres Account</span>
                        </div>
                    )}

                    {activeTab === 'confirmAccount' && (
                        <div className="flex items-center gap-2 pb-4 text-[14px]">
                            <Link href='#' className="cursor-pointer text-primary hover:underline">Nosres
                                Support</Link> <HiChevronRight
                            className="text-black"/>
                            <Link href='#' className="text-primary hover:underline"> Nosres Account</Link>
                            <HiChevronRight className="text-black"/>
                            <Link href='#' className="text-primary hover:underline">Account
                                Registration</Link>
                            <HiChevronRight className="text-black"/>
                            <span className="text-[#828D9E]">Confirm Your Account</span>
                        </div>
                    )}

                    {activeTab === 'signInSignOut' && (
                        <div className="flex items-center gap-2 pb-4 text-[14px]">
                            <Link href='#' className="cursor-pointer text-primary hover:underline">Nosres
                                Support</Link> <HiChevronRight
                            className="text-black"/>
                            <Link href='#' className="text-primary hover:underline"> Nosres Account</Link>
                            <HiChevronRight className="text-black"/>
                            <Link href='#' className="text-primary hover:underline">
                                Account Management
                            </Link>
                            <HiChevronRight className="text-black"/>
                            <span className="text-[#828D9E]">
                                            Sign In and Sign Out
                                        </span>
                        </div>
                    )}

                    {activeTab === 'AdjustAccount' && (
                        <div className="flex items-center gap-2 pb-4 text-[14px]">
                            <Link href='#' className="cursor-pointer text-primary hover:underline">Nosres
                                Support</Link> <HiChevronRight
                            className="text-black"/>
                            <Link href='#' className="text-primary hover:underline"> Nosres Account</Link>
                            <HiChevronRight className="text-black"/>
                            <Link href='#' className="text-primary hover:underline">
                                Account Management
                            </Link>
                            <HiChevronRight className="text-black"/>
                            <span className="text-[#828D9E]">
                                            Adjust Account Settings
                                        </span>
                        </div>
                    )}

                    {activeTab === 'AdjustNotification' && (
                        <div className="flex items-center gap-2 pb-4 text-[14px]">
                            <Link href='#' className="cursor-pointer text-primary hover:underline">Nosres
                                Support</Link> <HiChevronRight
                            className="text-black"/>
                            <Link href='#' className="text-primary hover:underline"> Nosres Account</Link>
                            <HiChevronRight className="text-black"/>
                            <Link href='#' className="text-primary hover:underline">
                                Account Management
                            </Link>
                            <HiChevronRight className="text-black"/>
                            <span className="text-[#828D9E]">
                                            Adjust Notifications
                                        </span>
                        </div>
                    )}

                    {activeTab === 'UnderstandLockedAccount' && (
                        <div className="flex items-center gap-2 pb-4 text-[14px]">
                            <Link href='#' className="cursor-pointer text-primary hover:underline">Nosres
                                Support</Link> <HiChevronRight
                            className="text-black"/>
                            <Link href='#' className="text-primary hover:underline"> Nosres Account</Link>
                            <HiChevronRight className="text-black"/>
                            <Link href='#' className="text-primary hover:underline">
                                Account Management
                            </Link>
                            <HiChevronRight className="text-black"/>
                            <span className="text-[#828D9E]">
                                            Understand Locked Accounts
                                        </span>
                        </div>
                    )}

                    {activeTab === 'UnderstandBannedAccount' && (
                        <div className="flex items-center gap-2 pb-4 text-[14px]">
                            <Link href='#' className="cursor-pointer text-primary hover:underline">Nosres
                                Support</Link> <HiChevronRight
                            className="text-black"/>
                            <Link href='#' className="text-primary hover:underline"> Nosres Account</Link>
                            <HiChevronRight className="text-black"/>
                            <Link href='#' className="text-primary hover:underline">
                                Account Management
                            </Link>
                            <HiChevronRight className="text-black"/>
                            <span className="text-[#828D9E]">
                                            Understand Banned Accounts
                                        </span>
                        </div>
                    )}

                    {activeTab === 'keepAccountSecure' && (
                        <div className="flex items-center gap-2 pb-4 text-[14px]">
                            <Link href='#' className="cursor-pointer text-primary hover:underline">Nosres
                                Support</Link> <HiChevronRight
                            className="text-black"/>
                            <Link href='#' className="text-primary hover:underline"> Nosres Account</Link>
                            <HiChevronRight className="text-black"/>
                            <Link href='#' className="text-primary hover:underline">
                                Account Security
                            </Link>
                            <HiChevronRight className="text-black"/>
                            <span className="text-[#828D9E]">
                                            Keep Your Account Secure
                                        </span>
                        </div>
                    )}

                    {activeTab === 'twoFectorAuth' && (
                        <div className="flex items-center gap-2 pb-4 text-[14px]">
                            <Link href='#' className="cursor-pointer text-primary hover:underline">Nosres
                                Support</Link> <HiChevronRight
                            className="text-black"/>
                            <Link href='#' className="text-primary hover:underline"> Nosres Account</Link>
                            <HiChevronRight className="text-black"/>
                            <Link href='#' className="text-primary hover:underline">
                                Account Security
                            </Link>
                            <HiChevronRight className="text-black"/>
                            <span className="text-[#828D9E]">
                                            Manage Two-Factor Authentication
                                        </span>
                        </div>
                    )}

                    {activeTab === 'ControlSearchEngine' && (
                        <div className="flex items-center gap-2 pb-4 text-[14px]">
                            <Link href='#' className="cursor-pointer text-primary hover:underline">Nosres
                                Support</Link> <HiChevronRight
                            className="text-black"/>
                            <Link href='#' className="text-primary hover:underline"> Nosres Account</Link>
                            <HiChevronRight className="text-black"/>
                            <Link href='#' className="text-primary hover:underline">
                                Account Privacy
                            </Link>
                            <HiChevronRight className="text-black"/>
                            <span className="text-[#828D9E]">
                                            Control Search Engine Indexing
                                        </span>
                        </div>
                    )}

                    {activeTab === 'LearnAboutData' && (
                        <div className="flex items-center gap-2 pb-4 text-[14px]">
                            <Link href='#' className="cursor-pointer text-primary hover:underline">Nosres
                                Support</Link> <HiChevronRight
                            className="text-black"/>
                            <Link href='#' className="text-primary hover:underline"> Nosres Account</Link>
                            <HiChevronRight className="text-black"/>
                            <Link href='#' className="text-primary hover:underline">
                                Account Privacy
                            </Link>
                            <HiChevronRight className="text-black"/>
                            <span className="text-[#828D9E]">
                                            Learn About Data Collection
                                        </span>
                        </div>
                    )}

                    {activeTab === 'FindAndDownload' && (
                        <div className="flex items-center gap-2 pb-4 text-[14px]">
                            <Link href='#' className="cursor-pointer text-primary hover:underline">Nosres
                                Support</Link> <HiChevronRight
                            className="text-black"/>
                            <Link href='#' className="text-primary hover:underline"> Nosres Account</Link>
                            <HiChevronRight className="text-black"/>
                            <Link href='#' className="text-primary hover:underline">
                                Account Privacy
                            </Link>
                            <HiChevronRight className="text-black"/>
                            <span className="text-[#828D9E]">
                                            Find and Download Data
                                        </span>
                        </div>
                    )}

                    {activeTab === 'ReportUnderage' && (
                        <div className="flex items-center gap-2 pb-4 text-[14px]">
                            <Link href='#' className="cursor-pointer text-primary hover:underline">Nosres
                                Support</Link> <HiChevronRight
                            className="text-black"/>
                            <Link href='#' className="text-primary hover:underline"> Nosres Account</Link>
                            <HiChevronRight className="text-black"/>
                            <Link href='#' className="text-primary hover:underline">
                                Account Privacy
                            </Link>
                            <HiChevronRight className="text-black"/>
                            <span className="text-[#828D9E]">
                                            Report Underage Users
                                        </span>
                        </div>
                    )}

                    {activeTab === 'DeactivateNosresAccount' && (
                        <div className="flex items-center gap-2 pb-4 text-[14px]">
                            <Link href='#' className="cursor-pointer text-primary hover:underline">Nosres
                                Support</Link> <HiChevronRight
                            className="text-black"/>
                            <Link href='#' className="text-primary hover:underline"> Nosres Account</Link>
                            <HiChevronRight className="text-black"/>
                            <Link href='#' className="text-primary hover:underline">
                                Account Privacy
                            </Link>
                            <HiChevronRight className="text-black"/>
                            <span className="text-[#828D9E]">
                                            Deactivate Your Nosres Account
                                        </span>
                        </div>
                    )}

                    {activeTab === 'DeleteNosresAccount' && (
                        <div className="flex items-center gap-2 pb-4 text-[14px]">
                            <Link href='#' className="cursor-pointer text-primary hover:underline">Nosres
                                Support</Link> <HiChevronRight
                            className="text-black"/>
                            <Link href='#' className="text-primary hover:underline"> Nosres Account</Link>
                            <HiChevronRight className="text-black"/>
                            <Link href='#' className="text-primary hover:underline">
                                Account Privacy
                            </Link>
                            <HiChevronRight className="text-black"/>
                            <span className="text-[#828D9E]">
                                            Delete Your Nosres Account
                                        </span>
                        </div>
                    )}

                    {activeTab === 'ChangeResetPassword' && (
                        <div className="flex items-center gap-2 pb-4 text-[14px]">
                            <Link href='#' className="cursor-pointer text-primary hover:underline">Nosres
                                Support</Link> <HiChevronRight
                            className="text-black"/>
                            <Link href='#' className="text-primary hover:underline"> Nosres Account</Link>
                            <HiChevronRight className="text-black"/>
                            <Link href='#' className="text-primary hover:underline">
                                Account Recovery
                            </Link>
                            <HiChevronRight className="text-black"/>
                            <span className="text-[#828D9E]">
                                            Change or Reset Password
                                        </span>
                        </div>
                    )}

                    {activeTab === 'ReactivateAccount' && (
                        <div className="flex items-center gap-2 text-[14px]">
                            <Link href='#' className="cursor-pointer text-primary hover:underline">Nosres
                                Support</Link> <HiChevronRight
                            className="text-black"/>
                            <Link href='#' className="text-primary hover:underline"> Nosres Account</Link>
                            <HiChevronRight className="text-black"/>
                            <Link href='#' className="text-primary hover:underline">
                                Account Recovery
                            </Link>
                            <HiChevronRight className="text-black"/>
                            <span className="text-[#828D9E]">
                                            Reactivate Account
                                        </span>
                        </div>
                    )}

                    {/* Content start from here */}
                    <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="col lg:col-span-4 border-r mt-1">
                            <div className="box bg-white rounded pl-0 pr-8">
                                <div className="search-bar relative">
                                    <input
                                        type="text"
                                        className="border w-full text-[14px] border-gray-300 rounded pl-10 py-2 focus:outline-none focus:border-primary focus:ring-0"
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

                                <details className="group mt-8 pb-5" open>
                                    <summary
                                        className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                        <div className={`${activeTab === 'createAccount' ? 'font-semibold' : ''} ${activeTab === 'confirmAccount' ? 'font-semibold' : ''} flex items-center text-prgcolor gap-2`}>
                                            <Image src={supportImgOne} className="w-6 h-6" alt="supportimg"/>
                                            Account Registration
                                        </div>
                                        <RxPlus
                                            className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                    </summary>
                                    <ul className="mt-4 pl-8 space-y-2 text-gray-500 text-[14px]">
                                        <li onClick={() => handleListItemClick('createAccount')}
                                            className={`hover:text-primary ${activeTab === 'createAccount' ? 'text-primary' : ''}`}>
                                            <div className="cursor-pointer">Create a Nosres Account</div>
                                        </li>
                                        <li onClick={() => handleListItemClick('confirmAccount')}
                                            className={`hover:text-primary ${activeTab === 'confirmAccount' ? 'text-primary' : ''}`}>
                                            <div className="cursor-pointer">Confirm Your Account</div>
                                        </li>
                                    </ul>
                                </details>
                                <hr/>

                                <details className="group mt-4 pb-5">
                                    <summary
                                        className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                        <div className={`
                                        ${activeTab === 'signInSignOut' ? 'font-semibold' : ''} 
                                        ${activeTab === 'AdjustAccount' ? 'font-semibold' : ''} 
                                        ${activeTab === 'AdjustNotification' ? 'font-semibold' : ''}
                                        ${activeTab === 'UnderstandLockedAccount' ? 'font-semibold' : ''}
                                        ${activeTab === 'UnderstandBannedAccount' ? 'font-semibold' : ''} flex text-prgcolor items-center gap-2`}>
                                            <Image src={supportImgTwo} className="w-6 h-6" alt="supportimg"/>
                                            Account Management
                                        </div>
                                        <RxPlus
                                            className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                    </summary>
                                    <ul className="mt-4 pl-8 space-y-2 text-gray-500 text-[14px]">
                                        <li onClick={() => handleListItemClick('signInSignOut')}
                                            className={`hover:text-primary ${activeTab === 'signInSignOut' ? 'text-primary' : ''}`}>
                                            <div className="cursor-pointer">Sign In and Sign Out</div>
                                        </li>
                                        <li onClick={() => handleListItemClick('AdjustAccount')}
                                            className={`hover:text-primary ${activeTab === 'AdjustAccount' ? 'text-primary' : ''}`}>
                                            <div className="cursor-pointer">Adjust Account Settings</div>
                                        </li>
                                        <li onClick={() => handleListItemClick('AdjustNotification')}
                                            className={`hover:text-primary ${activeTab === 'AdjustNotification' ? 'text-primary' : ''}`}>
                                            <div className="cursor-pointer">Adjust Notifications</div>
                                        </li>
                                        <li onClick={() => handleListItemClick('UnderstandLockedAccount')}
                                            className={`hover:text-primary ${activeTab === 'UnderstandLockedAccount' ? 'text-primary' : ''}`}>
                                            <div className="cursor-pointer">Understand Locked Accounts</div>
                                        </li>
                                        <li onClick={() => handleListItemClick('UnderstandBannedAccount')}
                                            className={`hover:text-primary ${activeTab === 'UnderstandBannedAccount' ? 'text-primary' : ''}`}>
                                            <div className="cursor-pointer">Understand Banned Accounts</div>
                                        </li>
                                    </ul>
                                </details>
                                <hr/>

                                <details className="group mt-4 pb-5">
                                    <summary
                                        className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                        <div className={`
                                        ${activeTab === 'keepAccountSecure' ? 'font-semibold' : ''}  
                                        ${activeTab === 'twoFectorAuth' ? 'font-semibold' : ''} flex text-prgcolor items-center gap-2`}>
                                            <Image src={supportImgThree} className="w-6 h-6" alt="supportimg"/>
                                            Account Security
                                        </div>
                                        <RxPlus
                                            className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                    </summary>
                                    <ul className="mt-4 pl-8 space-y-2 text-gray-500 text-[14px]">
                                        <li onClick={() => handleListItemClick('keepAccountSecure')}
                                            className={`hover:text-primary ${activeTab === 'keepAccountSecure' ? 'text-primary' : ''}`}>
                                            <div className="cursor-pointer">Keep Your Account Secure</div>
                                        </li>
                                        <li onClick={() => handleListItemClick('twoFectorAuth')}
                                            className={`hover:text-primary ${activeTab === 'twoFectorAuth' ? 'text-primary' : ''}`}>
                                            <div className="cursor-pointer">Manage Two-Factor Authentication</div>
                                        </li>
                                    </ul>
                                </details>
                                <hr/>

                                <details className="group mt-4 pb-5">
                                    <summary
                                        className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                        <div className={`
                                        ${activeTab === 'ControlSearchEngine' ? 'font-semibold' : ''}
                                        ${activeTab === 'LearnAboutData' ? 'font-semibold' : ''}
                                        ${activeTab === 'FindAndDownload' ? 'font-semibold' : ''}
                                        ${activeTab === 'ReportUnderage' ? 'font-semibold' : ''}
                                        ${activeTab === 'DeactivateNosresAccount' ? 'font-semibold' : ''}
                                        ${activeTab === 'DeleteNosresAccount' ? 'font-semibold' : ''} flex text-prgcolor items-center gap-2`}>
                                            <Image src={supportImgFive} className="w-6 h-6" alt="supportimg"/>
                                            Account Privacy
                                        </div>
                                        <RxPlus
                                            className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                    </summary>
                                    <ul className="mt-4 pl-8 space-y-2 text-gray-500 text-[14px]">
                                        <li onClick={() => handleListItemClick('ControlSearchEngine')}
                                            className={`hover:text-primary ${activeTab === 'ControlSearchEngine' ? 'text-primary' : ''}`}>
                                            <div className="cursor-pointer">Control Search Engine Indexing</div>
                                        </li>
                                        <li onClick={() => handleListItemClick('LearnAboutData')}
                                            className={`hover:text-primary ${activeTab === 'LearnAboutData' ? 'text-primary' : ''}`}>
                                            <div className="cursor-pointer">Learn About Data Collection</div>
                                        </li>
                                        <li onClick={() => handleListItemClick('FindAndDownload')}
                                            className={`hover:text-primary ${activeTab === 'FindAndDownload' ? 'text-primary' : ''}`}>
                                            <div className="cursor-pointer">Find and Download Data</div>
                                        </li>
                                        <li onClick={() => handleListItemClick('ReportUnderage')}
                                            className={`hover:text-primary ${activeTab === 'ReportUnderage' ? 'text-primary' : ''}`}>
                                            <div className="cursor-pointer">Report Underage Users</div>
                                        </li>
                                        <li onClick={() => handleListItemClick('DeactivateNosresAccount')}
                                            className={`hover:text-primary ${activeTab === 'DeactivateNosresAccount' ? 'text-primary' : ''}`}>
                                            <div className="cursor-pointer">Deactivate Your Nosres Account</div>
                                        </li>
                                        <li onClick={() => handleListItemClick('DeleteNosresAccount')}
                                            className={`hover:text-primary ${activeTab === 'DeleteNosresAccount' ? 'text-primary' : ''}`}>
                                            <div className="cursor-pointer">Delete Your Nosres Account</div>
                                        </li>
                                    </ul>
                                </details>
                                <hr/>

                                <details className="group mt-4 pb-5">
                                    <summary
                                        className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                        <div className={`
                                        ${activeTab === 'ChangeResetPassword' ? 'font-semibold' : ''} 
                                        ${activeTab === 'ReactivateAccount' ? 'font-semibold' : ''} flex text-prgcolor items-center gap-2`}>
                                            <Image src={supportImgFive} className="w-6 h-6" alt="supportimg"/>
                                            Account Recovery
                                        </div>
                                        <RxPlus
                                            className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                    </summary>
                                    <ul className="mt-4 pl-8 space-y-2 text-gray-500 text-[14px]">
                                        <li onClick={() => handleListItemClick('ChangeResetPassword')}
                                            className={`hover:text-primary ${activeTab === 'ChangeResetPassword' ? 'text-primary' : ''}`}>
                                            <div className="cursor-pointer">Change or Reset Password</div>
                                        </li>
                                        <li onClick={() => handleListItemClick('ReactivateAccount')}
                                            className={`hover:text-primary ${activeTab === 'ReactivateAccount' ? 'text-primary' : ''}`}>
                                            <div className="cursor-pointer">Reactivate Account</div>
                                        </li>
                                    </ul>
                                </details>
                            </div>
                        </div>

                        <div className="col lg:col-span-8">
                            {/* createAccount account content */}
                            {activeTab === 'createAccount' && (
                                <div className="wrap-content">
                                    <div className="details-box mt-0">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Registration
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Create a Nosres Account</h4>
                                        <ul className="mt-4 space-y-2 text-[14px]">
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    Why create a Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    What the age requirement to create a Nosres Account is
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to create a Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to choose a username
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to choose a strong password
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to create a long and memorable password
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to keep your password secure
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* confirmAccount content */}
                            {activeTab === 'confirmAccount' && (
                                <div className="wrap-content">
                                    <div className="details-box mt-0">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Registration
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Confirm Your Account</h4>
                                        <ul className="mt-4 space-y-2 text-[14px]">
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to finish creating your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to confirm your email address
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    What to do if you can’t find your Nosres Sign Up confirmation email
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    Why we ask you to confirm your email
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    What happens when you don’t confirm your Nosres Account
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* signInSignOut content */}
                            {activeTab === 'signInSignOut' && (
                                <div className="wrap-content">
                                    <div className="details-box mt-0">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Management
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Sign In and Sign Out</h4>
                                        <ul className="mt-4 space-y-2 text-[14px]">
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to log in to your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    What we ask you to confirm your new email address
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to log out of Nosres
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to know if you still have a Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to avoid losing access to your Nosres Account
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* AdjustAccount content */}
                            {activeTab === 'AdjustAccount' && (
                                <div className="wrap-content">
                                    <div className="details-box mt-0">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Management
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Adjust Account Settings</h4>
                                        <ul className="mt-4 space-y-2 text-[14px]">
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    Where to find your Nosres Account settings
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to add or change your profile picture
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to change your name, gender, language, etc.
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to set up your username
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to add an email address
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    Why add another email address to your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to remove an email address
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    What a primary email is
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    What a secondary email is
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to make a secondary email address associated with a Nosres
                                                    Account primary
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    What email addresses associated with a Nosres Account are
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to add a phone number
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    Why add another phone number to your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to remove a phone number
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    What a primary phone number is
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    What a secondary phone number is
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to make a secondary phone number associated with a Nosres
                                                    Account primary
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    What phone numbers associated with a Nosres Account are
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* AdjustNotification content */}
                            {activeTab === 'AdjustNotification' && (
                                <div className="wrap-content">
                                    <div className="details-box mt-0">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Management
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Adjust Notifications</h4>
                                        <ul className="mt-4 space-y-2 text-[14px]">
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to adjust your email and SMS notifications from Nosres
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to deal with email notifications you receive that are not sent
                                                    from nosres.com
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* UnderstandLockedAccount content */}
                            {activeTab === 'UnderstandLockedAccount' && (
                                <div className="wrap-content">
                                    <div className="details-box mt-0">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Management
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Understand Locked Accounts</h4>
                                        <ul className="mt-4 space-y-2 text-[14px]">
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    Why your Nosres Account is being locked
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to unlock your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to avoid getting locked on Nosres
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* UnderstandBannedAccount content */}
                            {activeTab === 'UnderstandBannedAccount' && (
                                <div className="wrap-content">
                                    <div className="details-box mt-0">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Management
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Understand Banned Accounts</h4>
                                        <ul className="mt-4 space-y-2 text-[14px]">
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    Why your Nosres Account is being banned
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to unban your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to avoid getting banned on Nosres
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* keepAccountSecure content */}
                            {activeTab === 'keepAccountSecure' && (
                                <div className="wrap-content">
                                    <div className="details-box mt-0">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Security
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Keep Your Account Secure</h4>
                                        <ul className="mt-4 space-y-2 text-[14px]">
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to keep your Nosres Account secure
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    Why Nosres uses secure browsing (HTTPS)
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to log out of Nosres on another device
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    What to do if you don’t recognize a location
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* twoFectorAuth content */}
                            {activeTab === 'twoFectorAuth' && (
                                <div className="wrap-content">
                                    <div className="details-box mt-0">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Security
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Manage Two-Factor Authentication</h4>
                                        <ul className="mt-4 space-y-2 text-[14px]">
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    What two-factor authentication is
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How two-factor authentication works
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to set up two-factor authentication for your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    Why it is crucial to set up two-factor authentication for your
                                                    Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to turn off two-factor authentication
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    Why we ask you to enter an authentication code every time you log in
                                                    to Nosres Account
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* ControlSearchEngine content */}
                            {activeTab === 'ControlSearchEngine' && (
                                <div className="wrap-content">
                                    <div className="details-box mt-0">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Privacy
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Control Search Engine Indexing</h4>
                                        <ul className="mt-4 space-y-2 text-[14px]">
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to prevent your Nosres profile name from appearing on search
                                                    engines
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* LearnAboutData content */}
                            {activeTab === 'LearnAboutData' && (
                                <div className="wrap-content">
                                    <div className="details-box mt-0">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Privacy
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">
                                            Learn About Data Collection
                                        </h4>
                                        <ul className="mt-4 space-y-2 text-[14px]">
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    What data Nosres collects on you
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How Nosres uses your data
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How Nosres secures your data
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How Nosres protects your data against third parties for their
                                                    marketing purposes
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* FindAndDownload content */}
                            {activeTab === 'FindAndDownload' && (
                                <div className="wrap-content">
                                    <div className="details-box mt-0">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Privacy
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">
                                            Find and Download Data
                                        </h4>
                                        <ul className="mt-4 space-y-2 text-[14px]">
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to find and download a copy of your Nosres data
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to clear the history of your search on Nosres
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* ReportUnderage content */}
                            {activeTab === 'ReportUnderage' && (
                                <div className="wrap-content">
                                    <div className="details-box mt-0">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Privacy
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">
                                            Report Underage Users
                                        </h4>
                                        <ul className="mt-4 space-y-2 text-[14px]">
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to report underage users on Nosres
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* DeactivateNosresAccount content */}
                            {activeTab === 'DeactivateNosresAccount' && (
                                <div className="wrap-content">
                                    <div className="details-box mt-0">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Privacy
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">
                                            Deactivate Your Nosres Account
                                        </h4>
                                        <ul className="mt-4 space-y-2 text-[14px]">
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to temporarily deactivate your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    What happens when you deactivate your Nosres Account
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* DeleteNosresAccount content */}
                            {activeTab === 'DeleteNosresAccount' && (
                                <div className="wrap-content">
                                    <div className="details-box mt-0">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Privacy
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">
                                            Delete Your Nosres Account
                                        </h4>
                                        <ul className="mt-4 space-y-2 text-[14px]">
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to permanently delete your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    What happens when you delete your Nosres Account
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* ChangeResetPassword content */}
                            {activeTab === 'ChangeResetPassword' && (
                                <div className="wrap-content">
                                    <div className="details-box mt-0">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Recovery
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">
                                            Change or Reset Password
                                        </h4>
                                        <ul className="mt-4 space-y-2 text-[14px]">
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to change your Nosres Account password
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to reset your Nosres Account password
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    What to do if you can’t find the email to reset your password
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    Why we can’t send you a copy of your Nosres password
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to add a recovery email address or phone number
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    What to do if someone else gets access to your account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    What to do if you no longer have access to the email address you
                                                    used to create your Nosres Account
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* ReactivateAccount content */}
                            {activeTab === 'ReactivateAccount' && (
                                <div className="wrap-content">
                                    <div className="details-box mt-0">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Recovery
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">
                                            Reactivate Account
                                        </h4>
                                        <ul className="mt-4 space-y-2 text-[14px]">
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    How to reactivate your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='#' className="hover:text-primary hover:underline">
                                                    Why you can’t recover your Nosres Account after you delete it
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            <br/><br/>
                            <hr/>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 mt-6">
                        <div className="col lg:col-span-4"></div>
                        <div className="col lg:col-span-8 ml-2">
                            <h1 className="text-[16px] font-semibold">Can’t find what you’re looking for?</h1>
                            <h4 className="mt-2 text-[14px]">
                                Try the following options:
                            </h4>
                            <div className="block sm:flex items-center gap-4 mt-6 pb-10">
                                <div className="box flex items-start gap-3 bg-white border px-6 py-4 rounded">
                                    <HiOutlineChatBubbleLeftRight size={35} className="text-gray-300"/>
                                    <div className="content">
                                        <div className="block sm:flex items-center gap-6">
                                            <h1 className="text-[16px] font-medium">Forum</h1>
                                            <h1 className="text-[14px] text-primary">BETA</h1>
                                        </div>
                                        <p className="mt-2">
                                            Talk to other users in the community
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="mt-4 sm:mt-0 box flex items-start gap-3 bg-white border px-6 py-4 rounded">
                                    <HiOutlineEnvelope size={35} className="text-gray-300"/>
                                    <div className="content">
                                        <h1 className="text-[16px] font-medium">Contact Us</h1>
                                        <p className="mt-2">
                                            Send us an email, call us or mail us
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="pt-6">
                                <button onClick={() => setOpenCountryModal(true)} type='button'
                                        className="text-primary text-[14px] hover:underline">
                                    Give us feedback
                                </button>
                                {/* feedback Pop-Up Start */}
                                <Modal size="lg" dismissible show={openCountryModal}
                                       onClose={() => setOpenCountryModal(false)}>
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Your Feedback Matters</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <p>
                                                We would love to hear your feedback so that we can improve our
                                                services and provide the best experience for you.
                                            </p>
                                            <h4 className="mt-4 text-[14px]">
                                                My feedback is about:
                                            </h4>
                                            <div className="select-box mt-2" ref={selectBoxRefCountry}>
                                                <div className="select-option flex"
                                                     onClick={toggleOptionsVisibilityCountry}>
                                                    <input type="text" placeholder="Select"
                                                           readOnly
                                                           value={selectedOptionCountry}
                                                           className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                                </div>
                                                {isOptionsVisibleCountry && (
                                                    <div className="info-content gender_content">
                                                        <ul className="options">
                                                            <li onClick={() => handleOptionClickCountry("Nosres Account")}>
                                                                Nosres Account
                                                            </li>
                                                            <li onClick={() => handleOptionClickCountry("Marketplace")}>
                                                                Marketplace
                                                            </li>
                                                            <li onClick={() => handleOptionClickCountry("Pay")}>
                                                                Pay
                                                            </li>
                                                            <li onClick={() => handleOptionClickCountry("Logistics")}>
                                                                Logistics
                                                            </li>
                                                            <li onClick={() => handleOptionClickCountry("Telecom")}>
                                                                Telecom
                                                            </li>
                                                            <li onClick={() => handleOptionClickCountry("Business")}>
                                                                Business
                                                            </li>
                                                            <li onClick={() => handleOptionClickCountry("Careers")}>
                                                                Careers
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>

                                            <h4 className="mt-4 text-[14px]">
                                                Please share your experience with us:
                                            </h4>
                                            <textarea cols={30} rows={3}
                                                      className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"></textarea>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenCountryModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                            </button>
                                            <button onClick={() => setOpenCountryModal(false)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* feedback Pop-Up End */}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Page;