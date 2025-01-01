"use client";
import React, {useEffect, useState} from 'react';
import PulseLoader from "@/app/PulseLoader";
import Hero from '@/app/(SITE C)/graduate/components/Hero/page';
import GraduateProgram from '@/app/(SITE C)/graduate/components/GraduateProgram/page';
import Requirement from '@/app/(SITE C)/graduate/components/Requirement/page';
import Completion from '@/app/(SITE C)/graduate/components/Completion/page';
import useTitle from "@/app/useTitle";

const Page = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000); // Show loader for 1 second

        return () => clearTimeout(timer);
    }, []);
    useTitle("Recent Graduates")
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
                    <GraduateProgram/>
                    <Requirement/>
                    <Completion/>
                </>
            )}
        </>
    );
};

export default Page;