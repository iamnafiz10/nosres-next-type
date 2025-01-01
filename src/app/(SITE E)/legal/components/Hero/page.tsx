import React from 'react';
import heroImage from "@/../public/assets/images/sited/legal-banner.jpeg";

function Page() {
    return (
        <>
            <section id="banner-section"
                     className="bg-cover bg-no-repeat flex items-center bg-center h-[500px] pt-[3.5rem]"
                     style={{backgroundImage: `url(${heroImage.src})`}}>
                <div className="container">
                    <h1 className="text-2xl text-center md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium">
                        Nosres Legal
                    </h1>
                    <h4 className="text-center mt-4 text-white text-[16px]">
                        Get familiar with our legal terms and policies.
                    </h4>
                </div>
            </section>
        </>
    );
}

export default Page;