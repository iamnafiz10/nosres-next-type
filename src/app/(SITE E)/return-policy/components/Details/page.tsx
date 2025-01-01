'use client';
import React from 'react';
import Link from "next/link";

function Page() {
    return (
        <>
            <section id="return-policy-section">
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
                                        <h4 className="text-primary hover:text-prgcolor hover:font-semibold text-[14px]">
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
                                        <h4 className="text-prgcolor font-semibold text-[14px]">
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
                                Return Policy
                            </h4>
                            <div className="section border rounded p-8 pt-4">
                                <div className="scroll_content_wrap">
                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Please check the product packaging before accepting delivery of any product. We
                                        request you to decline delivery if you notice the product packaging is damaged.
                                        Accepting a damaged package is entirely at your own risk.
                                        <br/>
                                        <br/>
                                        Under Buyer Protection, Nosres 5-Day Returns Policy allows a buyer to claim
                                        return or exchange of an item or request for a refund within 5 days of order
                                        delivery.
                                        <br/>
                                        <br/>
                                        If you are not entirely satisfied with your order, we guarantee to refund your
                                        money in full or give you an exchange. Just send a return request via Nosres and
                                        we will examine your complaint.
                                    </h4>
                                    <h4 className="text-[16px] font-semibold pb-2 mt-6">
                                        Return Process
                                    </h4>

                                    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
                                        <div data-aos="zoom-in" data-aos-duration="500"
                                             className="box group flex flex-col items-center text-center">
                                            <div
                                                className="bbox_wrap px-3 flex items-center justify-center border border-gray-300 rounded-full w-24 h-24">
                                                <h4 className="text-[12px] text-prgcolor">
                                                    Submit Online Return Request
                                                </h4>
                                            </div>
                                        </div>

                                        <div data-aos="zoom-in" data-aos-duration="500"
                                             className="box group flex flex-col items-center text-center">
                                            <div
                                                className="bbox_wrap px-3 flex items-center justify-center border border-gray-300 rounded-full w-24 h-24">
                                                <h4 className="text-[12px] text-prgcolor">
                                                    Return Request Reviewed by Nosres
                                                </h4>
                                            </div>
                                        </div>

                                        <div data-aos="zoom-in" data-aos-duration="500"
                                             className="box group flex flex-col items-center text-center">
                                            <div
                                                className="bbox_wrap px-3 flex items-center justify-center border border-gray-300 rounded-full w-24 h-24">
                                                <h4 className="text-[12px] text-prgcolor">
                                                    Prepare Package
                                                </h4>
                                            </div>
                                        </div>

                                        <div data-aos="zoom-in" data-aos-duration="500"
                                             className="box group flex flex-col items-center text-center">
                                            <div
                                                className="bbox_wrap px-3 flex items-center justify-center border border-gray-300 rounded-full w-24 h-24">
                                                <h4 className="text-[12px] text-prgcolor">
                                                    Ship Package Back
                                                </h4>
                                            </div>
                                        </div>

                                        <div data-aos="zoom-in" data-aos-duration="500"
                                             className="box group flex flex-col items-center text-center">
                                            <div
                                                className="bbox_wrap px-3 flex items-center justify-center border border-gray-300 rounded-full w-24 h-24">
                                                <h4 className="text-[12px] text-prgcolor">
                                                    Delivery Confirmed by Seller
                                                </h4>
                                            </div>
                                        </div>

                                        <div data-aos="zoom-in" data-aos-duration="500"
                                             className="box group flex flex-col items-center text-center">
                                            <div
                                                className="bbox_wrap last_bbox_wrap px-3 flex items-center justify-center border border-gray-300 rounded-full w-24 h-24">
                                                <h4 className="text-[12px] text-prgcolor">
                                                    Replacement, Exchange or Full Refund
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="text-[14px] text-prgcolor mt-6">
                                        Please note that an item is eligible for return or exchange in certain cases,
                                        including, but not limited to:
                                    </h4>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mt-6">
                                        <div className="col">
                                            <div className="head py-2 bg-primary">
                                                <h4 className="text-[16px] font-semibold pl-4 text-white">Case</h4>
                                            </div>
                                            <div className="border h-full">
                                                <ul className="ml-7 h-[300px] mt-5 space-y-2 list-disc text-[14px] text-prgcolor">
                                                    <li>
                                                        Item has manufacturing defect.
                                                    </li>
                                                    <li>
                                                        Item is physically damaged.
                                                    </li>
                                                    <li>
                                                        Item is not same as ordered.
                                                    </li>
                                                    <li>
                                                        Item is not same as the listed description (wrong color, size,
                                                        style, not new, not genuine).
                                                    </li>
                                                </ul>

                                                <div className="border-t pt-7">
                                                    <h4 className="text-prgcolor ml-7 text-[14px]">
                                                        Not satisfied with the item
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col mt-6 lg:mt-0">
                                            <div className="head py-2 bg-primary">
                                                <h4 className="text-[16px] font-semibold pl-4 text-white">Condition</h4>
                                            </div>
                                            <div className="border h-full">
                                                <h4 className="text-prgcolor ml-4 h-[300px] mt-5 text-[14px] pr-4">
                                                    All items can be returned, except for Two wheelers – Four-wheelers –
                                                    Commercial Vehicles.
                                                    <br/>
                                                    <br/>

                                                    The item is eligible for return, replacement or exchange or refund
                                                    as long as it is not used, washed, altered, stained and damaged. All
                                                    original packing, bags, tags, labels, tags, manuals and accessories
                                                    should remain intact.
                                                    <br/>
                                                    <br/>

                                                    However, no refunds are allowed for electronics, they are only
                                                    eligible for replacement or exchange.
                                                </h4>

                                                <div className="border-t py-7">
                                                    <h4 className="text-prgcolor ml-4 text-[14px]">
                                                        All items can be returned, except for
                                                    </h4>
                                                    <ul className="mt-4 list-disc space-y-2 text-prgcolor text-[14px] ml-[29px]">
                                                        <li>Baby Care</li>
                                                        <li>Perfumes & fragrances</li>
                                                        <li>Precious jewellery</li>
                                                        <li>Consumables</li>
                                                        <li>Pet food</li>
                                                        <li>Two-wheelers, Four-wheelers and Commercial Vehicles</li>
                                                        <li>Car care & fresheners</li>
                                                        <li>Customized items</li>
                                                        <li>Digital Entertainment</li>
                                                        <li>Furniture</li>
                                                        <li>Handkerchiefs</li>
                                                        <li>Health, wellness & medicine</li>
                                                        <li>Inner wear & sleepwear</li>
                                                        <li>Kitchen Appliances</li>
                                                        <li>Movies & Music</li>
                                                        <li>Musical Instruments</li>
                                                        <li>Nutrition & supplements</li>
                                                        <li>Office Equipment</li>
                                                        <li>Online Education</li>
                                                        <li>Socks</li>
                                                        <li>Tires & Alloys</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-16">
                                        <h4 className="mt-4 text-[14px] font-semibold text-prgcolor">
                                            Note
                                        </h4>
                                        <ul className="ml-4 mt-4 space-y-3 text-[14px] text-prgcolor list-disc">
                                            <li>
                                                The refund or replacement of an item will be processed once we receive
                                                the return request and the returned item is received by the seller.
                                            </li>
                                            <li>
                                                The refund or replacement request may be rejected if any of the above
                                                conditions are not met. In the event that the request is rejected the
                                                item will be shipped back to you.
                                            </li>
                                            <li>
                                                If you request a replacement and the replacement item is out of stock,
                                                we guarantee to refund your money in full.
                                            </li>
                                            <li>
                                                We have a right to decline return, replacement or refund if we notice a
                                                transactional history of repeated returns.
                                            </li>
                                        </ul>

                                        <div className="footer_text box pt-8">
                                            <h4 className="text-[12px] text-[#828D9E]">Effective September 9, 2019</h4>
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