import React from 'react';
import {
    PiNumberCircleFive,
    PiNumberCircleFour,
    PiNumberCircleOne,
    PiNumberCircleThree,
    PiNumberCircleTwo
} from "react-icons/pi";
import howImgOne from "../../../../../../public/assets/images/siteg/hw1.svg";
import Image from "next/image";

function Page() {
    return (
        <>
            <section id="how-reg-section" className="bg-[#F8F9FA] mt-10">
                <div className="container py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col">
                            <h1 className="font-semibold text-[24px]">
                                How to Register
                            </h1>
                            <p className="mt-3 text-[#ABABAB] text-[16px]">
                                You are required to fill out the registration form given on this website by providing
                                the following information.
                            </p>

                            <div className="mt-4 grid grid-cols-12 items-center">
                                <div className="col-span-1">
                                    <PiNumberCircleOne size={30}/>
                                </div>
                                <div className="col-span-11 ml-3 sm:ml-0">
                                    <h4 className="text-[14px] text-prgcolor leading-[24px]">
                                        Your business information. This information includes business name, address,
                                        contact
                                        information, etc.
                                    </h4>
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-12 items-center">
                                <div className="col-span-1">
                                    <PiNumberCircleTwo size={30}/>
                                </div>
                                <div className="col-span-11 ml-3 sm:ml-0">
                                    <h4 className="text-[14px] text-prgcolor leading-[24px]">
                                        A valid debit/credit card or bank account to receive your payments.
                                    </h4>
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-12 items-center">
                                <div className="col-span-1">
                                    <PiNumberCircleThree size={30}/>
                                </div>
                                <div className="col-span-11 ml-3 sm:ml-0">
                                    <h4 className="text-[14px] text-prgcolor leading-[24px]">
                                        Your phone number in order to reach you during the registration process.
                                    </h4>
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-12 items-center">
                                <div className="col-span-1">
                                    <PiNumberCircleFour size={30}/>
                                </div>
                                <div className="col-span-11 ml-3 sm:ml-0">
                                    <h4 className="text-[14px] text-prgcolor leading-[24px]">
                                        Your email address.
                                    </h4>
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-12 items-center">
                                <div className="col-span-1">
                                    <PiNumberCircleFive size={30}/>
                                </div>
                                <div className="col-span-11 ml-3 sm:ml-0">
                                    <h4 className="text-[14px] text-prgcolor leading-[24px]">
                                        Your tax identity information.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="flex items-end justify-center">
                                <Image src={howImgOne} className='w-80' alt="howImg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;