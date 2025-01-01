"use client";
import React, {useEffect, useState} from 'react';
import {
    HiOutlineCreditCard,
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

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <section id="dashboard-section" className="bg-[#F9FAFB]">
                {/* Dashboard Body */}
                <div className="pt-14 p-4 sm:ml-64 md:ml-80 bg-gray-50 h-screen">
                    <div className="pt-8 pb-2 flex items-center gap-1">
                        <HiOutlineCreditCard
                            size={25}
                            className="text-gray-500 w-7"/>
                        <h6>Billing</h6>
                    </div>
                    <hr/>
                    {/* Stripe Connection */}
                    <div className="grid grid-cols-1 mb-4 info-wrapper">
                        <div className="mt-8 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                            {loading ? (
                                <>
                                    <Skeleton height={30} count={1}/>
                                    <Skeleton height={80} count={1}/>
                                </>
                            ) : (
                                <>
                                    <div className="head mb-2 flex items-start gap-2">
                                        <h6 className="mt-3">Stripe Connection</h6>
                                        <h4 className="text-[12px] text-white bg-primary py-1 px-3 rounded">
                                            BETA
                                        </h4>
                                    </div>
                                    <hr/>
                                    <div className="mt-4 box">
                                        <p>
                                            Add or update your bank account information using Stripe Connect.
                                        </p>
                                    </div>

                                    <div
                                        className="box mt-6 rounded flex items-start justify-between bg-white">
                                        <div className="left">
                                            <h6 className="text-[14px]">
                                                Manage on Stripe
                                            </h6>
                                        </div>
                                        <div className="right">
                                            <Link href='#'
                                                  className="text-[14px] px-4 rounded py-2 border border-primary bg-primary text-white hover:bg-transparent hover:text-primary hover:border-primary">Go
                                                to Stripe
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;