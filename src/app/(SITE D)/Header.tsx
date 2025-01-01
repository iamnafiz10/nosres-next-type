'use client';
import React, {useState} from 'react';
import LogoImg from '@/../public/assets/images/logo.svg';
import {AiOutlineClose} from "react-icons/ai";
import {HiOutlineBars3} from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import {Modal} from 'flowbite-react';

const Page = () => {
    // 👇️ Toggle class on click Show And Hide Menu Bar (Button)
    const [isMenuVisible, setMenuVisible] = useState(false);
    const handleClick = () => {
        const nav = document.getElementById('mobile_menu');
        if (nav) {
            if (isMenuVisible) {
                nav.classList.remove('show_menu');
            } else {
                nav.classList.add('show_menu');
            }
            setMenuVisible(!isMenuVisible);
        }
    };

    // Subscribe Modal
    const [openSubscribeModal, setOpenSubscribeModal] = useState(false);
    return (
        <>
            <section id="header-section" className="relative">
                <header className="py-4 flex items-center h-[50px] lg:py-2 shadow-sm bg-white w-full lg:relative z-50"
                        style={{
                            position: 'fixed',
                        }}
                >
                    <div className="container flex items-center justify-between">
                        <div className="logo">
                            <Link href='/' className="flex items-center gap-2">
                                <Image src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                <span className="font-[500] text-[18px]">Blog</span>
                            </Link>
                        </div>

                        <div className="nav hidden lg:flex items-center text-[14px] gap-6">
                            <div className="one group">
                                <Link href='#'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Media Assets
                                </Link>
                            </div>

                            <div className="five group">
                                <button onClick={() => setOpenSubscribeModal(true)} type='button'
                                        className="text-primary hover:bg-primary hover:text-white rounded px-4 py-1 border text-[14px]">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Tab / Mobile Icons */}
                        <div className="lg:hidden tab-mobile flex items-center gap-2">
                            <div onClick={handleClick}
                                 className="text-center text-gray-700 hover:text-primary transition cursor-pointer">
                                <div className="text-2xl">
                                    {isMenuVisible ? <AiOutlineClose/> : <HiOutlineBars3/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Mobile Menu */}
                <div id="mobile_menu" className="block lg:hidden bg-white z-50 overflow-hidden w-full h-[100%]">
                    <div className="navbar-wrapper px-4 pt-20 space-y-5">
                        <details className="group pb-0 p-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                <Link href='#'>Media Assets</Link>
                            </summary>
                        </details>

                        <div className="flex p-4 pt-0 profile">
                            <button onClick={() => setOpenSubscribeModal(true)} type='button'
                                    className="text-primary rounded hover:bg-primary hover:text-white px-4 py-1 border text-[14px]">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>


                {/* Modal Content */}
                <div id="modal_content_wrap">
                    <Modal dismissible show={openSubscribeModal} onClose={() => setOpenSubscribeModal(false)}>
                        {/*<Modal.Header>*/}

                        {/*</Modal.Header>*/}
                        <Modal.Body>
                            <div className="flex items-center gap-4">
                                <div className="box">
                                    <h3 className="text-[18px] font-semibold">Get the latest news, updates and articles
                                        from
                                        Nosres.</h3>
                                    <h4 className="font-normal text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Please subscribe to receive the latest news, updates,and articles from
                                        Nosres.
                                        By
                                        staying subscribed, you’ll stay informed about our latest content and
                                        developments.
                                    </h4>
                                </div>
                            </div>

                            <div className="modal_body box mt-4">
                                <div className="flex items-center gap-4">
                                    <input
                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                        type="email"
                                        placeholder="johndoe@mail.com"
                                    />

                                    <button type='button'
                                            className="border text-primary hover:text-white hover:bg-primary px-6 p-2 text-[14px] rounded">
                                        Subscribe
                                    </button>
                                </div>

                                <div className="box mt-4">
                                    <h4 className="text-[12px] text-[#828D9E] leading-[20px]">
                                        By submiting this form, you agree to receive marketing-related electronic
                                        communication from
                                        Nosres, including news, events, updates and promotions. Your privacy is very
                                        important to us and we
                                        do not share any information with third-party sites or afilliate companies. You
                                        may opt out at any time
                                        by clicking the unsubscribe link included in our emails. For further
                                        information, please consult our<br/>
                                        <Link href='#' className="text-[12px] text-primary">
                                            Terms of Use <span className="text-[#828D9E] cursor-auto">and</span> Privacy
                                            Policy
                                        </Link>
                                        .
                                    </h4>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </section>
        </>
    );
};

export default Page;