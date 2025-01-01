'use client';
import React, {useEffect, useState} from 'react';
import {RxPlus} from "react-icons/rx";
import {Checkbox, Label, Select} from 'flowbite-react';
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";
import {
    HiOutlineUserGroup,
    HiOutlineMapPin,
    HiOutlineClock,
    HiOutlineBookmark,
    HiOutlineArrowPath,
    HiArrowLongLeft,
    HiArrowLongRight, HiBookmark,
} from "react-icons/hi2";
import Link from "next/link";


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

    const [isBookmarkedOne, setIsBookmarkedOne] = useState(false);

    const toggleBookmarkOne = () => {
        setIsBookmarkedOne(prevState => !prevState);
    };

    const [isBookmarkedTwo, setIsBookmarkedTwo] = useState(false);

    const toggleBookmarkTwo = () => {
        setIsBookmarkedTwo(prevState => !prevState);
    };

    const [isBookmarkedThree, setIsBookmarkedThree] = useState(false);

    const toggleBookmarkThree = () => {
        setIsBookmarkedThree(prevState => !prevState);
    };

    const [isBookmarkedFore, setIsBookmarkedFore] = useState(false);

    const toggleBookmarkFore = () => {
        setIsBookmarkedFore(prevState => !prevState);
    };

    const [isBookmarkedFive, setIsBookmarkedFive] = useState(false);

    const toggleBookmarkFive = () => {
        setIsBookmarkedFive(prevState => !prevState);
    };


    const [isBookmarkedSix, setIsBookmarkedSix] = useState(false);

    const toggleBookmarkSix = () => {
        setIsBookmarkedSix(prevState => !prevState);
    };

    const [isBookmarkedSeven, setIsBookmarkedSeven] = useState(false);

    const toggleBookmarkSeven = () => {
        setIsBookmarkedSeven(prevState => !prevState);
    };
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
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
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
                                                7 <span className="text-black">jobs</span>
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

                            {/* Job */}
                            <div className="box mt-4 bg-white py-4 px-6 rounded">
                                {loading ? (
                                    <>
                                        <Skeleton height={10} count={1}/>
                                        <Skeleton height={60} count={1}/>
                                    </>
                                ) : (
                                    <>
                                        <h4 className="text-[16px] text-black">
                                            UI/UX Designer
                                        </h4>

                                        <div className="job_wrapper pb-3 flex items-center justify-between">
                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineUserGroup/>
                                                <p>Design</p>
                                            </div>

                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineMapPin/>
                                                <p>Remote</p>
                                            </div>

                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineClock/>
                                                <p>October 5, 2023</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="flex items-center gap-4 mt-2">
                                            <HiOutlineArrowPath size={15}
                                                                className="cursor-pointer hover:text-primary"/>
                                            {isBookmarkedOne ? (
                                                <button type='button' className="right text-primary"
                                                        onClick={toggleBookmarkOne}>
                                                    <HiBookmark size={15}/>
                                                </button>
                                            ) : (
                                                <button type='button' className="right hover:text-primary"
                                                        onClick={toggleBookmarkOne}>
                                                    <HiOutlineBookmark size={15}/>
                                                </button>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Job */}
                            <div className="box mt-4 bg-white py-4 px-6 rounded">
                                {loading ? (
                                    <>
                                        <Skeleton height={10} count={1}/>
                                        <Skeleton height={60} count={1}/>
                                    </>
                                ) : (
                                    <>
                                        <h4 className="text-[16px] text-black">
                                            UI/UX Designer
                                        </h4>

                                        <div className="job_wrapper pb-3 flex items-center justify-between">
                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineUserGroup/>
                                                <p>Design</p>
                                            </div>

                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineMapPin/>
                                                <p>Remote</p>
                                            </div>

                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineClock/>
                                                <p>October 5, 2023</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="flex items-center gap-4 mt-2">
                                            <HiOutlineArrowPath size={15}
                                                                className="cursor-pointer hover:text-primary"/>
                                            {isBookmarkedTwo ? (
                                                <button type='button' className="right text-primary"
                                                        onClick={toggleBookmarkTwo}>
                                                    <HiBookmark size={15}/>
                                                </button>
                                            ) : (
                                                <button type='button' className="right hover:text-primary"
                                                        onClick={toggleBookmarkTwo}>
                                                    <HiOutlineBookmark size={15}/>
                                                </button>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Job */}
                            <div className="box mt-4 bg-white py-4 px-6 rounded">
                                {loading ? (
                                    <>
                                        <Skeleton height={10} count={1}/>
                                        <Skeleton height={60} count={1}/>
                                    </>
                                ) : (
                                    <>
                                        <h4 className="text-[16px] text-black">
                                            UI/UX Designer
                                        </h4>

                                        <div className="job_wrapper pb-3 flex items-center justify-between">
                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineUserGroup/>
                                                <p>Design</p>
                                            </div>

                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineMapPin/>
                                                <p>Remote</p>
                                            </div>

                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineClock/>
                                                <p>October 5, 2023</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="flex items-center gap-4 mt-2">
                                            <HiOutlineArrowPath size={15}
                                                                className="cursor-pointer hover:text-primary"/>
                                            {isBookmarkedThree ? (
                                                <button type='button' className="right text-primary"
                                                        onClick={toggleBookmarkThree}>
                                                    <HiBookmark size={15}/>
                                                </button>
                                            ) : (
                                                <button type='button' className="right hover:text-primary"
                                                        onClick={toggleBookmarkThree}>
                                                    <HiOutlineBookmark size={15}/>
                                                </button>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Job */}
                            <div className="box mt-4 bg-white py-4 px-6 rounded">
                                {loading ? (
                                    <>
                                        <Skeleton height={10} count={1}/>
                                        <Skeleton height={60} count={1}/>
                                    </>
                                ) : (
                                    <>
                                        <h4 className="text-[16px] text-black">
                                            UI/UX Designer
                                        </h4>

                                        <div className="job_wrapper pb-3 flex items-center justify-between">
                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineUserGroup/>
                                                <p>Design</p>
                                            </div>

                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineMapPin/>
                                                <p>Remote</p>
                                            </div>

                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineClock/>
                                                <p>October 5, 2023</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="flex items-center gap-4 mt-2">
                                            <HiOutlineArrowPath size={15}
                                                                className="cursor-pointer hover:text-primary"/>
                                            {isBookmarkedFore ? (
                                                <button type='button' className="right text-primary"
                                                        onClick={toggleBookmarkFore}>
                                                    <HiBookmark size={15}/>
                                                </button>
                                            ) : (
                                                <button type='button' className="right hover:text-primary"
                                                        onClick={toggleBookmarkFore}>
                                                    <HiOutlineBookmark size={15}/>
                                                </button>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Job */}
                            <div className="box mt-4 bg-white py-4 px-6 rounded">
                                {loading ? (
                                    <>
                                        <Skeleton height={10} count={1}/>
                                        <Skeleton height={60} count={1}/>
                                    </>
                                ) : (
                                    <>
                                        <h4 className="text-[16px] text-black">
                                            UI/UX Designer
                                        </h4>

                                        <div className="job_wrapper pb-3 flex items-center justify-between">
                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineUserGroup/>
                                                <p>Design</p>
                                            </div>

                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineMapPin/>
                                                <p>Remote</p>
                                            </div>

                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineClock/>
                                                <p>October 5, 2023</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="flex items-center gap-4 mt-2">
                                            <HiOutlineArrowPath size={15}
                                                                className="cursor-pointer hover:text-primary"/>
                                            {isBookmarkedFive ? (
                                                <button type='button' className="right text-primary"
                                                        onClick={toggleBookmarkFive}>
                                                    <HiBookmark size={15}/>
                                                </button>
                                            ) : (
                                                <button type='button' className="right hover:text-primary"
                                                        onClick={toggleBookmarkFive}>
                                                    <HiOutlineBookmark size={15}/>
                                                </button>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Job */}
                            <div className="box mt-4 bg-white py-4 px-6 rounded">
                                {loading ? (
                                    <>
                                        <Skeleton height={10} count={1}/>
                                        <Skeleton height={60} count={1}/>
                                    </>
                                ) : (
                                    <>
                                        <h4 className="text-[16px] text-black">
                                            UI/UX Designer
                                        </h4>

                                        <div className="job_wrapper pb-3 flex items-center justify-between">
                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineUserGroup/>
                                                <p>Design</p>
                                            </div>

                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineMapPin/>
                                                <p>Remote</p>
                                            </div>

                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineClock/>
                                                <p>October 5, 2023</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="flex items-center gap-4 mt-2">
                                            <HiOutlineArrowPath size={15}
                                                                className="cursor-pointer hover:text-primary"/>
                                            {isBookmarkedSix ? (
                                                <button type='button' className="right text-primary"
                                                        onClick={toggleBookmarkSix}>
                                                    <HiBookmark size={15}/>
                                                </button>
                                            ) : (
                                                <button type='button' className="right hover:text-primary"
                                                        onClick={toggleBookmarkSix}>
                                                    <HiOutlineBookmark size={15}/>
                                                </button>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Job */}
                            <div className="box mt-4 bg-white py-4 px-6 rounded">
                                {loading ? (
                                    <>
                                        <Skeleton height={10} count={1}/>
                                        <Skeleton height={60} count={1}/>
                                    </>
                                ) : (
                                    <>
                                        <h4 className="text-[16px] text-black">
                                            UI/UX Designer
                                        </h4>

                                        <div className="job_wrapper pb-3 flex items-center justify-between">
                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineUserGroup/>
                                                <p>Design</p>
                                            </div>

                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineMapPin/>
                                                <p>Remote</p>
                                            </div>

                                            <div className="flex mt-4 text-[14px] items-center gap-1">
                                                <HiOutlineClock/>
                                                <p>October 5, 2023</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="flex items-center gap-4 mt-2">
                                            <HiOutlineArrowPath size={15}
                                                                className="cursor-pointer hover:text-primary"/>
                                            {isBookmarkedSeven ? (
                                                <button type='button' className="right text-primary"
                                                        onClick={toggleBookmarkSeven}>
                                                    <HiBookmark size={15}/>
                                                </button>
                                            ) : (
                                                <button type='button' className="right hover:text-primary"
                                                        onClick={toggleBookmarkSeven}>
                                                    <HiOutlineBookmark size={15}/>
                                                </button>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Pagination */}
                            <div className="pagination mt-4 flex items-center justify-center">
                                <nav aria-label="Page navigation example">
                                    <ul className="inline-flex -space-x-px text-[14px] gap-1">
                                        <li>
                                            <Link href='#' aria-current="page"
                                                  className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:border-primary hover:text-primary">
                                                <HiArrowLongLeft/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='#' aria-current="page"
                                                  className="flex items-center justify-center px-3 h-8 text-primary border border-primary bg-blue-50 hover:text-primary">
                                                1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='#'
                                                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:border-primary hover:text-primary">
                                                2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='#' aria-current="page"
                                                  className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:border-primary hover:text-primary">
                                                <HiArrowLongRight/>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;