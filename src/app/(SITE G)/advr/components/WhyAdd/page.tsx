import React from 'react';
import Image from "next/image";
import addImgOne from "../../../../../../public/assets/images/siteg/add-icon1.svg";
import addImgTwo from "../../../../../../public/assets/images/siteg/add-icon2.svg";
import addImgThree from "../../../../../../public/assets/images/siteg/add-icon3.svg";
import addImgFour from "../../../../../../public/assets/images/siteg/add-icon4.svg";

import LineOne from "../../../../../../public/assets/images/siteg/line-1.png";
import LineTwo from "../../../../../../public/assets/images/siteg/line-2.png";
import LineThree from "../../../../../../public/assets/images/siteg/line-3.png";

function Page() {
    return (
        <>
            <section id="why-add-section">
                <div className="container pt-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Why Nosres Marketplace Ads
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            Nosres Marketplace Ads mission is to help business increase sales through awareness,<br/>
                            consideration, and conversion.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                        <div data-aos="zoom-in" className="col">
                            <div className="image-box border px-6 py-8 rounded flex flex-col items-center text-center">
                                <Image src={addImgOne} alt="addImgOne"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Awareness
                                </h4>
                                <p className="mt-2">
                                    Familiarize the public with your brand and tell them what value they will get when
                                    buying your product.
                                </p>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="col">
                            <div className="image-box border px-6 py-8 rounded flex flex-col items-center text-center">
                                <Image src={addImgTwo} alt="addImgTwo"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Consideration
                                </h4>
                                <p className="mt-2">
                                    Get potential customers to think about your brand when making
                                    purchasing<br/> decisions.
                                </p>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="col">
                            <div className="image-box border px-6 py-8 rounded flex flex-col items-center text-center">
                                <Image src={addImgThree} alt="addImgThree"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Conversion
                                </h4>
                                <p className="mt-2">
                                    Encourage potential customers to take a specific action, including adding products
                                    to carts, making purchases, etc.
                                </p>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="col block lg:hidden">
                            <div className="hidden lg:flex items-center justify-center">
                                <Image src={LineTwo} className="h-20" alt="LineTwo"/>
                            </div>
                            <div className="image-box border px-6 py-8 rounded flex flex-col items-center text-center">
                                <Image src={addImgFour} alt="addImgFour"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Sales Increase
                                </h4>
                                <p className="mt-2">
                                    Generate more sales when more people know, consider buying, and eventually purchase
                                    your brand.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="col">
                            <div className="flex flex-col items-center justify-center text-center">
                                <Image src={LineOne} className="w-40 h-40 ml-[130px]" alt="LineOne"/>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="col">
                            <div className="hidden lg:flex items-center justify-center">
                                <Image src={LineTwo} className="h-20" alt="LineTwo"/>
                            </div>
                            <div className="image-box border px-6 py-8 rounded flex flex-col items-center text-center">
                                <Image src={addImgFour} alt="addImgFour"/>
                                <h4 className="mt-3 font-semibold text-[16px]">
                                    Sales Increase
                                </h4>
                                <p className="mt-2">
                                    Generate more sales when more people know, consider buying, and eventually purchase
                                    your brand.
                                </p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="flex flex-col items-center justify-center text-center">
                                <Image src={LineThree} className="w-40 h-40 mr-[150px]" alt="LineThree"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;