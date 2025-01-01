import React from 'react';
import Image from "next/image";
import addWorkImgOne from "../../../../../../public/assets/images/siteg/addw1.svg";
import addWorkImgTwo from "../../../../../../public/assets/images/siteg/addw2.svg";
import addWorkImgThree from "../../../../../../public/assets/images/siteg/addw3.svg";

function Page() {
    return (
        <>
            <section id="why-fulfillment-section" className="bg-[#F8F9FA] mt-14">
                <div className="container py-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            How it works
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        <div data-aos="zoom-in" className="col">
                            <div className="image-box flex flex-col items-center text-center">
                                <Image src={addWorkImgOne} alt="addWorkImgOne"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Define Ad Objective
                                </h4>
                                <p className="mt-2">
                                    Aim to increase product or brand awareness, encourage users to seek more information
                                    about your products or brand, and then encourage potential customers to take
                                    specific actions. This includes adding products to their carts or making purchases.
                                </p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="image-box flex flex-col items-center text-center">
                                <Image src={addWorkImgTwo} alt="addWorkImgTwo"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Create Ad Campaign
                                </h4>
                                <p className="mt-2">
                                    Choose between product or brand advertising campaign to promote your products or
                                    brand and reach potential customers. Those ads appear on the homepage, product
                                    listing pages product category pages, product detail pages, search results, etc.
                                </p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="image-box flex flex-col items-center text-center">
                                <Image src={addWorkImgThree} alt="addWorkImgThree"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Measure Ad Results
                                </h4>
                                <p className="mt-2">
                                    Get real-time analytics to monitor metrics and see insight into customer behavior as
                                    it happens. Not only will this help you see the performance of your campaigns, this
                                    will also enable you to correct errors and make improvements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;