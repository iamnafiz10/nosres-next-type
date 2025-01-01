import React from 'react';
import {
    PiNumberCircleOneFill,
    PiNumberCircleTwoFill,
    PiNumberCircleThreeFill,
    PiNumberCircleFourFill,
    PiNumberCircleFiveFill,
} from "react-icons/pi";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <section id="app-tips-details-section">
                <div className="container py-16">
                    <div className="grid grid-cols-1">
                        <div className="col space-y-8">
                            <div className="flex items-start gap-2">
                                <div className="icon">
                                    <PiNumberCircleOneFill size={35}/>
                                </div>
                                <div className="content">
                                    <h4 className="text-[24px]">
                                        Read and reread the job posting thoroughly
                                    </h4>
                                    <p className="mt-2">
                                        The job posting is your guide to comprehending what we need. Therefore,
                                        understanding it inside<br/> out is the key to writing a successful application.
                                        Once
                                        you have meticulously read the job<br/> posting, ask yourself if you match our
                                        expectations based on your skill set and experience. If you<br/> do, you should
                                        apply.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="icon">
                                    <PiNumberCircleTwoFill size={35}/>
                                </div>
                                <div className="content">
                                    <h4 className="text-[24px]">
                                        Prepare the required documents
                                    </h4>
                                    <p className="mt-2">
                                        If you decide to apply, please follow the application instructions and
                                        requirements by providing all<br/> information requested on the application
                                        webpage
                                        and job posting. Applications with missing,<br/> incomplete, or ineligible
                                        documentation will not be processed.
                                        <br/>
                                        <br/>

                                        You need the <Link href='#' className="text-primary">following
                                        documents</Link> if you apply for an
                                        internship, a recent
                                        graduate opportunity, or<br/> a full-time job.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="icon">
                                    <PiNumberCircleThreeFill size={35}/>
                                </div>
                                <div className="content">
                                    <h4 className="text-[24px]">
                                        Customize your résumé to meet the job requirements
                                    </h4>
                                    <p className="mt-2">
                                        The first step of Nosres hiring process is the résumé screen. Therefore, it is
                                        imperative to<br/> customize your résumé to meet the job requirements. Keep it
                                        short,
                                        simple, and specific — one<br/> page is enough. Moreover, do not be afraid to be
                                        honest.
                                        <br/>
                                        <br/>

                                        In addition to other details, the <Link href='#' className="text-primary">following
                                        information</Link> must be included in your résumé.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="icon">
                                    <PiNumberCircleFourFill size={35}/>
                                </div>
                                <div className="content">
                                    <h4 className="text-[24px]">
                                        Polish up your cover letter
                                    </h4>
                                    <p className="mt-2">
                                        Generally, cover letters are optional when applying for jobs at Nosres. However,
                                        if you want to<br/> send one along with your application as a supporting
                                        document, it
                                        needs to be specific — not<br/> generic. We believe the well-crafted cover
                                        letter
                                        should align our vision, mission, core values, and<br/> work ethics with your
                                        skill
                                        set.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="icon">
                                    <PiNumberCircleFiveFill size={35}/>
                                </div>
                                <div className="content">
                                    <h4 className="text-[24px]">
                                        Check your grammar and spelling
                                    </h4>
                                    <p className="mt-2">
                                        After you have completed your application, please do not rush to submit it. You
                                        must revise and<br/> proofread it, including your résumé, cover letter, and
                                        essay, if
                                        any. It is of the essence to take the<br/> time to ensure that your application
                                        is
                                        faultless. For an error-free application, we suggest that you<br/> have someone
                                        read
                                        through it to look for spelling, punctuation, and grammatical errors. If
                                        anyone<br/>
                                        is around, go to a grammar checker site to scan your writing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;