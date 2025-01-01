"use client";
import React, {useEffect, useState} from 'react';
import {Label, Modal, Radio} from 'flowbite-react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    HiOutlineShieldCheck,
    HiOutlineCheckCircle,
    HiComputerDesktop,
    HiDeviceTablet
} from 'react-icons/hi2';
import {LuDot} from "react-icons/lu";
import {MdOutlineLaptopMac} from "react-icons/md";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {PiEnvelopeLight} from "react-icons/pi";
import {HiOutlineDevicePhoneMobile} from "react-icons/hi2";
import Link from "next/link";

const Page = () => {
    // Password change popup
    const [openPasswordModal, setOpenPasswordModal] = useState<boolean>(false);
    // For Page Loading
    const [loading, setLoading] = useState(true); // Set loading state
    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
    }, [loading]);

    // ON / OFF Modal
    const ON_MODAL = "first";
    const OFF_MODAL = "second";

    const [isChecked, setIsChecked] = useState(false);
    const [modalType, setModalType] = useState(null);

    const handleToggleChange = () => {
        setIsChecked(prev => !prev); // Toggle the input state

        if (!isChecked) {
            // @ts-ignore
            setModalType(ON_MODAL); // Show the on modal when the input is checked
        } else {
            // @ts-ignore
            setModalType(OFF_MODAL); // Show the off modal when the input is unchecked
        }
    };

    const handleCloseModal = () => {
        setModalType(null); // Close the current modal
    };


    // SelectEmailPhone popup
    const [openSelectEmailPhone, setOpenSelectEmailPhone] = useState<boolean>(false);

    const [selectedOption, setSelectedOption] = useState('email');

    const handleEmailClick = () => {
        // @ts-ignore
        setSelectedOption('email');
    };

    const handlePhoneClick = () => {
        // @ts-ignore
        setSelectedOption('phone');
    };

    // Two factor phone popup
    const [openTwoFactorPhoneModal, setOpenTwoFactorPhoneModal] = useState<boolean>(false);

    const handleClosePopups = () => {
        // @ts-ignore
        setSelectedOption(null);
        setModalType(null);
        setOpenSelectEmailPhone(false);
        setOpenTwoFactorPhoneModal(false);
        setOpenPasswordModal(false);
    };

    const notify = () => {
        toast.success('Two-factor authentication has been successfully activated.', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const handleverifyButtonClick = () => {
        notify();
        handleClosePopups();
    };

    const notifyOff = () => {
        toast.warn('Two-factor authentication has been successfully deactivated.', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };
    const handleTurnOffButtonClick = () => {
        notifyOff();
        handleClosePopups();
    };
    return (
        <>
            <section id="dashboard-section" className="bg-[#F9FAFB]">
                {/* Dashboard Body */}
                <div className="pt-14 p-4 sm:ml-64 md:ml-80 bg-gray-50">
                    <div className="pt-8 pb-2 flex items-center gap-1">
                        <HiOutlineShieldCheck
                            size={25}
                            className="text-gray-500 w-7"/>
                        <h6>Security</h6>
                    </div>
                    <hr/>
                    {/* Security */}
                    <div className="grid grid-cols-1 mb-4 info-wrapper">
                        <div className="mt-8 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                            {loading ? (
                                <>
                                    <Skeleton height={30} count={1}/>
                                    <Skeleton height={80} count={1}/>
                                </>
                            ) : (
                                <>
                                    <div className="head mb-2">
                                        <h6>Password</h6>
                                    </div>
                                    <hr/>
                                    <div className="mt-4 box">
                                        <p>
                                            Manage your password.
                                        </p>
                                    </div>

                                    <div
                                        className="box mt-6 rounded flex items-start justify-between bg-white">
                                        <div className="left">
                                            <h6 className="text-[14px]">Last Changed</h6>
                                            <p className="mt-0">January 22, 2024</p>
                                        </div>
                                        <div onClick={() => setOpenPasswordModal(true)} className="right">
                                            <button className="text-primary text-[14px]">Change Password</button>
                                        </div>
                                    </div>
                                    {/* Password change Pop-Up Start */}
                                    <Modal size="lg" dismissible show={openPasswordModal}
                                           onClose={() => setOpenPasswordModal(false)}>
                                        <Modal.Header>
                                            <h4 className="text-[16px]">
                                                Change Password
                                            </h4>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="modal_body box">
                                                <p className="pb-4">
                                                    Your password must be at least eight characters long, including
                                                    both upper and lowercase letters, as well as numbers. Please
                                                    choose a strong password that you haven’t used on other websites
                                                    and is not easily guessable by others.
                                                </p>
                                                <h4 className="text-[14px]">
                                                    Current Password
                                                </h4>
                                                <input
                                                    className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                    type="text"
                                                    placeholder="******"
                                                />

                                                <h4 className="text-[14px] mt-6">
                                                    New Passord
                                                </h4>
                                                <input
                                                    className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                    type="text"
                                                    placeholder="******"
                                                />

                                                <h4 className="text-[14px] mt-6">
                                                    Confirm New Password
                                                </h4>
                                                <input
                                                    className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                    type="text"
                                                    placeholder="******"
                                                />
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <div className="flex w-full items-center justify-between">
                                                <button onClick={() => setOpenPasswordModal(false)}
                                                        className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                                </button>
                                                <button onClick={() => setOpenPasswordModal(false)}
                                                        className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                                </button>
                                            </div>
                                        </Modal.Footer>
                                    </Modal>
                                    {/* Password change Pop-Up End */}
                                </>
                            )}
                        </div>
                    </div>

                    {/* Two-Factor Authentication */}
                    <div className="grid grid-cols-1 mb-4 info-wrapper">
                        <div className="mt-6 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                            {loading ? (
                                <>
                                    <Skeleton height={30} count={1}/>
                                    <Skeleton height={80} count={1}/>
                                </>
                            ) : (
                                <>
                                    <div className="head mb-2">
                                        <h6>Two-Factor Authentication</h6>
                                    </div>
                                    <hr/>
                                    <div className="mt-4 box">
                                        <p>
                                            Manage two-factor authentication to keep your account secure.
                                        </p>
                                    </div>

                                    <div
                                        className="box mt-6 rounded flex items-start justify-between bg-white">
                                        <div className="left">
                                            <h6 className="text-[14px]">
                                                Manage Two-Factor Authentication.
                                            </h6>
                                        </div>
                                        <div className="right">
                                            <label className="inline-flex items-center me-5 cursor-pointer">
                                                <span className="me-3 text-[14px] text-[#828D9E]">OFF</span>
                                                <input
                                                    type="checkbox"
                                                    onChange={handleToggleChange}
                                                    checked={isChecked}
                                                    className="sr-only peer"/>
                                                <div
                                                    className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-teal-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                                                <span className="ms-3 text-[14px] text-[#828D9E]">ON</span>
                                            </label>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Modal Area Start */}
                    {/* Turn On Enter Password Pop-Up Start */}
                    {modalType === ON_MODAL && (
                        <Modal size="lg"
                               dismissible={!openSelectEmailPhone}
                               show={isChecked}
                               onClose={handleCloseModal}
                        >
                            <Modal.Header>
                                <h4 className="text-[16px]">
                                    Enter Password
                                </h4>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="modal_body box">
                                    <p className="pb-4">
                                        To ensure security, please enter your password to verify that this
                                        request is authorized by you.
                                    </p>
                                    <h4 className="text-[14px]">
                                        Enter Password
                                    </h4>
                                    <input
                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                        type="text"
                                        placeholder="******"
                                    />
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <div className="flex w-full items-center justify-between">
                                    <button onClick={handleCloseModal}
                                            className="px-8 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                    </button>
                                    <button onClick={() => setOpenSelectEmailPhone(true)}
                                            className="px-8 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                        Continue
                                    </button>
                                </div>
                            </Modal.Footer>
                        </Modal>
                    )}

                    {/* Select Password or Number Modal */}
                    <Modal size="lg"
                           show={openSelectEmailPhone}
                           onClose={() => setOpenSelectEmailPhone(false)}
                           style={{
                               backgroundColor: 'rgb(17 24 39 / 20%)',
                               padding: '0px',
                           }}
                           className="modal_cntrl"
                    >
                        <Modal.Header>
                            <h4 className="text-[16px]">
                                Select Email Address or Phone Number
                            </h4>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="modal_body box">
                                <p className="pb-4">
                                    Choose an email address or a phone number that is already
                                    associated with your Nosres Account. This is the phone number or
                                    email address you will receive your authentication code on.
                                </p>
                                <div className="flex items-center gap-2">
                                    <div
                                        className={`box border px-2 py-2 rounded flex items-start gap-2 ${selectedOption === 'email' ? 'border-primary' : 'border-gray-300'}`}
                                        onClick={handleEmailClick}
                                    >
                                        <PiEnvelopeLight size={20} className="text-gray-400"/>
                                        <div className="content ml-[2px]">
                                            <h4 className="text-[12px]">Email</h4>
                                            <h4 className="text-[12px] text-[#828D9E] mt-1">
                                                We will send you an email containing
                                                your authentication code.
                                            </h4>
                                        </div>
                                    </div>

                                    <div
                                        className={`box border px-2 py-2 rounded flex items-start gap-2 ${selectedOption === 'phone' ? 'border-primary' : 'border-gray-300'}`}
                                        onClick={handlePhoneClick}
                                    >
                                        <HiOutlineDevicePhoneMobile size={18} className="text-gray-400"/>
                                        <div className="content">
                                            <div className="flex items-start gap-2">
                                                <h4 className="text-[12px]">Phone</h4>
                                                <h4 className="-mt-2 text-[12px] text-primary">BETA</h4>
                                            </div>
                                            <h4 className="text-[12px] text-[#828D9E] mt-1">
                                                We will send you an SMS containing
                                                your authentication code.
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                {selectedOption === 'email' && (
                                    <div id="checkbox" className="email_content mt-4">
                                        <fieldset className="flex max-w-md flex-col -space-y-1 gap-4">
                                            <div className="flex items-center gap-2">
                                                <Radio id="emailone" name="emails" value="emailone" defaultChecked/>
                                                <Label htmlFor="emailone" className="text-[14px] font-normal">
                                                    johndoe@mailcom
                                                </Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Radio id="emailtwo" name="emails" value="emailtwo"/>
                                                <Label htmlFor="emailtwo" className="text-[14px] font-normal">
                                                    johndoe2@mailcom
                                                </Label>
                                            </div>
                                        </fieldset>
                                    </div>
                                )}

                                {selectedOption === 'phone' && (
                                    <div id="checkbox" className="phone_content mt-4">
                                        <fieldset className="flex max-w-md flex-col -space-y-1 gap-4">
                                            <div className="flex items-center gap-2">
                                                <Radio id="phoneone" name="phones" value="phoneone" defaultChecked/>
                                                <Label htmlFor="phoneone" className="text-[14px] font-normal">
                                                    84515805256
                                                </Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Radio id="phonetwo" name="phones" value="phonetwo"/>
                                                <Label htmlFor="phonetwo" className="text-[14px] font-normal">
                                                    45562568458
                                                </Label>
                                            </div>
                                        </fieldset>
                                    </div>
                                )}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="flex w-full items-center justify-between">
                                <button onClick={() => setOpenSelectEmailPhone(false)}
                                        className="px-8 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                    Back
                                </button>
                                <button onClick={() => setOpenTwoFactorPhoneModal(true)}
                                        className="px-8 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                    Continue
                                </button>
                            </div>
                        </Modal.Footer>
                    </Modal>

                    {/* Two factor Phone Pop-Up Start */}
                    <Modal size="lg" show={openTwoFactorPhoneModal}
                           onClose={() => setOpenTwoFactorPhoneModal(false)}
                           style={{
                               backgroundColor: 'rgb(17 24 39 / 20%)',
                               padding: '0px',
                           }}
                           className="modal_cntrl"
                    >
                        <Modal.Header>
                            <h4 className="text-[16px]">
                                Two-Factor Authentication
                            </h4>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="modal_body box">
                                <p className="pb-4">
                                    An SMS containing a unique 6-digit authentication code has been
                                    sent to +*******161. Please enter it to finish setting up two-factor
                                    authentication.
                                </p>
                                <h4 className="text-[14px]">
                                    Enter Authentication Code
                                </h4>
                                <div className="flex items-center gap-1 pb-2">
                                    <input
                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                        type="text"
                                        maxLength={1}
                                        placeholder=""/>
                                    <input
                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                        type="text"
                                        maxLength={1}
                                        placeholder=""/>
                                    <input
                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                        type="text"
                                        maxLength={1}
                                        placeholder=""/>
                                    <input
                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                        type="text"
                                        maxLength={1}
                                        placeholder=""/>
                                    <input
                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                        type="text"
                                        maxLength={1}
                                        placeholder=""/>
                                    <input
                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                        type="text"
                                        maxLength={1}
                                        placeholder=""/>
                                </div>
                                <Link href='#' className="text-[14px] text-primary">Resend authentication code</Link>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="flex w-full items-center justify-between">
                                <button onClick={() => setOpenTwoFactorPhoneModal(false)}
                                        className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                    Back
                                </button>
                                <button onClick={handleverifyButtonClick}
                                        className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                    Verify
                                </button>
                            </div>
                        </Modal.Footer>
                    </Modal>
                    {/* Two factor Phone Pop-Up End */}
                    {/* Turn On Enter Password Pop-Up End */}


                    {/* Turn Off Enter Password Pop-Up Start */}
                    {modalType === OFF_MODAL && (
                        <Modal size="lg"
                               show={!isChecked}
                               dismissible
                               onClose={handleCloseModal}
                        >
                            <Modal.Header>
                                <h4 className="text-[16px]">
                                    Enter Password
                                </h4>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="modal_body box">
                                    <p className="pb-4">
                                        To ensure security, please enter your password to verify that this
                                        request is authorized by you.
                                    </p>
                                    <h4 className="text-[14px]">
                                        Enter Password
                                    </h4>
                                    <input
                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                        type="text"
                                        placeholder="******"
                                    />
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <div className="flex w-full items-center justify-between">
                                    <button onClick={handleCloseModal}
                                            className="px-8 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                    </button>
                                    <button onClick={handleTurnOffButtonClick}
                                            className="px-8 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                        Turn Off
                                    </button>
                                </div>
                            </Modal.Footer>
                        </Modal>
                    )}
                    {/* Turn Off Enter Password Pop-Up End */}
                    {/* Modal Area End */}


                    {/* Connected Devices */}
                    <div className="grid grid-cols-1 mb-4 info-wrapper">
                        <div className="mt-6 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                            <div className="head mb-2">
                                <h6>Connected Devices</h6>
                            </div>
                            <hr/>
                            <div className="mt-4 box">
                                <p>
                                    You are signed in to your Nosres Account on these devices below.
                                </p>
                            </div>

                            {loading ? (
                                <>
                                    <Skeleton height={60} count={1}/>
                                    <Skeleton height={10} count={1}/>
                                </>
                            ) : (
                                <div className="box mt-4 rounded flex items-start justify-between border p-4 bg-white">
                                    <div className="left">
                                        <h6 className="text-[14px] flex items-center gap-2">
                                            <HiComputerDesktop size={25}/>
                                            PC, Windows, Chrome
                                        </h6>
                                        <div
                                            className="ml-8 flex items-center mt-1 text-[12px] text-[#828D9E]">
                                            <h4>
                                                Just now
                                            </h4>
                                            <h4 className="flex items-center gap-0">
                                                <LuDot size={20}/>
                                                United States
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="flex items-center gap-1 text-green-400 ">
                                            <HiOutlineCheckCircle size={15}/>
                                            <h4 className="text-[14px]">This device</h4>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {loading ? (
                                <>
                                    <Skeleton height={60} count={1}/>
                                    <Skeleton height={10} count={1}/>
                                </>
                            ) : (
                                <div
                                    className="box mt-4 rounded flex items-start justify-between border p-4 bg-white">
                                    <div className="left">
                                        <h6 className="text-[14px] flex items-center gap-2">
                                            <MdOutlineLaptopMac size={25}/>
                                            Mac, MacOS, Safari
                                        </h6>
                                        <div
                                            className="ml-8 flex items-center mt-1 text-[12px] text-[#828D9E]">
                                            <h4>
                                                11 days ago
                                            </h4>
                                            <h4 className="flex items-center gap-0">
                                                <LuDot size={20}/>
                                                United States
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <button type="button" className="text-[14px] text-primary">
                                            Sign Out
                                        </button>
                                    </div>
                                </div>
                            )}

                            {loading ? (
                                <>
                                    <Skeleton height={60} count={1}/>
                                    <Skeleton height={10} count={1}/>
                                </>
                            ) : (
                                <div
                                    className="box mt-4 rounded flex items-start justify-between border p-4 bg-white">
                                    <div className="left">
                                        <h6 className="text-[14px] flex items-center gap-2">
                                            <HiDeviceTablet size={25}/>
                                            Samsung, Android App
                                        </h6>
                                        <div
                                            className="ml-8 flex items-center mt-1 text-[12px] text-[#828D9E]">
                                            <h4>
                                                1 minute ago
                                            </h4>
                                            <h4 className="flex items-center gap-0">
                                                <LuDot size={20}/>
                                                United States
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <button type="button" className="text-[14px] text-primary">
                                            Sign Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;