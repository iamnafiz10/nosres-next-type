import React from 'react';
import heroImage from '@/../public/assets/images/siteg/sell-banner.png';
import Link from "next/link";

const Page = () => {
    return (
        <>
            <section id="banner-section" className="bg-cover bg-no-repeat bg-center h-[550px] pt-[13rem]"
                     style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${heroImage.src})`}}>
                <div className="container">
                    <h1 className="text-2xl text-center md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium mb-4">
                        Sell on Nosres
                    </h1>
                    <h4 className="text-white text-center">
                        Reach customers from all over the world
                    </h4>
                    <div className="mt-8 flex items-center justify-center">
                        <Link href='#'
                              className="bg-primary border border-primary px-8 py-3 text-white font-medium rounded-md hover:bg-transparent hover:text-primary transition">
                            Open your Store
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;