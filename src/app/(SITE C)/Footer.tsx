'use client';
import React from 'react';
import LogoImg from "@/../public/assets/images/logo.svg";
import {FaFacebookF, FaXTwitter} from "react-icons/fa6";
import {IoLogoInstagram} from "react-icons/io5";
import {FaLinkedin} from "react-icons/fa";
import {RxPlus} from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section id="footer-section" className="bg-[#F4F4F4]">
                <div className="container py-10">
                    <footer>
                        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-4">
                            <div className="col col-span-5 mt-3">
                                <h3 className="text-gray-600 font-semibold">
                                    Equal Employment Opportunity
                                </h3>
                                <p className="mt-3 text-gray-500 text-[12px]">
                                    Nosres is proud to be an equal employment opportunity and is an affirmative action
                                    employer. We are committed to equal employment opportunity regardless of race,
                                    color, ancestry, religion, sex, sexual orientation, age, citizenship, marital
                                    status, gender identity or Veteran status, national origin, disability status,
                                    political views or activity, or other applicable legally protected characteristics.
                                    <br/>
                                    <br/>
                                    We also consider qualified applicants regardless of criminal histories, consistent
                                    with legal requirements.
                                    <br/>
                                    <br/>
                                    Nosres is also commited to providing accommodations to qualified individuals with
                                    disabilities. If you have a disability or special need that requires accommodation,
                                    please feel free to contact us at accommodations@nosres.com.
                                </p>

                            </div>

                            <div className="col col-span-2 mt-3 flex flex-col items-center">
                                <h3 className="font-semibold text-gray-600">About Us</h3>
                                <ul className="mt-3 ml-3 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link href='#'>Newsroom</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='#'>Blog</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='#'>Press</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='#'>Contact Us</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col col-span-2 mt-3 flex flex-col items-center">
                                <h3 className="font-semibold text-gray-600">Support</h3>
                                <ul className="mt-3 ml-10 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link href='#'>Career Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='#'>Application Tips</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='#'>Interview Tips</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col col-span-2 mt-3 flex flex-col items-end">
                                <h3 className="font-semibold text-gray-600">Connect With Us</h3>
                                <div className="social-icons mt-4 mr-1 flex items-center gap-2">
                                    <FaFacebookF size={15}
                                                 className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <IoLogoInstagram size={15}
                                                     className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <FaLinkedin size={15}
                                                className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <FaXTwitter size={15}
                                                className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Footer */}
                        <div className="block lg:hidden">
                            <div className="col pb-8">
                                <div className="social-icons mt-6 flex items-center gap-3">
                                    <FaFacebookF size={15}
                                                 className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <IoLogoInstagram size={15}
                                                     className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <FaLinkedin size={15}
                                                className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <FaXTwitter size={15}
                                                className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                </div>
                                <h3 className="mt-5 text-gray-600 font-semibold">Equal Employment Opportunity</h3>
                                <p className="mt-3 text-gray-500 text-[12px]">
                                    Nosres is proud to be an equal employment opportunity and is an affirmative action
                                    employer. We are committed to equal employment opportunity regardless of race,
                                    color, ancestry, religion, sex, sexual orientation, age, citizenship, marital
                                    status, gender identity or Veteran status, national origin, disability status,
                                    political views or activity, or other applicable legally protected characteristics.
                                    <br/>
                                    <br/>
                                    We also consider qualified applicants regardless of criminal histories, consistent
                                    with legal requirements.

                                    Nosres is also commited to providing accommodations to qualified individuals with
                                    disabilities. If you have a disability or special need that requires accommodation,
                                    please feel free to contact us at accommodations@nosres.com.
                                </p>
                            </div>

                            <details className="group">
                                <summary
                                    className="relative border-b border-b-[#ABABAB] pb-4 flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                    About Us
                                    <RxPlus
                                        className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-90"/>
                                </summary>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link href='/'>Newsroom</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/'>Blog</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/'>Press</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/'>Contact Us</Link>
                                    </li>
                                </ul>
                            </details>

                            <details className="group pt-5">
                                <summary
                                    className="relative border-b border-b-[#ABABAB] pb-4 flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                    Support
                                    <RxPlus
                                        className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-90"/>
                                </summary>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link href='/'>Career Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/'>Application Tips</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/'>Interview Tips</Link>
                                    </li>
                                </ul>
                            </details>
                        </div>

                        {/* Copyright */}
                        <div className="copyright md:flex justify-between pt-4 mt-10">
                            <li className="flex md:hidden hover:text-primary pt-2 pb-3">
                                <Link href='/' className='flex items-center gap-1'>
                                    <Image src={LogoImg} className="w-4" alt="LogoImg"/>
                                    <h4 className="text-black">nosres</h4>
                                </Link>
                            </li>
                            <div className="left">
                                <ul className="block space-y-2 sm:space-y-0 sm:flex items-center gap-4 text-gray-500 text-[12px]">
                                    <li className="hidden md:flex hover:text-primary">
                                        <Link href='/' className='flex items-center gap-1'>
                                            <Image src={LogoImg} className="w-4" alt="LogoImg"/>
                                            <h4 className="text-black">nosres</h4>
                                        </Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='#'>About Nosres</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='#'>Terms</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='#'>Privacy</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='#'>Applicant and Candidate Privacy</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='#'>Careers</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='#'>Nosres Support</Link>
                                    </li>
                                </ul>

                                <p className="mt-[14px] text-gray-500 text-[12px]">© {currentYear} Nosres Inc. All
                                    rights
                                    reserved.</p>
                            </div>
                            <div className="right mt-2 md:mt-0">
                                <p className="cursor-pointer">United States</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    );
};

export default Footer;