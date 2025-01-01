import React from 'react';
import {HiOutlineArrowRightCircle} from "react-icons/hi2";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <section id="media-guidelines-section">
                <div className="container pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="col lg:col-span-7 mt-4">
                            <div className="">
                                <h4 className="text-[24px] font-semibold pb-2">General Guidelines</h4>
                                <hr/>
                                <h4 className="pt-2 text-[16px] text-prgcolor leading-[24px]">
                                    Nosres is about logic, imagination, and creativity. We attach a lot of importance to
                                    our
                                    brand. So, please make sure you help us protect it by complying with our brand
                                    guidelines.
                                </h4>
                                <div
                                    className="mt-4 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                    <HiOutlineArrowRightCircle size={30}/>
                                    <Link href='#'
                                          className="text-[14px]">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col lg:col-span-5">
                            <div className="box py-4 px-4 border rounded">
                                <h4 className="text-[16px] font-semibold pb-2">Press Contact</h4>
                                <hr/>
                                <h4 className="pt-2 text-[14px] text-prgcolor">
                                    Nosres Media Relations
                                </h4>
                                <Link href='#' className="text-[14px] text-primary">
                                    press@nosres.com
                                </Link>
                                <p className="mt-6">
                                    For all other inquiries, please visit Nosres
                                    <Link href='#' className="text-primary"> Contact</Link> page.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;