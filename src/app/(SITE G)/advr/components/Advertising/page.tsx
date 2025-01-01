import React from 'react';
import Image from "next/image";
import SponAddImg from "../../../../../../public/assets/images/siteg/sponsored-add.png";
import ProductAddImg from "../../../../../../public/assets/images/siteg/product-ad.png";

function Page() {
    return (
        <>
            <section id="add-section">
                <div className="container py-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Advertising Solutions
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            We provide AI-powered advertising solutions to help customers discover your brand and
                            increase traffic to<br/> your store. Customers can be targeted by gender, age, location,
                            interest, etc.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mt-14"    >
                        <div className="col border px-4 py-6">
                            <div className="box block md:flex gap-4 items-start">
                                <Image src={ProductAddImg} className="mt-1" alt="ProductAddImg"/>
                                <div className="content mt-4 md:mt-0">
                                    <h4 className="font-semibold text-[16px]">
                                        Product Ad
                                    </h4>
                                    <p className="mt-2">
                                        Product ads are product listings that appear on product listing pages, product
                                        category pages, product detail pages, and search results pages on Nosres
                                        Marketplace. They allow customers to discover your products easily.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col border px-4 py-6">
                            <div className="box">
                                <Image src={SponAddImg} className="mt-1" alt="SponAddImg"/>
                                <div className="content mt-4">
                                    <h4 className="font-semibold text-[16px]">
                                        Sponsored Ad
                                    </h4>
                                    <p className="mt-2">
                                        Rand ads are banner campaigns that appear appear in the Nosres feed. You don’t
                                        need to have a Nosres store to run a sponsored ad on Nosres Marketplace.
                                    </p>
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