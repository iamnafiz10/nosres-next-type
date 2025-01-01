import React from 'react';
import heroImage from '@/../public/assets/images/sitec/graduate-banner.jpg';

const Page = () => {
    return (
        <>
            <section id="banner-section" className="bg-cover bg-no-repeat bg-center h-[450px] pt-[11rem]"
                     style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${heroImage.src})`}}>
                <div className="container">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium mb-4">
                        Recent Graduates
                    </h1>
                    <h4 className="text-white">
                        We give individuals who have recently graduated from schools an opportunity<br/>
                        to build a successful career path.
                    </h4>
                </div>
            </section>
        </>
    );
};

export default Page;