'use client';
import React, {useEffect, useState, useRef} from 'react';
import Link from "next/link";

function Page() {
    const [activeTab, setActiveTab] = useState('seller_tab_one'); // Initial active tab
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
                                Seller Terms
                            </h4>
                            <hr/>
                            <ul className="space-y-3 pt-4 text-primary">
                                <li>
                                    <div onClick={() => handleClick('seller_tab_one')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'seller_tab_one' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Key Terms
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('seller_tab_two')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'seller_tab_two' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Membership Eligibility
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('seller_tab_three')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'seller_tab_three' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Your Obligations as a Seller
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('seller_tab_four')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'seller_tab_four' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Listing
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('seller_tab_five')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'seller_tab_five' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Prohibited or Restricted Items
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('seller_tab_six')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'seller_tab_six' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Pricing Policy
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('seller_tab_seven')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'seller_tab_seven' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Fees and Charges
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('seller_tab_eight')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'seller_tab_eight' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Order Cancellations, Returns and Refunds
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('seller_tab_nine')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'seller_tab_nine' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Shipping and Delivery
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('seller_tab_ten')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'seller_tab_ten' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Payments and Deposits
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('seller_tab_eleven')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'seller_tab_eleven' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Governing Law
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('seller_tab_twelve')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'seller_tab_twelve' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Indemnification
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('seller_tab_thirteen')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'seller_tab_thirteen' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Disclaimer of warranties and Limitation of liability
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('seller_tab_fourteen')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'seller_tab_fourteen' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Dispute with Buyers or Other Users
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('seller_tab_fifteen')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'seller_tab_fifteen' ? 'text-prgcolor font-semibold' : ''}`}>
                                            General Release
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('seller_tab_sixteen')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'seller_tab_sixteen' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Seller Protection
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('seller_tab_seventeen')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'seller_tab_seventeen' ? 'text-prgcolor font-semibold' : ''}`}>
                                            Termination
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('seller_tab_eighteen')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`hover:text-prgcolor hover:font-semibold text-[14px] ${activeTab === 'seller_tab_eighteen' ? 'text-prgcolor font-semibold' : ''}`}>
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
                                        These Seller Terms and Conditions contain the terms and conditions of your
                                        participation as a Seller via Nosres Services. These Terms (“Seller Agreement”)
                                        govern your access to or use of the Site and Services for the sale of products
                                        or services directly through the Site or Applications. This is a binding legal
                                        agreement between you, the Seller, or any legal entity You are representing
                                        (collectively, the “Seller”, “you” or “your”) and Nosres (hereinafter referred
                                        to as “Nosres” or the “Site” or “we” or “us” or “our”) and is incorporated by
                                        reference into Nosres Terms of Use (“Terms of Use”).
                                        <br/>
                                        <br/>

                                        THIS SELLER AGREEMENT IS ALSO PART OF OUR TERMS OF USE. BY ACCESSING THIS SITE
                                        AND OPENING A NOSRES STORE, YOU ARE ACCEPTING AND AGREEING TO BE BOUND BY THESE
                                        TERMS (“SELLER AGREEMENT”), OUR POLICIES AND THE TERMS OF USE. WE RECOMMEND THAT
                                        YOU REVIEW AND UNDERSTAND OUR POLICIES, INCLUDING THESE TERMS AND CONDITIONS,
                                        BEFORE YOU CREATE AN ACCOUNT AND START LISTING ANY PRODUCTS OR SERVICES ON
                                        NOSRES. IF YOU DO NOT AGREE WITH THE TERMS OF USE, OUR POLICIES AND THESE TERMS
                                        AND CONDITIONS OF THIS AGREEMENT, PLEASE DO NOT USE NOSRES PLATFORM TO LIST ANY
                                        PRODUCTS AND OFFER ANY SERVICES.
                                        <br/>
                                        <br/>
                                        Nosres reserves the right, at its sole discretion, to change or modify any of
                                        the terms that contained in this Seller Agreement, at any time and without prior
                                        notice. It is your responsibility to look at this Seller Agreement periodically
                                        for changes and modifications. Changes will be effective upon the posting of the
                                        changes and modifications. YOUR CONTINUED ACCESS TO AND USE OF THE SITE AND
                                        SERVICES FOLLOWING THE POSTING OF CHANGES WILL MEAN THAT YOU ACCEPT AND AGREE TO
                                        SUCH CHANGES AND MODIFICATIONS.
                                    </h4>
                                </div>
                            </div>

                            <div id="seller_tab_one" ref={assignRef('seller_tab_one')}
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
                                            Key Terms
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        <b>Listing:</b> refers to putting the products on sale on Nosres marketplace by
                                        filling
                                        out all the information necessary about the products, including product
                                        description, images, graphics, videos so that a Buyer can make an informed
                                        purchase decision.
                                        <br/>
                                        <br/>

                                        <b>Order:</b> a formal agreement between a buyer and seller after a purchase was
                                        made from the seller’s store.
                                        <br/>
                                        <br/>

                                        <b>Payment Dashboard:</b> feature of the Seller Dashboard that allows Sellers to
                                        keep
                                        track of their payments.
                                        <br/>
                                        <br/>

                                        <b>Payment Processing Fees:</b> the fee that is charged when Nosres initiates a
                                        deposit
                                        of a Seller’s Available Balance into the seller’s bank account.
                                        <br/>
                                        <br/>

                                        <b>Selling Service Fees:</b> the total of the Commission Fee and Shipping Fee
                                        that you
                                        are charged for each sale you make.
                                        <br/>
                                        <br/>

                                        <b>Remittance Fee:</b> the fee that the local bank charge when Nosres transfer
                                        the money
                                        to your bank account.
                                        <br/>
                                        <br/>

                                        <b>Sales Balance:</b> cleared revenue from completed orders for sellers to
                                        withdraw or
                                        use to purchase from other sellers on Nosres.
                                        <br/>
                                        <br/>

                                        <b>Seller Dashboard:</b> where the Sellers can manage their accounts, add
                                        product
                                        information, manage orders and payments; and see the performance of their
                                        stores.
                                        <br/>
                                        <br/>

                                        <b>Seller Revenue:</b> the amount of money that sellers earn from completed
                                        orders.
                                        <br/>
                                        <br/>

                                        <b>Selling price:</b> the price for which the product is sold.
                                        <br/>
                                        <br/>

                                        <b>Stores:</b> virtual places where the sellers keep their products or services
                                        for sale.
                                    </h4>
                                </div>
                            </div>

                            <div id="seller_tab_two" ref={assignRef('seller_tab_two')}
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
                                            Membership Eligibility
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        To sell on Nosres you should be 18 years of age or older. If you are a minor,
                                        i.e. under the of full legal responsibility, you shall not register to become a
                                        Nosres Seller. To register you must provide your real name, address, phone
                                        number, e-mail address and a valid credit or debit card that is accepted by
                                        Nosres. By registering, Sellers can create stores and list their items, and
                                        allow buyers to purchase those items in a fixed pricing format (Please the
                                        Seller Page for more information about how to sell on Nosres). Nosres reserves
                                        the right to remove or edit content or cancel orders in its sole discretion. We
                                        recommend that you review and understand our policies, including these Seller
                                        Terms and Conditions, before you create an account and list an item on Nosres.
                                    </h4>
                                </div>
                            </div>

                            <div id="seller_tab_three" ref={assignRef('seller_tab_three')}
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
                                            Your Obligations as a Seller
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        We are committed to creating a fair and wonderful selling experience for you in
                                        order to bring value to our marketplace. Therefore, you are agreeing that, when
                                        using our services, you will follow these rules:
                                        <br/>
                                        <br/>

                                        <ul className="obligations_list space-y-4 ml-6">
                                            <li>
                                                <h4>
                                                    You must provide us accurate information about you and your business
                                                    when registering on Nosres and must update that information as
                                                    applicable. Therefore, you agree to authorize Nosres to verify your
                                                    information from time to time while using the services.
                                                </h4>
                                            </li>
                                            <li>
                                                <h4>
                                                    You cannot upload images or videos that illegal, obscene,
                                                    threatening,
                                                    or infringing of intellectual property rights, and contains software
                                                    viruses, or any form of {`"`}spam{`"`}.
                                                </h4>
                                            </li>
                                            <li>
                                                <h4>
                                                    You must list MP3 music, books, or eBooks, CDs, DVDs, VCDs (Video
                                                    CDs),
                                                    photos and videos that You own all the rights, or You purchase from
                                                    the
                                                    owner’s official website.
                                                </h4>
                                            </li>
                                            <li>
                                                <h4>
                                                    You only allow to sell brand new and 100% genuine items on Nosres.
                                                    You
                                                    cannot list counterfeits, fake of brand name items, including
                                                    electronics and accessories.
                                                </h4>
                                            </li>
                                            <li>
                                                <h4>
                                                    You must not ask to sell outside Nosres platform. In case you have
                                                    been
                                                    asked to sell an item outside Nosres platform please report it
                                                    immediately to us (Please see the “How to Contact Nosres” section
                                                    below).
                                                </h4>
                                            </li>
                                            <li>
                                                <h4>
                                                    You may not offer a buyer to pay, or make payment using any method
                                                    other
                                                    than through the site. If you receive an offer from a buyer to use
                                                    an
                                                    alternative payment method, please report it immediately to us
                                                    (Please
                                                    see the “How to Contact Nosres” section below).
                                                </h4>
                                            </li>
                                            <li>
                                                <h4>
                                                    You will not interfere with or otherwise prevent other sellers from
                                                    providing their services.
                                                </h4>
                                            </li>
                                        </ul>
                                    </h4>
                                </div>
                            </div>

                            <div id="seller_tab_four" ref={assignRef('seller_tab_four')}
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
                                            Your Obligations as a Seller
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        We are committed to creating a fair and wonderful selling experience for you in
                                        order to bring value to our marketplace. Therefore, you are agreeing that, when
                                        using our services, you will follow these rules:
                                        <br/>
                                        <br/>

                                        <ul className="obligations_list space-y-4 ml-6">
                                            <li>
                                                <h4>
                                                    You must provide us accurate information about you and your business
                                                    when registering on Nosres and must update that information as
                                                    applicable. Therefore, you agree to authorize Nosres to verify your
                                                    information from time to time while using the services.
                                                </h4>
                                            </li>
                                            <li>
                                                <h4>
                                                    You cannot upload images or videos that illegal, obscene,
                                                    threatening,
                                                    or infringing of intellectual property rights, and contains software
                                                    viruses, or any form of {`"`}spam{`"`}.
                                                </h4>
                                            </li>
                                            <li>
                                                <h4>
                                                    You must list MP3 music, books, or eBooks, CDs, DVDs, VCDs (Video
                                                    CDs),
                                                    photos and videos that You own all the rights, or You purchase from
                                                    the
                                                    owner’s official website.
                                                </h4>
                                            </li>
                                            <li>
                                                <h4>
                                                    You only allow to sell brand new and 100% genuine items on Nosres.
                                                    You
                                                    cannot list counterfeits, fake of brand name items, including
                                                    electronics and accessories.
                                                </h4>
                                            </li>
                                            <li>
                                                <h4>
                                                    You must not ask to sell outside Nosres platform. In case you have
                                                    been
                                                    asked to sell an item outside Nosres platform please report it
                                                    immediately to us (Please see the “How to Contact Nosres” section
                                                    below).
                                                </h4>
                                            </li>
                                            <li>
                                                <h4>
                                                    You may not offer a buyer to pay, or make payment using any method
                                                    other
                                                    than through the site. If you receive an offer from a buyer to use
                                                    an
                                                    alternative payment method, please report it immediately to us
                                                    (Please
                                                    see the “How to Contact Nosres” section below).
                                                </h4>
                                            </li>
                                            <li>
                                                <h4>
                                                    You will not interfere with or otherwise prevent other sellers from
                                                    providing their services.
                                                </h4>
                                            </li>
                                        </ul>
                                    </h4>
                                </div>
                            </div>

                            <div id="seller_tab_five" ref={assignRef('seller_tab_five')}
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
                                            Prohibited or Restricted Items
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        We are dedicated to providing an open marketplace to everyone, but we tend be
                                        fairly liberal about what we allow to sell on Nosres. However, for some reasons,
                                        we prohibit and restrict some types of items from Nosres marketplace.
                                        <br/>
                                        <br/>
                                        The following items are prohibited or restricted on Nosres. If you are selling
                                        those items, we ask for your understanding and we regret any inconvenience this
                                        policy may cause.
                                    </h4>
                                    <br/>
                                    <div className="ml-6">
                                        <h4 className="font-semibold text-[14px]">
                                            1. Tobacco
                                        </h4>
                                        <h4 className="text-[14px] text-prgcolor leading-[24px] mt-2 ml-4">
                                            It is prohibited to list tobacco products on Nosres platform.
                                        </h4>
                                        <br/>
                                        <h4 className="font-semibold text-[14px]">
                                            2. Alcohol
                                        </h4>
                                        <h4 className="text-[14px] text-prgcolor leading-[24px] mt-2 ml-4">
                                            Alcohol is restricted on Nosres. However, we may allow you to list some
                                            types of
                                            alcohol products. We allow the sale of beer and wine, and foods that contain
                                            alcoholic ingredients and flavoring. However, we may allow pre-approved
                                            sellers
                                            to sell other types of alcohol products at our discretion. And by purchasing
                                            alcohol products you agree that you are at least 20 years old.
                                        </h4>
                                        <br/>
                                        <h4 className="font-semibold text-[14px]">
                                            3. Animals
                                        </h4>
                                        <h4 className="text-[14px] text-prgcolor leading-[24px] mt-2 ml-4">
                                            It is prohibited to list live animals and their parts.
                                        </h4>
                                        <br/>
                                        <h4 className="font-semibold text-[14px]">
                                            4. Drugs
                                        </h4>
                                        <h4 className="text-[14px] text-prgcolor leading-[24px] mt-2 ml-4">
                                            Drugs are restricted on Nosres, but we allow the sale of certain types of
                                            pharmaceutical products. This includes products with added vitamins,
                                            multivitamin supplements, musclebuilding supplements, and painkillers.
                                        </h4>
                                        <br/>
                                        <h4 className="font-semibold text-[14px]">
                                            5. Police or Military Items
                                        </h4>
                                        <h4 className="text-[14px] text-prgcolor leading-[24px] mt-2 ml-4">
                                            You cannot list police or military items. This include badges and patches,
                                            weapons, ammunition, and their related parts. However, clothing, hats,
                                            helmets,
                                            replica firearm or explosive, and non-restricted instruments and tools are
                                            allowed.
                                        </h4>
                                        <br/>
                                        <h4 className="font-semibold text-[14px]">
                                            6. Stolen property
                                        </h4>
                                        <h4 className="text-[14px] text-prgcolor leading-[24px] mt-2 ml-4">
                                            It is prohibited to list stolen property on Nosres.
                                        </h4>
                                    </div>
                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        We reserve the right, in our sole discretion, to remove your listing at any time
                                        if it violates the law or our policies. We may also limit your selling
                                        privileges and suspend your account if you do not follow these guidelines.
                                    </h4>
                                </div>
                            </div>

                            <div id="seller_tab_six" ref={assignRef('seller_tab_six')}
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
                                            Pricing Policy
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        As a Seller, you are responsible for setting the selling price of the items that
                                        you list on Nosres. The selling price is available on the site on an “As Is”
                                        basis. Due to technical issues, the selling price of certain items displayed in
                                        our catalog may contain errors. In that event, you acknowledge and agree that
                                        you will correct the erroneous selling price at any time, and if the buyer has
                                        already made the purchase with the erroneous selling price such transaction
                                        shall not be valid.
                                    </h4>
                                </div>
                            </div>

                            <div id="seller_tab_seven" ref={assignRef('seller_tab_seven')}
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
                                            Fees and Charges
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Joining Nosres and opening a store is absolutely free. In addition, Nosres does
                                        not currently charge any fees to publish a listing, but we reserve the right to
                                        do so in the future. Sellers are only liable to some fees that arise from all
                                        completed transactions (sales) made using Nosres services, except for
                                        transactions that are finalized or payments that are made outside of Nosres
                                        platform. Once the seller makes a sale he/she will be charged marketplace fee
                                        (commission fee and shipping fee) and a payment processing fees (PayPal fees or
                                        remittance fees). The commission fee varies by product categories and will be
                                        clearly outlined before you commit to selling your products on Nosres. By using
                                        Nosres platform to sell your products you agree and authorize us to receive the
                                        buyers’ payment when purchasing your products, and you accept to pay fees that
                                        are assessed to you.
                                        <br/>
                                        <br/>

                                        Nosres reserves the right to make changes to the fees and charges policy at any
                                        time. We will post notice of changes to the fees and charges policy on the site
                                        and such changes will become effective seven days after they are posted on the
                                        site. Your continued use the services following the posting of changes will mean
                                        that you accept and agree to such changes.
                                    </h4>
                                </div>
                            </div>

                            <div id="seller_tab_eight" ref={assignRef('seller_tab_eight')}
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
                                            Order Cancellations, Returns and Refunds
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        As a seller, you acknowledge and agree that buyers have the right to cancel
                                        orders, return items and receive refunds. You also agree and accept that you
                                        will process order cancellations, returns and refunds under the applicable
                                        Nosres <Link href='#' className="text-primary">Order Cancellations Policy,
                                        Returns Policy</Link>, and <Link href='#' className="text-primary">Refunds
                                        Policy</Link> published
                                        on the site at the time of the applicable order. (For more, please read our
                                        Order Cancellations Policy, Returns Policy, and Refunds Policy.)
                                    </h4>
                                </div>
                            </div>

                            <div id="seller_tab_nine" ref={assignRef('seller_tab_nine')}
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
                                            Shipping and Delivery
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Nosres may offer you certain shipping services to sellers, but sellers remain
                                        responsible for the shipping cost, the shipping quality, and delivery. We may
                                        also provide pick-up and delivery services to the sellers as a contract on
                                        behalf of the sellers but Nosres does not take ownership of any product.
                                    </h4>
                                </div>
                            </div>


                            <div id="seller_tab_ten" ref={assignRef('seller_tab_ten')}
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
                                            Payments and Deposits
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Each order you sell and successfully complete, Nosres accredits your account
                                        with a commission of the purchase amount. This commission is transferred to your
                                        accounts after the order is marked as complete, which means that the buyer has
                                        received the order and are satisfied with it.
                                        <br/>
                                        <br/>

                                        By selling on Nosres, you agree and authorize us to use third party payment
                                        providers to receive payments (including the price of the item and shipping fee)
                                        from the buyers in your behalf when purchasing an item. Afterwards we will send
                                        the commission to your payment account on Nosres or your own PayPal account
                                        after deducting the marketplace fee. From there, your payment become available
                                        for deposit. Simply provide us your banking details and accounting information
                                        and we will deposit the payment electronically into your given bank account in a
                                        fortnight and we will notify you that the deposit has been made.
                                    </h4>
                                </div>
                            </div>

                            <div id="seller_tab_eleven" ref={assignRef('seller_tab_eleven')}
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
                                            Governing Law
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        By Nosres services, you agree that the laws of the State of Delaware without
                                        reference to principles of conflict of laws, will govern these Terms of Use and
                                        any dispute of any sort that has arisen or might arise between you and Nosres.
                                        You shall comply with all applicable domestic laws and regulations regarding
                                        your use of the services, and your listing through the site or applications.
                                    </h4>
                                </div>
                            </div>

                            <div id="seller_tab_twelve" ref={assignRef('seller_tab_twelve')}
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
                                            Indemnification
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        You agree you will defend, indemnify and hold Nosres, and its affiliates and
                                        their respective employees, directors, agents, representatives, licensors and
                                        partners, harmless from and against any claims, actions, costs, losses, damages,
                                        judgments, penalties, interest and expenses (including reasonable attorneys{`'`}
                                        fees) resulting from any claim that arises out of or in connection with: (i) any
                                        alleged breach of your representations, warranties, or obligations set forth in
                                        this Seller Agreement; or (ii) any actual or alleged infringement of any
                                        intellectual property rights by any products you sell or content you provide; or
                                        (iii) any transaction you submit through the Site.
                                    </h4>
                                </div>
                            </div>

                            <div id="seller_tab_thirteen" ref={assignRef('seller_tab_thirteen')}
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
                                            Disclaimer of warranties and Limitation of liability
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        THE SITE AND ALL INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE)
                                        AND OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE
                                        SITE ARE PROVIDED BY NOSRES ON AN {`"`}AS IS{`"`} AND {`"`}AS
                                        AVAILABLE{`"`} BASIS. UNLESS
                                        OTHERWISE SPECIFIED IN WRITING, NOSRES MAKES NO REPRESENTATIONS OR WARRANTIES OF
                                        ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF NOSRES SERVICES, OR THE
                                        INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) OR OTHER SERVICES
                                        INCLUDING WITHOUT LIMITATION THAT: (I) THE RESULTS THAT MAY BE OBTAINED FROM THE
                                        USE OF THE WEBSITE OR SERVICES OR ANY CONTENT WILL BE COMPLETE, ACCURATE,
                                        AVAILABLE, TIMELY, UNINTERRUPTED, SECURE OR ERROR-FREE, (II) ANY DEFECTS IN THE
                                        SERVICES WILL BE CORRECTED, (III) YOUR ACCESS TO OR USE OF THE SERVICES OR ANY
                                        CONTENT IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
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
                                        CONSEQUENTIAL DAMAGES, ARISING OUT OF OR IN CONNECTION WITH THIS SELLER
                                        AGREEMENT, OR THE INABILITY TO USE THE SERVICES, OR THOSE RESULTING FROM ANY
                                        PRODUCTS OR SERVICES PURCHASED OR OBTAINED OR TRANSACTIONS ENTERED INTO THROUGH
                                        THE SERVICES.
                                    </h4>
                                </div>
                            </div>

                            <div id="seller_tab_fourteen" ref={assignRef('seller_tab_fourteen')}
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
                                            Dispute with Buyers or Other Users
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Nosres provides a platform for sellers and buyers to negotiate and complete
                                        transactions. Nosres is not the agent of the seller with the exception of the
                                        limited purpose of processing payments, and Nosres is not the agent of the buyer
                                        for any purpose. Therefore, Nosres has no obligation to resolve any disputes
                                        between buyers and sellers or other users of Nosres services. Nosres encourage
                                        sellers and Buyers to cooperate with each other to amicably resolve such
                                        disputes.
                                        <br/>
                                        <br/>

                                        If a dispute arises between a seller and a buyer or other users of Nosres
                                        services; we, in our sole discretion, may make an attempt to help resolve such
                                        disputes in accordance with our policies.
                                    </h4>
                                </div>
                            </div>

                            <div id="seller_tab_fifteen" ref={assignRef('seller_tab_fifteen')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                15.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            General Release
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        If a dispute arises between you and a buyer or other users, you release Nosres,
                                        and its affiliates and officers, directors, employees, agents, representatives,
                                        licensors, or partners from any claims, demands and damages arising out of such
                                        disputes.
                                    </h4>
                                </div>
                            </div>

                            <div id="seller_tab_sixteen" ref={assignRef('seller_tab_sixteen')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                16.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Seller Protection
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Nosres Seller Protection is set up to protect sellers against fraud. There is no
                                        application process for Nosres Seller Protection but to be eligible for it,
                                        sellers need to make certain that the follow the following rules:
                                        <br/>
                                        <br/>

                                        <ul className="obligations_list space-y-4 ml-6">
                                            <li>
                                                <h4>
                                                    Do not violate any of Nosres policies.
                                                </h4>
                                            </li>
                                            <li>
                                                <h4>
                                                    Do not mislead the buyers about the listing description of the item,
                                                    which means that the listing description should be as accurate as
                                                    possible.
                                                </h4>
                                            </li>
                                            <li>
                                                <h4>
                                                    Do ship the item on time and to the right address, and mark the
                                                    order as
                                                    shipped after you send it out.
                                                </h4>
                                            </li>
                                            <li>
                                                <h4>
                                                    Do not ship empty boxes or put other things like piece of brick or
                                                    wood
                                                    in them.
                                                </h4>
                                            </li>
                                            <li>
                                                <h4>
                                                    Do provide an adequate proof of shipping and delivery.
                                                </h4>
                                            </li>
                                        </ul>
                                    </h4>
                                </div>
                            </div>

                            <div id="seller_tab_seventeen" ref={assignRef('seller_tab_seventeen')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                17.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Termination
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Nosres reserves the right, in its sole discretion, to suspend or terminate this
                                        Seller Agreement, your account or your access to the services at any time, for
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

                            <div id="seller_tab_eighteen" ref={assignRef('seller_tab_eighteen')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                18.
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