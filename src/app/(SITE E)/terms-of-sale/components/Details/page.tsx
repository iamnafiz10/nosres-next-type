'use client';
import React, {useEffect, useState, useRef} from 'react';
import Link from "next/link";

function Page() {
    const [activeTab, setActiveTab] = useState('tseller_tab_one'); // Initial active tab
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
                            className="col lg:col-span-4 flex-initial lg:sticky top-[80px] h-full lg:h-[80vh] w-full overflow-hidden lg:overflow-auto">
                            <h4 className="text-[16px] font-semibold pb-2">
                                Terms of Sale
                            </h4>
                            <hr/>
                            <ul className="space-y-3 pt-4 text-primary">
                                <li>
                                    <div onClick={() => handleClick('tseller_tab_one')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'tseller_tab_one' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Eligibility
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tseller_tab_two')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'tseller_tab_two' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Your Obligations as a Buyer
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tseller_tab_three')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'tseller_tab_three' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Product Descriptions
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tseller_tab_four')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'tseller_tab_four' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Pricing
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tseller_tab_five')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'tseller_tab_five' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Payments
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tseller_tab_six')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'tseller_tab_six' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Fees and Charges
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tseller_tab_seven')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'tseller_tab_seven' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Order Cancellations, Returns and Refunds
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tseller_tab_eight')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'tseller_tab_eight' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Risk of Loss
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tseller_tab_nine')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'tseller_tab_nine' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Disclaimer of warranties and Limitation of liability
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tseller_tab_ten')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'tseller_tab_ten' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Dispute with Sellers or Other Users
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tseller_tab_eleven')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'tseller_tab_eleven' ? 'text-prgcolor font-semibold' : ''}`}>
                                            General Release
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tseller_tab_twelve')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'tseller_tab_twelve' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Buyer Protection
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tseller_tab_thirteen')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'tseller_tab_thirteen' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Termination
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tseller_tab_fourteen')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'tseller_tab_fourteen' ? 'text-prgcolor font-semibold' : ''}`}>
                                            How to Contact Nosres
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
                                        These Terms and Conditions contain the terms and conditions of your
                                        participation as a buyer via Nosres Services. These Terms (“Buyer Agreement”)
                                        govern your access to and use of the site and services for the purchase of
                                        products or services directly through the site or applications. These Terms
                                        represent your rights and obligations as a Buyer on Nosres
                                        <br/>
                                        <br/>

                                        THIS BUYER AGREEMENT IS ALSO PART OF OUR TERMS OF USE. BY ACCESSING THIS SITE
                                        AND MAKING A PURCHASE, YOU ARE ACCEPTING AND AGREEING TO BE BOUND BY THESE TERMS
                                        (“SELLER AGREEMENT”), OUR POLICIES AND THE TERMS OF USE. WE RECOMMEND THAT YOU
                                        REVIEW AND UNDERSTAND OUR POLICIES, INCLUDING THESE TERMS AND CONDITIONS, BEFORE
                                        YOU CREATE AN ACCOUNT AND START PURCHASING ANY PRODUCTS OR SERVICES ON NOSRES.
                                        IF YOU DO NOT AGREE WITH THE TERMS OF USE, OUR POLICIES AND THESE TERMS AND
                                        CONDITIONS OF THIS AGREEMENT, PLEASE DO NOT USE NOSRES PLATFORM TO PURCHASE ANY
                                        PRODUCTS AND ANY SERVICES.
                                        <br/>
                                        <br/>
                                        Nosres reserves the right, at its sole discretion, to change or modify any of
                                        the terms that contained in this agreement, at any time and without prior
                                        notice. It is your responsibility to look at this Buyer Agreement periodically
                                        for changes and modifications. Changes will be effective upon the posting of the
                                        changes and modifications. YOUR CONTINUED ACCESS TO AND USE OF THE SITE AND
                                        SERVICES FOLLOWING THE POSTING OF CHANGES WILL MEAN THAT YOU ACCEPT AND AGREE TO
                                        SUCH CHANGES AND MODIFICATIONS.
                                        <br/>
                                        <br/>

                                        In these Terms and Conditions “you” or “your” shall refer to you, as a buyer.
                                        “we”, “us”, “our”, or the “site” shall refer to Nosres.
                                    </h4>
                                </div>
                            </div>

                            <div id="tseller_tab_one" ref={assignRef('tseller_tab_one')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                1.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Eligibility
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        To sell on Nosres you should be 18 years of age or older. If you are a minor,
                                        i.e. under the of full legal responsibility, you shall not register to become a
                                        Nosres seller. Additionally, only registered Users may buy on Nosres. To
                                        register you must provide your real name, address, phone number, e-mail address
                                        and a valid credit or debit card that is accepted by Nosres. We recommend that
                                        you review and understand our policies, including these Terms of Use, before you
                                        create an account and start buying an item on Nosres
                                    </h4>
                                </div>
                            </div>

                            <div id="tseller_tab_two" ref={assignRef('tseller_tab_two')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                2.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Your Obligations as a Buyer
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        We are committed to creating a fair and wonderful buying experience for you in
                                        order to bring value to our marketplace. Therefore, you are agreeing that, when
                                        using our services, you will follow these rules:
                                        <br/>
                                        <br/>
                                        <ul className="obligations_list space-y-4 ml-6">
                                            <li>
                                                <h4>
                                                    You must provide us true and accurate information about you when
                                                    registering on Nosres and must update that information as
                                                    applicable.
                                                    Therefore, you agree to authorize Nosres to verify your information
                                                    from
                                                    time to time while using the services to prevent risk of fraud.
                                                </h4>
                                            </li>
                                            <li>
                                                <h4>Make certain that you read the listing description carefully before
                                                    you make a purchase.</h4>
                                            </li>
                                            <li>
                                                <h4>An item may be purchased using one of the following payment methods:
                                                    credit card, debit card, PayPal or Nosres Pay. You may not offer a
                                                    seller to pay, or make payment using any method other than through
                                                    the website. If you receive an offer from a seller to use an
                                                    alternative payment method, please report it immediately to us
                                                    (Please see the “How to Contact Nosres” section below)</h4>
                                            </li>
                                            <li>
                                                <h4>Moreover, you must not ask the seller to buy outside Nosres
                                                    platform. As a buyer, if you have been asked to buy an item outside
                                                    Nosres platform please report it immediately to us (Please see the
                                                    “How to Contact Nosres” section below).</h4>
                                            </li>
                                            <li>
                                                <h4>If you want to return an item, make sure that you review the
                                                    seller{`'`}s return policy before you initiate the return.</h4>
                                            </li>
                                            <li>
                                                <h4>You cannot return a different item from the one you purchase. For
                                                    example, you cannot return a used model of the same product or an
                                                    empty box.</h4>
                                            </li>
                                            <li>
                                                <h4>You must return the item in the condition that it was sent to you,
                                                    including its accessories.</h4>
                                            </li>
                                            <li>
                                                <h4>You will not leave, and will not assist, or encourage others to
                                                    leave a negative review to a seller if that seller keeps his/her
                                                    promise as it was mentioned in the original listing.</h4>
                                            </li>
                                            <li>
                                                <h4>Furthermore, you cannot leave a review or comment just to help
                                                    increase a seller{`'`}s image.</h4>
                                            </li>
                                        </ul>
                                    </h4>
                                </div>
                            </div>

                            <div id="tseller_tab_three" ref={assignRef('tseller_tab_three')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                3.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Product Descriptions
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Nosres does not warrant that product descriptions or other content of the site
                                        is accurate, complete, reliable, current, or error-free. If you purchase a
                                        product on Nosres that is different from the listed description, your sole
                                        remedy is to return to us and we guarantee to refund your money in full or give
                                        you a replacement in accordance with our return and refund policies.
                                    </h4>
                                </div>
                            </div>

                            <div id="tseller_tab_four" ref={assignRef('tseller_tab_four')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                4.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Pricing
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        The selling price is available on the site on an “As Is” basis, and it is
                                        provided by the seller. Due to technical issues, the selling price of certain
                                        items displayed in our catalog may contain errors. In the event a buyer has
                                        already made the purchase with the erroneous selling price such transaction
                                        shall not be valid.
                                    </h4>
                                </div>
                            </div>

                            <div id="tseller_tab_five" ref={assignRef('tseller_tab_five')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                5.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Payments
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        A buyer must pay via the Nosres platform for an item purchased via the site. An
                                        item may be purchased using one of the following payment methods: Visa and
                                        MasterCard credit or debit cards, PayPal or Nosres Pay. When ordering from the
                                        site or applications, you agree that your payments are made to Nosres Inc. We
                                        use secure encryption technology to protect your card information and keep it
                                        confidential all the time.
                                    </h4>
                                </div>
                            </div>

                            <div id="tseller_tab_six" ref={assignRef('tseller_tab_six')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                6.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Fees and Charges
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Currently, joining Nosres and creating an account is absolutely free. But we
                                        reserve the right at any time to charge the buyer any fees or charges for using
                                        our services.
                                    </h4>
                                </div>
                            </div>

                            <div id="tseller_tab_seven" ref={assignRef('tseller_tab_seven')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                7.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Order Cancellations, Returns and Refunds
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        As a buyer, you acknowledge and agree that Nosres and sellers have the right to
                                        cancel orders. You also agree and accept that we will process order
                                        cancellations, returns and refunds under the applicable Nosres’ Order
                                        Cancellations Policy, Returns Policy, and Refunds Policy published on the site
                                        at the time of the applicable order. (For more, please read our order
                                        Cancellations Policy, Returns Policy, and Refunds Policy.)
                                    </h4>
                                </div>
                            </div>

                            <div id="tseller_tab_eight" ref={assignRef('tseller_tab_eight')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                8.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Risk of Loss
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        All physical items purchased from Nosres platform are made in accordance with a
                                        shipment contract. Consequently, the risk of loss and title for such items pass
                                        to you when such items are delivered to the carrier.
                                    </h4>
                                </div>
                            </div>

                            <div id="tseller_tab_nine" ref={assignRef('tseller_tab_nine')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                9.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Disclaimer of warranties and Limitation of liability
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        YOUR ACCESS TO AND USE OF THE SITE, ITS CONTENT AND ANY SERVICES OR ITEMS
                                        OBTAINED THROUGH THE SITE IS AT YOUR OWN RISK. THE SITE AND ALL INFORMATION,
                                        CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) AND OTHER SERVICES INCLUDED ON
                                        OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SITE ARE PROVIDED BY NOSRES ON AN
                                        {`"`}AS IS{`"`} AND {`"`}AS AVAILABLE{`"`} BASIS, WITHOUT ANY WARRANTIES OF ANY
                                        KIND, EITHER
                                        EXPRESS OR IMPLIED. NEITHER NOSRES NOR ITS AFFILIATES AND OFFICERS, DIRECTORS,
                                        EMPLOYEES, AGENTS, REPRESENTATIVES, LICENSORS, OR PARTNERS MAKE ANY WARRANTY OR
                                        REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY,
                                        ACCURACY OR AVAILABILITY OF THE SITE.
                                        <br/>
                                        <br/>


                                        TO THE MAXIMUM EXTENT PERMISSBLE BY APPLICABLE LAW, NOSRES, AND ITS AFFILIATES
                                        AND OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, REPRESENTATIVES, LICENSORS, OR
                                        PARTNERS DISCLAIM ANY AND ALL SUCH WARRANTIES.
                                        <br/>
                                        <br/>

                                        TO THE MAXIMUM EXTENT PERMISSBLE BY APPLICABLE LAW, IN NO EVENT SHALL NOSRES,
                                        AND ITS AFFILIATES AND OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, REPRESENTATIVES,
                                        LICENSORS, OR PARTNERS BE RESPONSIBLE OR LIABLE FOR ANY DAMAGES OF ANY KIND,
                                        INCLUDING WITHOUT LIMITATION DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, AND
                                        CONSEQUENTIAL DAMAGES, ARISING OUT OF OR IN CONNECTION WITH THIS BUYER
                                        AGREEMENT, OR THE INABILITY TO USE THE SERVICES, OR THOSE RESULTING FROM ANY
                                        PRODUCTS OR SERVICES PURCHASED OR OBTAINED OR TRANSACTIONS ENTERED INTO THROUGH
                                        THE SERVICES.
                                    </h4>
                                </div>
                            </div>

                            <div id="tseller_tab_ten" ref={assignRef('tseller_tab_ten')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                10.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Dispute with Sellers or Other Users
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Nosres provides a platform for sellers and buyers to negotiate and complete
                                        transactions. Nosres is not the agent of the seller with the exception of the
                                        limited purpose of processing payments, and Nosres is not the agent of the buyer
                                        for any purpose. Therefore, Nosres has no obligation to resolve any disputes
                                        between buyers and sellers or other users of Nosres services. Nosres encourage
                                        sellers and buyers to cooperate with each other to amicably resolve such
                                        disputes.
                                        <br/>
                                        <br/>

                                        If a dispute arises between a seller and a buyer or other users of Nosres
                                        services; we, in our sole discretion, may make an attempt to help resolve such
                                        disputes in accordance with our policies.
                                    </h4>
                                </div>
                            </div>

                            <div id="tseller_tab_eleven" ref={assignRef('tseller_tab_eleven')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                11.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            General Release
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        If a dispute arises between you and a seller or other users, you release Nosres,
                                        and its affiliates and officers, directors, employees, agents, representatives,
                                        licensors, or partners from any claims, demands and damages arising out of such
                                        disputes.
                                    </h4>
                                </div>
                            </div>

                            <div id="tseller_tab_twelve" ref={assignRef('tseller_tab_twelve')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                12.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Buyer Protection
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Nosres Buyer Protection is set up to protect buyers against fraud. There is no
                                        application process for Nosres Buyer Protection but to be eligible for it,
                                        buyers need to make certain that they do not violate any of our policies and
                                        rules. If you receive an item that is different from what was listed or
                                        described on Nosres and you end up in a dispute with the seller, just bear in
                                        mind that you are not alone. You will need to provide us the adequate
                                        information in order to help resolve the dispute. But we cannot give you every
                                        assurance that we will close the dispute in your favor.
                                    </h4>
                                </div>
                            </div>

                            <div id="tseller_tab_thirteen" ref={assignRef('tseller_tab_thirteen')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                13.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Termination
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Nosres reserves the right, in its sole discretion, to suspend or terminate this
                                        Buyer Agreement, your account or your access to the services at any time, for
                                        any reason, and without prior notice.
                                        <br/>
                                        <br/>

                                        You may also terminate your account with Nosres via your account settings at any
                                        time.
                                        <br/>
                                        <br/>

                                        Nosres may change, suspend or discontinue any of the services at any time, for
                                        any reason. You agree that we will not be liable to you for compensation,
                                        reimbursement, or damages in connection with your use of the services, or in
                                        connection with any changes and suspension or termination of the services.
                                    </h4>
                                </div>
                            </div>

                            <div id="tseller_tab_fourteen" ref={assignRef('tseller_tab_fourteen')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                14.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            How to Contact Nosres
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Please visit our <Link href='#' className="text-primary">contact page</Link> for
                                        information about how to contact Nosres.
                                        Nosres Team will typically get back to you in less than 24 hours.
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