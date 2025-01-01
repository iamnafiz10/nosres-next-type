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
                        <div className="col lg:col-span-3 flex-initial lg:sticky top-[80px] h-full lg:h-[30vh] w-full overflow-hidden lg:overflow-auto">
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
                                        <h4 className="text-primary hover:text-prgcolor hover:font-semibold text-[14px]">
                                            Return Policy
                                        </h4>
                                    </Link>
                                </li>

                                <li>
                                    <Link href='refund-policy'>
                                        <h4 className="text-prgcolor font-semibold text-[14px]">
                                            Refund Policy
                                        </h4>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Right Side Content */}
                        <div className="col lg:col-span-9 pt-0 right_side_content">
                            <h4 className="text-[16px] font-semibold pb-2">
                                Refund Policy
                            </h4>
                            <div className="section border rounded p-8 pt-4">
                                <div className="scroll_content_wrap">
                                    <h4 className="text-[16px] font-semibold pb-2 mt-6">
                                        Refunds are typically initiated in the following cases:
                                    </h4>

                                    <ul className="mt-4 ml-4 space-y-3 list-decimal text-[14px] text-prgcolor">
                                        <li>
                                            If an order is cancelled by a buyer or seller or Nosres before delivery
                                            (Please read our Cancellation Policy).
                                        </li>
                                        <li>
                                            If the item is lost during the shipping process.
                                        </li>
                                        <li>
                                            If the item is undelivered to your preferred location.
                                        </li>
                                        <li>
                                            When our courier partner is unable to deliver the order.
                                        </li>
                                        <li>
                                            In case you want to return or replace the item, pursuant to Nosres Return
                                            Policy.
                                        </li>
                                    </ul>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-6">
                                        In those cases, we guarantee to refund your money in full including any shipping
                                        fees. In case of self-shipment, we will reimburse the courier fees.
                                        <br/>
                                        <br/>

                                        Please note that it may take up to 15 days to receive your refund from the time
                                        the seller receives the returned product.
                                        <br/>
                                        <br/>

                                        You may also be legally required to provide information or a document proving
                                        your identity before initiating the refund.
                                    </h4>

                                    <h4 className="text-[16px] font-semibold pb-2 mt-6">
                                        Refund Mode and Processing Time
                                    </h4>
                                    <h4 className="text-prgcolor text-[14px] leading-[24px]">
                                        Please note that your refund will be issued in the same form as the mode of
                                        payment unless you choose Nosres Money as a mode of refund. If you choose the
                                        latter, the processing time will be 1 to 2 business days.
                                    </h4>

                                    <div className="mt-4 flex flex-col">
                                        <div className="overflow-x-auto">
                                            <div className="inline-block min-w-full py-2">
                                                <div className="overflow-hidden">
                                                    <table className="min-w-full border border-primary text-start text-[14px]">
                                                        <thead
                                                            className="border-b border-primary bg-primary text-white">
                                                        <tr>
                                                            <th
                                                                scope="col"
                                                                className="font-semibold text-start text-[14px] border-e border-primary px-6 py-4">
                                                                Payment Mode
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="font-semibold text-start text-[14px] border-e border-primary px-6 py-4">
                                                                Refund Mode
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="font-semibold text-start text-[14px] border-e border-primary px-6 py-4">
                                                                Processing Time
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr className="border-b border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                                Credit Card
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                                Credit Card
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                                8 – 15 Business Days
                                                            </td>
                                                        </tr>

                                                        <tr className="border-b border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                                Debit Card
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                                Debit Card
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                                5 – 7 Business Days
                                                            </td>
                                                        </tr>

                                                        <tr className="border-b border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                                Wallet
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                                Wallet
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                                5 – 7 Business Days
                                                            </td>
                                                        </tr>

                                                        <tr className="border-b border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                                Gift Card
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                                Gift Card
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                                1 - 2 Business Days
                                                            </td>
                                                        </tr>

                                                        <tr className="border-b border-primary">
                                                            <td
                                                                className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                                Nosres Money
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                                Nosres Money
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap border-e border-primary px-6 py-4">
                                                                1 - 2 Business Days
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="footer_text box pt-8">
                                        <h4 className="text-[12px] text-[#828D9E]">Last updated on September 9,
                                            2019</h4>
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