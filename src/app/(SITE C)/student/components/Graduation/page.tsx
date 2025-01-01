import React from 'react';
import {HiOutlineArrowRightCircle} from "react-icons/hi2";
import Image from "next/image";
import GraduationImg from "../../../../../../public/assets/images/sitec/graduation.jpg";

const Page = () => {
    return (
        <>
            <section id="student-graduation-section">
                <div className="container pt-28 pb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col">
                            <h4 className="text-[24px]">Career Opportunities After Graduation</h4>
                            <p className="mt-4">
                                The Nosres Internship Program will equip you with a sturdy foundation to build any
                                career you desire. However, if you want to apply for a full-time position at Nosres
                                after you graduate from school, we will always be happy to welcome you back. We enjoy
                                working with great minds from different cultural and academic backgrounds.
                            </p>
                            <button type='button'
                                    className="mt-8 text-[14px] flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                <HiOutlineArrowRightCircle size={30}/>
                                See available internships
                            </button>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <Image src={GraduationImg} alt="BenefitImg"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;