"use client";
import React, {useEffect, useRef, useState} from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';
import {LuDot, LuDownload, LuFile, LuLink2, LuMail, LuShare2} from "react-icons/lu";
import Link from "next/link";

const Page = () => {
    // For Page Loading
    const [loading, setLoading] = useState(true); // Set loading state
    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);


    // 👇️ Post 3 dots (Other)
    const [postOtherDotClick, setPostOtherDotClick] = useState(false);
    const PostOtherDotDropdownRef = useRef(null);
    const handlePostOtherDotClick = () => {
        setPostOtherDotClick(!postOtherDotClick);
    };
    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            // @ts-ignore
            if (PostOtherDotDropdownRef.current && !PostOtherDotDropdownRef.current.contains(event.target)) {
                // Click occurred outside of dropdown menu, so close it
                setPostOtherDotClick(false);
            }
        };
        // Add event listener to detect clicks out-Side of the dropdown menu
        document.addEventListener('mousedown', handleOutsideClick);

        // Remove event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <>
            <section id="dashboard-section" className="bg-[#F9FAFB] flex flex-col items-center justify-center h-screen">
                {/* Dashboard Body */}
                <div className="bg-gray-50 m-4 md:m-0">
                    <div
                        className="thank_you_box bg-white rounded-lg text-start w-full md:w-[550px] py-[25px] px-[50px]">
                        {loading ? (
                            <>
                                <Skeleton height={120} count={1}/>
                                <Skeleton height={10} count={1}/>
                                <Skeleton height={20} count={1}/>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-col items-start justify-center box">
                                    <div className="wrap">
                                        <LuShare2 size={80} className="text-primary"/>
                                    </div>
                                    <h4 className="ml-[5px] text-prgcolor text-[16px] mt-6">
                                        Hi there,
                                    </h4>
                                    <h4 className="ml-[5px] text-prgcolor text-[16px] font-[500] mt-6">
                                        John Doe shared a file with you for download.
                                    </h4>
                                    <div className="ml-[5px] flex items-center gap-2 mt-4">
                                        <LuFile size={20} className="text-primary"/>
                                        <p className="text-gray-500 text-[14px]">User_Guide_v1.0.pdf</p>
                                    </div>
                                </div>
                                <div className="ml-[5px] flex justify-between items-center gap-4 mt-6">
                                    <button type='button'
                                            className="text-[14px] py-2 px-4 flex items-center gap-2 border border-primary bg-primary hover:bg-[#3A5F8A] text-white rounded">
                                        <LuDownload size={17} className="text-white"/>
                                        Download a Copy
                                    </button>

                                    <div className="drop_icon">
                                        <div className="flex items-center justify-end text-end">
                                            <div
                                                onClick={handlePostOtherDotClick}
                                                ref={PostOtherDotDropdownRef}
                                                className={`relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100 ${postOtherDotClick ? 'bg-gray-100' : ''}`}>
                                                <svg
                                                    className="w-3 h-3"
                                                    fill="#828D9E"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                </svg>

                                                {postOtherDotClick &&
                                                    <div
                                                        className="dots-dropdown-menu w-[200px] absolute top-[30px] right-[4px] bg-white rounded shadow border">
                                                        <div className="container py-2">
                                                            <div className="space-y-1 text-[14px]">
                                                                <Link href='#'
                                                                      className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                    <LuLink2 size={20}
                                                                             className="text-[#6B7280] transition duration-75 group-hover:stroke-primary"/>
                                                                    <h4>
                                                                        Copy Link
                                                                    </h4>
                                                                </Link>

                                                                <Link href='#'
                                                                      className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                    <LuMail size={18}
                                                                            className="text-[#6B7280] transition duration-75 group-hover:stroke-primary"/>
                                                                    <h4 className="ml-[1px]">
                                                                        Email
                                                                    </h4>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/*Footer*/}
                <div className="footer_wrap mt-8 text-center flex flex-col items-center justify-center">
                    <div className="flex items-center text-[14px] text-primary">
                        <h4 className="cursor-pointer">Privacy Policy</h4>
                        <LuDot/>
                        <h4 className="cursor-pointer">Terms of Use</h4>
                    </div>
                    <h4 className="text-gray-500 text-[12px] mt-1">
                        Copyright © 2025 Nosres Inc. All right reserved.
                    </h4>
                </div>
            </section>
        </>
    );
};

export default Page;