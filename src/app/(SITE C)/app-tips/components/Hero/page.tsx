'use client';
import React from 'react';
import Image from "next/image";
import AppTipsImg from '@/../public/assets/images/sitec/app-tips.jpg';

const Page = () => {

    return (
        <>
            <section id="benefits-hero-section" className="bg-[#F1F2F2]">
                <div className="container pt-28 pb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div data-aos="zoom-in" className="col">
                            <h4 className="text-[24px]">General Application Tips</h4>
                            <p className="mt-4">
                                Writing a successful job application can be mentally and physically tiring. Therefore,
                                we want to help you utilize your time and energy effectively and efficiently when
                                applying for a job at Nosres. Follow the following tips to stand out and increase the
                                likelihood of interviewing. They are applicable to all roles.
                            </p>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <Image src={AppTipsImg} alt="AppTipsImg"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;