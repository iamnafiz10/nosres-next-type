'use client';
import React, {useEffect, useRef, useState} from 'react';
import dtOneImg from "@/../public/assets/images/sitef/1.svg";
import dtTwoImg from "@/../public/assets/images/sitef/2.svg";
import dtThreeImg from "@/../public/assets/images/sitef/3.svg";
import dtFourImg from "@/../public/assets/images/sitef/4.svg";
import dtFiveImg from "@/../public/assets/images/sitef/5.svg";
import dtSixImg from "@/../public/assets/images/sitef/6.svg";
import dtSevenImg from "@/../public/assets/images/sitef/7.svg";
import Image from "next/image";
import {Modal} from "flowbite-react";

function Page() {
    // Country change popup
    const [openCountryModal, setOpenCountryModal] = useState<boolean>(false);

    // ------------------ Country Select ------------------//
    const [selectedOptionCountry, setSelectedOptionCountry] = useState<string>('');
    const [isOptionsVisibleCountry, setIsOptionsVisibleCountry] = useState<boolean>(false);

    const selectBoxRefCountry = useRef<HTMLDivElement>(null);

    const handleOptionClickCountry = (option: string) => {
        setSelectedOptionCountry(option);
        toggleOptionsVisibilityCountry();
    };

    const toggleOptionsVisibilityCountry = () => {
        setIsOptionsVisibleCountry(!isOptionsVisibleCountry);
    };
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            // @ts-ignore
            if (selectBoxRefCountry.current && !selectBoxRefCountry.current.contains(event.target as Node)) {
                setIsOptionsVisibleCountry(false);
            }
        };

        // @ts-ignore
        document.addEventListener('click', handleOutsideClick);

        return () => {
            // @ts-ignore
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);
    return (
        <>
            <section id="support-details-section">
                <div className="container py-16">
                    <div className="pb-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div className="col">
                            <div
                                className="box cursor-pointer flex flex-col items-center justify-center rounded border border-primary py-6 px-4">
                                <Image src={dtOneImg} className="w-20" alt="dtOneImg"/>
                                <h4 className="mt-3 text-[16px] font-medium">
                                    Nosres Account
                                </h4>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="box cursor-pointer flex flex-col items-center justify-center rounded border border-primary py-6 px-4">
                                <Image src={dtTwoImg} className="w-20" alt="dtTwoImg"/>
                                <h4 className="mt-3 text-[16px] font-medium">
                                    Marketplace
                                </h4>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="box cursor-pointer flex flex-col items-center justify-center rounded border border-primary py-6 px-4">
                                <Image src={dtThreeImg} className="w-20" alt="dtThreeImg"/>
                                <h4 className="mt-3 text-[16px] font-medium">
                                    Pay
                                </h4>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="box cursor-pointer flex flex-col items-center justify-center rounded border border-primary py-6 px-4">
                                <Image src={dtFourImg} className="w-20" alt="dtFourImg"/>
                                <h4 className="mt-3 text-[16px] font-medium">
                                    Logistics
                                </h4>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="box cursor-pointer flex flex-col items-center justify-center rounded border border-primary py-6 px-4">
                                <Image src={dtFiveImg} className="w-20" alt="dtFiveImg"/>
                                <h4 className="mt-3 text-[16px] font-medium">
                                    Telecom
                                </h4>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="box cursor-pointer flex flex-col items-center justify-center rounded border border-primary py-6 px-4">
                                <Image src={dtSixImg} className="w-20" alt="dtSixImg"/>
                                <h4 className="mt-3 text-[16px] font-medium">
                                    Business
                                </h4>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="box cursor-pointer flex flex-col items-center justify-center rounded border border-primary py-6 px-4">
                                <Image src={dtSevenImg} className="w-20" alt="dtSevenImg"/>
                                <h4 className="mt-3 text-[16px] font-medium">
                                    Careers
                                </h4>
                            </div>
                        </div>
                    </div>

                    <hr/>
                    <div className="pt-6">
                        <button onClick={() => setOpenCountryModal(true)} type='button'
                                className="text-primary text-[14px] hover:underline">
                            Give us feedback
                        </button>
                        {/* feedback Pop-Up Start */}
                        <Modal size="lg" dismissible show={openCountryModal}
                               onClose={() => setOpenCountryModal(false)}>
                            <Modal.Header>
                                <h4 className="text-[16px]">Your Feedback Matters</h4>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="modal_body box">
                                    <p>
                                        We would love to hear your feedback so that we can improve our
                                        services and provide the best experience for you.
                                    </p>
                                    <h4 className="mt-4 text-[14px]">
                                        My feedback is about:
                                    </h4>
                                    <div className="select-box mt-2" ref={selectBoxRefCountry}>
                                        <div className="select-option flex"
                                             onClick={toggleOptionsVisibilityCountry}>
                                            <input type="text" placeholder="Select"
                                                   readOnly
                                                   value={selectedOptionCountry}
                                                   className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                        </div>
                                        {isOptionsVisibleCountry && (
                                            <div className="info-content gender_content">
                                                <ul className="options">
                                                    <li onClick={() => handleOptionClickCountry("Nosres Account")}>
                                                        Nosres Account
                                                    </li>
                                                    <li onClick={() => handleOptionClickCountry("Marketplace")}>
                                                        Marketplace
                                                    </li>
                                                    <li onClick={() => handleOptionClickCountry("Pay")}>
                                                        Pay
                                                    </li>
                                                    <li onClick={() => handleOptionClickCountry("Logistics")}>
                                                        Logistics
                                                    </li>
                                                    <li onClick={() => handleOptionClickCountry("Telecom")}>
                                                        Telecom
                                                    </li>
                                                    <li onClick={() => handleOptionClickCountry("Business")}>
                                                        Business
                                                    </li>
                                                    <li onClick={() => handleOptionClickCountry("Careers")}>
                                                        Careers
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    <h4 className="mt-4 text-[14px]">
                                        Please share your experience with us:
                                    </h4>
                                    <textarea cols={30} rows={3}
                                              className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"></textarea>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <div className="flex w-full items-center justify-between">
                                    <button onClick={() => setOpenCountryModal(false)}
                                            className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                    </button>
                                    <button onClick={() => setOpenCountryModal(false)}
                                            className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                    </button>
                                </div>
                            </Modal.Footer>
                        </Modal>
                        {/* feedback Pop-Up End */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;