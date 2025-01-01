import React from 'react';
import heroImage from '@/../public/assets/images/sitee/compliance-hero.jpeg';
import {HiOutlineArrowRightCircle} from "react-icons/hi2";

const Page = () => {
    return (
        <>
            <section id="banner-section" className="bg-cover bg-no-repeat bg-center h-[450px] pt-[10rem]"
                     style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${heroImage.src})`}}>
                <div className="container">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium mb-4">
                        Ethics and Compliance
                    </h1>
                    <h4 className="text-white">
                        At Nosres, we are committed to the fundamental<br/>
                        principles of business ethics and compliance to<br/>
                        protect the economy and society.
                    </h4>
                    <button type='button'
                            className="mt-8 text-[14px] flex cursor-pointer items-center gap-1 justify-start text-white">
                        <HiOutlineArrowRightCircle size={30}/>
                        Learn More
                    </button>
                </div>
            </section>
        </>
    );
};

export default Page;