import React from 'react';
import {HiOutlineArrowRightCircle} from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import TogetherImg from "../../../../../../public/assets/images/sitec/together.jpg";

const Page = () => {
    return (
        <>
            <section id="student-together-section">
                <div className="container py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div data-aos="zoom-in" className="col mt-2">
                            <Image src={TogetherImg} alt="BenefitImg"/>
                        </div>
                        <div className="col">
                            <h4 className="text-[24px]">Let’s come together and build the future!</h4>
                            <p className="mt-4">
                                At Nosres, we look to the future. And we believe you can play a part in helping us shape
                                it and make an impact in the world. Therefore, we will treat you as a full-time
                                employee, meaning you will be part of the Nosres employee community. As a result, we
                                will challenge you to contribute to real-world projects, including the next generation
                                of Nosres products and services.
                            </p>

                            <button type='button'
                                    className="mt-8 text-[14px] flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                <HiOutlineArrowRightCircle size={30}/>
                                See available internships
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;