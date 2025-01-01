import React from 'react';
import Image from "next/image";
import googleImg from "../../../../../../public/assets/images/siteg/google-img.png";
import appImg from "../../../../../../public/assets/images/siteg/app-img.png";

function Page() {
    return (
        <>
            <section id="app-section">
                <div className="container pt-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Download Seller App
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            Download the Nosres Seller app and have your store in the<br/> palm of your hand.
                        </p>
                    </div>

                    <div className="mt-4 flex items-center gap-2 justify-center">
                        <Image src={googleImg} className="w-32 cursor-pointer" alt="googleImg"/>
                        <Image src={appImg} className="w-32 cursor-pointer" alt="appImg"/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;