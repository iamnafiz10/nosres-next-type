import React from 'react';
import {HiOutlineArrowRightCircle} from "react-icons/hi2";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <section id="legal-details-section" className="bg-[#F4F4F4]">
                <div className="container py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div data-aos="zoom-in" className="col">
                            <div className="box h-full lg:h-[145px] bg-white px-6 py-4 rounded">
                                <h1 className="text-[16px] font-semibold">Terms of Use</h1>
                                <p className="mt-2">Rules and regulations which you mush agree to follow in order to use
                                    our
                                    services</p>
                                <div
                                    className="mt-3 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                    <HiOutlineArrowRightCircle size={30}/>
                                    <Link href='/'
                                          className="text-[14px]">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="col">
                            <div className="box h-full lg:h-[145px] bg-white px-6 py-4 rounded">
                                <h1 className="text-[16px] font-semibold">Privacy Policy</h1>
                                <p className="mt-2">
                                    Information we collect and how we store, protect, and use it.
                                </p>
                                <div
                                    className="mt-3 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                    <HiOutlineArrowRightCircle size={30}/>
                                    <Link href='/'
                                          className="text-[14px]">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="col">
                            <div className="box h-full lg:h-[145px] bg-white px-6 py-4 rounded">
                                <h1 className="text-[16px] font-semibold">Seller Terms</h1>
                                <p className="mt-2">
                                    Your rights and obligations as a seller on Nosres Marketplace.
                                </p>
                                <div
                                    className="mt-3 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                    <HiOutlineArrowRightCircle size={30}/>
                                    <Link href='/'
                                          className="text-[14px]">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="col">
                            <div className="box h-full lg:h-[145px] bg-white px-6 py-4 rounded">
                                <h1 className="text-[16px] font-semibold">Terms of Sale</h1>
                                <p className="mt-2">
                                    Your rights and obligations as a buyer on Nosres Marketplace.
                                </p>
                                <div
                                    className="mt-3 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                    <HiOutlineArrowRightCircle size={30}/>
                                    <Link href='/'
                                          className="text-[14px]">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="col">
                            <div className="box h-full lg:h-[145px] bg-white px-6 py-4 rounded">
                                <h1 className="text-[16px] font-semibold">Applicant and Candidate Privacy Policy</h1>
                                <p className="mt-2">
                                    Information we collect during the hiring process and why we collect it.
                                </p>
                                <div
                                    className="mt-3 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                    <HiOutlineArrowRightCircle size={30}/>
                                    <Link href='/'
                                          className="text-[14px]">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="col">
                            <div className="box h-full lg:h-[145px] bg-white px-6 py-4 rounded">
                                <h1 className="text-[16px] font-semibold">Other Policies</h1>
                                <p className="mt-2">
                                    Your rights and obligations as a buyer on Nosres Marketplace
                                </p>
                                <div
                                    className="mt-3 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                    <HiOutlineArrowRightCircle size={30}/>
                                    <Link href='/'
                                          className="text-[14px]">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;