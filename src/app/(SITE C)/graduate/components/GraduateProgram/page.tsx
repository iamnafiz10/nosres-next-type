import React from 'react';
import Image from "next/image";
import ProgramImg from "../../../../../../public/assets/images/sitec/g-program.jpg";
import {HiOutlineArrowRightCircle} from "react-icons/hi2";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <section id="student-program-section">
                <div className="container pt-28 pb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col">
                            <h4 className="text-[24px]">About Nosres Recent Graduate Program</h4>
                            <p className="mt-4">
                                The Nosres Recent Graduate Program is designed for highly motivated recent graduates
                                who, within the previous two years, graduated from qualifying educational institutions
                                with a bachelor’s, master’s, or doctorate degree.
                            </p>

                            <div
                                className="mt-8 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                <HiOutlineArrowRightCircle size={30}/>
                                <Link href='#'
                                      className="text-[14px]">
                                    See available recent graduates opportunities
                                </Link>
                            </div>
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