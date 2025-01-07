"use client";
import React, {useEffect, useState} from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import LogoImg from "../../../../public/assets/images/logo.svg";
import {ImAttachment} from "react-icons/im";

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
            <section id="dashboard-section" className="bg-[#F9FAFB] flex items-center justify-center">
                <div
                    className="bg-white rounded-lg text-start w-full mb-12 md:w-[550px] py-[25px] px-[50px] mt-[150px]">
                    {loading ? (
                        <>
                            <Skeleton height={30} count={1}/>
                            <Skeleton height={60} count={1}/>
                            <Skeleton height={10} count={1}/>
                            <Skeleton height={120} count={1}/>
                            <Skeleton height={30} count={1}/>
                            <Skeleton height={20} count={1}/>
                            <Skeleton height={20} count={1}/>
                            <Skeleton height={20} count={1}/>
                            <Skeleton height={10} count={1}/>
                        </>
                    ) : (
                        <>
                            <div className="box">
                                <div className="wrap">
                                    <div className="icon-box flex gap-2 items-center mt-4">
                                        <Image src={LogoImg} className="w-6" alt="LogoImg"/>
                                        <h3 className="text-[18px] font-normal">nosres</h3>
                                    </div>
                                </div>
                                <h4 className="text-gray-500 text-[14px] mt-10">
                                    January 3, 2025
                                </h4>
                                <h4 className="text-prgcolor text-[16px] font-[500] mt-8">
                                    Your requested information
                                </h4>
                                <h4 className="text-prgcolor text-[16px] mt-6">
                                    Hi John,
                                </h4>
                                <h4 className="text-prgcolor text-[14px] mt-2">
                                    The requested information is attached. If you have any questions, feel free to
                                    respond to the email
                                    where this link was provided.
                                </h4>

                                <div className="box bg-gray-50 p-6 rounded mt-6 text-[14px] space-y-1">
                                    <h4>Address Line 1: <span className="text-gray-500">123 Main Street</span></h4>
                                    <h4>Address Line 2: <span className="text-gray-500">Apt. 4B</span></h4>
                                    <h4>City: <span className="text-gray-500">Springfield</span></h4>
                                    <h4>State/Region: <span className="text-gray-500">Illinois</span></h4>
                                    <h4>Postal Code: <span className="text-gray-500">62704</span></h4>
                                    <h4>Country: <span className="text-gray-500">United States</span></h4>
                                </div>
                                <div className="w-full mt-6 bg-white rounded">
                                    <div className="head mb-2">
                                        <h6>Attachments</h6>
                                    </div>
                                    <hr/>

                                    {/* Files */}
                                    <div
                                        className="box mt-4 rounded rounded-br-none rounded-bl-none flex items-center justify-between bg-white border border-b-0 px-4 py-3">
                                        <div className="left flex items-center gap-1">
                                            <ImAttachment size={14} className="text-gray-400"/>
                                            <h6 className="text-[12px]">
                                                contract-signed
                                            </h6>
                                        </div>
                                        <div className="right">
                                            <button className="text-primary text-[12px]">Download</button>
                                        </div>
                                    </div>
                                    <div
                                        className="w-[91%] h-[1px] bg-gray-200 flex items-center justify-center mx-auto"></div>
                                    <div
                                        className="box border-t-0 flex items-center justify-between bg-white border border-b-0 px-4 py-3">
                                        <div className="left flex items-center gap-1">
                                            <ImAttachment size={14} className="text-gray-400"/>
                                            <h6 className="text-[12px]">
                                                contract-signed
                                            </h6>
                                        </div>
                                        <div className="right">
                                            <button className="text-primary text-[12px]">Download</button>
                                        </div>
                                    </div>
                                    <div
                                        className="w-[91%] h-[0.5px] bg-gray-200 flex items-center justify-center mx-auto"></div>
                                    <div
                                        className="box border-t-0 rounded-tr-none rounded-tl-none rounded flex items-center justify-between bg-white border px-4 py-3">
                                        <div className="left flex items-center gap-1">
                                            <ImAttachment size={14} className="text-gray-400"/>
                                            <h6 className="text-[12px]">
                                                contract-signed
                                            </h6>
                                        </div>
                                        <div className="right">
                                            <button className="text-primary text-[12px]">Download</button>
                                        </div>
                                    </div>
                                </div>

                                <h4 className="mt-8 text-[14px] pb-3">
                                    This information will be available later in
                                    <span
                                        className="text-primary cursor-pointer"> Documents {`>`} Data & Privacy.</span>
                                </h4>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
};

export default Page;