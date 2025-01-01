'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import shippingBottomImg from '@/../public/assets/images/sitee/shipping.png';
import packageImg from '@/../public/assets/images/sitee/package.png';
import boxImg from '@/../public/assets/images/sitee/box.png';
import nextArwImg from '@/../public/assets/images/sitee/next-arw.png';

function Page() {
    return (
        <>
            <section id="terms-detail-section">
                <div className="container py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* Left Side Sticky */}
                        <div
                            className="col lg:col-span-3 flex-initial lg:sticky top-[80px] h-full lg:h-[30vh] w-full overflow-hidden lg:overflow-auto">
                            <h4 className="text-[16px] font-semibold pb-2">
                                Other Policies
                            </h4>
                            <hr/>
                            <ul className="space-y-3 pt-4 text-primary">
                                <li>
                                    <Link href='shipping-policy'>
                                        <h4 className="text-prgcolor font-semibold text-[14px]">
                                            Shipping Policy
                                        </h4>
                                    </Link>
                                </li>

                                <li>
                                    <Link href='cancellation-policy'>
                                        <h4 className="text-primary hover:text-prgcolor hover:font-semibold text-[14px]">
                                            Cancellation Policy
                                        </h4>
                                    </Link>
                                </li>

                                <li>
                                    <Link href='return-policy'>
                                        <h4 className="text-primary hover:text-prgcolor hover:font-semibold text-[14px]">
                                            Return Policy
                                        </h4>
                                    </Link>
                                </li>

                                <li>
                                    <Link href='refund-policy'>
                                        <h4 className="text-primary hover:text-prgcolor hover:font-semibold text-[14px]">
                                            Refund Policy
                                        </h4>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Right Side Content */}
                        <div className="col lg:col-span-9 pt-0 right_side_content">
                            <h4 className="text-[16px] font-semibold pb-2">
                                Shipping Policy
                            </h4>
                            <div className="section border rounded p-8 pt-4">
                                <div className="scroll_content_wrap">
                                    <h4 className="text-[14px] text-prgcolor leading-[24px] my-4">
                                        To provide an accurate cost of shipping product to our customers we make our
                                        shipping fee calculation based on the actual weight of the package or its
                                        calculated dimensional (DIM) weight. After comparison, the greater weight is
                                        used to calculate the total shipping fee. Therefore, you need to determine:
                                    </h4>
                                    <Image src={shippingBottomImg} alt="shippingBottomImg"/>

                                    <div className="flex items-center gap-2 mt-6">
                                        <div
                                            className="py-[6px] px-[14px] bg-[#000000] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                1
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Determine Actual Weight of the Package
                                        </h4>
                                    </div>

                                    <div className="block sm:flex items-center gap-4 mt-6">
                                        <div className="left">
                                            <Image src={packageImg} className="w-24" alt="packageImg"/>
                                        </div>
                                        <div className="right mt-4 sm:mt-0">
                                            <h4 className="text-[14px] text-prgcolor">
                                                The actual weight is the product weight including packaging rounded up
                                                to the next whole pound.
                                            </h4>
                                            <ul className="list-disc text-[14px] text-prgcolor ml-4 mt-3">
                                                <li>Use a scale to determine the actual weight of the package.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <br/>
                                    <br/>
                                    <div className="flex items-center gap-2 mt-6">
                                        <div
                                            className="py-[6px] px-[14px] bg-[#000000] rounded-full flex items-center">
                                            <h1 className="text-white text-[16px]">
                                                2
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Determine DIM Weight of the Package
                                        </h4>
                                    </div>
                                    <div className="ml-11 mt-2">
                                        <h4 className="text-[14px] text-prgcolor leading-[24px]">
                                            The DIM weight (also referred to volumetric weight) is a pricing technique
                                            that
                                            is based on the package size rather than its weight. Simply put, it focused
                                            on
                                            how much space the package will take up versus only how much it weighs. It
                                            is
                                            widely used by freight forwarders, truck carriers, and commercial airlines,
                                            which use an estimated weight that is calculated from the length, width and
                                            height of a package.
                                        </h4>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-6">
                                        <div className="col md:col-span-7">
                                            <h4 className="text-[14px] text-prgcolor">
                                                To calculate the Dimensional weight of a package
                                            </h4>
                                            <ul className="list-disc space-y-4 text-[14px] text-prgcolor ml-4 mt-3">
                                                <li>
                                                    First, measure dimensions (length, width and height) of the package
                                                    in centimeters at the longest point, rounding up/down each
                                                    measurement to the nearest whole number (for instance, if the width
                                                    of the package is 23.49 cm or below, round down to 23 cm. If it is
                                                    23.50 cm or above, round up to 24 cm.)
                                                </li>
                                                <li>
                                                    Then multiply these three dimensions to get the cubic size of the
                                                    package in centimeters.
                                                </li>
                                                <li>
                                                    Lastly, divide the cubic size of the package in centimeters by the
                                                    DIM divisor (5,000) – round up/down to the nearest whole number.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col md:col-span-5">
                                            <Image src={boxImg} className="w-24" alt="boxImg"/>
                                            <div
                                                className="calculate-formula flex items-center justify-between text-[12px] text-prgcolor">
                                                <div>
                                                    <span>
                                                        DIM WEIGHT
                                                    </span>
                                                </div>
                                                <div className="pl-4 pr-4">
                                                    <span>=</span>
                                                </div>
                                                <div className="flex dim-divisor">
                                                    <span className="lwh-cal">Length * Width * Height</span>
                                                    <span>DIM Divisor</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <br/>
                                    <br/>
                                    <div className="flex items-center gap-2 mt-6">
                                        <div
                                            className="py-[6px] px-[14px] bg-[#000000] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                3
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Determine Billable Weight of the Package
                                        </h4>
                                    </div>
                                    <div className="ml-11 mt-2">
                                        <h4 className="text-[14px] text-prgcolor leading-[24px]">
                                            The billable weight of the package is the greater of the two weights and it
                                            is used to calculate the shipping rate. Therefore, you need to compare
                                            actual and DIM weight, and use whichever number is greater to determine the
                                            shipping fee.
                                            <br/>
                                            <br/>

                                            For example, if DIM weight is greater than the actual weight of the package,
                                            the shipping fee will be based on the DIM weight, not the actual weight.
                                            <br/>
                                            <br/>

                                            Example: Shipping a 0.5 kg (actual weight) package. Dimensions: 30 cm x 30
                                            cm x 20 cm
                                        </h4>
                                    </div>

                                    <div
                                        className="ml-11 after-calculate-value block sm:flex items-center justify-between mt-6">
                                        <div
                                            className="calculate-formula flex items-center justify-between text-[12px]">
                                            <div>
                                            <span>
                                                DIM WEIGHT
                                            </span>
                                            </div>
                                            <div className="pl-4 pr-4">
                                                <span>=</span>
                                            </div>
                                            <div className="flex dim-divisor">
                                                <span className="lwh-cal">30 * 30 * 30</span>
                                                <span>5000</span>
                                            </div>
                                        </div>
                                        <div className="py-6 px-0 sm:px-4 flex items-center justify-center">
                                            <Image src={nextArwImg} className="rotate-90 sm:rotate-0" alt="nextArwImg"/>
                                        </div>
                                        <div className="text-prgcolor text-center">
                                            <span className="dim-weight text-[12px]">
                                                DIM Weight &nbsp;&nbsp;&nbsp; = &nbsp;&nbsp; 5.5 kg, round down to 5kg.
                                            </span>
                                        </div>
                                    </div>

                                    <h4 className="ml-11 mt-4 text-[14px] text-prgcolor leading-[24px]">
                                        DIM weight is greater than the actual weight of the package, the shipping fee
                                        will be based on the DIM weight.
                                        <br/>
                                        <br/>
                                        Suppose the item is shipped nationally across two cities within a zone.
                                    </h4>
                                    <h4 className="ml-11 mt-4 text-[16px] font-semibold">
                                        Shipping rate = $3.5
                                    </h4>

                                    {/* Table One */}
                                    <div className="ml-0 sm:ml-14 mt-4 flex flex-col">
                                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-4">
                                                <div className="overflow-hidden">
                                                    <h4 className="text-center font-semibold text-[16px] text-white py-3 bg-primary">
                                                        DIM Weight for Common Box Sizes
                                                    </h4>
                                                    <table
                                                        className="min-w-full border-t-0 border border-dashed border-primary text-center text-[14px]">
                                                        <thead className="border-b border-dashed border-primary">
                                                        <tr>
                                                            <th
                                                                scope="col"
                                                                className="font-semibold text-[14px] border-e border-dashed border-primary px-6 py-4">
                                                                L
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="font-semibold text-[14px] border-e border-dashed border-primary px-6 py-4">
                                                                W
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="font-semibold text-[14px] border-e border-dashed border-primary px-6 py-4">
                                                                H
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="font-semibold text-[14px] border-e border-dashed border-primary px-6 py-4">
                                                                DIM Weight
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="font-semibold text-[14px] border-e border-dashed border-primary px-6 py-4">
                                                                DIM Adjusted<br/>
                                                                Billable Weight
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                10
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                10
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                10
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                0.2
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                1
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                13
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                13
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                13
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                0.4
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                1
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                15
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                15
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                10
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                0.5
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                1
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                15
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                15
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                15
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                0.7
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                1
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                20
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                15
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                10
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                0.6
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                1
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                20
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                20
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                20
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                1.7
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                2
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                25
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                20
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                15
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                1.6
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                2
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                25
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                25
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                25
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                3.3
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                3
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                10
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                1.9
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                2
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                23
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                15
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                2.1
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                2
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                20
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                15
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                2.2
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                3
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                20
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                2.8
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                3
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                15
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                3.8
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                4
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                5.7
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                6
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                36
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                36
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                36
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                9.0
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                9
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                41
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                7.6
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                8
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                41
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                41
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                41
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                13.4
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                13
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                46
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                8.5
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                8
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                46
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                36
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                9.9
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                10
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                46
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                46
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                46
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                19.1
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                19
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                51
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                36
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                15
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                5.5
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                6
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                51
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                51
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                51
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                26
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                26
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                61
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                11.3
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                11
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                61
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                46
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                46
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                25.5
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                26
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                61
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                61
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                61
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                45.3
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-dashed border-primary px-6 py-4">
                                                                45
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Table Two */}
                                    <div className="ml-0 sm:ml-14 mt-10 flex flex-col">
                                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-4">
                                                <div className="overflow-hidden">
                                                    <h4 className="text-center font-semibold text-[16px] text-white py-3 bg-primary">
                                                        Shipping Rates (in $US) Based on Distance
                                                    </h4>

                                                    <table
                                                        className="min-w-full border-t-0 border border-dashed border-primary text-center text-[14px]">
                                                        <thead className="border-b border-dashed border-primary">
                                                        <tr>
                                                            <th
                                                                rowSpan={2}
                                                                scope="col"
                                                                className="font-semibold text-[14px] border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                Weight Scale
                                                            </th>
                                                            <th
                                                                colSpan={3}
                                                                scope="col"
                                                                className="font-semibold text-[14px] border-b border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                National
                                                            </th>
                                                            <th
                                                                colSpan={3}
                                                                scope="col"
                                                                className="font-semibold text-[14px] border-b border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                International
                                                            </th>
                                                        </tr>

                                                        <tr>
                                                            <td
                                                                className="whitespace-nowrap font-semibold border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                Intracity
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap font-semibold border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                Intrazone
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap font-semibold border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                Interzone
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap font-semibold border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                Intracity
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap font-semibold border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                Intrazone
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap font-semibold border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                Interzone
                                                            </td>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                0 kg - 1 kg <br/>(per kg)
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                $1.00
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                $1.40
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                $2
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                X
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                X
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                X
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                2 kg - 8 kg<br/> (per kg)
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                $0.60
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                $0.70
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                $0.80
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                X
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                X
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                X
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                9 kg - 18 kg<br/> (per kg)
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                $0.50
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                $0.40
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                $0.30
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                X
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                X
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                X
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                19 kg - xkg<br/> (per kg)
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                $0.50
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                $0.70
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                $1
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                X
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                X
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-b-0 border-e border-dashed border-primary px-4 py-4"
                                                            >
                                                                X
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-dashed border-primary">
                                                            <td
                                                                colSpan={2}
                                                                className="whitespace-nowrap text-[12px] px-2 py-4"
                                                            >
                                                                *Intracity: within a commune or city
                                                            </td>
                                                            <td
                                                                colSpan={2}
                                                                className="whitespace-nowrap text-[12px] px-2 py-4"
                                                            >
                                                                *Intrazone: across cities within a zone
                                                            </td>
                                                            <td
                                                                colSpan={3}
                                                                className="whitespace-nowrap text-[12px] px-2 py-4"
                                                            >
                                                                *Interzone: Across zones within the country
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;