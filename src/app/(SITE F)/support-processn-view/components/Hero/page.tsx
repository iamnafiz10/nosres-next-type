import React from 'react';
import heroImage from "@/../public/assets/images/sitef/support-process-banner.jpeg";
import {AiOutlineSearch} from "react-icons/ai";

const Page = () => {
    return (
        <>
            <section id="banner-section" className="bg-cover bg-no-repeat bg-center h-[280px] pt-[8rem]"
                     style={{
                         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${heroImage.src})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center'
                     }}>
                <div className="container text-start">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium mb-4">
                        Nosres Account
                    </h1>
                    <h4 className="text-white">
                        Make yourself familiar with Account Registration.
                    </h4>
                </div>
            </section>
        </>
    );
};

export default Page;