import React from 'react';
import blogImg1 from "@/../public/assets/images/blog1.png";
import blogImg2 from "@/../public/assets/images/blog2.jpg";
import blogImg3 from "@/../public/assets/images/blog3.jpg";
import LogoImg from "@/../public/assets/images/logo.svg";
import {HiArrowLongLeft, HiArrowLongRight} from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";

function Page() {
    return (
        <>
            <section id="work-with-section">
                <div className="container pt-2 pb-12">
                    <h1 className="mt-10 font-semibold text-[24px]">
                        Stories by Jane Doe
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                        <div data-aos="zoom-in" data-aos-duration="1000"
                             className="col cursor-pointer hover:-translate-y-2 image-box bg-white shadow rounded-md">
                            <Image src={blogImg1} className="w-full h-52 rounded-md rounded-b-none" alt="blogImg"/>
                            <div className="content px-4 py-4">
                                <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                <p className="mt-2 text-[14px] text-gray-600">
                                    With so many different ways today to find
                                    information online
                                </p>
                                <div className="flex items-center gap-3 mt-2">
                                    <Image src={LogoImg} className="w-7" alt="LogoImg"/>
                                    <div className="wrap">
                                        <h4 className="text-[14px] font-semibold">Nosres</h4>
                                        <p className="text-[13px]">09 April 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000"
                             className="col cursor-pointer hover:-translate-y-2 image-box bg-white shadow rounded-md">
                            <Image src={blogImg2} className="w-full h-52 rounded-md rounded-b-none" alt="blogImg"/>
                            <div className="content px-4 py-4">
                                <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                <p className="mt-2 text-[14px] text-gray-600">
                                    With so many different ways today to find
                                    information online
                                </p>
                                <div className="flex items-center gap-3 mt-2">
                                    <Image src={LogoImg} className="w-7" alt="LogoImg"/>
                                    <div className="wrap">
                                        <h4 className="text-[14px] font-semibold">Nosres</h4>
                                        <p className="text-[13px]">09 April 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000"
                             className="col cursor-pointer hover:-translate-y-2 image-box bg-white shadow rounded-md">
                            <Image src={blogImg3} className="w-full h-52 rounded-md rounded-b-none" alt="blogImg"/>
                            <div className="content px-4 py-4">
                                <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                <p className="mt-2 text-[14px] text-gray-600">
                                    With so many different ways today to find
                                    information online
                                </p>
                                <div className="flex items-center gap-3 mt-2">
                                    <Image src={LogoImg} className="w-7" alt="LogoImg"/>
                                    <div className="wrap">
                                        <h4 className="text-[14px] font-semibold">Nosres</h4>
                                        <p className="text-[13px]">09 April 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000"
                             className="col cursor-pointer hover:-translate-y-2 image-box bg-white shadow rounded-md">
                            <Image src={blogImg3} className="w-full h-52 rounded-md rounded-b-none" alt="blogImg"/>
                            <div className="content px-4 py-4">
                                <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                <p className="mt-2 text-[14px] text-gray-600">
                                    With so many different ways today to find
                                    information online
                                </p>
                                <div className="flex items-center gap-3 mt-2">
                                    <Image src={LogoImg} className="w-7" alt="LogoImg"/>
                                    <div className="wrap">
                                        <h4 className="text-[14px] font-semibold">Nosres</h4>
                                        <p className="text-[13px]">09 April 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000"
                             className="col cursor-pointer hover:-translate-y-2 image-box bg-white shadow rounded-md">
                            <Image src={blogImg3} className="w-full h-52 rounded-md rounded-b-none" alt="blogImg"/>
                            <div className="content px-4 py-4">
                                <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                <p className="mt-2 text-[14px] text-gray-600">
                                    With so many different ways today to find
                                    information online
                                </p>
                                <div className="flex items-center gap-3 mt-2">
                                    <Image src={LogoImg} className="w-7" alt="LogoImg"/>
                                    <div className="wrap">
                                        <h4 className="text-[14px] font-semibold">Nosres</h4>
                                        <p className="text-[13px]">09 April 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000"
                             className="col cursor-pointer hover:-translate-y-2 image-box bg-white shadow rounded-md">
                            <Image src={blogImg3} className="w-full h-52 rounded-md rounded-b-none" alt="blogImg"/>
                            <div className="content px-4 py-4">
                                <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                <p className="mt-2 text-[14px] text-gray-600">
                                    With so many different ways today to find
                                    information online
                                </p>
                                <div className="flex items-center gap-3 mt-2">
                                    <Image src={LogoImg} className="w-7" alt="LogoImg"/>
                                    <div className="wrap">
                                        <h4 className="text-[14px] font-semibold">Nosres</h4>
                                        <p className="text-[13px]">09 April 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="pagination mt-10 flex items-center justify-center">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex -space-x-px text-[14px] gap-1">
                                <li>
                                    <Link href='#' aria-current="page"
                                          className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:border-primary hover:text-primary">
                                        <HiArrowLongLeft/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' aria-current="page"
                                          className="flex items-center justify-center px-3 h-8 text-primary border border-primary bg-blue-50 hover:text-primary">
                                        1
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'
                                          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:border-primary hover:text-primary">
                                        2
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' aria-current="page"
                                          className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:border-primary hover:text-primary">
                                        <HiArrowLongRight/>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;