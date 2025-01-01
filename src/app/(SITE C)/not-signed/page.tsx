'use client';
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import JobImg from '@/../public/assets/images/sitec/jobs.svg';
import PulseLoader from "@/app/PulseLoader";
import useTitle from "@/app/useTitle";

const Page = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000); // Show loader for 1 second

        return () => clearTimeout(timer);
    }, []);
    useTitle("Create a Account")
    return (
        <>
            {showLoader && (
                <PulseLoader
                    colors={['#263F5C', '#3A5F8A', '#4D7FB8', '#263F5C', '#3A5F8A']}
                    size={12} // Adjust size if needed
                    loading={true}
                    duration={1000} // Adjust duration if needed
                />
            )}
            {!showLoader && (
                <section id="not-signed-section" className="bg-[#F1F2F2] h-screen">
                    <div className="container pt-40 w-full sm:w-1/2">
                        <div
                            className="box flex flex-col items-center rounded justify-center py-8 px-6 bg-white box text-center">
                            <Image src={JobImg} alt="JobImg"/>
                            <h4 className="text-[16px] mt-2">
                                Create Your Careers Profile
                            </h4>
                            <p className="mt-2">
                                Create a careers profile to save your information and easily apply<br/>
                                for jobs at Nosres.
                            </p>
                            <button type='button'
                                    className="mt-4 rounded hover:bg-primary hover:text-white text-[14px] text-primary py-1 px-6 border">
                                Create a Profile
                            </button>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Page;