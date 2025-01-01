import React from 'react';
import Image from "next/image";
import concerImg from "../../../../../../public/assets/images/sitee/concer.jpeg";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <section id="benefits-hero-section">
                <div className="container py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div data-aos="zoom-in" className="col mt-3">
                            <Image src={concerImg} alt="concerImg"/>
                        </div>

                        <div className="col">
                            <h4 className="text-[24px]">
                                Report a Concern
                            </h4>
                            <p className="mt-4 leading-[24px]">
                                Employees, officers, directors, and third parties are encouraged to report any suspected
                                corruption to the Ethics and Compliance or Legal department at <Link href='#' className="text-primary">ethics@nosres.com</Link> or
                                <Link href='#' className="text-primary"> legal@nosres.com</Link>, respectively. Reports can be made anonymously, and Nosres will take no
                                retaliation against those who make good-faith reports.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;