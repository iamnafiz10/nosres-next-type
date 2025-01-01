"use client";
import React, {useState} from 'react';
import {IoIosCheckmarkCircle} from "react-icons/io";
import {RxCrossCircled} from "react-icons/rx";
import {BsCloudDownload} from "react-icons/bs";
import Image from "next/image";
import LogoImg from '@/../public/assets/images/sited/logo.png';
import FullLogoImg from '@/../public/assets/images/sited/full-logo.png';
import Link from "next/link";

const Page = () => {
        // Logo
        const [logoUrl, setLogoUrl] = useState<string | null>(null);
        const handleDownload = () => {
            // Create a temporary anchor element
            const anchor = document.createElement('a');

            // Set the href attribute to the URL of the logo image
            anchor.href = LogoImg.src;

            // Set the download attribute to specify the filename for the downloaded image
            anchor.download = 'logo.png';

            // Programmatically click the anchor to trigger the download
            anchor.click();
        };

        // Full Logo
        const [fullLogoUrl, setFullLogoUrl] = useState<string | null>(null);
        const handleDownloadFullLogo = () => {
            // Create a temporary anchor element
            const anchor = document.createElement('a');

            // Set the href attribute to the URL of the logo image
            anchor.href = FullLogoImg.src;

            // Set the download attribute to specify the filename for the downloaded image
            anchor.download = 'full-logo.png';

            // Programmatically click the anchor to trigger the download
            anchor.click();
        };
        return (
            <>
                <section id="media-details-section">
                    <div className="container py-16">
                        <div className="grid grid-cols-1 lg:grid-cols-12">
                            <div className="col lg:col-span-7">
                                <div className="grid grid-cols-1">
                                    <h4 className="text-[24px] font-semibold">Brand Name</h4>
                                    <div className="space-y-3 mt-2 text-[16px] text-[#828D9E]">
                                        <div className="flex box items-center gap-3 mt-2">
                                            <div className="icon">
                                                <IoIosCheckmarkCircle size={20} className="text-primary"/>
                                            </div>
                                            <div className="texts">
                                                <h4>Do capitalize the word “Nosres”.</h4>
                                            </div>
                                        </div>

                                        <div className="flex box items-center gap-3 mt-2">
                                            <div className="icon">
                                                <RxCrossCircled size={20} className="text-red-600"/>
                                            </div>
                                            <div className="texts">
                                                <h4> Do not incorporate the Nosres brand name into your company
                                                    identity.</h4>
                                            </div>
                                        </div>

                                        <div className="flex box items-center gap-3 mt-2">
                                            <div className="icon">
                                                <RxCrossCircled size={20} className="text-red-600"/>
                                            </div>
                                            <div className="texts">
                                                <h4>Do not use Nosres as a verb or abbreviate it.</h4>
                                            </div>
                                        </div>

                                        <div className="flex box items-center gap-3 mt-2">
                                            <div className="icon">
                                                <RxCrossCircled size={20} className="text-red-600"/>
                                            </div>
                                            <div className="texts">
                                                <h4>Do not alter Nosres trademarked names, for example, “Nosreser”.</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 mt-12">
                                    <div className="box">
                                        <h4 className="text-[24px] font-semibold">Attribution</h4>
                                        <h4 className="mt-2 text-[16px] text-prgcolor leading-[24px]">
                                            You should include a legal attribution line with a prominent disclaimer of
                                            affiliation
                                            where
                                            applicable when using our trademarks (including names, icons, etc.),
                                            for
                                            example,
                                            “Nosres is
                                            a trademark of Nosres Inc. and this article is not endorsed by or
                                            affiliated with
                                            Nosres in
                                            any way.”
                                        </h4>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 mt-12">
                                    <div className="box">
                                        <h4 className="text-[24px] font-semibold">Images</h4>
                                        <h4 className="mt-2 text-[16px] text-prgcolor leading-[24px]">
                                            The guiding principle of the media resources is simple — all content
                                            downloaded from
                                            the
                                            Site (photography, audio and video, etc.) may be used for editorial
                                            purposes
                                            only
                                            with
                                            credit: {`"Source: Nosres"`}. Any other use of Site content including,
                                            without limitation
                                            personal or commercial use, is strictly prohibited.
                                        </h4>
                                    </div>

                                    <div className="block sm:flex items-center gap-20 mt-8">
                                        <div className="col">
                                            <a href={LogoImg.src} download="logo.png">
                                                <Image src={LogoImg} className="w-56 h-[150px]" alt="LogoImg"/>
                                            </a>
                                            <div className="mt-8 sm:mt-4 ml-[53px]">
                                                <h4 className="text-[16px]">
                                                    Nosres
                                                </h4>
                                                <button type='button' onClick={handleDownload}
                                                        className="mt-2 flex items-center gap-2 text-primary cursor-pointer">
                                                    <div className="icon">
                                                        <BsCloudDownload size={20}/>
                                                    </div>
                                                    <div className="icon">
                                                        <h4 className="text-[16px]">Download</h4>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <Link href={FullLogoImg.src} download="full-logo.png">
                                                <Image src={FullLogoImg} className="w-56 h-[150px]" alt="FullLogoImg"/>
                                            </Link>
                                            <div className="mt-0 sm:mt-4 ml-[33px]">
                                                <h4 className="text-[16px]">
                                                    Nosres
                                                </h4>
                                                <button type='button' onClick={handleDownloadFullLogo}
                                                        className="mt-2 flex items-center gap-2 text-primary cursor-pointer">
                                                    <div className="icon">
                                                        <BsCloudDownload size={20}/>
                                                    </div>
                                                    <div className="icon">
                                                        <h4 className="text-[16px]">Download</h4>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 mt-12">
                                    <div className="box">
                                        <h4 className="text-[16px] font-semibold pb-2">Legal</h4>
                                        <hr/>
                                        <p className="mt-2 leading-[24px]">
                                            Do not use Nosres trademarks for anything that would be antithetical to our
                                            Terms of
                                            Service. We may rescind permission to use our trademarks at any time.
                                            Nosres
                                            reserves
                                            the right to withhold approval of content that it considers inconsistent
                                            with
                                            the Nosres
                                            brand.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col lg:col-span-5"></div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
;

export default Page;