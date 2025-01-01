import React from 'react';
import Image from "next/image";
import IntTipsImg from '@/../public/assets/images/sitec/int-tips-hero.jpg';

const Page = () => {
    return (
        <>
            <section id="benefits-hero-section" className="bg-[#F1F2F2]">
                <div className="container pt-28 pb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col">
                            <h4 className="text-[24px]">General Interview Tips</h4>
                            <p className="mt-4">
                                Congratulations! After submitting a successful job application, you have a chance for an
                                interview. As a general rule, always come prepared. Preparing ahead of time is the key
                                to any successful interview. At Nosres, we believe an interview should not be stressful
                                and confusing. Consequently, we are striving to provide you with a <span
                                className="font-semibold">memorable interview
                                experience.</span> Here are some tips to help you stand out and increase your likelihood
                                of
                                hiring.
                            </p>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <Image src={IntTipsImg} alt="IntTipsImg"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;