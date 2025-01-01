import React from 'react';
import Image from "next/image";
import RequirementImg from "../../../../../../public/assets/images/sitec/g-requirements.jpg";
import {HiOutlineArrowRightCircle} from "react-icons/hi2";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <section id="student-program-section" className="bg-[#F1F2F2]">
                <div className="container py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div data-aos="zoom-in" className="col">
                            <Image src={RequirementImg} alt="RequirementImg"/>
                        </div>
                        <div className="col">
                            <h4 className="text-[24px]">Eligibility Requirements</h4>
                            <h4 className="text-[16px] font-semibold mt-4">
                                To be eligible, you must:
                            </h4>
                            <ul className="list-disc space-y-3 text-[14px] ml-4 mt-3">
                                <li>
                                    Have completed a bachelor’s, master’s, or doctorate degree from a qualifying
                                    educational institution within the preceding two years.
                                </li>
                                <li>
                                    Meet qualification requirements for the position.
                                </li>
                            </ul>
                            <p className="mt-4">
                                <span className="font-semibold">Note:</span> Successful applicants will be placed in a
                                one-year or two-year career development
                                program.
                            </p>

                            <div
                                className="mt-8 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                <HiOutlineArrowRightCircle size={30}/>
                                <Link href='#'
                                      className="text-[14px]">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;