'use client';
import React from 'react';
import Link from "next/link";

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
                                        <h4 className="text-primary hover:text-prgcolor hover:font-semibold text-[14px]">
                                            Shipping Policy
                                        </h4>
                                    </Link>
                                </li>

                                <li>
                                    <Link href='cancellation-policy'>
                                        <h4 className="text-prgcolor font-semibold text-[14px]">
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
                                Cancellation Policy
                            </h4>
                            <div className="section border rounded p-8 pt-4">
                                <div className="scroll_content_wrap">
                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        This policy is also part of our Terms of Use. By opening a Nosres store or
                                        making a purchase on Nosres, you accepting and agreeing to be bound by this
                                        policy and our Terms of Use.
                                    </h4>
                                    <h4 className="text-[16px] font-semibold pb-2 mt-6">
                                        A. Order Cancellation by Buyers
                                    </h4>
                                    <hr/>
                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        We advise you to buy products that you like, need and want in order to avoid
                                        cancellations. But if you want to cancel an order you still can do so. You can
                                        cancel an order until any time before the shipping of your item. Any amount paid
                                        will be refunded in full. You can cancel your order online by logging into your
                                        Nosres account and following the steps. You may still cancel the order in case
                                        the item has been shipped but has not yet delivered to you. You cannot refuse to
                                        accept the package at the time of delivery and a cancellation request shall be
                                        permissible after your order is delivered to you.
                                        <br/>
                                        <br/>

                                        Once you submit the cancellation request of your order, it will take us 2
                                        business days to cancel the order and initiate a refund
                                    </h4>
                                    <h4 className="text-[14px] font-semibold pb-2 mt-6">
                                        Order Cancellation by Buyers
                                    </h4>
                                    <ul className="mt-2 ml-4 space-y-2 list-decimal text-[14px] text-prgcolor">
                                        <li>Login to your account</li>
                                        <li>Go to My Account</li>
                                        <li>Go to Order History</li>
                                        <li>Click on Cancellation Request</li>
                                    </ul>

                                    <h4 className="text-[16px] font-semibold pb-2 mt-8">
                                        B. Order Cancellation by Nosres or Sellers
                                    </h4>
                                    <hr/>
                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Nosres or a seller may also raise an order cancellation request under the
                                        following situations:
                                    </h4>
                                    <h4 className="text-[14px] font-semibold mt-6">
                                        Order Cancellation Steps
                                    </h4>
                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-1">
                                        Nosres or a seller may also raise an order cancellation request under the
                                        following situations:
                                    </h4>
                                    <ul className="mt-4 ml-4 space-y-2 list-decimal text-[14px] text-prgcolor">
                                        <li>The item the Buyer ordered is out of stock.</li>
                                        <li>The pricing or description of the item contains errors.</li>
                                        <li>The Buyer{`'`}s address is incorrect or incomplete.</li>
                                        <li>Our courier partners do not provide services to the Buyer’s preferred
                                            location.
                                        </li>
                                    </ul>
                                    <h4 className="mt-4 text-[14px] text-prgcolor leading-[24px]">
                                        In the event that one of the situations above happens and Nosres or a Seller
                                        cancels your order, we will notify you via your registered email address and we
                                        will refund your order amount in full, pursuant to our Refund Policy.
                                    </h4>
                                    <div className="footer_text box pt-8">
                                        <h4 className="text-[12px] text-[#828D9E]">Last updated on September 9, 2019</h4>
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