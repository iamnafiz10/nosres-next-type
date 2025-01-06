"use client";
import React, {useEffect, useRef, useState} from 'react';
import {
    HiOutlineCircleStack,
} from "react-icons/hi2";
import Link from "next/link";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {Modal} from "flowbite-react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
    // For Page Loading
    const [loading, setLoading] = useState(true); // Set loading state
    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const [showPassword, setShowPassword] = useState(false);

    // Two data download popup
    const [openDataDownloadModal, setOpenDataDownloadModal] = useState<boolean>(false);

    // Search Clear popup
    const [openSearchClearModal, setOpenSearchClearModal] = useState<boolean>(false);

    // Account Deactivate popups
    const [OpenAccountDeactivateModal, setOpenAccountDeactivateModal] = useState<boolean>(false);

    const [isOptionsVisibleAccDtv, setIsOptionsVisibleAccDtv] = useState<boolean>(false);
    const [selectedOptionAccDtv, setSelectedOptionAccDtv] = useState<string>('');
    const selectBoxRefAccDtv = useRef<HTMLDivElement>(null);

    const handleOptionClickAccDtv = (option: string) => {
        setSelectedOptionAccDtv(option);
        toggleOptionsVisibilityAccDtv();
    };

    const toggleOptionsVisibilityAccDtv = () => {
        setIsOptionsVisibleAccDtv(!isOptionsVisibleAccDtv);
    };
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (selectBoxRefAccDtv.current && !selectBoxRefAccDtv.current.contains(event.target as Node)) {
                setIsOptionsVisibleAccDtv(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const [otherReason, setOtherReason] = useState<string>('');
    const handleReasonChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOtherReason(event.target.value);
    };

    // Deactivate confirm modal
    const [OpenDeactivateConfirmModal, setOpenDeactivateConfirmModal] = useState<boolean>(false);
    const handleCloseAllPopups = () => {
        setShowPassword(false);
        setOpenDeactivateConfirmModal(false);
        setOpenAccountDeactivateModal(false);
    };

    const notify = () => {
        toast.warn('Your Nosres Account has been deactivated successfully.', {
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

    const handleDeactivateButtonClick = () => {
        notify();
        handleCloseAllPopups();
    };


    // Account Delete popup
    const [OpenAccountDeleteModal, setOpenAccountDeleteModal] = useState<boolean>(false);

    const [isOptionsVisibleAccDlt, setIsOptionsVisibleAccDlt] = useState<boolean>(false);
    const [selectedOptionAccDlt, setSelectedOptionAccDlt] = useState<string>('');
    const selectBoxRefAccDlt = useRef<HTMLDivElement>(null);

    const handleOptionClickAccDlt = (option: string) => {
        setSelectedOptionAccDlt(option);
        toggleOptionsVisibilityAccDlt();
    };

    const toggleOptionsVisibilityAccDlt = () => {
        setIsOptionsVisibleAccDlt(!isOptionsVisibleAccDlt);
    };
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (selectBoxRefAccDlt.current && !selectBoxRefAccDlt.current.contains(event.target as Node)) {
                setIsOptionsVisibleAccDlt(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const [otherReasonDlt, setOtherReasonDlt] = useState<string>('');
    const handleReasonChangeDlt = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOtherReasonDlt(event.target.value);
    };

    // Deactivate confirm modal
    const [OpenDeleteConfirmModal, setOpenDeleteConfirmModal] = useState<boolean>(false);
    const handleCloseAllPopupsDelete = () => {
        setShowPassword(false);
        setOpenDeleteConfirmModal(false);
        setOpenAccountDeleteModal(false);
    };

    const notifyDelete = () => {
        toast.error('Your Nosres Account has been deleted successfully.', {
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

    const handleDeleteButtonClick = () => {
        notifyDelete();
        handleCloseAllPopupsDelete();
    };

    return (
        <>
            <section id="dashboard-section" className="bg-[#F9FAFB]">
                {/* Dashboard Body */}
                <div className="pt-14 p-4 sm:ml-64 md:ml-80 bg-gray-50">
                    <div className="pt-8 pb-2 flex items-center gap-1">
                        <HiOutlineCircleStack
                            size={25}
                            className="text-gray-500 w-7"/>
                        <h6>Data & Privacy</h6>
                    </div>
                    <hr/>

                    {/* Data */}
                    <div className="grid grid-cols-1 mb-4 info-wrapper">
                        <div className="mt-6 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                            <div className="head mb-2 flex items-start gap-2">
                                <h6 className="mt-3">Data</h6>
                                <h4 className="text-[12px] text-white bg-primary py-1 px-3 rounded">
                                    BETA
                                </h4>
                            </div>
                            <hr/>
                            <div className="mt-4 box">
                                <p>
                                    Turn important email notifications from Nosres on or off.
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
                                        <h6 className="text-[14px]">
                                            Nosres Data Download
                                        </h6>
                                        <p>
                                            Download a copy of your Nosres data.
                                        </p>
                                    </div>
                                    <div className="right">
                                        <Link onClick={() => setOpenDataDownloadModal(true)} href='#'
                                              className="text-primary text-[14px]">
                                            Request a Copy of Your Data
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {loading ? (
                                <>
                                    <Skeleton height={60} count={1}/>
                                    <Skeleton height={10} count={1}/>
                                </>
                            ) : (
                                <div className="box mt-4 rounded flex items-start justify-between border p-4 bg-white">
                                    <div className="left">
                                        <h6 className="text-[14px]">
                                            Support Requests
                                        </h6>
                                        <p>
                                            View information you previously requested from the Nosres<br/> Support
                                            Team.
                                        </p>
                                    </div>
                                    <div className="right">
                                        <Link href='#'
                                              className="text-primary text-[14px]">
                                            View information
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {/* Data Download Pop-Up Start */}
                            <Modal size="lg" dismissible show={openDataDownloadModal}
                                   onClose={() => setOpenDataDownloadModal(false)}>
                                <Modal.Header>
                                    <h4 className="text-[16px]">
                                        Get a Copy of Your Nosres Data
                                    </h4>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="modal_body box">
                                        <p className="pb-4">
                                            You can request a copy of your Nosres data at any time for any
                                            reason, and we will promptly prepare it for you. Please note that
                                            this process may take up to five days. Once your copy is ready,
                                            we will send you an email containing an encrypted file for you to
                                            download.<br/><br/>
                                            To ensure security, please provide your email and password to
                                            verify that this data request is authorized by you.
                                        </p>
                                        <h4 className="text-[14px]">
                                            Enter Email
                                        </h4>
                                        <input
                                            id="password"
                                            className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                            type='text'
                                            placeholder="johndoe@mail.com"
                                        />
                                        <h4 className="mt-4 text-[14px]">
                                            Enter Password
                                        </h4>
                                        <div className="relative">
                                            <input
                                                id="password"
                                                className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder={showPassword ? '12345' : '********'}
                                            />
                                            <div
                                                className="absolute inset-y-0 right-0 top-1 text-primary flex items-center pr-3">
                                                <div
                                                    className="text-[12px] cursor-pointer"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? 'Hide' : 'Show'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <div className="flex w-full items-center justify-between">
                                        <button onClick={() => setOpenDataDownloadModal(false)}
                                                className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                        </button>
                                        <button onClick={() => setOpenDataDownloadModal(false)}
                                                className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                            Request Download
                                        </button>
                                    </div>
                                </Modal.Footer>
                            </Modal>
                            {/* Data Download Pop-Up End */}

                            {loading ? (
                                <>
                                    <Skeleton height={60} count={1}/>
                                    <Skeleton height={10} count={1}/>
                                </>
                            ) : (
                                <div className="box mt-4 rounded border p-4 bg-white">
                                    <div className="flex items-center justify-between">
                                        <h6 className="text-[14px]">
                                            Data Personalization
                                        </h6>
                                        <div className="tow">
                                            <label className="inline-flex items-center me-5 cursor-pointer">
                                                <span className="me-3 text-[14px] text-[#828D9E]">OFF</span>
                                                <input type="checkbox" value="" className="sr-only peer"/>
                                                <div
                                                    className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-teal-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                                                <span
                                                    className="ms-3 text-[14px] text-[#828D9E]">ON</span>
                                            </label>
                                        </div>
                                    </div>
                                    <p className="mt-1">
                                        Allow Nosres to use your demographic information to personalize the content of
                                        ads.
                                    </p>
                                </div>
                            )}


                            {loading ? (
                                <>
                                    <Skeleton height={60} count={1}/>
                                    <Skeleton height={10} count={1}/>
                                </>
                            ) : (
                                <div className="box mt-4 rounded flex items-start justify-between border p-4 bg-white">
                                    <div className="left">
                                        <h6 className="text-[14px]">
                                            Search History
                                        </h6>
                                        <p>
                                            Clear the history of your searches on Nosres.
                                        </p>
                                    </div>
                                    <div className="right">
                                        <Link onClick={() => setOpenSearchClearModal(true)} href='#'
                                              className="text-primary text-[14px]">
                                            Clear Searches
                                        </Link>
                                    </div>
                                </div>
                            )}
                            {/* Search clear Pop-Up Start */}
                            <Modal size="lg" dismissible show={openSearchClearModal}
                                   onClose={() => setOpenSearchClearModal(false)}>
                                <Modal.Header>
                                    <h4 className="text-[16px]">
                                        Clear Searches?
                                    </h4>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="modal_body box">
                                        <p className="pt-3">
                                            All previous searches perfomed on Nosres will be cleared from all
                                            Nosres apps on all devices.
                                        </p>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <div className="flex w-full items-center justify-between">
                                        <button onClick={() => setOpenSearchClearModal(false)}
                                                className="px-8 text-[14px] py-2 bg-primary text-white rounded">
                                            Cancel
                                        </button>
                                        <button onClick={() => setOpenSearchClearModal(false)}
                                                className="px-8 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                            Clear Searches
                                        </button>
                                    </div>
                                </Modal.Footer>
                            </Modal>
                            {/* Search clear Pop-Up End */}
                        </div>
                    </div>


                    {/* Privacy */}
                    <div className="grid grid-cols-1 mb-4 info-wrapper">
                        <div className="mt-6 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                            <div className="head mb-2">
                                <h6>Privacy</h6>
                            </div>
                            <hr/>
                            <div className="mt-4 box">
                                <p>
                                    Decide whether you want to deactivate or delete your Nosres Account.
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
                                        <h6 className="text-[14px]">
                                            Temporarily Deactivate Account
                                        </h6>
                                        <p>
                                            Request to temporarily deactivate your account.
                                        </p>
                                    </div>
                                    <div className="right">
                                        <Link onClick={() => setOpenAccountDeactivateModal(true)} href='#'
                                              className="text-primary text-[14px]">
                                            Deactivate
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {/* Account deactivate Pop-Up Start */}
                            <Modal size="lg"
                                   dismissible={!OpenDeactivateConfirmModal}
                                   show={OpenAccountDeactivateModal}
                                   onClose={() => setOpenAccountDeactivateModal(false)}
                                   style={{
                                       backgroundColor: 'rgb(17 24 39 / 20%)',
                                       padding: '0px',
                                   }}
                                   className="modal_cntrl"
                            >
                                <Modal.Header>
                                    <h4 className="text-[16px]">Temporarily Deactivate Account</h4>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="modal_body box">
                                        <p>
                                            You can temporarily deactivate your account at any time or for any
                                            reason. Once deactivated, you won’t be able to access it, and
                                            Nosres will not access or process your data. Remember you can
                                            reactivate your account at any time.<br/><br/>
                                            To help us improve our services, please tell us the reason why you
                                            want to deactivate your account.
                                        </p>
                                        <h4 className="text-[14px] mt-3">Select Reason</h4>
                                        <div className="select-box mt-2" ref={selectBoxRefAccDtv}>
                                            <div className="select-option flex"
                                                 onClick={toggleOptionsVisibilityAccDtv}>
                                                <input type="text" placeholder="Select"
                                                       readOnly
                                                       value={selectedOptionAccDtv}
                                                       className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                            </div>
                                            {isOptionsVisibleAccDtv && (
                                                <div className="info-content gender_content">
                                                    <ul className="options">
                                                        <li onClick={() => handleOptionClickAccDtv("I’d prefer not to be searchable.")}>
                                                            I’d prefer not to be searchable.
                                                        </li>
                                                        <li onClick={() => handleOptionClickAccDtv("I want to safeguard my personal information.")}>I
                                                            want to safeguard my personal information.
                                                        </li>
                                                        <li onClick={() => handleOptionClickAccDtv("I want take a break from the digital world and focus on offline activities.")}>I
                                                            want take a break from the digital world and focus on
                                                            offline activities.
                                                        </li>
                                                        <li onClick={() => handleOptionClickAccDtv("I’m currently resolving technical issues with my account.")}>I’m
                                                            currently resolving technical issues with my account.
                                                        </li>
                                                        <li onClick={() => handleOptionClickAccDtv("I want to limit my exposure on Nosres for a while.")}>I
                                                            want to limit my exposure on Nosres for a while.
                                                        </li>
                                                        <li onClick={() => handleOptionClickAccDtv("I need to focus on specific tasks and projects without being distracted by online interactions.")}>I
                                                            need to focus on specific tasks and projects without being
                                                            distracted by online interactions.
                                                        </li>
                                                        <li onClick={() => handleOptionClickAccDtv("I prefer not to say.")}>I
                                                            prefer not to say.
                                                        </li>
                                                        <li onClick={() => handleOptionClickAccDtv("Other (please specify)")}>Other
                                                            (please specify)
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                        {selectedOptionAccDtv === "Other (please specify)" && (
                                            <div className="others-input py-2">
                                                <textarea cols={30} rows={3}
                                                          className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                          value={otherReason}
                                                          onChange={handleReasonChange}
                                                          placeholder="Please inform us of your reason for permanently deleting your account, as your feedback will help us enhance our services."
                                                >
                                                </textarea>
                                            </div>
                                        )}
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <div className="flex w-full items-center justify-between">
                                        <button onClick={() => setOpenAccountDeactivateModal(false)}
                                                className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                        </button>
                                        <button onClick={() => setOpenDeactivateConfirmModal(true)}
                                                className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                            Continue
                                        </button>
                                    </div>
                                </Modal.Footer>
                            </Modal>
                            {/* Account deactivate Pop-Up End */}

                            {/* Deactivate confirm modal */}
                            <Modal size="lg"
                                   show={OpenDeactivateConfirmModal}
                                   onClose={() => setOpenDeactivateConfirmModal(false)}
                                   style={{
                                       backgroundColor: 'rgb(17 24 39 / 20%)',
                                       padding: '0px',
                                   }}
                                   className="modal_cntrl"
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
                                        <button onClick={() => setOpenDeactivateConfirmModal(false)}
                                                className="px-8 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                            Back
                                        </button>
                                        <button onClick={handleDeactivateButtonClick}
                                                className="px-8 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                            Deactivate
                                        </button>
                                    </div>
                                </Modal.Footer>
                            </Modal>

                            {loading ? (
                                <>
                                    <Skeleton height={60} count={1}/>
                                    <Skeleton height={10} count={1}/>
                                </>
                            ) : (
                                <div className="box mt-4 rounded flex items-start justify-between border p-4 bg-white">
                                    <div className="left">
                                        <h6 className="text-[14px]">
                                            Permanently Delete Account
                                        </h6>
                                        <p>
                                            Request to permanently delete your account.
                                        </p>
                                    </div>
                                    <div className="right">
                                        <Link onClick={() => setOpenAccountDeleteModal(true)} href='#'
                                              className="text-primary text-[14px]">
                                            Delete
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {/* Account Delete Pop-Up Start */}
                            <Modal size="lg"
                                   dismissible={!OpenDeleteConfirmModal}
                                   show={OpenAccountDeleteModal}
                                   onClose={() => setOpenAccountDeleteModal(false)}
                                   style={{
                                       backgroundColor: 'rgb(17 24 39 / 20%)',
                                       padding: '0px',
                                   }}
                                   className="modal_cntrl"
                            >
                                <Modal.Header>
                                    <h4 className="text-[16px]">Permanently Delete Account</h4>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="modal_body box">
                                        <p>
                                            You are in the process of permanently deleting your account. The
                                            deletion process may take up to three days. Once deleted, this
                                            account will no longer be available — you will no longer be able to
                                            sign in or access your content — and any documents associated
                                            with it will be deleted. This action cannot be reversed.<br/><br/>
                                            To help us improve our services, please tell us the reason why you
                                            want to delete your account.
                                        </p>
                                        <h4 className="text-[14px] mt-3">Select Reason</h4>
                                        <div className="select-box mt-2" ref={selectBoxRefAccDlt}>
                                            <div className="select-option flex"
                                                 onClick={toggleOptionsVisibilityAccDlt}>
                                                <input type="text" placeholder="Select"
                                                       readOnly
                                                       value={selectedOptionAccDlt}
                                                       className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                            </div>
                                            {isOptionsVisibleAccDlt && (
                                                <div className="info-content gender_content">
                                                    <ul className="options">
                                                        <li onClick={() => handleOptionClickAccDlt("I have another Nosres Account")}>
                                                            I have another Nosres Account.
                                                        </li>
                                                        <li onClick={() => handleOptionClickAccDlt("I have concerns about my privacy and data.")}>
                                                            I have concerns about my privacy and data.
                                                        </li>
                                                        <li onClick={() => handleOptionClickAccDlt("I have encountered unsatisfactory experiences and/or issues with the website’s functionality and/or content.")}>I
                                                            I have encountered unsatisfactory experiences and/or issues
                                                            with the website’s functionality and/or content.
                                                        </li>
                                                        <li onClick={() => handleOptionClickAccDlt("I no longer find the website valuable or relevant to my needs.")}>I’m
                                                            I no longer find the website valuable or relevant to my
                                                            needs.
                                                        </li>
                                                        <li onClick={() => handleOptionClickAccDlt("I find that the services do not align with my preferences and/or values.")}>I
                                                            I find that the services do not align with my preferences
                                                            and/or values.
                                                        </li>
                                                        <li onClick={() => handleOptionClickAccDlt("I have concerns about privacy and aim to reduce my digital footprint while protecting my personal information.")}>I
                                                            I have concerns about privacy and aim to reduce my digital
                                                            footprint while protecting my personal information.
                                                        </li>
                                                        <li onClick={() => handleOptionClickAccDlt("I prefer not to say.")}>I
                                                            I prefer not to say.
                                                        </li>
                                                        <li onClick={() => handleOptionClickAccDlt("Other (please specify)")}>Other
                                                            (please specify)
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                        {selectedOptionAccDlt === "Other (please specify)" && (
                                            <div className="others-input py-2">
                                                <textarea cols={30} rows={3}
                                                          className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                          value={otherReasonDlt}
                                                          onChange={handleReasonChangeDlt}
                                                          placeholder="Please inform us of your reason for permanently deleting your account, as your feedback will help us enhance our services."
                                                >
                                                </textarea>
                                            </div>
                                        )}
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <div className="flex w-full items-center justify-between">
                                        <button onClick={() => setOpenAccountDeleteModal(false)}
                                                className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                        </button>
                                        <button onClick={() => setOpenDeleteConfirmModal(true)}
                                                className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                            Continue
                                        </button>
                                    </div>
                                </Modal.Footer>
                            </Modal>
                            {/* Account Delete Pop-Up End */}

                            {/* Delete confirm modal */}
                            <Modal size="lg"
                                   show={OpenDeleteConfirmModal}
                                   onClose={() => setOpenDeleteConfirmModal(false)}
                                   style={{
                                       backgroundColor: 'rgb(17 24 39 / 20%)',
                                       padding: '0px',
                                   }}
                                   className="modal_cntrl"
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
                                        <button onClick={() => setOpenDeleteConfirmModal(false)}
                                                className="px-8 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                            Back
                                        </button>
                                        <button onClick={handleDeleteButtonClick}
                                                className="px-8 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                            Delete
                                        </button>
                                    </div>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;