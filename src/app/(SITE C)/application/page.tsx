'use client';
import React, {useEffect, useState} from 'react';
import {HiUserCircle} from "react-icons/hi";
import {GoQuestion} from "react-icons/go";
import {
    HiOutlineIdentification,
    HiOutlineFolder,
    HiOutlineUserGroup,
    HiOutlineMapPin,
    HiOutlineClock,
    HiOutlineBookmark,
} from "react-icons/hi2";
import Link from "next/link";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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
                                            <Link href="/application"
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
                            {/* Save Jobs */}
                            <div className="box bg-white py-4 px-6 rounded">
                                {loading ? (
                                    <>
                                        <Skeleton height={30} count={1}/>
                                        <Skeleton height={80} count={1}/>
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
                                        <div className="flex items-center justify-end gap-6 mt-2">
                                            <button type='button' className='text-[14px] text-primary'>Draft</button>
                                            <button type='button' className='text-[14px] text-primary'>Remove</button>
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="box bg-white py-4 px-6 mt-4 rounded">
                                {loading ? (
                                    <>
                                        <Skeleton height={30} count={1}/>
                                        <Skeleton height={80} count={1}/>
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
                                        <div className="flex items-center gap-6 mt-2">
                                            <h4 className="text-[12px]">
                                                Submitted <span className="text-gray-500">February 9, 2024</span>
                                            </h4>
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="box bg-white py-4 px-6 mt-4 rounded">
                                {loading ? (
                                    <>
                                        <Skeleton height={30} count={1}/>
                                        <Skeleton height={80} count={1}/>
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
                                        <div className="flex items-center gap-6 mt-2">
                                            <h4 className="text-[12px]">
                                                Submitted <span className="text-gray-500">February 9, 2024</span>
                                            </h4>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;