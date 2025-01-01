import React from 'react';
import Image from "next/image";
import BenefitImg from '@/../public/assets/images/sitec/benefits1.jpg';

const Page = () => {
    return (
        <>
            <section id="benefits-hero-section" className="bg-[#F1F2F2]">
                <div className="container pt-28 pb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div data-aos="zoom-in" className="col">
                            <h4 className="text-[24px]">Benefits at Nosres</h4>
                            <p className="mt-4">
                                At Nosres, we care for and support our employees and their families. We cannot
                                accomplish our mission unless our employees and their loved ones are healthy and well.
                                Therefore, we considerately design benefit programs to ensure that they are physically,
                                mentally, and financially healthy and well. Learn what types of benefits Nosres will
                                provide.
                            </p>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <Image src={BenefitImg} alt="BenefitImg"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;