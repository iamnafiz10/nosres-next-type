"use client";
import React, {useEffect, useState} from 'react';
import {HiUserCircle} from "react-icons/hi";
import {
    HiOutlineEnvelope,
    HiOutlinePhone,
    HiOutlineMapPin,
    HiOutlineGlobeAlt,
    HiOutlineCalendar, HiOutlineUser
} from "react-icons/hi2";
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
            <section id="dashboard-section" className="bg-[#F9FAFB]">
                {/* Dashboard Body */}
                <div className="p-4 sm:ml-64 md:ml-80 bg-gray-50 h-screen">
                    <div className="p-4 rounded mt-14">
                        <div className="grid grid-cols-1 mb-4">
                            <div className="col w-full lg:w-[642px] h-full lg:h-[240px] py-8 px-8 bg-white rounded">
                                {loading ? (
                                    <>
                                        <Skeleton height={60} count={1}/>
                                        <Skeleton height={10} count={4}/>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex box items-center gap-3">
                                            <div className="one">
                                                <HiUserCircle className="w-12 h-12 text-primary"/>
                                            </div>
                                            <div className="two">
                                                <h4 className="text-[14px] font-[500]">John Doe</h4>
                                                <p>@janedoe</p>
                                            </div>
                                        </div>
                                        <br/>
                                        <hr/>

                                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
                                            <div className="col wrap">
                                                <div className="flex items-center gap-2">
                                                    <HiOutlineUser size={15} className="w-5"/>
                                                    <h4 className="text-[14px]">Full Name</h4>
                                                </div>
                                            </div>
                                            <div className="col mt-4 md:mt-0 wrap">
                                                <div className="flex items-center gap-2">
                                                    <HiOutlineMapPin size={15} className="w-5"/>
                                                    <h4 className="text-[14px]">Location</h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
                                            <div className="col wrap">
                                                <div className="flex items-center gap-2">
                                                    <HiOutlineEnvelope size={15} className="w-5"/>
                                                    <h4 className="text-[14px]">Email</h4>
                                                </div>
                                            </div>
                                            <div className="col mt-4 md:mt-0 wrap">
                                                <div className="flex items-center gap-2">
                                                    <HiOutlineGlobeAlt size={15} className="w-5"/>
                                                    <h4 className="text-[14px]">Language</h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
                                            <div className="col wrap">
                                                <div className="flex items-center gap-2">
                                                    <HiOutlinePhone size={15} className="w-5"/>
                                                    <h4 className="text-[14px]">Phone Number</h4>
                                                </div>
                                            </div>
                                            <div className="col mt-4 md:mt-0 wrap">
                                                <div className="flex items-center gap-2">
                                                    <HiOutlineCalendar size={15} className="w-5"/>
                                                    <h4 className="text-[14px]">Joined Date</h4>
                                                </div>
                                            </div>
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