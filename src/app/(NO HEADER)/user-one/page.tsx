"use client";
import React, {useEffect, useState} from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';
import {LuFile} from "react-icons/lu";
import Image from "next/image";
import LogoImg from "../../../../public/assets/images/logo.svg";

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
            <section id="dashboard-section" className="bg-[#F9FAFB] flex items-center justify-center h-screen">
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
                                        <div className="icon-box flex gap-2 items-center mt-4">
                                            <Image src={LogoImg} className="w-6" alt="LogoImg"/>
                                            <h3 className="text-[18px] font-normal">nosres</h3>
                                        </div>
                                    </div>
                                    <h4 className="text-prgcolor text-[16px] mt-6">
                                        Hi John,
                                    </h4>
                                    <h4 className="text-prgcolor text-[16px] font-[500] mt-6">
                                        Identity Verification Document Upload
                                    </h4>
                                    <h4 className="text-prgcolor text-[14px] mt-2">
                                        Here is the information we need:
                                    </h4>

                                    <div className="flex items-center gap-2 mt-4">
                                        <LuFile size={20} className="text-primary"/>
                                        <p className="text-gray-500 text-[14px]">Government-Issued ID</p>
                                    </div>
                                </div>
                                <div className="flex justify-start gap-4 mt-6">
                                    <button type='button'
                                            className="text-[14px] py-2 px-6 border border-primary bg-primary hover:bg-[#3A5F8A] text-white rounded">
                                        Get Started
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