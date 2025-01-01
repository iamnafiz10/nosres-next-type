"use client";
import React, {useEffect, useState} from 'react';
import PulseLoader from "@/app/PulseLoader";
import Hero from '@/app/(SITE C)/culture/components/Hero/page';
import Vision from '@/app/(SITE C)/culture/components/Vision/page';
import Misson from '@/app/(SITE C)/culture/components/Misson/page';
import Values from '@/app/(SITE C)/culture/components/Values/page';
import Ethics from '@/app/(SITE C)/culture/components/Ethics/page';
import FooterUp from '@/app/(SITE C)/culture/components/FooterUp/page';
import useTitle from "@/app/useTitle";

const Page = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000); // Show loader for 1 second

        return () => clearTimeout(timer);
    }, []);
    useTitle("Nosres Culture")
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
                    <Vision/>
                    <Misson/>
                    <Values/>
                    <Ethics/>
                    <FooterUp/>
                </>
            )}
        </>
    );
};

export default Page;