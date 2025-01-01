"use client";
import React, {useEffect, useState} from 'react';
import {
    HiOutlineBell,
} from "react-icons/hi2";
import {Modal} from "flowbite-react";
import {Checkbox, Label} from 'flowbite-react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Page = () => {
    // Email change popup
    const [openEmailModal, setOpenEmailModal] = useState<boolean>(false);

    // SMS change popup
    const [openSmsModal, setOpenSmsModal] = useState<boolean>(false);

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
                        <HiOutlineBell
                            size={25}
                            className="text-gray-500 w-7"/>
                        <h6>Notifications</h6>
                    </div>
                    <hr/>
                    {/* Notification */}
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
                                        <h6 className="mt-3">Email Notifications</h6>
                                        <h4 className="text-[12px] text-white bg-primary py-1 px-3 rounded">
                                            BETA
                                        </h4>
                                    </div>

                                    <hr/>
                                    <div className="mt-4 box">
                                        <p>
                                            Turn important email notifications from Nosres on or off.
                                        </p>
                                    </div>

                                    <div className="box mt-4 rounded bg-white">
                                        <div onClick={() => setOpenEmailModal(true)}>
                                            <button className="text-primary text-[14px]">Manage Email Notifications
                                            </button>
                                        </div>
                                    </div>
                                    {/* Email change Pop-Up Start */}
                                    <Modal size="lg" dismissible show={openEmailModal}
                                           onClose={() => setOpenEmailModal(false)}>
                                        <Modal.Header>
                                            <div className="head text-[16px] flex items-start gap-2">
                                                <h6>Email Notifications</h6>
                                            </div>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="modal_body box">
                                                <div id="checkbox" className="mt-3">
                                                    <div className="flex items-center gap-2">
                                                        <Checkbox id="one"/>
                                                        <Label htmlFor="one" className="text-gray-500 font-normal">
                                                            News about Nosres products services, and new features
                                                        </Label>
                                                    </div>

                                                    <div className="mt-2 flex items-center gap-2">
                                                        <Checkbox id="two" defaultChecked/>
                                                        <Label htmlFor="two" className="text-gray-500 font-normal">
                                                            Tips on nosres business products and services
                                                        </Label>
                                                    </div>

                                                    <div className="mt-2 flex items-center gap-2">
                                                        <Checkbox id="three"/>
                                                        <Label htmlFor="three" className="text-gray-500 font-normal">
                                                            Tips about Nosres tools
                                                        </Label>
                                                    </div>

                                                    <div className="mt-2 flex items-center gap-2">
                                                        <Checkbox id="fore"/>
                                                        <Label htmlFor="fore" className="text-gray-500 font-normal">
                                                            Participation in Nosres research surveys
                                                        </Label>
                                                    </div>

                                                    <div className="mt-2 flex items-center gap-2">
                                                        <Checkbox id="five" defaultChecked/>
                                                        <Label htmlFor="five" className="text-gray-500 font-normal">
                                                            Reminders of notifications you may have missed
                                                        </Label>
                                                    </div>

                                                    <div className="mt-2 flex items-center gap-2">
                                                        <Checkbox id="six"/>
                                                        <Label htmlFor="six" className="text-gray-500 font-normal">
                                                            Things you may like
                                                        </Label>
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <div className="flex w-full items-center justify-between">
                                                <button onClick={() => setOpenEmailModal(false)}
                                                        className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                                </button>
                                                <button onClick={() => setOpenEmailModal(false)}
                                                        className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                                </button>
                                            </div>
                                        </Modal.Footer>
                                    </Modal>
                                    {/* Email change Pop-Up End */}
                                </>
                            )}
                        </div>

                        <div className="mt-8 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                            {loading ? (
                                <>
                                    <Skeleton height={30} count={1}/>
                                    <Skeleton height={80} count={1}/>
                                </>
                            ) : (
                                <>
                                    <div className="head mb-2 flex items-start gap-2">
                                        <h6 className="mt-3">SMS Notifications</h6>
                                        <h4 className="text-[12px] text-white bg-primary py-1 px-3 rounded">
                                            BETA
                                        </h4>
                                    </div>
                                    <hr/>
                                    <div className="mt-4 box">
                                        <p>
                                            Turn important SMS notifications from Nosres on or off.
                                        </p>
                                    </div>

                                    <div className="box mt-4 rounded bg-white">
                                        <div onClick={() => setOpenSmsModal(true)}>
                                            <button className="text-primary text-[14px]">Manage SMS Notifications
                                            </button>
                                        </div>
                                    </div>
                                    {/* SMS change Pop-Up Start */}
                                    <Modal size="lg" dismissible show={openSmsModal}
                                           onClose={() => setOpenSmsModal(false)}>
                                        <Modal.Header>
                                            <div className="head text-[16px] flex items-start gap-2">
                                                <h6>SMS Notifications</h6>
                                            </div>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="modal_body box">
                                                <div id="checkbox" className="mt-3">
                                                    <div className="flex items-center gap-2">
                                                        <Checkbox id="sone"/>
                                                        <Label htmlFor="sone" className="text-gray-500 font-normal">
                                                            News about Nosres products and services, and new features
                                                        </Label>
                                                    </div>

                                                    <div className="mt-2 flex items-center gap-2">
                                                        <Checkbox id="stwo" defaultChecked/>
                                                        <Label htmlFor="stwo" className="text-gray-500 font-normal">
                                                            Emergency alerts
                                                        </Label>
                                                    </div>

                                                    <div className="mt-2 flex items-center gap-2">
                                                        <Checkbox id="sthree"/>
                                                        <Label htmlFor="sthree" className="text-gray-500 font-normal">
                                                            All other notifications
                                                        </Label>
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <div className="flex w-full items-center justify-between">
                                                <button onClick={() => setOpenSmsModal(false)}
                                                        className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                                </button>
                                                <button onClick={() => setOpenSmsModal(false)}
                                                        className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                                </button>
                                            </div>
                                        </Modal.Footer>
                                    </Modal>
                                    {/* SMS change Pop-Up End */}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
        ;
};

export default Page;