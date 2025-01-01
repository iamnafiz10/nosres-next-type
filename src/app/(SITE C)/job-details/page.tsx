'use client';
import React, {useEffect, useState} from 'react';
import {
    HiOutlineUserGroup,
    HiOutlineMapPin,
    HiOutlineClock,
    HiOutlineBookmark,
    HiBookmark,
    HiOutlineArrowPath,
} from "react-icons/hi2";
import Link from "next/link";
import useTitle from "@/app/useTitle";
import PulseLoader from "@/app/PulseLoader";


const Page = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000); // Show loader for 1 second

        return () => clearTimeout(timer);
    }, []);
    useTitle("Job Details")

    const [isBookmarked, setIsBookmarked] = useState(false);

    const toggleBookmark = () => {
        setIsBookmarked(prevState => !prevState);
    };

    const [isBookmarkedOne, setIsBookmarkedOne] = useState(false);

    const toggleBookmarkOne = () => {
        setIsBookmarkedOne(prevState => !prevState);
    };

    const [isBookmarkedTwo, setIsBookmarkedTwo] = useState(false);

    const toggleBookmarkTwo = () => {
        setIsBookmarkedTwo(prevState => !prevState);
    };

    const [isBookmarkedThree, setIsBookmarkedThree] = useState(false);

    const toggleBookmarkThree = () => {
        setIsBookmarkedThree(prevState => !prevState);
    };
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
                <section id="job-details-section" className="bg-gray-50 h-100%">
                    <div className="container py-16">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
                            <div className="col lg:col-span-8">
                                {/* Job */}
                                <div className="box bg-white py-4 px-6 rounded">
                                    <h4 className="text-[16px] text-black">
                                        UI/UX Designer
                                    </h4>

                                    <div className="job_wrapper pb-3 flex items-center justify-between">
                                        <div className="flex mt-4 text-[14px] items-center gap-1">
                                            <HiOutlineUserGroup/>
                                            <p>Design</p>
                                        </div>

                                        <div className="flex mt-4 text-[14px] items-center gap-1">
                                            <HiOutlineMapPin/>
                                            <p>Remote</p>
                                        </div>

                                        <div className="flex mt-4 text-[14px] items-center gap-1">
                                            <HiOutlineClock/>
                                            <p>October 5, 2023</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="flex items-center gap-4 mt-2">
                                        <HiOutlineArrowPath size={15} className="cursor-pointer hover:text-primary"/>
                                        {isBookmarked ? (
                                            <button type='button' className="right text-primary"
                                                    onClick={toggleBookmark}>
                                                <HiBookmark size={15}/>
                                            </button>
                                        ) : (
                                            <button type='button' className="right hover:text-primary"
                                                    onClick={toggleBookmark}>
                                                <HiOutlineBookmark size={15}/>
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Job Details */}
                                <div className="box mt-4 bg-white py-4 px-6 rounded">
                                    <div className="wrap pb-4">
                                        <h4 className="text-[16px] font-semibold text-black">
                                            Overview
                                        </h4>
                                        <h4 className="mt-2 text-[14px] text-[#39393b] leading-[24px]">
                                            Nosres is looking for a highly motivated and energetic UI/UX Design Intern
                                            who
                                            wants
                                            to
                                            think creatively and diferently. The Nosres UI/UX Design Internship will
                                            allow
                                            you
                                            to
                                            apply knowledge gained from your Art, Design, Computer Science, and
                                            Human-Computer Interaction courses to solve real-world problems and
                                            collaborate
                                            on
                                            several small projects. It will also enable you to gain exposure to leaders
                                            and
                                            connect with
                                            other interns. As a result, you will be able to sharpen your skills and
                                            acquire
                                            valuable
                                            hands-on experience in your degree.
                                        </h4>
                                    </div>
                                    <hr/>
                                    <div className="wrap pt-4 pb-4">
                                        <h4 className="text-[16px] font-semibold text-black">
                                            Responsibilities
                                        </h4>
                                        <h4 className="mt-2 text-[14px] text-[#39393b] leading-[24px]">
                                            Nosres is looking for a highly motivated and energetic UI/UX Design Intern
                                            who
                                            wants to
                                            think creatively and diferently. The Nosres UI/UX Design Internship will
                                            allow
                                            you to
                                            apply knowledge gained from your Art, Design, Computer Science, and
                                            Human-Computer Interaction courses to solve real-world problems and
                                            collaborate
                                            on
                                            several small projects. It will also enable you to gain exposure to leaders
                                            and
                                            connect
                                            with other interns. As a result, you will be able to sharpen your skills and
                                            acquire valuable
                                            hands-on experience in your degree.
                                        </h4>
                                    </div>
                                    <hr/>
                                    <div className="wrap pt-4 pb-4">
                                        <h4 className="text-[16px] font-semibold text-black">
                                            Education and Experience
                                        </h4>
                                        <h4 className="mt-2 text-[14px] text-[#39393b] leading-[24px]">
                                            Nosres is looking for a highly motivated and energetic UI/UX Design Intern
                                            who
                                            wants to
                                            think creatively and diferently. The Nosres UI/UX Design Internship will
                                            allow
                                            you to
                                            apply knowledge gained from your Art, Design, Computer Science, and
                                            Human-Computer Interaction courses to solve real-world problems and
                                            collaborate
                                            on
                                            several small projects. It will also enable you to gain exposure to leaders
                                            and
                                            connect
                                            with other interns. As a result, you will be able to sharpen your skills and
                                            acquire valuable
                                            hands-on experience in your degree
                                        </h4>
                                    </div>
                                    <hr/>
                                    <div className="wrap pt-4 pb-4">
                                        <h4 className="text-[16px] font-semibold text-black">
                                            Key Requirements and Skills
                                        </h4>
                                        <h4 className="mt-2 text-[14px] text-[#39393b] leading-[24px]">
                                            Nosres is looking for a highly motivated and energetic UI/UX Design Intern
                                            who
                                            wants to
                                            think creatively and diferently. The Nosres UI/UX Design Internship will
                                            allow
                                            you to
                                            apply knowledge gained from your Art, Design, Computer Science, and
                                            Human-Computer Interaction courses to solve real-world problems and
                                            collaborate
                                            on
                                            several small projects. It will also enable you to gain exposure to leaders
                                            and
                                            connect
                                            with other interns. As a result, you will be able to sharpen your skills and
                                            acquire valuable
                                            hands-on experience in your degree.
                                        </h4>
                                    </div>
                                    <hr/>
                                    <div className="wrap pt-4 pb-4">
                                        <h4 className="text-[16px] font-semibold text-black">
                                            Additional Requirements
                                        </h4>
                                        <h4 className="mt-2 text-[14px] text-[#39393b] leading-[24px]">
                                            Nosres is looking for a highly motivated and energetic UI/UX Design Intern
                                            who
                                            wants to
                                            think creatively and diferently. The Nosres UI/UX Design Internship will
                                            allow
                                            you to
                                            apply knowledge gained from your Art, Design.
                                        </h4>
                                    </div>
                                    <hr/>
                                    <h4 className="pt-4 text-[12px] text-[#828D9E]">
                                        Data gathered and analyzed from your Nosres Careers Profile, along with any job
                                        applications you decide to send, are
                                        governed by Nosres’ <Link href='#' className="text-primary">Applicant and
                                        Candidate
                                        Privacy Policy.</Link>
                                        <br/>
                                        <br/>
                                        Recruitment agencies, please take note: Nosres does not accept résumés from
                                        agencies. We kindly request that you
                                        refrain from sending résumés to our job inbox or Nosres employees. Nosres cannot
                                        be
                                        held responsible for any fees
                                        related to unsolicited résumés.
                                    </h4>
                                </div>
                            </div>

                            <div className="col lg:col-span-4">
                                <div className="box bg-white rounded py-6 px-8">
                                    <h4 className="pb-2">Related Job Openings</h4>
                                    <hr/>
                                    <div className="pt-4 pb-4 flex items-center justify-between">
                                        <div className="left">
                                            <h4 className="text-[14px]">Graphic Design Intern</h4>
                                            <p>Remote</p>
                                        </div>
                                        {isBookmarkedOne ? (
                                            <button type='button' className="right text-primary"
                                                    onClick={toggleBookmarkOne}>
                                                <HiBookmark/>
                                            </button>
                                        ) : (
                                            <button type='button' className="right hover:text-primary"
                                                    onClick={toggleBookmarkOne}>
                                                <HiOutlineBookmark/>
                                            </button>
                                        )}
                                    </div>

                                    <hr/>
                                    <div className="pt-4 pb-4 flex items-center justify-between">
                                        <div className="left">
                                            <h4 className="text-[14px]">Interaction Designer</h4>
                                            <p>Hybrid</p>
                                        </div>
                                        {isBookmarkedTwo ? (
                                            <button type='button' className="right text-primary"
                                                    onClick={toggleBookmarkTwo}>
                                                <HiBookmark/>
                                            </button>
                                        ) : (
                                            <button type='button' className="right hover:text-primary"
                                                    onClick={toggleBookmarkTwo}>
                                                <HiOutlineBookmark/>
                                            </button>
                                        )}
                                    </div>

                                    <hr/>
                                    <div className="pt-4 pb-4 flex items-center justify-between">
                                        <div className="left">
                                            <h4 className="text-[14px]">Product Designer</h4>
                                            <p>Hybrid</p>
                                        </div>
                                        {isBookmarkedThree ? (
                                            <button type='button' className="right text-primary"
                                                    onClick={toggleBookmarkThree}>
                                                <HiBookmark/>
                                            </button>
                                        ) : (
                                            <button type='button' className="right hover:text-primary"
                                                    onClick={toggleBookmarkThree}>
                                                <HiOutlineBookmark/>
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <div className="box bg-white rounded py-6 px-8 mt-4">
                                    <h4 className="pb-2">Apply for This Job</h4>
                                    <hr/>
                                    <p className="pt-2">
                                        Come join us as we scale up our business
                                        activities!
                                    </p>
                                    <button type='button'
                                            className="mt-2 rounded hover:bg-primary hover:text-white text-[14px] text-primary block w-full py-1 border">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Page;