import React from 'react';
import heroImage from '@/../public/assets/images/sitee/policies-banner.jpeg';

const Page = () => {
    return (
        <>
            <section id="banner-section" className="bg-cover bg-no-repeat bg-center h-[280px] pt-[8rem]"
                     style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${heroImage.src})`}}>
                <div className="container">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium mb-4">
                        Nosres Terms and Policies
                    </h1>
                    <h4 className="text-white">
                        Get familiar with our legal terms and policies.
                    </h4>
                </div>
            </section>
        </>
    );
};

export default Page;