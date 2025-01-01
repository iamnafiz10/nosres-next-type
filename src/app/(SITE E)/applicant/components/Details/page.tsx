'use client';
import React, {useEffect, useState, useRef} from 'react';
import Link from "next/link";

function Page() {
    const [activeTab, setActiveTab] = useState('aseller_tab_one'); // Initial active tab
    const sectionRefs = useRef({}); // Ref to store section elements

    useEffect(() => {
        const handleScroll = () => {
            const sections = Object.values(sectionRefs.current);
            for (const section of sections) {
                if (!section) continue; // Skip null or undefined sections
                // @ts-ignore
                const {top, bottom} = section.getBoundingClientRect();
                if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
                    // @ts-ignore
                    setActiveTab(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const assignRef = (sectionId: string) => (el: any) => {
        if (el) {
            // @ts-ignore
            sectionRefs.current[sectionId] = el;
        }
    };

    const handleClick = (sectionId: React.SetStateAction<string>) => {
        setActiveTab(sectionId);
        // @ts-ignore
        const section = sectionRefs.current[sectionId];
        if (section) {
            const offsetTop = section.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({top: offsetTop - 120, behavior: 'smooth'});
        }
    };
    return (
        <>
            <section id="terms-detail-section">
                <div className="container py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* Left Side Sticky */}
                        <div
                            className="col lg:col-span-4 flex-initial lg:sticky top-[80px] h-full lg:h-[50vh] w-full overflow-hidden lg:overflow-auto">
                            <h4 className="text-[16px] font-semibold pb-2">
                                Applicant and Candidate Privacy Policy
                            </h4>
                            <hr/>
                            <ul className="space-y-3 pt-4 text-primary">
                                <li>
                                    <div onClick={() => handleClick('aseller_tab_one')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'aseller_tab_one' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Collection of Personal Information
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('aseller_tab_two')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'aseller_tab_two' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Processing of Personal Information
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('aseller_tab_three')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'aseller_tab_three' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Access to Personal Information
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('aseller_tab_four')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'aseller_tab_four' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Retention of Personal information
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('aseller_tab_five')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'aseller_tab_five' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Management of Personal Information
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('aseller_tab_six')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'aseller_tab_six' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Changes to this Policy
                                        </h4>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Right Side Content */}
                        <div className="col lg:col-span-8 pt-8 right_side_content">
                            <div className="section border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        This Applicant and Candidate Privacy Policy describes what types of information
                                        Nosres Inc. (“we,” “us,” “our”) collects about you during the hiring process and
                                        why we collect, process, and access that information.
                                        <br/>
                                        <br/>

                                        Your use of Nosres services is governed by our general <Link href='#'
                                                                                                     className="text-primary">Privacy
                                        Policy</Link>.
                                    </h4>
                                </div>
                            </div>

                            <div id="aseller_tab_one" ref={assignRef('aseller_tab_one')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                1. Collection of Personal Information
                                            </h1>
                                        </div>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        The information Nosres collects during the hiring process includes:
                                    </h4>

                                    <ul className="mt-2 ml-3 list-disc space-y-3 text-prgcolor text-[14px]">
                                        <li>Your full name and contact information, including home address, email
                                            address, phone number, etc.
                                        </li>
                                        <li>
                                            Your résumé, CV that includes your employment history, previous and relevant
                                            work experience or other experience, educa tion history, and skills;
                                        </li>
                                        <li>
                                            Your cover letter, diplomas, transcripts, or other supporting documents
                                            during the hiring process;
                                        </li>
                                        <li>
                                            Information from phone screenings and interviews;
                                        </li>
                                        <li>
                                            Information from job openings you are looking for;
                                        </li>
                                        <li>
                                            Reference information;
                                        </li>
                                        <li>
                                            Information received from background checks, if any;
                                        </li>
                                        <li>
                                            Details about how you heard about the position you are applying for;
                                        </li>
                                        <li>
                                            Friends, relatives, or acquaintances working at our company;
                                        </li>
                                        <li>
                                            Information concerning any previous applications you submitted to Nosres or
                                            any previous employment history with Nosres.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div id="aseller_tab_two" ref={assignRef('aseller_tab_two')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                2. Processing of Personal Information
                                            </h1>
                                        </div>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        For running its hiring process, Nosres will use your information to:
                                    </h4>

                                    <ul className="mt-2 ml-3 list-disc space-y-3 text-prgcolor text-[14px]">
                                        <li>
                                            Assess and compare your skills, qualifications, experience, and interests
                                            with other candidates;
                                        </li>
                                        <li>
                                            Verify your identity, and run reference and background checks;
                                        </li>
                                        <li>
                                            Generate interviewer notes and candidate scores;
                                        </li>
                                        <li>
                                            Improve Nosres’s application and hiring process;
                                        </li>
                                        <li>
                                            Communicate with you about the hiring process or your applications;
                                        </li>
                                        <li>
                                            Inform you of other potential career opportunities at Nosres;
                                        </li>
                                        <li>
                                            Use for internal analysis of our recruiting marketing practices.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div id="aseller_tab_three" ref={assignRef('aseller_tab_three')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                3. Access to Personal Information
                                            </h1>
                                        </div>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        If your application is successful, we will share your information with your
                                        consent, with:
                                    </h4>

                                    <ul className="mt-2 ml-3 list-disc space-y-3 text-prgcolor text-[14px]">
                                        <li>
                                            Employment background check services to verify your information and obtain
                                            necessary background checks.
                                        </li>
                                        <li>
                                            Nosres employees to inform them about the progress of your application if
                                            they refer you for a job at Nosres. We may also consult with current Nosres
                                            employees for feedback on you if we notice that you have attended the same
                                            school or worked at the same previous company during the same period.
                                        </li>
                                        <li>
                                            External third parties such as local labor authorities, courts, tribunals,
                                            or law enforcement agencies to comply with applicable laws and regulations,
                                            legal processes, or governmental requests;
                                        </li>
                                        <li>
                                            Other third parties to protect the safety or integrity of our services; to
                                            detect, prevent or address fraud, security, or technical issues; or to
                                            protect our rights or property, our users, applicants, candidates,
                                            employees, or the public.
                                        </li>
                                    </ul>
                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Nosres is committed to protecting the information it collects, processes, and
                                        stores during the hiring process. We will not disclose personal data to other
                                        recipients unless otherwise required by law.
                                    </h4>
                                </div>
                            </div>

                            <div id="aseller_tab_four" ref={assignRef('aseller_tab_four')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                4. Retention of Personal information
                                            </h1>
                                        </div>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        If your application for a position at Nosres is successful, we will add your
                                        personal information to your personnel file, which is stored in conformity with
                                        Nosres{`'`} Privacy Policy.
                                        <br/>
                                        <br/>

                                        We will delete your personal information if your application is unsuccessful or
                                        you withdraw it from the hiring process or decline our offer. Note that we may
                                        retain some of your data under applicable law or Nosres’s Privacy Policy. We
                                        keep this information for various reasons, including considering you for future
                                        career opportunities at Nosres and notifying you of our recruiting events.
                                    </h4>
                                </div>
                            </div>

                            <div id="aseller_tab_five" ref={assignRef('aseller_tab_five')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                5. Management of Personal Information
                                            </h1>
                                        </div>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Under data protection law, you may have certain rights to request access to your
                                        information or request to have us rectify or delete it at any time.
                                        <br/>
                                        <br/>

                                        If you wish to exercise a right to access, update, review, correct, or delete
                                        the personal information you have shared with us, including your contact and
                                        application information, please submit a request via Nosres Contact. Note that
                                        we cannot grant all requests. We will respond to them in accordance with
                                        applicable law or <Link href='#' className="text-primary">Nosres Policy</Link>.
                                    </h4>
                                </div>
                            </div>

                            <div id="aseller_tab_six" ref={assignRef('aseller_tab_six')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                6. Changes to this Policy
                                            </h1>
                                        </div>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Nosres reserves the right, at its sole discretion, to change or modify its
                                        Applicant and Candidate Privacy Policy, at any time and without prior notice. It
                                        is your responsibility to frequently check this page for any changes or
                                        modifications. Changes will be effective upon the posting of the changes and
                                        modifications. Your continued access to and use of the Site and Services
                                        following the posting of changes will constitute your acceptance to such
                                        changes.
                                    </h4>
                                    <div className="footer_text box pt-8">
                                        <h4 className="text-[12px] text-[#828D9E]">Updated: November 3, 2022</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;