"use client";
import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import LogoImg from "../../../../public/assets/images/logo.svg";
import {ImAttachment} from "react-icons/im";
import {HiOutlineCloudArrowUp, HiOutlineMinusCircle} from "react-icons/hi2";

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

    // Multiple File Upload Function
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        if (files.length + selectedFiles.length > 3) {
            alert("You can upload a maximum of 3 files.");
            return;
        }
        setSelectedFiles((prev) => [...prev, ...files]);
    };

    const handleRemoveFile = (index: number) => {
        setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const fileBoxes = Array(3)
        .fill(null)
        .map((_, index) => (
            <div
                key={index}
                className={`box mt-0 rounded flex items-center justify-between bg-white px-4 py-3 relative ${
                    index === 0 ? "" : ""
                }`}
            >
                {(index === 0 || index === 1) && (
                    <div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[88%] border-b border-gray-300"/>
                )}
                <div className="left flex items-center gap-1">
                    <ImAttachment size={14} className="text-gray-400"/>
                    {selectedFiles[index] ? (
                        <h6 className="text-[12px]">{selectedFiles[index].name}</h6>
                    ) : (
                        <h6 className="text-[12px] text-gray-400">No file selected</h6>
                    )}
                </div>
                {selectedFiles[index] ? (
                    <div className="right mt-0 cursor-pointer flex gap-1 items-center">
                        <HiOutlineMinusCircle className="text-primary"/>
                        <button
                            className="text-primary text-[14px]"
                            onClick={() => handleRemoveFile(index)}
                        >
                            Remove
                        </button>
                    </div>
                ) : null}
            </div>
        ));
    return (
        <>
            <section id="dashboard-section" className="bg-[#F9FAFB] flex items-center justify-center pt-[100px] pb-10">
                {/* Dashboard Body */}
                <div className="bg-gray-50 m-4 md:m-0">
                    <div
                        className="thank_you_box bg-white rounded-lg text-start w-full md:w-[550px] py-[25px] px-[50px]">
                        {loading ? (
                            <>
                                <Skeleton height={30} count={1}/>
                                <Skeleton height={20} count={1}/>
                                <Skeleton height={30} count={1}/>
                                <Skeleton height={20} count={1}/>
                                <Skeleton height={120} count={1}/>
                                <Skeleton height={100} count={1}/>
                                <Skeleton height={80} count={1}/>
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
                                        Please submit the requested information by uploading document (s) and/or
                                        entering text in the fields below.
                                    </h4>

                                    <div className="mt-4">
                                        <h4 className="text-prgcolor text-[14px] mt-2 font-[500]">
                                            Upload document
                                        </h4>
                                        <p className="text-gray-500 text-[14px]">Please upload a clear and legible
                                            scanned copy of your government-issued ID for
                                            verification (e.g., passport, driver’s license).</p>
                                    </div>
                                </div>

                                {/* Files */}
                                <div className="border rounded mt-4">
                                    {fileBoxes}
                                </div>

                                <div className="modal_body box">
                                    <div className="image-upload mt-4">
                                        <div className="flex items-center justify-center mt-3 w-full">
                                            <label htmlFor="dropzone-file"
                                                   className="flex flex-col items-center justify-center w-full h-28 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
                                                <div
                                                    className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <HiOutlineCloudArrowUp
                                                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"/>
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                        className="font-semibold">Click to upload</span> or
                                                        drag and
                                                        drop</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                                        Supported file formats: .pdf, .doc, .docx, .txt
                                                    </p>
                                                </div>
                                                <input
                                                    id="dropzone-file"
                                                    type="file"
                                                    accept=".pdf,.doc,.docx,.txt"
                                                    className="hidden"
                                                    multiple
                                                    onChange={handleFileChange}
                                                    ref={fileInputRef}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="input-box mt-3">
                                        <input
                                            className="mt-1 rounded w-full pt-4 pb-[50px] px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                            type="text"
                                            placeholder="You may provide your response here."
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-start gap-4 mt-6">
                                    <button type='button'
                                            className="text-[14px] py-2 px-6 border border-primary bg-primary hover:bg-[#3A5F8A] text-white rounded">
                                        Submit Information
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