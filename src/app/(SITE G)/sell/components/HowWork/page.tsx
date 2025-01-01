import React from 'react';
import Image from "next/image";
import howImgTwo from "../../../../../../public/assets/images/siteg/hw2.svg";
import howImgThree from "../../../../../../public/assets/images/siteg/hw3.svg";
import howImgFour from "../../../../../../public/assets/images/siteg/hw4.svg";

function Page() {
    return (
        <>
            <section id="how-work-section" className="bg-[#F8F9FA] mt-16">
                <div className="container py-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            How it works
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            You need a Nosres account and a Nosres Marketplace profile before you start selling
                            something on<br/> Nosres Marketplace. Then you need to create a Nosres business page. After
                            creating the business<br/> page you will be able to configure your store from it. You can
                            manage
                            your store from the store<br/> manager.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                        <div data-aos="zoom-in" className="col">
                            <div className="image-box flex flex-col items-center text-center">
                                <Image src={howImgTwo} alt="marketImg"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Open Store
                                </h4>
                                <p className="mt-2">
                                    Go to your page and configure the store page. Then go to the store manager to manage
                                    your store. There is no subscription required or fees to list your products on
                                    Nosres Marketplace
                                </p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="image-box flex flex-col items-center text-center">
                                <Image src={howImgThree} alt="marketImg"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Sell Products
                                </h4>
                                <p className="mt-2">
                                    Promote your products by sharing them on your page, receive orders, receive
                                    notification, discuss with customers and ship products with our logistic solutions.
                                </p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="image-box flex flex-col items-center text-center">
                                <Image src={howImgFour} alt="marketImg"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Get Paid
                                </h4>
                                <p className="mt-2">
                                    Get paid on each successful order you complete. We will deposit your payment
                                    electronically into your given bank account, and you will get notified.
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