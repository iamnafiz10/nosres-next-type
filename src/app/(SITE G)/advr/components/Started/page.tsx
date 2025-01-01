import React from 'react';
import Link from "next/link";

function Page() {
    return (
        <>
            <section id="strated-section" className="bg-[#313232] mt-10">
                <div className="container py-16">
                    <div className="text-center text-white">
                        <h1 className="font-semibold text-[24px]">
                            Start Advertising
                        </h1>
                        <h4 className="mt-3 text-[16px]">
                            Reach more customers and boost sales on Nosres Marketplace.
                        </h4>
                        <div className="mt-8 flex items-center justify-center">
                            <Link href='#'
                                  className="bg-primary border border-primary px-12 py-3 text-white font-medium rounded-md hover:bg-transparent hover:text-primary transition">
                                Create an Ad
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;