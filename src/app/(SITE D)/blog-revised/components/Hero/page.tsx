import React from 'react';
import Image from "next/image";
import userImg from '@/../public/assets/images/sited/user-image.jpg';
import Link from "next/link";
import {SiFacebook, SiLinkedin} from "react-icons/si";
import {FaXTwitter} from "react-icons/fa6";

const Page = () => {
    return (
        <>
            <section id="benefits-hero-section" className="bg-[#F1F2F2]">
                <div className="container pt-28 pb-16">
                    <div className="w-full lg:w-[600px] mx-auto">
                        <div className="flex items-center gap-4">
                            <Image src={userImg} className="w-16 h-16 rounded-full" alt="userImg"/>
                            <div className="content box">
                                <h4 className="text-[16px] font-[500] mb-1">Jane Doe</h4>
                                <p>Chief Marketing Officer</p>
                                <ul className="mt-1 flex items-center gap-3">
                                    <li>
                                        <div>
                                            <Link href='#' className="cursor-pointer">
                                                <SiFacebook size={15} className="h-7 text-[#0866FF]"/>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Link href='#' className="cursor-pointer">
                                                <FaXTwitter size={15} className="h-7 text-[#000000]"/>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Link href='#' className="cursor-pointer">
                                                <SiLinkedin size={14} className="h-7 text-primary"/>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;