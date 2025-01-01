'use client';
import React, {useEffect, useState, useRef} from 'react';

function Page() {
    const [activeTab, setActiveTab] = useState('overview'); // Initial active tab
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
            window.scrollTo({top: offsetTop - 50, behavior: 'smooth'});
        }
    };
    return (
        <>
            <section id="terms-detail-section">
                <div className="container py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* Left Side Sticky */}
                        <div
                            className="col lg:col-span-4 flex-initial lg:sticky top-[80px] h-full lg:h-[80vh] w-full overflow-hidden lg:overflow-auto">
                            <h4 className="text-[16px] font-semibold pb-2">
                                Terms of Use
                            </h4>
                            <hr/>
                            <ul className="space-y-5 pt-4 text-primary">
                                <li>
                                    <div onClick={() => handleClick('overview')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#A4CEEC] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                1
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'overview' ? 'text-primary' : ''}`}>
                                            Overview
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('nosres-services')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#F1A28F] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                2
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'nosres-services' ? 'text-primary' : ''}`}>
                                            Nosres Services
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('nosres-account')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#E9C336] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                3
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'nosres-account' ? 'text-primary' : ''}`}>
                                            Nosres Account
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('user-obligations')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#679AAE] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                4
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'user-obligations' ? 'text-primary' : ''}`}>
                                            User Obligations
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('reporting-violations')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#F6C07B] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                5
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'reporting-violations' ? 'text-primary' : ''}`}>
                                            Reporting Violations
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('privacy')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#BFCCD4] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                6
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'privacy' ? 'text-primary' : ''}`}>
                                            Privacy
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('nosres-content')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#8CD4AE] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                7
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'nosres-content' ? 'text-primary' : ''}`}>
                                            Nosres Content
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('user-content')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#B4CFDF] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                8
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'user-content' ? 'text-primary' : ''}`}>
                                            User Content
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('business-proposal-submission')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#64BEB6] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                9
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'business-proposal-submission' ? 'text-primary' : ''}`}>
                                            Business Proposal Submission
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('termination')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#8DC7ED] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                10
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'termination' ? 'text-primary' : ''}`}>
                                            Termination
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('third-party-links')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#D77F7F] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                11
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'third-party-links' ? 'text-primary' : ''}`}>
                                            Third-Party Links, Websites and Content
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('intellectual-property-rights')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#A97FAB] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                12
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'intellectual-property-rights' ? 'text-primary' : ''}`}>
                                            Intellectual Property Rights
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('disclaimer-of-warranties')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#6BA782] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                13
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'disclaimer-of-warranties' ? 'text-primary' : ''}`}>
                                            Disclaimer of Warranties
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('limitation-of-liability')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#BD9D7C] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                14
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'limitation-of-liability' ? 'text-primary' : ''}`}>
                                            Limitation of Liability
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('indemnity')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#98938D] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                15
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'indemnity' ? 'text-primary' : ''}`}>
                                            Indemnity
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('dispute-resolution')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#EA9EBE] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                16
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'dispute-resolution' ? 'text-primary' : ''}`}>
                                            Dispute Resolution
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('governing-law')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#E5616A] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                17
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'governing-law' ? 'text-primary' : ''}`}>
                                            Governing Law
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('security')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#595450] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                18
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'security' ? 'text-primary' : ''}`}>
                                            Security
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('contact-nosres')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#4D8CB6] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                19
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'contact-nosres' ? 'text-primary' : ''}`}>
                                            Contact Nosres
                                        </h4>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Right Side Content */}
                        <div className="col lg:col-span-8 pt-8 right_side_content">
                            <div id="overview" ref={assignRef('overview')} className="section border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#A4CEEC] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                1
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Overview
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Welcome to Nosres.com (the “Site”). Nosres provides Services to you subject to
                                        the Terms and Conditions of Use (the “Terms of Use”) set forth in this agreement
                                        (the {`"`}Agreement{`"`}). This is a biding legal agreement between Nosres’s
                                        direct and
                                        indirect subsidiaries (hereinafter referred to as “Nosres” or the “Sites” or
                                        “Site” or “we” or “us”) and you, the users of the Website (hereinafter referred
                                        to collectively as “you” or “user”) on which Nosres grants you a personal,
                                        limited, non-exclusive and non-transferable privilege to access and use the
                                        Site. This privilege has the sole purpose of allowing you to use and enjoy the
                                        benefit of the Services as provided by Nosres, in the manner permitted by these
                                        Terms.
                                        <br/>
                                        <br/>

                                        BY ACCESSING THIS WEBSITE AND USING THE SERVICES, YOU ACCEPT AND AGREE TO BE
                                        BOUND BY THESE TERMS AND PROVISION OF THIS AGREEMENT. PLEASE READ THEM CAREFULLY
                                        BEFORE YOU PROCEED.
                                        <br/>
                                        <br/>

                                        Nosres reserves the right, at its sole discretion, to change or modify these
                                        Terms of Use, or discontinue or terminate the Site, at any time and without
                                        prior notice. It is your responsibility to look at these terms regularly.
                                        Changes and modifications will be effective upon the posting of the changes and
                                        modifications. Your continued access to and use of the Site and Services
                                        following the posting of changes will mean that you accept and agree to such
                                        changes and modifications.
                                        <br/>
                                        <br/>

                                        ANY PARTICIPATION IN THIS WEBSITE AND THE USE OF THE SERVICES WILL CONSTITUTE
                                        YOUR ACCEPTANCE OF AND AGREEMENT TO ALL OF THE TERMS AND CONDITIONS IN THESE
                                        TERMS OF USE AND YOU ARE INDICATING THAT YOU ARE AT LEAST 18 YEARS OLD. IF YOU
                                        OBJECT TO ANYTHING IN THESE TERMS OF USE, PLEASE DO NOT USE THIS SITE OR ANY
                                        SERVICES PROVIDED BY NOSRES.
                                    </h4>
                                </div>
                            </div>

                            <div id="nosres-services" ref={assignRef('nosres-services')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#F1A28F] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                2
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Nosres Services
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        When you use Nosres Services, or send emails to us, you are communicating with
                                        us electronically. Therefore, you consent to receive communications from us
                                        electronically and you consent to receive announcements, administrative
                                        messages, and other information related to our Services electronically. If you
                                        do not wish to receive such communications, you may opt some of them at any
                                        time.
                                    </h4>
                                </div>
                            </div>

                            <div id="nosres-account" ref={assignRef('nosres-account')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#E9C336] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                3
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Nosres Account
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        The Site may require you to register in order to have access to some of the
                                        Services, which means you are required to open a Nosres Account. The
                                        registration is free. You may be required to provide certain personal
                                        information when you register to have access to more Services. You must be 18
                                        years of age or older to open a Nosres account. If you are a minor, i.e. under
                                        the age of full legal responsibility, and you wish to use Nosres Services, such
                                        use may be made by your legal guardians or parents. It is your responsibility to
                                        keep your account and password secure and confidential, and you agree that you
                                        are entirely responsible for all activities that happen through your Nosres
                                        Account or password. You also agree to notify Nosres immediately of any
                                        unauthorized use of your account or password, or any other breach of security as
                                        a result of your failing to keep your account information secure and
                                        confidential. It is prohibited to use another User’s account to use the
                                        Services.
                                    </h4>
                                </div>
                            </div>

                            <div id="user-obligations" ref={assignRef('user-obligations')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#679AAE] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                4
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            User Obligations
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        By accessing to this Site and using the Services, you are agreeing and accepting
                                        that you will follow <br/> these rules:
                                        <br/>
                                        <br/>

                                        Do not engage in any illicit activity that causes harm to the natural
                                        environment.
                                        Do not engage in activity that invades the privacy of others.
                                        Do not have multiple accounts and do not use other users’ Nosres accounts.
                                        Do not not use the Site or any Content for any purpose that is prohibited by
                                        these Terms of Use.
                                        <br/>
                                        <br/>
                                        We may disclose any information we have about you if we determine that such
                                        disclosure is to identify or bring legal action against someone who may be
                                        causing harm to the rights or property of users of the Site.
                                    </h4>
                                </div>
                            </div>

                            <div id="reporting-violations" ref={assignRef('reporting-violations')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#F6C07B] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                5
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Reporting Violations
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        If you discover any content that may violate our Terms of Use, you should report
                                        it to our Customer Support Team (Please see the “How to Contact Nosres” section
                                        below).
                                    </h4>
                                </div>
                            </div>


                            <div id="privacy" ref={assignRef('privacy')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#BFCCD4] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                6
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Privacy
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Your privacy is very important to us. Nosres Privacy Policy explains how we
                                        handle the information that you provide to us and protect your privacy when you
                                        use our Services. The Privacy Policy is a part of these Terms of Use and
                                        incorporated herein by reference. By using the Services or agreeing to these
                                        Terms, you consent to the way we collect, use and disclose your information in
                                        accordance to our Privacy Statement.
                                    </h4>
                                </div>
                            </div>

                            <div id="nosres-content" ref={assignRef('nosres-content')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#8CD4AE] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                7
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Nosres Content
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        All text, graphics, images, photographs, sound files, video, user interfaces and
                                        other materials, including but not limited to the design, and {`"`}look and
                                        feel{`"`}of
                                        this Site (collectively {`“`}Nosres Content{`"`}), is owned and controlled by
                                        Nosres. As
                                        long as you comply with these Terms of Use, Nosres grants you a personal,
                                        non-exclusive, nontransferable, limited license to use the Site as provided to
                                        you by Nosres as part of the Services.
                                        <br/>
                                        <br/>

                                        Unless the Site states otherwise about specific Nosres Content, you must not
                                        change, alter, copy, republish, upload, post, publicly display, translated,
                                        transmit or distribute any part of Nosres Content in any form without prior
                                        Nosres’s written permission.
                                    </h4>
                                </div>
                            </div>

                            <div id="user-content" ref={assignRef('user-content')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#B4CFDF] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                8
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            User Content
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Some of Our Services enable you to post, submit, upload or send content. This
                                        includes, without limitation, reviews, comments, photos, videos, ideas,
                                        suggestions, questions. Any content you post or submit to this Site will be
                                        treated as non-confidential and non-proprietary, and you grant Nosres a
                                        transferrable, royalty-free, perpetual, irrevocable, and worldwide right to use,
                                        communicate, reproduce, modify, publish, perform, translate, publicly display
                                        and distribute such content in any media. This right continues even if you stop
                                        using our Services.
                                        <br/>
                                        <br/>

                                        Additionally, when you post or submit a content to the Site, you also grant us
                                        the right to use the name that you submit in connection with such content. You
                                        retain ownership of any intellectual property rights that you hold in that
                                        content. You shall not use a false e-mail address, pretend to be someone else or
                                        an entity or otherwise mislead us as to the origin of a content. Nosres has the
                                        right, but shall not to be obligated to, monitor or remove and edit any content.
                                        By posting or submitting a content to the Site, you acknowledge and agree that
                                        that content will not violate this policy and will not cause harm to any person
                                        or entity; and You acknowledge that you will be required to indemnify Nosres for
                                        all claims resulting from the content You provide.
                                    </h4>
                                </div>
                            </div>

                            <div id="business-proposal-submission" ref={assignRef('business-proposal-submission')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#64BEB6] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                9
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Business Proposal Submission
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        You may be asked to submit a business proposal if you wish to start a Nosres
                                        company. However, it is our policy to not sign a nondisclosure or
                                        confidentiality agreement because we have received several proposals that may be
                                        identical to others or to those we have already developed internally. By
                                        submitting your business proposal, you accept and agree to be bound by this
                                        agreement.
                                    </h4>
                                </div>
                            </div>

                            <div id="termination" ref={assignRef('termination')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#8DC7ED] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                10
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Termination
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        You may be asked to submit a business proposal if you wish to start a Nosres
                                        company. However, it is our policy to not sign a nondisclosure or
                                        confidentiality agreement because we have received several proposals that may be
                                        identical to others or to those we have already developed internally. By
                                        submitting your business proposal, you accept and agree to be bound by this
                                        agreement.
                                    </h4>
                                </div>
                            </div>

                            <div id="third-party-links" ref={assignRef('third-party-links')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#D77F7F] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                11
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Third-Party Links, Websites and Content
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        The Site may contain links to third party web sites ({`"`}Linked Sites{`"`}).
                                        These
                                        links are provided as an ‘As is’ basis. When you access a Linked Site, you agree
                                        to do so at your own risk and responsibility. You also agree and acknowledge
                                        that Nosres does not endorse any websites and content available through or
                                        linked to the Site, and shall not be responsible or liable for the content of
                                        any such third-party links or linked websites.
                                    </h4>
                                </div>
                            </div>

                            <div id="intellectual-property-rights" ref={assignRef('intellectual-property-rights')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#A97FAB] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                12
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Intellectual Property Rights
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Nosres reserves the right, in its sole discretion and without prior notice, to
                                        delete or suspend or terminate your account, for any reason or no reason at any
                                        time, and refuse all current or future use of the Services. You may also
                                        terminate your use of the Services at any time, either by ceasing to access
                                        them, or by closing your Account.
                                        <br/>
                                        <br/>

                                        Your Nosres Account will be unique to you for as long as it is still active. In
                                        the event your Nosres Account is closed either by you or by Nosres in accordance
                                        with these Terms, the username may be recycled into our system and assigned to
                                        another user.
                                        <br/>
                                        <br/>

                                        You agree that Nosres will not be liable to you for compensation, reimbursement,
                                        or damages in connection with your use of the Services, or in connection with
                                        any suspension or termination of the Services.
                                    </h4>
                                </div>
                            </div>

                            <div id="disclaimer-of-warranties" ref={assignRef('disclaimer-of-warranties')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#6BA782] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                13
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Disclaimer of Warranties
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        YOUR ACCESS TO THE SITE AND YOUR USE OF THE SERVICES OR ANY CONTENT ARE AT YOUR
                                        SOLE RISK. YOU AGREE AND UNDERSTAND THAT THE SITE, THE SERVICES OR ANY CONTENT
                                        ARE PROVIDED TO YOU ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT WARRANTY OF
                                        ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULL EXTENT PERMISSIBLE BY
                                        APPLICABLE LAW, NOSRES AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES,
                                        AGENTS, REPRESENTATIVES, LICENSORS, AND PARTNERS EXPLICITLY DISCLAIM ALL EXPRESS
                                        OR IMPLIED WARRANTIES, INCLUDING BUT NOT LIMITED TO, IMPLIED WARRANTIES OF TITLE
                                        MERCHANDABILITY, NON- INFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE. NOSRES
                                        MAKES NO REPRESENTATION OR WARRANTY THAT (I) THE RESULTS THAT MAY BE OBTAINED
                                        FROM THE USE OF THE WEBSITE OR SERVICES OR ANY CONTENT WILL BE COMPLETE,
                                        ACCURATE, AVAILABLE, TIMELY, UNINTERRUPTED, SECURE OR ERROR-FREE, (II) YOUR
                                        ACCESS TO OR USE OF THE SERVICES OR ANY CONTENT IS FREE OF VIRUSES OR OTHER
                                        HARMFUL COMPONENTS.
                                        <br/>
                                        <br/>

                                        NO OPINION, ADVICE, INFORMATION OR STATEMENT OF NOSRES, AND ITS AFFILIATES AND
                                        OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, REPRESENTATIVES, LICENSORS, PARTNERS,
                                        MEMBERS OR USERS, WHETHER ORAL OR WRITTEN, WHETHER MADE THROUGH OR FROM THE
                                        SERVICES, OR ON THIRD-PARTY PLATFORMS OR OTHERWISE, SHALL CREATE ANY WARRANTY
                                        NOT EXPRESSLY STATED IN THESE TERMS OF USE. YOU ASSUME TOTAL RESPONSIBILITY FOR
                                        YOUR COMMUNICATIONS OR INTERACTIONS WITH ANY USER OF THE SERVICES, WHETHER
                                        ONLINE AND OFFLINE.
                                    </h4>
                                </div>
                            </div>

                            <div id="limitation-of-liability" ref={assignRef('limitation-of-liability')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#BD9D7C] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                14
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Limitation of Liability
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        To the maximum extent permissible by applicable law, in no event shall Nosres,
                                        and its affiliates and officers, directors, employees, agents, representatives,
                                        licensors, or partners be responsible or liable for any damages of any kind or
                                        any damages whatsoever, arising from your use of the site, or any content on the
                                        site or any services or items obtained through the site or such other websites,
                                        including any direct, indirect, incidental, punitive, consequential, special, or
                                        exemplary damages, including but not limited to damages for personal or bodily
                                        injury, pain and suffering, emotional distress and damages for loss of revenue,
                                        loss of profits, loss of goodwill, loss of use, loss of data, loss of or
                                        inability to do business, whether based on warranty, contract, tort (including
                                        negligence) or otherwise, and whether Nosres has been advised of the possibility
                                        of any such damage, even if foreseeable. In no event shall Nosres’s aggregate
                                        liability arising from the use of the site, any content on the site or any
                                        services or items obtained through the site or such other websites exceed the
                                        greater of one hundred Haitian gourdes (HTG 100.00), or the total amount, if
                                        any, paid by you to us in the preceding twelve (12) months.
                                    </h4>
                                </div>
                            </div>

                            <div id="indemnity" ref={assignRef('indemnity')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#98938D] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                15
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Indemnity
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Upon request by Nosres, its affiliates, officers, directors, employees, agents,
                                        representatives, licensors, partners, and third party providers, you agree to
                                        indemnify, defend and hold harmless Nosres, its affiliates and their respective
                                        officers, directors, employees, agents, representatives, licensors and partners
                                        from all liabilities, demands, loss, expenses, damages, costs, claims or
                                        expenses (including but not limited to attorney{`'`}s fees) due to or arising
                                        out of
                                        or in connection with (i) your use or misuse of and access to the Services; (ii)
                                        your violation of any term of these Terms of Use; or (iii) your breach of any
                                        law or the rights of a third party, including but not limited to any copyright,
                                        intellectual property, or privacy right. Nosres, its affiliates and their
                                        respective officers, directors, employees, agents, representatives, licensors
                                        and partners reserve the right to assume the exclusive defense and control of
                                        any matter otherwise subject to indemnification by you, in which event you agree
                                        that you will cooperate with us in asserting any defenses.
                                    </h4>
                                </div>
                            </div>

                            <div id="dispute-resolution" ref={assignRef('dispute-resolution')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#EA9EBE] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                16
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Dispute Resolution
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        In the event of any contention or dispute between you and Nosres arising out of
                                        or in connection with your use of or access to the Site, or any products or
                                        services sold, offered or purchased through Nosres Services, the parties shall
                                        attempt to negotiate any such dispute informally and amicably before initiating
                                        legal proceedings, and hopefully we can find a solution to any such dispute. If
                                        We are unable to resolve any contention or dispute within a reasonable time (not
                                        to exceed thirty (30) days), you or Nosres agree to resolve any contention or
                                        dispute exclusively through final and binding arbitration, rather than in court.
                                        This applies to all kinds of claims under any legal theory.
                                        <br/>
                                        <br/>

                                        You and Nosres each agree that any dispute resolution proceedings will be
                                        conducted only on an individual basis and not in a class, consolidated or
                                        representative action. YOU UNDERSTAND AND AGREE THAT BY ENTERING INTO THIS
                                        AGREEMENT, YOU AND NOSRES ARE EACH WAIVING THE RIGHT TO TRIAL BY JURY OR TO
                                        PARTICIPATE IN A CLASS ACTION. Notwithstanding the foregoing, each party shall
                                        have the right to institute an action in a court at any time of proper
                                        jurisdiction for injunctive or other equitable or conservatory relief.
                                    </h4>
                                </div>
                            </div>

                            <div id="governing-law" ref={assignRef('governing-law')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#E5616A] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                17
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Governing Law
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        By using Nosres Services, you agree that the laws of the State of Delaware
                                        without reference to principles of conflict of laws, will govern these Terms of
                                        Use and any dispute of any sort that has arisen or might arise between you and
                                        Nosres. You shall comply with all applicable domestic law and regulations
                                        regarding your use of the Services.
                                    </h4>
                                </div>
                            </div>

                            <div id="security" ref={assignRef('security')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#595450] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                18
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Security
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        We are dedicated ourselves to providing a safe and reliable Site for all users.
                                        We have carried out technical measures designed to secure your personal
                                        information from unauthorized access, alteration, or disclosure. However, we
                                        cannot guarantee you third parties will never read or intercept any information
                                        you send to the Site. By using this Site, you acknowledge that the Internet
                                        transmissions are never entirely private or secure and you provide your personal
                                        information at your own risk.
                                    </h4>
                                </div>
                            </div>

                            <div id="contact-nosres" ref={assignRef('contact-nosres')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#4D8CB6] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                19
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Contact Nosres
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        If you have a question or complaint about the Site, please visit our contact us
                                        page for information about how to contact Nosres. If you have a question about
                                        Nosres collection or use of personal information, please see Nosres Privacy
                                        Statement.
                                    </h4>
                                    <div className="footer_text box pt-8">
                                        <h4 className="text-[12px] text-[#828D9E]">Effective September 9, 2019</h4>
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