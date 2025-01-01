"use client";
import React, {useEffect, useState} from 'react';
import PulseLoader from "@/app/PulseLoader";
import Hero from '@/app/(SITE G)/advr/components/Hero/page';
import WhyAdd from '@/app/(SITE G)/advr/components/WhyAdd/page';
import HowWork from '@/app/(SITE G)/advr/components/HowWork/page';
import Advertising from '@/app/(SITE G)/advr/components/Advertising/page';
import Pricing from '@/app/(SITE G)/advr/components/Pricing/page';
import Started from '@/app/(SITE G)/advr/components/Started/page';
import useTitle from "@/app/useTitle";

const Page = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000); // Show loader for 1 second

        return () => clearTimeout(timer);
    }, []);
    useTitle("Advertiseon Nosres")
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
                    <WhyAdd/>
                    <HowWork/>
                    <Advertising/>
                    <Pricing/>
                    <Started/>
                </>
            )}
        </>
    );
};

export default Page;