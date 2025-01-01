import React from 'react';
import Image from "next/image";
import HiwImgOne from "../../../../../../public/assets/images/siteg/hiw1.svg";
import HiwImgTwo from "../../../../../../public/assets/images/siteg/hiw2.svg";
import HiwImgThree from "../../../../../../public/assets/images/siteg/hiw3.svg";

function Page() {
    return (
        <>
            <section id="why-fulfillment-section" className="bg-[#F8F9FA] mt-14">
                <div className="container py-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            How it works
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            You store your products in Nosres fulfillment centers, and we pack and ship them when
                            <br/>customers order them.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                        <div data-aos="zoom-in" className="col">
                            <div className="image-box border py-10 px-8 flex flex-col items-center text-center">
                                <Image src={HiwImgOne} alt="HiwImgOne"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Select Nosres Fulfillment from your seller account
                                </h4>
                                <p className="mt-2">
                                    Go to your Nosres seller account, select the products that you want to be fulfilled
                                    by Nosres and select Nosres Fulfillment.
                                </p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="image-box border py-10 px-8 flex flex-col items-center text-center">
                                <Image src={HiwImgTwo} alt="HiwImgTwo"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    You ship your products to Nosres fulfillment centers
                                </h4>
                                <p className="mt-2">
                                    We store your products in a designated area in the fulfillment centers and we make
                                    sure that they are not damaged.
                                </p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="image-box border py-10 px-8 flex flex-col items-center text-center">
                                <Image src={HiwImgThree} alt="HiwImgThree"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Nosres ship your products when customers order them
                                </h4>
                                <p className="mt-2">
                                    We use quality packaging materials to pack your items and ship them when your
                                    customers place orders.
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