'use client';
import React, {useState} from 'react';
import '@/./app/globals.css';
import LogoImg from '@/../public/assets/images/logo.svg'
import {Modal} from "flowbite-react";
import Image from "next/image";

const Page = () => {
    // Reset done popup
    const [openResetDoneModal, setOpenResetDoneModal] = useState<boolean>(false);
    return (
        <>
            <section id="reset-pawword-section" className="bg-[#F4F4F4] h-screen">
                <div className="container pt-20">
                    <div className="icon-box flex gap-2 items-center justify-center py-4">
                        <Image src={LogoImg} className="w-12" alt="LogoImg"/>
                        <h3 className="text-[38px] font-normal">nosres</h3>
                    </div>
                    <form className="register_form w-full mx-auto lg:w-[400px] px-6 py-6 bg-white rounded">
                        <div className="box">
                            <h3 className="text-[16px]">
                                Reset Password
                            </h3>
                            <p className="pt-2">
                                Your password must be at least eight characters long, including
                                both upper and lowercase letters, as well as numbers. Please
                                choose a strong password that you haven’t used on other websites
                                and is not easily guessable by others.
                            </p>
                        </div>
                        <div className="block mt-4">
                            <label htmlFor="name" className="text-[14px]">New Password</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                    type='text'
                                    placeholder=""
                                />
                            </div>
                        </div>

                        <div className="block mt-4">
                            <label htmlFor="name" className="text-[14px]">Confirm New Password</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                    type='text'
                                    placeholder=""
                                />
                            </div>
                        </div>

                        <div className="mt-4 text-end">
                            <button type='button' onClick={() => setOpenResetDoneModal(true)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Reset Password
                            </button>
                        </div>

                        {/* Reset Done Pop-Up Start */}
                        <Modal size="lg" dismissible show={openResetDoneModal}
                               onClose={() => setOpenResetDoneModal(false)}>
                            {/*<Modal.Header>*/}
                            {/*</Modal.Header>*/}
                            <Modal.Body>
                                <div className="modal_body box">
                                    <h4 className="pb-4 font-semibold text-[16px]">
                                        Password Reset
                                    </h4>
                                    <p>
                                        Your password has been reset successfully.
                                    </p>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <div className="flex w-full items-center justify-end">
                                    <button onClick={() => setOpenResetDoneModal(false)}
                                            className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                        Sign In
                                    </button>
                                </div>
                            </Modal.Footer>
                        </Modal>
                        {/* Reset Done Pop-Up End */}
                    </form>
                </div>
            </section>
        </>
    );
};

export default Page;