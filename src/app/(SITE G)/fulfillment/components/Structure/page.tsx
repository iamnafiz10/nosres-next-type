import React from 'react';
import Image from "next/image";
import boxImg from "../../../../../../public/assets/images/siteg/box.svg";

function Page() {
    return (
        <>
            <section id="structure-section">
                <div className="container pt-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            How Fulfillment Fees Structure
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            Fulfillment fees include inventory storage fees, and packing and shipping your
                            orders<br/> to
                            your customers.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="col md:col-span-4">
                            <h4 className="text-[16px] font-semibold">
                                Inventory Storage Fees
                            </h4>
                            <h4 className="mt-2 text-prgcolor text-[14px]">
                                Inventory storage fees are typically charged by cubic meters and on a monthly basis,
                                meaning you only pay for the space they occupy in the fulfillment centers.
                            </h4>
                            <h4 className="mt-2 text-[14px] font-semibold text-prgcolor">
                                Inventory storage fees = $0.99 per m3
                            </h4>

                            <div className="mt-8 block md:flex items-start gap-4">
                                <div className="left">
                                    <Image src={boxImg} alt="boxImg"/>
                                </div>
                                <div className="right mt-4 md:mt-0">
                                    <h4 className="text-[16px] font-semibold">
                                        How to calculate cubic meters (m3)?
                                    </h4>

                                    <h4 className="text-[14px] mt-4">
                                        m3 = L (m) x W (m) x H (m)
                                    </h4>

                                    <h4 className="text-[14px] mt-3">
                                        If your unit of measurement is in centimeter, please use the formula below:
                                    </h4>

                                    <h4 className="text-[14px] mt-3">
                                        m3 = L (cm) x W (cm) x H (cm)/1,000,000
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col md:col-span-8">
                            <h4 className="text-[16px] font-semibold text-center">
                                Packing and Shipping Fees
                            </h4>
                            <div className="mt-4 flex flex-col">
                                <div className="overflow-x-auto">
                                    <div className="inline-block min-w-full pb-2">
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
            </section>
        </>
    );
}

export default Page;