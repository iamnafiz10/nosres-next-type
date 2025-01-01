'use client';
import React, {useEffect, useState, useRef} from 'react';
import Image from "next/image";
import privacyOne from '@/../public/assets/images/sitee/pp-1.svg';
import privacyTwo from '@/../public/assets/images/sitee/pp-2.svg';
import privacyThree from '@/../public/assets/images/sitee/pp-3.svg';
import privacyFour from '@/../public/assets/images/sitee/pp-4.svg';
import privacyFive from '@/../public/assets/images/sitee/pp-5.svg';
import privacySix from '@/../public/assets/images/sitee/pp-6.svg';
import privacySeven from '@/../public/assets/images/sitee/pp-7.svg';
import privacyEight from '@/../public/assets/images/sitee/pp-8.svg';
import privacyNine from '@/../public/assets/images/sitee/pp-9.svg';
import privacyTen from '@/../public/assets/images/sitee/pp-10.svg';
import privacyEleven from '@/../public/assets/images/sitee/pp-11.svg';

function Page() {
    const [activeTab, setActiveTab] = useState('tab_one'); // Initial active tab
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
                                Privacy Policy
                            </h4>
                            <hr/>
                            <ul className="space-y-5 pt-4 pr-1 text-primary">
                                <li>
                                    <div onClick={() => handleClick('tab_one')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <Image src={privacyOne} className="w-[27px]" alt="privacyImg"/>

                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'tab_one' ? 'text-primary' : ''}`}>
                                            Collection of Personal Information
                                            and Non-Personal Information
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tab_Two')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <Image src={privacyTwo} className="w-[27px]" alt="privacyImg"/>

                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'tab_Two' ? 'text-primary' : ''}`}>
                                            Use of Personal Information
                                            and Non-Personal Information
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tab_Three')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <Image src={privacyThree} className="w-[27px]" alt="privacyImg"/>

                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'tab_Three' ? 'text-primary' : ''}`}>
                                            Use of Cookies and Other Similar Technologies
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tab_Four')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <Image src={privacyFour} className="w-[27px]" alt="privacyImg"/>

                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'tab_Four' ? 'text-primary' : ''}`}>
                                            Disclosure of Personal Information
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tab_Five')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <Image src={privacyFive} className="w-[27px]" alt="privacyImg"/>

                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'tab_Five' ? 'text-primary' : ''}`}>
                                            Protection of Personal Information
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tab_Six')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <Image src={privacySix} className="w-[27px]" alt="privacyImg"/>

                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'tab_Six' ? 'text-primary' : ''}`}>
                                            Retention and Erasure of Personal Information
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tab_Seven')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <Image src={privacySeven} className="w-[27px]" alt="privacyImg"/>

                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'tab_Seven' ? 'text-primary' : ''}`}>
                                            Access to Personal Information
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tab_Eight')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <Image src={privacyEight} className="w-[27px]" alt="privacyImg"/>

                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'tab_Eight' ? 'text-primary' : ''}`}>
                                            Collection of Children’s Personal Information
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tab_Nine')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <Image src={privacyNine} className="w-[27px]" alt="privacyImg"/>

                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'tab_Nine' ? 'text-primary' : ''}`}>
                                            Links to Third-Party Sites and Services
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tab_Ten')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <Image src={privacyTen} className="w-[27px]" alt="privacyImg"/>

                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'tab_Ten' ? 'text-primary' : ''}`}>
                                            Changes to This Privacy Policy
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tab_Eleven')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <Image src={privacyEleven} className="w-[27px]" alt="privacyImg"/>

                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'tab_Eleven' ? 'text-primary' : ''}`}>
                                            Privacy Inquiries
                                        </h4>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Right Side Content */}
                        <div className="col lg:col-span-8 pt-8">
                            <div className="section border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            This Privacy Policy is effective from September 09, 2019.
                                        </h4>
                                    </div>
                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        This Privacy Policy discloses the privacy practices for Nosres’s websites and it
                                        applies to Nosres Inc. and its subsidiaries (collectively, “Nosres”, “we”, “us”
                                        or “our”).
                                        <br/>
                                        <br/>

                                        This Privacy Policy governs personal information we collect from our online
                                        users “you”, and also information we automatically collect via cookies and other
                                        similar technologies such as web beacons and tracking links, unless stated
                                        otherwise.
                                    </h4>
                                </div>
                            </div>

                            <div id="tab_one" ref={assignRef('tab_one')} className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <Image src={privacyOne} className="w-[35px]" alt="PrivacyImg"/>

                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Collection of Personal Information and Non-Personal Information
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Personal information means information that can be used to identify or contact
                                        you. This information includes your name, date of birth, home address, telephone
                                        number and email address. You may be asked to provide personal information
                                        anytime you use our websites and services, participate in surveys, subscribe to
                                        newsletters, apply for a job or create a candidate profile, or contact us. When
                                        applying for a job you may be also asked to provide your educational background,
                                        professional experiences and career interest.
                                        <br/>
                                        <br/>

                                        Additionally, in order to access to and use some the services of our websites,
                                        you may be required to complete the registration form. During registration, you
                                        are required to provide certain information such as name and email address.
                                        <br/>
                                        <br/>

                                        If you place an order, you may also be asked to provide your credit card
                                        information and billing information. This information is used for billing
                                        purposes and to fill your orders. If we have trouble processing an order, we
                                        will use this information to contact you.
                                        <br/>
                                        <br/>

                                        From time-to-time our Site requests information via surveys or contests.
                                        Participation in these surveys or contests is completely voluntary and you may
                                        choose whether or not to participate and therefore disclose this information.
                                        Information requested may include contact information (such as name and shipping
                                        address), and demographic information (such as zip code, age level). At your
                                        option, you may also provide demographic information such as gender or age about
                                        yourself, but it is not required.
                                        <br/>
                                        <br/>

                                        Therefore, this information must be true and accurate, and it is used to contact
                                        you about the products/services on our sites in which you have expressed
                                        interest.
                                        <br/>
                                        <br/>

                                        We also collect non-personal information such as zip code, area code, browser
                                        type and language, referrer URL, location and access times. Additionally, we may
                                        collect non-personal information regarding your activities on our websites and
                                        from our products and services, including the pages you view, search inquiries
                                        you enter, the links you click on, etc.
                                        <br/>
                                        <br/>

                                        We may combine non-personal information with personal information, and the
                                        combination will be treated as personal information.
                                    </h4>
                                </div>
                            </div>

                            <div id="tab_Two" ref={assignRef('tab_Two')} className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <Image src={privacyTwo} className="w-[35px]" alt="PrivacyImg"/>

                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Use of Personal Information and Non-Personal Information
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        We may use your personal and non-personal information we collect about you for
                                        the following purposes:
                                        <ul className="list-disc space-y-3 ml-10 mt-1">
                                            <li>
                                                To provide and deliver the products, Services and support that you have
                                                requested;
                                            </li>
                                            <li>
                                                To respond to your inquiries, and send you information related to your
                                                requests and purchases, such as to send you product information,
                                                confirmations, invoices, updates, newsletters, security alerts, or
                                                brochures;
                                            </li>
                                            <li>
                                                To send you administrative messages, including messages related to
                                                changes to our terms, conditions, and policies;
                                            </li>
                                            <li>
                                                To send you marketing communications (unless you ask us not to) to tell
                                                you about specials, contests, promotions, upcoming events and news about
                                                products and services that may be of interest to you, either from Nosres
                                                and our selected partners, or third parties and use the information you
                                                provide to administer those activities;
                                            </li>
                                            <li>
                                                To analyze data, and to customize and improve our websites, products,
                                                services, and marketing communications;
                                            </li>
                                            <li>
                                                To prevent, detect and investigate fraudulent, unauthorized or illegal
                                                activities; and
                                            </li>
                                            <li>
                                                To ensure the security of our businesses, our websites, and our products
                                                and services for the benefit of our users, and as required or authorized
                                                by law.
                                            </li>
                                        </ul>
                                    </h4>
                                </div>
                            </div>

                            <div id="tab_Three" ref={assignRef('tab_Three')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <Image src={privacyThree} className="w-[35px]" alt="PrivacyImg"/>

                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Use of Cookies and Other Similar Technologies
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Nosres’s websites and Business Partners may use {`"`}cookies{`"`} and other
                                        similar
                                        technologies such as web beacons and tracking links on our websites, in our
                                        email messages, and in our advertisements for purpose to help improve our
                                        services and customize your online experience.
                                        <br/>
                                        <br/>

                                        <b>Cookies.</b> Cookies are pieces of data a website or its service providers
                                        (including email service provider) store on the computer’s hard drive through
                                        your Web browser. Cookies and other similar technologies enable us to collect
                                        and store information such as browser type, pages visited, language preferences,
                                        and other web traffic data to provide you with improved services. For instance,
                                        when we use a cookie to identify you, you would not have to log in every time
                                        you visit our websites, thereby saving time while on our sites. Cookies can also
                                        enable us to track and target the interests of our users to enhance their
                                        experience on our sites. Usage of a cookie is in no way linked to any personally
                                        identifiable information on our sites.
                                        <br/>
                                        <br/>
                                        You can opt out of Nosres websites and third-parties use of cookies by visiting
                                        the Help portion of your web browser. Many browsers allow you to automatically
                                        accept or decline cookies. If you do not accept these cookies, it will not
                                        affect your use of our sites. However, you may experience some inconvenience in
                                        your use of services that depend on cookies. For example, you may not be able to
                                        use some of the interactive features of our websites and services.
                                        <br/>
                                        <br/>
                                        <b>Web Beacons.</b> Web beacons (also called pixels, pixel tags, or clear GIFs)
                                        are
                                        electronic images on a webpage or email message that allow websites to read and
                                        place cookies on your computer. Web beacons help us identify and gather some
                                        information automatically, including Internet Protocol (IP) addresses, web
                                        browser type and language, Internet service provider (ISP), date and time, and
                                        email reader. We use this information to measure the success of our email
                                        campaigns by telling us whether an email is read or forwarded. We do not use web
                                        beacons to collect personal information about you.
                                        <br/>
                                        <br/>
                                        We also use this information to assess and improve the effectiveness of our
                                        websites, to compile individual or aggregated statistics (including demographic
                                        and usage information), and to improve our product and services.
                                        <br/>
                                        <br/>
                                        <b>Tracking Links.</b> Tracking links are normal links with tracking codes (also
                                        known
                                        as UTM parameters or tags) added to the end of the URLs. We use tracking links
                                        to track our web pages, blog posts, links on social media, links on ads, and
                                        emails. This helps us measure and improve the effectiveness of our marketing
                                        campaigns and activities, and determine the click through rate of our email
                                        promotions.
                                    </h4>
                                </div>
                            </div>

                            <div id="tab_Four" ref={assignRef('tab_Four')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <Image src={privacyFour} className="w-[35px]" alt="PrivacyImg"/>

                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Disclosure of Personal Information
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        We may share and disclose your personal information we collect with our
                                        corporate subsidiaries and/or affiliates, service providers and business
                                        partners, with other third parties in conformity with your instructions, with
                                        other third parties in conformity with applicable laws, and business transfers,
                                        as described below.
                                        <br/>
                                        <br/>
                                        <b>Corporate Subsidiaries and/or Affiliates.</b> Nosres may share personal
                                        information
                                        with its corporate subsidiaries and/or affiliates for the purposes described in
                                        this Privacy Policy. Nosres subsidiaries are companies that are owned or
                                        controlled by Nosres Corporation, and affiliates are companies in which Nosres
                                        Corporation has a substantial ownership interest.
                                        <br/>
                                        <br/>

                                        <b>Service Providers and Business Partners.</b> Nosres may share personal
                                        information
                                        with our service providers and business partners to provide services such as
                                        website hosting, storage, payment processing, credit card processing, order
                                        fulfillment, product delivery, customer service, e-mail delivery, marketing, and
                                        other similar services. These parties are obligated to keep your information
                                        confidential and are not allowed to use your personal information except for the
                                        purpose set forth by Nosres.
                                        <br/>
                                        <br/>

                                        <b>Third Parties in Conformity with Your Instructions.</b> Nosres may share and
                                        disclose personal information with third parties in accordance with user’s
                                        instructions. For example, our services may enable you to connect your Nosres
                                        account with various social media and third-party apps. If you choose to connect
                                        your Nosres Account to your social media accounts you grant us the authorization
                                        to share your personal information with these social media account providers and
                                        you understand that these third parties are not owned or controlled by Nosres,
                                        and are subject to their own terms and privacy policies. Please review the terms
                                        and privacy policies of these third parties before connecting your Nosres
                                        Account to them.
                                        <br/>
                                        <br/>

                                        <b>Third Parties in Conformity with Applicable Laws.</b> Nosres may disclose
                                        your
                                        personal information to various governmental authorities in response to lawful
                                        requests and legal processes, including, but not limited to subpoenas, search
                                        warrants or court orders, within or outside your country of residence.
                                        Additionally, we may share your personal information when we reasonably believe
                                        it is necessary or appropriate to detect, investigate, prevent, or stop illegal
                                        or unethical activities. We may also disclose your personal information to
                                        protect the rights, property, or safety of Nosres, our users, customers, or
                                        others, including enforcing our agreements, policies and terms; and in
                                        connection with detecting and preventing fraud or security issues.
                                        <br/>
                                        <br/>

                                        <b>Business Transfers.</b> Nosres may share or transfer, subject to standard
                                        confidentiality arrangements, any and all personal information we collect to the
                                        relevant third party in the event that we engage in a merger, reorganization,
                                        bankruptcy, joint venture, or sale of all or any portion of our business or
                                        assets. In this event, we will notify you by sending via the email address you
                                        provided us when you registered your Nosres account.
                                        <br/>
                                        <br/>

                                        Nosres will only share your personal information to provide and improve our
                                        products, services and advertising. Except as permitted in this Privacy Policy,
                                        we will not share or disclose your personal information with third parties for
                                        their marketing purposes without your consent. We may share aggregated
                                        demographic and non-personally identifiable visitor information with third
                                        parties for any legitimate purposes, including, but not limited to research and
                                        development, and marketing.
                                    </h4>
                                </div>
                            </div>

                            <div id="tab_Five" ref={assignRef('tab_Five')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <Image src={privacyFive} className="w-[35px]" alt="PrivacyImg"/>

                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Protection of Personal Information
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        We strive to protect your Personal Information against loss, theft and
                                        unauthorized access, misuse and modification or disclosure of the personal
                                        information that we obtain from you through our Services. When you submit
                                        sensitive information via our sites, your information is protected both online
                                        and offline.
                                        <br/>
                                        <br/>

                                        Wherever we collect sensitive information (such as credit card data), that
                                        information is encrypted and transmitted to us in a secure way. You can verify
                                        this by looking for a closed lock icon at the bottom of your web browser, or
                                        looking for {`"`}https{`"`} at the beginning of the address of the web page.
                                        <br/>
                                        <br/>

                                        While we use encryption to protect sensitive information transmitted online, we
                                        also protect your information offline. Only employees who need the information
                                        to perform a specific job (e.g. billing or customer service) are granted access
                                        to personally identifiable information. The computers/servers on which we store
                                        personally identifiable information are kept in a secure environment.
                                        <br/>
                                        <br/>

                                        However, we cannot guarantee you third parties will never read or intercept any
                                        information you send to the Site despite our efforts. By using this Site, you
                                        acknowledge that the Internet transmissions are never entirely private or secure
                                        and any transmission of your personal information is at your own risk.
                                    </h4>
                                </div>
                            </div>

                            <div id="tab_Six" ref={assignRef('tab_Six')} className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <Image src={privacySix} className="w-[35px]" alt="PrivacyImg"/>

                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Retention and Erasure of Personal Information
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        We will retain your personal information for the period necessary to fulfill the
                                        purposes described in this Privacy Policy, and for no longer than the retention
                                        period required by law. To the extent permitted by applicable law, we will erase
                                        your personal information or keep it in a form that does not identify you:
                                        <ul className="list-disc space-y-3 ml-10 mt-1">
                                            <li>
                                                when the information is no longer needed for the stated purposes;
                                            </li>
                                            <li>
                                                when you have given an explicit consent for the erasure; or
                                            </li>
                                            <li>
                                                when it is necessary for compliance with a legal obligation under the
                                                applicable information privacy law.
                                            </li>
                                        </ul>
                                    </h4>
                                </div>
                            </div>

                            <div id="tab_Seven" ref={assignRef('tab_Seven')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <Image src={privacySeven} className="w-[35px]" alt="PrivacyImg"/>

                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Access to Personal Information
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Nosres wants you to keep your Personal Information accurate, complete, and up to
                                        date. Please log in to your Nosres account to access, correct, update or delete
                                        the information from or about you at any time. If you are unable to do so,
                                        please send a written request directly to legal@nosres.com or our mailing
                                        address below. For the security of your account and your protection, we may need
                                        to verify your identity before implementing your request. We may reject your
                                        access or deletion requests if we believe that fulfilling such requests will be
                                        prejudicial to our legitimate use of data for anti-fraud and security purposes.
                                    </h4>
                                </div>
                            </div>

                            <div id="tab_Eight" ref={assignRef('tab_Eight')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <Image src={privacyEight} className="w-[35px]" alt="PrivacyImg"/>

                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Collection of Children’s Personal Information
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Children’s online privacy protection is very important to us. To the extent
                                        prohibited by applicable law, we do not knowingly collect or use information
                                        from children under the age of 18. If you are younger than 18, please do not
                                        provide any personal information through our websites without prior parental or
                                        legal guardian consent. If we learn that we have received personal information
                                        from a child under age 18 without the express consent of a parent or legal
                                        guardian, we will take steps to delete such information from our system as soon
                                        as possible.
                                    </h4>
                                </div>
                            </div>

                            <div id="tab_Nine" ref={assignRef('tab_Nine')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <Image src={privacyNine} className="w-[35px]" alt="PrivacyImg"/>

                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Links to Third-Party Sites and Services
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Nosres websites may contains links to third-party websites. Please be aware that
                                        we are not responsible for the content or privacy practices of any other
                                        third-party websites. We encourage you to read the privacy policies of those
                                        third-party websites.
                                    </h4>
                                </div>
                            </div>

                            <div id="tab_Ten" ref={assignRef('tab_Ten')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <Image src={privacyTen} className="w-[35px]" alt="PrivacyImg"/>

                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Changes to This Privacy Policy
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Nosres reserves the right, at its sole discretion, to change or modify its
                                        Privacy Policy, at any time and without prior notice. It is your responsibility
                                        to frequently check this page for any changes or modifications. Changes will be
                                        effective upon the posting of the changes and modifications. Your continued
                                        access to and use of the Site and Services following the posting of changes will
                                        constitute your acceptance to such changes.
                                    </h4>
                                </div>
                            </div>

                            <div id="tab_Eleven" ref={assignRef('tab_Eleven')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <Image src={privacyEleven} className="w-[35px]" alt="PrivacyImg"/>

                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Privacy Inquiries
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        If you have any questions or concerns regarding our privacy practices, please
                                        contact us by email at legal@nosres.com or write to us at the following address:
                                        <br/>
                                        <br/>
                                        <span className="text-[16px] font-semibold">
                                            Nosres Inc. Mailing Address
                                        </span>
                                        <br/>
                                        <br/>
                                        447 Broadway, 2nd Floor, Suite #1680<br/>
                                        New York, NY 10013<br/>
                                        USA
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