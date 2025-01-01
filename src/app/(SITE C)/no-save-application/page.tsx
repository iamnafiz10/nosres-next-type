'use client';
import React, {useEffect, useState} from 'react';
import {HiUserCircle} from "react-icons/hi";
import {GoQuestion} from "react-icons/go";
import {
    HiOutlineIdentification,
    HiOutlineFolder,
    HiOutlineArrowRightCircle, HiOutlineBookmark,
} from "react-icons/hi2";
import Link from "next/link";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {MdOutlineFolderOff} from "react-icons/md";

const Page = () => {
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
            <section id="user-details-section" className="bg-[#F9FAFB] h-[100%]">
                <div className="container py-16">
                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="col lg:col-span-5 flex-initial lg:sticky top-[80px] h-full lg:h-[45vh] w-full overflow-hidden lg:overflow-auto">
                            {/* Sidebar */}
                            <aside id="logo-sidebar"
                                   aria-label="Sidebar">
                                <div className="h-full px-8 py-4 overflow-y-auto bg-white rounded">
                                    <ul className="space-y-1 font-medium">
                                        <li>
                                            <div
                                                className="flex text-[14px] items-center p-2 rounded-lg hover:bg-gray-100 group">
                                                <HiUserCircle size={30}
                                                              className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3 font-semibold">John Doe</span>
                                            </div>
                                        </li>
                                        <hr/>

                                        <li>
                                            <Link href="/information"
                                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <HiOutlineIdentification size={25}
                                                                         className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3">Information</span>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/save-job"
                                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <HiOutlineBookmark size={22}
                                                                   className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3">Saved Jobs</span>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="#"
                                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <HiOutlineFolder size={20}
                                                                 className="text-primary w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3 font-semibold">Applications</span>
                                            </Link>
                                        </li>
                                        <hr/>
                                        <li>
                                            <Link href="#"
                                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <GoQuestion size={20}
                                                            className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3">Help</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>

                        <div className="col lg:col-span-7">
                            {/* No Jobs save */}
                            <div className="grid grid-cols-1 mb-4 info-wrapper">
                                <div className="col w-full box  text-center py-6 px-8 bg-white rounded">
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
                                                    <MdOutlineFolderOff size={50}/>
                                                </div>
                                            </div>
                                            <div className="head mb-2 mt-3">
                                                <h6>You haven{`'`}t submitted any applications</h6>
                                            </div>
                                            <p>
                                                Discover current opportunities by exploring the available positions. By
                                                actively
                                                exploring
                                                available positions, you can find numerous opportunities for career
                                                growth.
                                            </p>
                                            <div className="flex justify-center">
                                                <button type='button'
                                                        className="mt-8 text-[14px] flex cursor-pointer items-center gap-1 justify-center text-primary hover:text-[#3A5F8A]">
                                                    <HiOutlineArrowRightCircle size={30}/>
                                                    Search Jobs
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;