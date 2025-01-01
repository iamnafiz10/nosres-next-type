import React from 'react';
import Image from "next/image";
import CompletionImg from "../../../../../../public/assets/images/sitec/g-completion.jpg";
import {HiOutlineArrowRightCircle} from "react-icons/hi2";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <section id="student-program-section">
                <div className="container py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col">
                            <h4 className="text-[24px]">Conversion opportunity after the program completion</h4>
                            <p className="mt-2">
                                Recent Graduates may be converted to a permanent position after the program completion.
                            </p>
                            <h4 className="text-[16px] font-semibold mt-4">
                                However, to be eligible for conversion, recent graduates must:
                            </h4>
                            <ul className="list-disc space-y-3 text-[14px] ml-4 mt-3">
                                <li>
                                    Successfully completed all requirements
                                </li>
                                <li>
                                    Complete at least 40 hours of training
                                </li>
                                <li>
                                    Demonstrated outstanding job and leadership performance
                                </li>
                                <li>
                                    Received recommendation for conversion
                                </li>
                                <li>
                                    Meet the qualification requirements for the position to which the Recent Graduate
                                    will be converted
                                </li>
                            </ul>
                            <div
                                className="mt-8 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                <HiOutlineArrowRightCircle size={30}/>
                                <Link href='#'
                                      className="text-[14px]">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <Image src={CompletionImg} alt="CompletionImg"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;