'use client';
import React, {useEffect, useState} from 'react';
import {RxPlus} from "react-icons/rx";
import {Checkbox, Label, Select} from 'flowbite-react';
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import {MdOutlineExploreOff, MdOutlineSearchOff} from "react-icons/md";
import {HiMiniXCircle} from "react-icons/hi2";


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
                                        <Skeleton height={60} count={1}/>
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
                            <div className="mt-10 box flex flex-col items-center justify-center">
                                <MdOutlineExploreOff size={100} className="text-center text-gray-400"/>
                                <h4 className="text-[20px] mt-4 text-center">
                                    Currently, there are no available positions.
                                </h4>
                                <p className="mt-2">
                                    Please consider revisiting in the future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;