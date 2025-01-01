import React from 'react';
import '@/./app/globals.css';
import Image from "next/image";
import LogoImg from '@/../public/assets/images/logo.svg'

const Page = () => {
    return (
        <>
            <section id="loader-section" className="bg-[#F4F4F4] h-screen">
                <div className="container pt-28">
                    <div className="loader-container mx-auto flex flex-col justify-center items-center">
                        <div className="flex items-start gap-2 mb-5">
                            <Image src={LogoImg} className="" alt="LogoImg"/>
                            <h4 className="text-[38px]">nosres</h4>
                        </div>
                        <div className="loader">
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;