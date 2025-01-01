import React from 'react';
import Image from "next/image";
import ProgramImg from "../../../../../../public/assets/images/sitec/internship.jpg";
import {HiOutlineArrowRightCircle} from "react-icons/hi2";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <section id="student-program-section">
                <div className="container pt-28 pb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col">
                            <h4 className="text-[24px]">About Nosres Internship Program</h4>
                            <p className="mt-4">
                                The Nosres Internship Program is designed exclusively for highly motivated students
                                seeking to sharpen their skills and acquire valuable hands-on experience in their
                                respective majors. We constantly strive to recruit talented students from all cultural
                                and educational backgrounds. As a Nosres intern, you will put acquired knowledge into
                                practice in the real business world. The sky is the limit to what you can learn and do
                                at Nosres.<br/><br/>

                                To be eligible for the Nosres Internship Program, you must be enrolled in a college,
                                university, or graduate program.
                            </p>

                            <button type='button'
                                className="mt-8 text-[14px] flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                <HiOutlineArrowRightCircle size={30}/>
                                    See available internships
                            </button>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <Image src={ProgramImg} alt="BenefitImg"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;