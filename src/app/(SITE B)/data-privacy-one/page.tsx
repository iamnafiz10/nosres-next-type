"use client";
import React, {useEffect, useState} from 'react';
import {
    HiOutlineCircleStack,
} from "react-icons/hi2";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';
import {LuMessageSquareOff} from "react-icons/lu";

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

    return (
        <>
            <section id="dashboard-section" className="bg-[#F9FAFB] h-screen">
                {/* Dashboard Body */}
                <div className="pt-14 p-4 sm:ml-64 md:ml-80 bg-gray-50">
                    <div className="pt-8 pb-2 flex items-center gap-1">
                        <HiOutlineCircleStack
                            size={25}
                            className="text-gray-500 w-7"/>
                        <h6>Data & Privacy</h6>
                    </div>
                    <hr/>
                    <div
                        className="mt-8 thank_you_box w-full lg:w-[600px] bg-white rounded-lg text-center py-[35px] px-[55px]">
                        {loading ? (
                            <>
                                <Skeleton height={120} count={1}/>
                                <Skeleton height={10} count={1}/>
                                <Skeleton height={20} count={1}/>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-col items-center justify-center text-center box">
                                    <div className="icon">
                                        <LuMessageSquareOff className="w-[50px] h-[50px] text-primary"/>
                                    </div>
                                    <h4 className="text-prgcolor text-[18px] mt-3">
                                        No Information Requested
                                    </h4>
                                    <p className="text-graycolor text-[14px] mt-3">
                                        You haven’t requested any information from our support team yet.
                                    </p>
                                </div>
                                <div className="block items-center justify-center gap-4 mt-6">
                                    <button type='button'
                                            className="text-[14px] w-full py-2 px-6 border border-primary bg-primary hover:bg-[#3A5F8A] text-white rounded">
                                        Go Back to Data & Privacy
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;