"use client";
import React, {useEffect, useState} from 'react';
import {
    HiOutlineCircleStack
} from "react-icons/hi2";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {LuMessageSquareText} from "react-icons/lu";
import {ImAttachment} from "react-icons/im";
import {Modal} from "flowbite-react";

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

    const [openDocumentModal, setOpenDocumentModal] = useState(false);
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

                    <div className="rounded mt-8">
                        <div className="grid grid-cols-1">
                            <div className="col w-full lg:w-[642px] h-full pt-8 pb-6 px-8 bg-white rounded">
                                {loading ? (
                                    <>
                                        <Skeleton height={60} count={1}/>
                                        <Skeleton height={10} count={4}/>
                                    </>
                                ) : (
                                    <>
                                        <div className="box">
                                            <h4 className="text-[16px] font-[500]">Support Requests</h4>
                                            <p className="mt-1">Information you previously requested from the Nosres
                                                Support Team.</p>
                                        </div>
                                        <br/>

                                        <div className="overflow-x-auto">
                                            <table
                                                className="table-auto w-full text-left">
                                                <thead>
                                                <tr className="bg-transparent border-b border-t-0 text-[14px] text-gray-500">
                                                    <th className="px-4 py-2 font-normal">Date</th>
                                                    <th className="px-4 py-2 font-normal">Description</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="border-b border-dashed">
                                                    <td className="px-4 py-2 text-[14px] text-gray-500">
                                                        January 3, 2025
                                                    </td>
                                                    <td className="px-4 py-2">
                                                        <button onClick={() => setOpenDocumentModal(true)} type='button'
                                                                className="bg-white border rounded hover:bg-[#F0F5FF] hover:border-[#F0F5FF] text-gray-500 py-1 px-4 flex gap-2 items-center justify-center text-[14px]">
                                                            <span>
                                                                <LuMessageSquareText size={17}/>
                                                            </span>
                                                            Secure Message
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-dashed">
                                                    <td className="px-4 py-2 text-[14px] text-gray-500">
                                                        January 3, 2025
                                                    </td>
                                                    <td className="px-4 py-2">
                                                        <button type='button'
                                                                className="bg-white border rounded hover:bg-[#F0F5FF] hover:border-[#F0F5FF] text-gray-500 py-1 px-4 flex gap-2 items-center justify-center text-[14px]">
                                                            <span>
                                                                <LuMessageSquareText size={17}/>
                                                            </span>
                                                            Secure Message
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 text-[14px] text-gray-500">
                                                        January 3, 2025
                                                    </td>
                                                    <td className="px-4 py-2">
                                                        <button type='button'
                                                                className="bg-white border rounded hover:bg-[#F0F5FF] hover:border-[#F0F5FF] text-gray-500 py-1 px-4 flex gap-2 items-center justify-center text-[14px]">
                                                            <span>
                                                                <LuMessageSquareText size={17}/>
                                                            </span>
                                                            Secure Message
                                                        </button>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Modal size="lg" dismissible show={openDocumentModal}
                   onClose={() => setOpenDocumentModal(false)}>
                <Modal.Header>
                    <h4 className="text-[16px]">Secure Message</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body box">
                        <div className="box text-[14px] space-y-1">
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
                                className="box mt-4 rounded rounded-br-none rounded-bl-none flex items-center justify-between bg-white border px-4 py-3">
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
                                className="box border-t-0 flex items-center justify-between bg-white border px-4 py-3">
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
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex w-full items-end justify-end">
                        <button onClick={() => setOpenDocumentModal(false)}
                                className="px-10 text-[14px] py-2 border border-primary bg-primary hover:bg-[#3A5F8A] text-white rounded">
                            Done
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Page;