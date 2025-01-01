'use client';
import React, {useEffect, useRef, useState} from 'react';
import {RxPlus} from "react-icons/rx";
import {Checkbox, Label, Modal, Select} from 'flowbite-react';
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import {LuBellPlus} from "react-icons/lu";
import {MdOutlineWorkOff} from "react-icons/md";
import {HiOutlineArrowRightCircle} from "react-icons/hi2";
import {CiCircleCheck} from "react-icons/ci";
import {toast} from "react-toastify";


function Page() {
    // Search Text
    const [searchText, setSearchText] = useState('');

    const handleClearText = () => {
        setSearchText('');
    };

    // For Page Loading
    const [loading, setLoading] = useState(true); // Set loading state
    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
    }, [loading]);

    // ------------------ Country Select ------------------//
    // Country change popup
    const [openCountryModal, setOpenCountryModal] = useState<boolean>(false);
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

    const notify = () => {
        toast.info('Job Alert Created.', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const closeAllEmailPopups = () => {
        setOpenCountryModal(false);
        setOpenConfirmEmailModal(false);
    };
    const handleConfirmPopEmailButtonClick = () => {
        notify();
        closeAllEmailPopups();
    };
    const [openConfirmEmailModal, setOpenConfirmEmailModal] = useState<boolean>(false);
    return (
        <>
            <section id="job-section" className="bg-gray-50 h-100%">
                <div className="container py-28">
                    <div className="head-wrap">
                        <h1 className="text-[24px]">Discover your ideal position.</h1>
                        <p className="mt-2">
                            Find the role that perfectly matches your talents and ambitions. With our diverse array of
                            roles, you<br/>
                            will find the perfect fit to propel your career forward.
                        </p>
                        <button onClick={() => setOpenCountryModal(true)} type="button"
                                className="mt-4 py-2 px-4 gap-2 bg-primary text-white flex items-center text-[14px] rounded">
                            <LuBellPlus size={15}/>
                            Create Job Alert
                        </button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-14">
                        <div className="col lg:col-span-4">
                            <div className="box bg-white rounded py-6 px-8">
                                <div className="search-bar relative">
                                    <input
                                        type="text"
                                        className="border w-full text-[14px] border-gray-300 rounded pl-10 py-2 focus:outline-none focus:border-primary focus:ring-0"
                                        placeholder="Search by keyword"
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

                                <div className="filter-head mt-4 pb-2 flex items-center justify-between">
                                    <h4 className="text-[14px]">Filters</h4>
                                    {/* eslint-disable-next-line react/jsx-no-undef */}
                                    <Link href='#' className="text-[14px] text-primary">Clear All</Link>
                                </div>
                                <hr/>

                                <details className="group mt-4 pb-5">
                                    <summary
                                        className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                        Category
                                        <RxPlus
                                            className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                    </summary>
                                    <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                        <div id="checkbox" className="mt-3">
                                            <div className="flex items-center gap-2">
                                                <Checkbox id="category1" defaultChecked/>
                                                <Label htmlFor="category1" className="text-gray-500 font-normal">
                                                    Design
                                                </Label>
                                            </div>
                                            <div className="mt-2 flex items-center gap-2">
                                                <Checkbox id="category2"/>
                                                <Label htmlFor="category2" className="text-gray-500 font-normal">
                                                    Engineering & Technology
                                                </Label>
                                            </div>
                                        </div>
                                    </ul>
                                </details>
                                <hr/>

                                <details className="group mt-4 pb-5">
                                    <summary
                                        className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                        Location
                                        <RxPlus
                                            className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                    </summary>
                                    <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                        <div id="checkbox" className="mt-3">
                                            <div className="flex items-center gap-2">
                                                <Checkbox id="location1" defaultChecked/>
                                                <Label htmlFor="location1" className="text-gray-500 font-normal">
                                                    In Office
                                                </Label>
                                            </div>
                                            <div className="mt-2 flex items-center gap-2">
                                                <Checkbox id="location2"/>
                                                <Label htmlFor="location2" className="text-gray-500 font-normal">
                                                    Remote
                                                </Label>
                                            </div>
                                            <div className="mt-2 flex items-center gap-2">
                                                <Checkbox id="location3"/>
                                                <Label htmlFor="location3" className="text-gray-500 font-normal">
                                                    Hybrid
                                                </Label>
                                            </div>
                                        </div>
                                    </ul>
                                </details>
                                <hr/>

                                <details className="group mt-4 pb-5">
                                    <summary
                                        className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                        Degree
                                        <RxPlus
                                            className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                    </summary>
                                    <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                        <div id="checkbox" className="mt-3">
                                            <div className="flex items-center gap-2">
                                                <Checkbox id="degree1" defaultChecked/>
                                                <Label htmlFor="degree1" className="text-gray-500 font-normal">
                                                    Bachelor
                                                </Label>
                                            </div>
                                            <div className="mt-2 flex items-center gap-2">
                                                <Checkbox id="degree2"/>
                                                <Label htmlFor="degree2" className="text-gray-500 font-normal">
                                                    Master
                                                </Label>
                                            </div>
                                            <div className="mt-2 flex items-center gap-2">
                                                <Checkbox id="degree3"/>
                                                <Label htmlFor="degree3" className="text-gray-500 font-normal">
                                                    Ph.D.
                                                </Label>
                                            </div>
                                            <div className="mt-2 flex items-center gap-2">
                                                <Checkbox id="degree4"/>
                                                <Label htmlFor="degree4" className="text-gray-500 font-normal">
                                                    Pursing Degree
                                                </Label>
                                            </div>
                                        </div>
                                    </ul>
                                </details>
                                <hr/>

                                <details className="group mt-4 pb-5">
                                    <summary
                                        className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                        Job Type
                                        <RxPlus
                                            className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                    </summary>
                                    <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                        <div id="checkbox" className="mt-3">
                                            <div className="flex items-center gap-2">
                                                <Checkbox id="type1" defaultChecked/>
                                                <Label htmlFor="type1" className="text-gray-500 font-normal">
                                                    Intern
                                                </Label>
                                            </div>
                                            <div className="mt-2 flex items-center gap-2">
                                                <Checkbox id="type2"/>
                                                <Label htmlFor="type2" className="text-gray-500 font-normal">
                                                    Part-Time
                                                </Label>
                                            </div>
                                            <div className="mt-2 flex items-center gap-2">
                                                <Checkbox id="type3"/>
                                                <Label htmlFor="type3" className="text-gray-500 font-normal">
                                                    Full-Time
                                                </Label>
                                            </div>
                                            <div className="mt-2 flex items-center gap-2">
                                                <Checkbox id="type4"/>
                                                <Label htmlFor="type4" className="text-gray-500 font-normal">
                                                    Temporary
                                                </Label>
                                            </div>
                                        </div>
                                    </ul>
                                </details>
                            </div>
                        </div>

                        <div className="col lg:col-span-8">
                            <div className="box bg-white py-4 px-6 rounded">
                                {loading ? (
                                    <>
                                        <Skeleton height={10} count={1}/>
                                        <Skeleton height={30} count={1}/>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-primary text-[18px]">
                                                0 <span className="text-black">jobs</span>
                                            </h4>
                                            <div className="flex text-[14px] items-center gap-3">
                                                <h4>Sort by:</h4>
                                                <div className="max-w-md">
                                                    <Select id="job_filter">
                                                        <option>Relevance</option>
                                                        <option>Newest</option>
                                                        <option>Most Popular</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="box mt-4 text-center py-6 px-8 bg-white rounded">
                                {loading ? (
                                    <>
                                        <Skeleton height={30} count={1}/>
                                        <Skeleton height={100} count={1}/>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex justify-center">
                                            <div
                                                className="w-20 h-20 flex text-primary justify-center items-center bg-[#F3F3F3] text-center rounded-full">
                                                <MdOutlineWorkOff size={50}/>
                                            </div>
                                        </div>

                                        <div className="head mb-2 mt-3">
                                            <h6>You don{`'`}t have any saved jobs.</h6>
                                        </div>
                                        <p>
                                            Saved jobs allows you to easily revisit and review job listings that
                                            caught
                                            your interest without having to perform a new search each time.
                                        </p>
                                        <div className="flex justify-center">
                                            <button type='button'
                                                    className="mt-8 text-[14px] flex cursor-pointer items-center gap-1 justify-center text-primary hover:text-[#3A5F8A]">
                                                <HiOutlineArrowRightCircle size={30}/>
                                                Learn More
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Country change Pop-Up Start */}
            <Modal size="xl"
                   dismissible={!openConfirmEmailModal}
                   show={openCountryModal}
                   onClose={() => setOpenCountryModal(false)}
                   style={{
                       padding: '0',
                   }}
                   className="modal_cntrl"
            >
                <Modal.Header>
                    <h4 className="text-[16px]">Create Your Job Alert</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body box">
                        <p>
                            Stay ahead in your career search by creating job alerts. Get notified
                            instantly when new opportunities that match your career interest become
                            available.
                        </p>
                        <div className="block md:flex items-center gap-[-10px] justify-between">
                            <input
                                className="mt-4 rounded py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                type="text"
                                placeholder="jogndoe@mail.com"
                            />
                            <div className="mt-4 select-box" ref={selectBoxRefCountry}>
                                <div className="select-option flex"
                                     onClick={toggleOptionsVisibilityCountry}>
                                    <input type="text" placeholder="Select Team"
                                           readOnly
                                           value={selectedOptionCountry}
                                           className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                </div>
                                {isOptionsVisibleCountry && (
                                    <div className="info-content team_content w-[86%] sm:w-[92%] md:w-[35%] z-50">
                                        <ul className="options">
                                            <li onClick={() => handleOptionClickCountry("Administration")}>
                                                Administration
                                            </li>
                                            <li onClick={() => handleOptionClickCountry("Business Development")}>Business
                                                Development
                                            </li>
                                            <li onClick={() => handleOptionClickCountry("Business Operations")}>Business
                                                Operations
                                            </li>
                                            <li onClick={() => handleOptionClickCountry("Customer Service")}>Customer
                                                Service
                                            </li>
                                            <li onClick={() => handleOptionClickCountry("Design")}>Design</li>
                                            <li onClick={() => handleOptionClickCountry("Engineering & Technology")}>Engineering
                                                & Technology
                                            </li>
                                            <li onClick={() => handleOptionClickCountry("Finance")}>Finance</li>
                                            <li onClick={() => handleOptionClickCountry("Human Resources")}>Human
                                                Resources
                                            </li>
                                            <li onClick={() => handleOptionClickCountry("Legal")}>Legal</li>
                                            <li onClick={() => handleOptionClickCountry("Marketing")}>Marketing</li>
                                            <li onClick={() => handleOptionClickCountry("Public Relations")}>Public
                                                Relations
                                            </li>
                                            <li onClick={() => handleOptionClickCountry("R&D")}>R&D</li>
                                            <li onClick={() => handleOptionClickCountry("Sales")}>Sales</li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="mt-4">
                                <button onClick={() => setOpenConfirmEmailModal(true)}
                                        className="px-5 text-[14px] py-[6px] border border-primary bg-[#4D7FB8] hover:bg-[#3A5F8A] hover:text-white hover:border-[#3A5F8A] text-white rounded">
                                    Create Alert
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Country change Pop-Up End */}

            {/* Confirm Email Pop-Up Start */}
            <Modal size="xl"
                   show={openConfirmEmailModal}
                   onClose={() => setOpenConfirmEmailModal(false)}
                   style={{
                       backgroundColor: 'rgb(17 24 39 / 20%)',
                       padding: '0',
                   }}
                   className="modal_cntrl"
            >
                <Modal.Body>
                    <div className="modal_body box flex flex-col items-center">
                        <div className="icon">
                            <CiCircleCheck size={50} className="text-primary"/>
                        </div>
                        <h4 className="text-[16px] mt-2">Job Alert Created!</h4>
                        <p className="text-center mt-2">
                            You’ll now receive updates about new job opportunities that
                            match your preferences.
                        </p>
                        <button onClick={handleConfirmPopEmailButtonClick}
                                className="px-10 w-full mt-4 text-[14px] py-2 border border-primary bg-[#4D7FB8] hover:bg-[#3A5F8A] hover:border-primary text-white rounded">
                            Close
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Confirm Email Pop-Up End */}
        </>
    );
}

export default Page;