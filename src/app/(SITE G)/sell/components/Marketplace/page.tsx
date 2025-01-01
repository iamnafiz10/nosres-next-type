import React from 'react';
import marketImgOne from "@/../public/assets/images/siteg/listing-01.svg";
import marketImgTwo from "@/../public/assets/images/siteg/visibility-01.svg";
import marketImgThree from "@/../public/assets/images/siteg/features-01.svg";
import marketImgFour from "@/../public/assets/images/siteg/support-01.svg";
import Image from "next/image";

function Page() {
    return (
        <>
            <section id="marketplace-section">
                <div className="container pt-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Why Nosres Marketplace
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            Our mission is to provide access for people to buy and sell a variety of products and
                            services in a<br/> trusted, secure and reliable online marketplace.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
                        <div data-aos="zoom-in" className="col">
                            <div className="image-box flex flex-col items-center text-center">
                                <Image src={marketImgOne} alt="marketImg"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Complimentary Listing
                                </h4>
                                <p className="mt-2">
                                    List your items free of charge and pay only only when you make a sale.
                                </p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="image-box flex flex-col items-center text-center">
                                <Image src={marketImgTwo} alt="marketImg"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Product Visibility
                                </h4>
                                <p className="mt-2">
                                    Make your products get more exposure to users from all over the world.
                                </p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="image-box flex flex-col items-center text-center">
                                <Image src={marketImgThree} alt="marketImg"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Powerful Features
                                </h4>
                                <p className="mt-2">
                                    Gain access to professional features to manage and promote your business.
                                </p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="image-box flex flex-col items-center text-center">
                                <Image src={marketImgFour} alt="marketImg"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Customer Support
                                </h4>
                                <p className="mt-2">
                                    Reap the benefits of our incredible 24/7 customer service support.
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