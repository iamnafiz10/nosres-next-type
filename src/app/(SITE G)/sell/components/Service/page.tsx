'use client';
import React from 'react';
import {HiMenu} from "react-icons/hi";
import {PiPercentLight} from "react-icons/pi";
import one from '@/../public/assets/images/siteg/1.png';
import two from '@/../public/assets/images/siteg/2.png';
import three from '@/../public/assets/images/siteg/3.png';
import four from '@/../public/assets/images/siteg/4.png';
import five from '@/../public/assets/images/siteg/5.png';
import six from '@/../public/assets/images/siteg/6.png';
import seven from '@/../public/assets/images/siteg/7.png';
import eight from '@/../public/assets/images/siteg/8.png';
import nine from '@/../public/assets/images/siteg/9.png';
import ten from '@/../public/assets/images/siteg/10.png';
import eleven from '@/../public/assets/images/siteg/11.png';
import Image from "next/image";

function Page() {
    return (
        <>
            <section id="service-section">
                <div className="container pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="col lg:col-span-7">
                            <div className="mt-4 flex flex-col">
                                <div className="overflow-x-auto">
                                    <div className="inline-block min-w-full py-2">
                                        <div className="overflow-hidden">
                                            <table className="min-w-full border border-primary text-start text-[14px]">
                                                <thead className="border-b border-primary bg-primary text-white">
                                                <tr>
                                                    <th scope="col"
                                                        className="font-semibold text-start text-[14px] border-e border-primary px-6 py-4">
                                                        <div className="flex items-center">
                                                            <HiMenu size={20} className="mr-2"/>
                                                            PRODUCT CATEGORIES
                                                        </div>
                                                    </th>

                                                    <th scope="col"
                                                        className="font-semibold text-start text-[14px] border-e border-primary px-6 py-4">
                                                        <div className="flex items-center">
                                                            <PiPercentLight size={20} className="mr-2"/>
                                                            SERVICE FEE
                                                        </div>
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="border-b border-primary">
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        <div className="flex items-center">
                                                            <Image src={one} className="w-4 h-7 mr-2" alt="tblImG"/>
                                                            Electronics
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        %8
                                                    </td>
                                                </tr>

                                                <tr className="border-b border-primary">
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        <div className="flex items-center">
                                                            <Image src={two} className="w-4 h-7 mr-2" alt="tblImG"/>
                                                            Women’s Fashion
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        %10
                                                    </td>
                                                </tr>

                                                <tr className="border-b border-primary">
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        <div className="flex items-center">
                                                            <Image src={three} className="w-4 h-6 mr-2" alt="tblImG"/>
                                                            Men’s Fashion
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        %10
                                                    </td>
                                                </tr>

                                                <tr className="border-b border-primary">
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        <div className="flex items-center">
                                                            <Image src={four} className="w-4 h-6 mr-2" alt="tblImG"/>
                                                            Home Appliances
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        %8
                                                    </td>
                                                </tr>

                                                <tr className="border-b border-primary">
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        <div className="flex items-center">
                                                            <Image src={five} className="w-4 h-6 mr-2" alt="tblImG"/>
                                                            Outdoor, Sports & Fitness
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        %10
                                                    </td>
                                                </tr>

                                                <tr className="border-b border-primary">
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        <div className="flex items-center">
                                                            <Image src={six} className="w-4 h-5 mr-2" alt="tblImG"/>
                                                            Baby & Kids
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        %10
                                                    </td>
                                                </tr>

                                                <tr className="border-b border-primary">
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        <div className="flex items-center">
                                                            <Image src={seven} className="w-4 h-6 mr-2" alt="tblImG"/>
                                                            Beauty, Health & Nutrition
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        %10
                                                    </td>
                                                </tr>

                                                <tr className="border-b border-primary">
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        <div className="flex items-center">
                                                            <Image src={eight} className="w-4 h-5 mr-2" alt="tblImG"/>
                                                            Office & School Supplies
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        %5
                                                    </td>
                                                </tr>

                                                <tr className="border-b border-primary">
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        <div className="flex items-center">
                                                            <Image src={nine} className="w-4 h-6 mr-2" alt="tblImG"/>
                                                            Luggage & Travel Bag
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        %10
                                                    </td>
                                                </tr>

                                                <tr className="border-b border-primary">
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        <div className="flex items-center">
                                                            <Image src={ten} className="w-4 h-5 mr-2" alt="tblImG"/>
                                                            Motors and Bikes’ Accessories
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        %9
                                                    </td>
                                                </tr>

                                                <tr className="border-b border-primary">
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        <div className="flex items-center">
                                                            <Image src={eleven} className="w-4 h-4 mr-2" alt="tblImG"/>
                                                            Books, Music & Movies
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                        %9
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col lg:col-span-5 mt-4">
                            <h1 className="font-semibold text-[24px]">
                                How Service Fee Structures
                            </h1>
                            <p className="mt-3 text-[#ABABAB] text-[16px]">
                                We do not require <b>any subscription or charge fees</b> to list your products. We only charge
                                a <b>small service fee</b> for each item you sell.
                                <br/>
                                <br/>
                                Service fees vary from 5-10% per category, as in the table.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;