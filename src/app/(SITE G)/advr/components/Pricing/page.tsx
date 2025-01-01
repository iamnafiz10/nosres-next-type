import React from 'react';
import {
    PiNumberCircleOne,
    PiNumberCircleTwo
} from "react-icons/pi";
import Image from "next/image";
import PricingImg from "../../../../../../public/assets/images/siteg/pricing.svg";

function Page() {
    return (
        <>
            <section id="how-reg-section" className="bg-[#F8F9FA] mt-10">
                <div className="container py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col">
                            <h1 className="font-semibold text-[24px]">
                                Nosres Ad Pricing Options
                            </h1>
                            <p className="mt-3 text-[#ABABAB] text-[16px]">
                                We let you choose the ad formats and pricing options that suit your marketing goals. We
                                currently use two methods to price ads on Nosres Marketplace:
                            </p>

                            <div className="mt-4 grid grid-cols-12 items-start">
                                <div className="col-span-1">
                                    <PiNumberCircleOne size={30}/>
                                </div>
                                <div className="col-span-11 ml-3 sm:ml-0">
                                    <h4 className="text-[14px] text-prgcolor leading-[24px]">
                                        <b>CPC</b> or cost per click — you only pay each time a customer clicks on your ad.
                                        <br/>
                                        <br/>
                                        *Choose this option if you want to drive more traffic to your business.
                                    </h4>
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-12 items-start">
                                <div className="col-span-1">
                                    <PiNumberCircleTwo size={30}/>
                                </div>
                                <div className="col-span-11 ml-3 sm:ml-0">
                                    <h4 className="text-[14px] text-prgcolor leading-[24px]">
                                        <b>CPM</b> or cost per 1,000 impressions — you pay only for every 1,000 impressions of
                                        your ad, regardless of whether the ad is clicked or not.
                                        <br/>
                                        <br/>
                                        *Choose this option if you want to build or increase brand awareness.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="flex items-end justify-center">
                                <Image src={PricingImg} className='w-80' alt="PricingImg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;