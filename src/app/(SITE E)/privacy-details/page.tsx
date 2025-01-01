"use client";
import React, {useEffect, useState} from 'react';
import PulseLoader from "@/app/PulseLoader";
import Hero from '@/app/(SITE E)/privacy-details/components/Hero/page';
import Details from '@/app/(SITE E)/privacy-details/components/Details/page';
import useTitle from "@/app/useTitle";

const Page = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000); // Show loader for 1 second

        return () => clearTimeout(timer);
    }, []);
    useTitle("Privacy and Policy")
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
                <>
                    <Hero/>
                    <Details/>
                </>
            )}
        </>
    );
};

export default Page;