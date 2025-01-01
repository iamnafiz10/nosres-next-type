'use client';
import React, {useState} from 'react';
import '@/./app/globals.css';
import {Modal} from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../../../public/assets/images/logo.svg";
import {MdOutlineErrorOutline} from "react-icons/md";

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);

    // Two factor popup
    const [openTwoFactorModal, setOpenTwoFactorModal] = useState<boolean>(false);
    return (
        <>
            <section id="register-section" className="bg-[#F4F4F4]">
                <div className="container py-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="col">
                            <div className="wrap">
                                <div className="icon-box flex gap-2 items-center mt-4">
                                    <Image src={LogoImg} className="w-12" alt="LogoImg"/>
                                    <h3 className="text-[38px] font-normal">nosres</h3>
                                </div>
                                <p className="mt-3">
                                    We build products and services to satisfy people’s<br/>
                                    needs and desires, and boost businesses growth.
                                </p>
                            </div>
                        </div>

                        <div className="col lg:flex justify-end">
                            <form className="register_form w-full lg:w-[400px] h-[380px] px-6 py-6 bg-white rounded">
                                <div className="form-head">
                                    <h3 className="text-[16px]">Sign In</h3>
                                </div>
                                <div className="block mt-4">
                                    <label htmlFor="name" className="text-[14px]">Email</label>
                                    <div className="relative">
                                        <input
                                            className="mt-1 valid_input rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] focus:outline-none focus:border-red-500 focus:ring focus:ring-transparent"
                                            type="email"
                                            placeholder="johndoe@mail.com"
                                        />
                                        <div
                                            className="absolute inset-y-0 right-0 top-1 text-red-600 flex items-center pr-3 pointer-events-none">
                                            <MdOutlineErrorOutline size={20}/>
                                        </div>
                                    </div>

                                    <span className="text-[12px] text-red-600">Email is not valid</span>
                                </div>

                                <div className="block mt-4">
                                    <label htmlFor="password" className="text-[14px]">Password</label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder={showPassword ? '12345' : '********'}
                                        />
                                        <div
                                            className="absolute inset-y-0 right-0 top-1 text-primary flex items-center pr-3">
                                            <div
                                                className="text-[12px] cursor-pointer"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? 'Hide' : 'Show'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        <span className="text-[12px] text-[#828D9E]">
                                           <Link href='#'
                                                 className="text-primary">
                                               Forgot password?
                                           </Link>
                                        </span>
                                    </div>

                                    {/* Two factor Pop-Up Start */}
                                    <Modal size="lg" show={openTwoFactorModal}
                                           onClose={() => setOpenTwoFactorModal(false)}>
                                        <Modal.Header>
                                            <h4 className="text-[16px]">
                                                Two-Factor Authentication
                                            </h4>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="modal_body box">
                                                <p className="pb-4">
                                                    A unique 6-digit authentication code has been sent to
                                                    *****nosres.com. Please enter it to access your Nosres Account.
                                                </p>
                                                <h4 className="text-[14px]">
                                                    Enter Authentication Code
                                                </h4>
                                                <div className="flex items-center gap-1 pb-2">
                                                    <input
                                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                        type="text"
                                                        maxLength={1}
                                                        placeholder=""/>
                                                    <input
                                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                        type="text"
                                                        maxLength={1}
                                                        placeholder=""/>
                                                    <input
                                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                        type="text"
                                                        maxLength={1}
                                                        placeholder=""/>
                                                    <input
                                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                        type="text"
                                                        maxLength={1}
                                                        placeholder=""/>
                                                    <input
                                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                        type="text"
                                                        maxLength={1}
                                                        placeholder=""/>
                                                    <input
                                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                        type="text"
                                                        maxLength={1}
                                                        placeholder=""/>
                                                </div>
                                                <Link href='#' className="text-[14px] text-primary">Resend authentication code</Link>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <div className="flex w-full items-center justify-between">
                                                <button onClick={() => setOpenTwoFactorModal(false)}
                                                        className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                                </button>
                                                <button onClick={() => setOpenTwoFactorModal(false)}
                                                        className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                                    Verify
                                                </button>
                                            </div>
                                        </Modal.Footer>
                                    </Modal>
                                    {/* Two factor Pop-Up End */}
                                </div>

                                <div className="block mt-4">
                                    <button onClick={() => setOpenTwoFactorModal(true)} type='button'
                                            className="bg-primary py-3 px-4 w-full rounded text-white">
                                        Sign In
                                    </button>
                                </div>

                                <div className="mt-4 text-center">
                                    <span className="text-[#828D9E] text-[12px]">
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        Don't have an account? <Link href='#' className="text-primary">Sign up</Link>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;