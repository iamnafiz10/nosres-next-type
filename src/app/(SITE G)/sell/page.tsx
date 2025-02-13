"use client";
import React, {useEffect, useState} from 'react';
import PulseLoader from "@/app/PulseLoader";
import Hero from '@/app/(SITE G)/sell/components/Hero/page';
import Marketplace from '@/app/(SITE G)/sell/components/Marketplace/page';
import HowWork from '@/app/(SITE G)/sell/components/HowWork/page';
import Service from '@/app/(SITE G)/sell/components/Service/page';
import HowReg from '@/app/(SITE G)/sell/components/HowReg/page';
import App from '@/app/(SITE G)/sell/components/App/page';
import Started from '@/app/(SITE G)/sell/components/Started/page';
import useTitle from "@/app/useTitle";

const Page = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000); // Show loader for 1 second

        return () => clearTimeout(timer);
    }, []);
    useTitle("Sell On Nosres")
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
                    <Marketplace/>
                    <HowWork/>
                    <Service/>
                    <HowReg/>
                    <App/>
                    <Started/>
                </>
            )}
        </>
    );
};

export default Page;