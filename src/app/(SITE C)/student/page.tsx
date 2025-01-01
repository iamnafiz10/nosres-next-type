"use client";
import React, {useEffect, useState} from 'react';
import PulseLoader from "@/app/PulseLoader";
import Hero from '@/app/(SITE C)/student/components/Hero/page';
import Program from '@/app/(SITE C)/student/components/Program/page';
import Intern from '@/app/(SITE C)/student/components/Intern/page';
import Together from '@/app/(SITE C)/student/components/Together/page';
import Different from '@/app/(SITE C)/student/components/Different/page';
import Graduation from '@/app/(SITE C)/student/components/Graduation/page';
import useTitle from "@/app/useTitle";

const Page = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000); // Show loader for 1 second

        return () => clearTimeout(timer);
    }, []);
    useTitle("Nosres at Student")
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
                    <Program/>
                    <Intern/>
                    <Together/>
                    <Different/>
                    <Graduation/>
                </>
            )}
        </>
    );
};

export default Page;