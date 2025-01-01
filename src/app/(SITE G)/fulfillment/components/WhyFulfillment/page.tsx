import React from 'react';
import Image from "next/image";
import whyFImgOne from "../../../../../../public/assets/images/siteg/wy1.svg";
import whyFImgTwo from "../../../../../../public/assets/images/siteg/wy2.svg";
import whyFImgThree from "../../../../../../public/assets/images/siteg/wy3.svg";

function Page() {
    return (
        <>
            <section id="why-fulfillment-section">
                <div className="container pt-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Why Nosres Fulfillment
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            Our mission is to provide access for people to buy and sell a variety of products and
                            services in a<br/>
                            trusted, secure and reliable online marketplace.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                        <div data-aos="zoom-in" className="col">
                            <div className="image-box flex flex-col items-center text-center">
                                <Image src={whyFImgOne} alt="whyFImgOne"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Great Packaging
                                </h4>
                                <p className="mt-2">
                                    We create a memorable packaging experience to impress and amaze your customers.
                                </p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="image-box flex flex-col items-center text-center">
                                <Image src={whyFImgTwo} alt="whyFImgTwo"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Faster Delivery
                                </h4>
                                <p className="mt-2">
                                    We go the extra mile with your product delivery to grow loyalty and engagement.
                                </p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="image-box flex flex-col items-center text-center">
                                <Image src={whyFImgThree} alt="whyFImgThree"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Nosres Badge
                                </h4>
                                <p className="mt-2">
                                    We award you a Nosres Select badge to indicate your Nosres fulfillment status.
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