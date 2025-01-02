'use client';
import React, {useEffect, useRef, useState, ChangeEvent} from 'react';
import {HiUserCircle} from "react-icons/hi";
import {GoQuestion} from "react-icons/go";
import {ImAttachment} from "react-icons/im";
import {
    HiOutlineFolder,
    HiOutlineBookmark, HiOutlinePlusCircle, HiOutlineMinusCircle, HiOutlineCloudArrowUp
} from "react-icons/hi2";
import {Checkbox, Label, Modal, Radio} from "flowbite-react";
import Link from "next/link";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {LuBellRing, LuContact, LuPalette} from "react-icons/lu";

const Page = () => {

    // Education Checkbox
    const [isEducationBoxVisible, setIsEducationBoxVisible] = useState(true);

    const handleEducationCheckboxClick = () => {
        setIsEducationBoxVisible(!isEducationBoxVisible);
    };

    // Experience Checkbox
    const [isExperienceBoxVisible, setIsExperienceBoxVisible] = useState(true);

    const handleExperienceCheckboxClick = () => {
        setIsExperienceBoxVisible(!isExperienceBoxVisible);
    };

    // Employer Checkbox
    const [isEmployed, setIsEmployed] = useState(false);

    const handleRadioChange = (event: { target: { value: string; }; }) => {
        setIsEmployed(event.target.value === "Yes");
    };

    // Name change popup
    const [openNameModal, setOpenNameModal] = useState(false);

    // Location change popup
    const [openLocationModal, setOpenLocationModal] = useState(false);
    const [selectedOptionLocation, setSelectedOptionLocation] = useState('');
    const [isOptionsVisibleLocation, setIsOptionsVisibleLocation] = useState<boolean>(false);

    const selectBoxRefLocation = useRef<HTMLDivElement | null>(null);

    const handleOptionClickLocation = (option: React.SetStateAction<string>) => {
        setSelectedOptionLocation(option);
        toggleOptionsVisibilityLocation();
    };

    const toggleOptionsVisibilityLocation = () => {
        setIsOptionsVisibleLocation(!isOptionsVisibleLocation);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (selectBoxRefLocation.current && !selectBoxRefLocation.current.contains(event.target as Node)) {
                setIsOptionsVisibleLocation(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    // Email change popup
    const [openEmailModal, setOpenEmailModal] = useState(false);

    // Phone change popup
    const [openPhoneModal, setOpenPhoneModal] = useState(false);

    // Education popup
    const [openEducationModal, setOpenEducationModal] = useState(false);
    const [selectedOptionEducation, setSelectedOptionEducation] = useState('');
    const [isOptionsVisibleEducation, setIsOptionsVisibleEducation] = useState<boolean>(false);

    const selectBoxRefEducation = useRef<HTMLDivElement | null>(null);

    const handleOptionClickEducation = (option: React.SetStateAction<string>) => {
        setSelectedOptionEducation(option);
        toggleOptionsVisibilityEducation();
    };

    const toggleOptionsVisibilityEducation = () => {
        setIsOptionsVisibleEducation(!isOptionsVisibleEducation);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (selectBoxRefEducation.current && !selectBoxRefEducation.current.contains(event.target as Node)) {
                setIsOptionsVisibleEducation(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    // ----------- Status Select
    const [selectedOptionStatus, setSelectedOptionStatus] = useState('');
    const [isOptionsVisibleStatus, setIsOptionsVisibleStatus] = useState<boolean>(false);
    const selectBoxRefStatus = useRef<HTMLDivElement | null>(null);

    const handleOptionClickStatus = (option: React.SetStateAction<string>) => {
        setSelectedOptionStatus(option);
        toggleOptionsVisibilityStatus();
    };

    const toggleOptionsVisibilityStatus = () => {
        setIsOptionsVisibleStatus(!isOptionsVisibleStatus);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (selectBoxRefStatus.current && !selectBoxRefStatus.current.contains(event.target as Node)) {
                setIsOptionsVisibleStatus(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    // Experience Popup
    const [openExperienceModal, setOpenExperienceModal] = useState(false);

    // Skill Popup
    const [openSkillModal, setOpenSkillModal] = useState(false);

    // Resume Popup
    const [openResumeModal, setOpenResumeModal] = useState(false);
    // File Upload Function
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setSelectedFile(file || null);
    };

    const handleRemoveClick = () => {
        setSelectedFile(null);
        // Reset the file input value to allow re-uploading the same file
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };


    // Document Popup
    const [openDocumentModal, setOpenDocumentModal] = useState(false);
    // File Upload Function
    const [selectedDocumentFile, setSelectedDocumentFile] = useState<File | null>(null);
    const fileInputDocumentRef = useRef<HTMLInputElement>(null);
    const handleFileDocumentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            setSelectedDocumentFile(file);
        }
    };

    const handleDocumentRemoveClick = () => {
        setSelectedDocumentFile(null);
        // Reset the file input value to allow re-uploading the same file
        if (fileInputDocumentRef.current) {
            fileInputDocumentRef.current.value = '';
        }
    };

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

    // Degree Remove popup
    const [openDegreeRemoveModal, setopenDegreeRemoveModal] = useState(false);
    // Experience Remove popup
    const [openExperienceRemoveModal, setopenExperienceRemoveModal] = useState(false);

    return (
        <>
            <section id="user-details-section" className="bg-[#F9FAFB] h-[100%]">
                <div className="container py-16">
                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div
                            className="col lg:col-span-5 flex-initial lg:sticky top-[80px] h-full lg:h-[60vh] w-full overflow-hidden lg:overflow-auto">
                            {/* Sidebar */}
                            <aside id="logo-sidebar"
                                   aria-label="Sidebar">
                                <div className="h-full px-8 py-4 overflow-y-auto bg-white rounded">
                                    <ul className="space-y-1 font-medium">
                                        <li>
                                            <div
                                                className="flex text-[14px] items-center p-2 rounded-lg hover:bg-gray-100 group">
                                                <HiUserCircle size={30}
                                                              className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3 font-semibold">John Doe</span>
                                            </div>
                                        </li>
                                        <hr/>

                                        <li>
                                            <Link href="/information"
                                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <LuContact size={22}
                                                           className="text-primary w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3 font-semibold">Information</span>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/no-save-job"
                                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <HiOutlineBookmark size={22}
                                                                   className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3">Saved Jobs</span>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/application"
                                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <HiOutlineFolder size={20}
                                                                 className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3">Applications</span>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/career"
                                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <LuPalette size={20}
                                                           className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3">Career Interests</span>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/job-alert-one"
                                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <LuBellRing size={20}
                                                            className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3">Job Alerts</span>
                                            </Link>
                                        </li>
                                        <hr/>
                                        <li>
                                            <Link href="#"
                                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <GoQuestion size={20}
                                                            className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3">Help</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>

                        <div className="col lg:col-span-7">
                            {/* Basic Information */}
                            <div className="grid grid-cols-1 mb-4 info-wrapper">
                                <div className="col w-full py-6 px-8 bg-white rounded">
                                    <div className="head mb-2">
                                        <h6>Basic Information</h6>
                                    </div>
                                    <hr/>

                                    {loading ? (
                                        <>
                                            <Skeleton height={60} count={1}/>
                                            <Skeleton height={10} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            {/* Full Name */}
                                            <div
                                                className="box mt-6 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">Name</h6>
                                                    <p className="mt-0">Jane Doe</p>
                                                </div>
                                                <div onClick={() => setOpenNameModal(true)} className="right">
                                                    <button className="text-primary text-[14px]">Edit</button>
                                                </div>
                                            </div>
                                            {/* Name change Pop-Up Start */}
                                            <Modal size="lg" dismissible show={openNameModal}
                                                   onClose={() => setOpenNameModal(false)}>
                                                <Modal.Header>
                                                    <h4 className="text-[16px]">Full Name</h4>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="modal_body box">
                                                        <h4 className="text-[14px]">First Name</h4>
                                                        <input
                                                            className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                            type="text"
                                                            placeholder="John"
                                                        />

                                                        <h4 className="text-[14px] mt-6">Middle Name (Optional)</h4>
                                                        <input
                                                            className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                            type="text"
                                                            placeholder="Enter your middle name"
                                                        />

                                                        <h4 className="text-[14px] mt-6">Family Name</h4>
                                                        <input
                                                            className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                            type="text"
                                                            placeholder="Doe"
                                                        />
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <div className="flex w-full items-center justify-between">
                                                        <button onClick={() => setOpenNameModal(false)}
                                                                className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                                        </button>
                                                        <button onClick={() => setOpenNameModal(false)}
                                                                className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                                        </button>
                                                    </div>
                                                </Modal.Footer>
                                            </Modal>
                                            {/* Name change Pop-Up End */}
                                        </>
                                    )}

                                    {loading ? (
                                        <>
                                            <Skeleton height={60} count={1}/>
                                            <Skeleton height={10} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            {/* Location */}
                                            <div
                                                className="box rounded mt-4 flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">Location</h6>
                                                    <p className="mt-0">Taipei, Taiwan</p>
                                                </div>
                                                <div className="right" onClick={() => setOpenLocationModal(true)}>
                                                    <button className="text-primary text-[14px]">Edit</button>
                                                </div>
                                            </div>
                                            {/* Location change Pop-Up Start */}
                                            <Modal size="lg" dismissible show={openLocationModal}
                                                   onClose={() => setOpenLocationModal(false)}>
                                                <Modal.Header>
                                                    <h4 className="text-[16px]">Location</h4>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="modal_body box">
                                                        <h4 className="text-[14px]">City</h4>
                                                        <input
                                                            className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                            type="text"
                                                            placeholder="Enter city"
                                                        />

                                                        <h4 className="text-[14px] mt-4">Country</h4>
                                                        <div className="select-box mt-2" ref={selectBoxRefLocation}>
                                                            <div className="select-option flex"
                                                                 onClick={toggleOptionsVisibilityLocation}>
                                                                <input type="text" placeholder="Select"
                                                                       readOnly
                                                                       value={selectedOptionLocation}
                                                                       className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                                            </div>
                                                            {isOptionsVisibleLocation && (
                                                                <div className="info-content gender_content">
                                                                    <ul className="options">
                                                                        <li onClick={() => handleOptionClickLocation("United States")}>United
                                                                            States
                                                                        </li>
                                                                        <li onClick={() => handleOptionClickLocation("India")}>India</li>
                                                                        <li onClick={() => handleOptionClickLocation("Bangladesh")}>Bangladesh</li>
                                                                        <li onClick={() => handleOptionClickLocation("Pakisthan")}>Pakisthan</li>
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <div className="flex w-full items-center justify-between">
                                                        <button onClick={() => setOpenLocationModal(false)}
                                                                className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                                        </button>
                                                        <button onClick={() => setOpenLocationModal(false)}
                                                                className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                                        </button>
                                                    </div>
                                                </Modal.Footer>
                                            </Modal>
                                            {/* Location change Pop-Up End */}
                                        </>
                                    )}

                                    {loading ? (
                                        <>
                                            <Skeleton height={60} count={1}/>
                                            <Skeleton height={10} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            {/* Email Address */}
                                            <div
                                                className="box mt-6 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">Email Address</h6>
                                                    <p className="mt-0">johndoe@mail.com</p>
                                                </div>
                                                <div onClick={() => setOpenEmailModal(true)} className="right">
                                                    <button className="text-primary text-[14px]">Edit</button>
                                                </div>
                                            </div>
                                            {/* Email change Pop-Up Start */}
                                            <Modal size="lg" dismissible show={openEmailModal}
                                                   onClose={() => setOpenEmailModal(false)}>
                                                <Modal.Header>
                                                    <h4 className="text-[16px]">Email Address</h4>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="modal_body box">
                                                        <h4 className="text-[14px]">Email</h4>
                                                        <input
                                                            className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                            type="text"
                                                            placeholder="johndoe@mail.com"
                                                        />
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <div className="flex w-full items-center justify-between">
                                                        <button onClick={() => setOpenEmailModal(false)}
                                                                className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                                        </button>
                                                        <button onClick={() => setOpenEmailModal(false)}
                                                                className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                                        </button>
                                                    </div>
                                                </Modal.Footer>
                                            </Modal>
                                            {/* Email change Pop-Up End */}
                                        </>
                                    )}

                                    {loading ? (
                                        <>
                                            <Skeleton height={60} count={1}/>
                                            <Skeleton height={10} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            {/* Phone Number */}
                                            <div
                                                className="box mt-6 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">Phone Number</h6>
                                                    <p className="mt-0">+123 234 234 566</p>
                                                </div>
                                                <div onClick={() => setOpenPhoneModal(true)} className="right">
                                                    <button className="text-primary text-[14px]">Edit</button>
                                                </div>
                                            </div>
                                            {/* Phone change Pop-Up Start */}
                                            <Modal size="lg" dismissible show={openPhoneModal}
                                                   onClose={() => setOpenPhoneModal(false)}>
                                                <Modal.Header>
                                                    <h4 className="text-[16px]">Phone Number</h4>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="modal_body box">
                                                        <h4 className="text-[14px]">Country Code</h4>
                                                        <input
                                                            className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                            type="text"
                                                            placeholder="Code"
                                                        />

                                                        <h4 className="text-[14px] mt-4">Phone Number</h4>
                                                        <input
                                                            className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                            type="text"
                                                            placeholder="Enter your phone number"
                                                        />
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <div className="flex w-full items-center justify-between">
                                                        <button onClick={() => setOpenPhoneModal(false)}
                                                                className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                                        </button>
                                                        <button onClick={() => setOpenPhoneModal(false)}
                                                                className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                                        </button>
                                                    </div>
                                                </Modal.Footer>
                                            </Modal>
                                            {/* Phone change Pop-Up End */}
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Higher Education */}
                            <div className="grid grid-cols-1 mb-4 info-wrapper">
                                <div className="col w-full py-6 px-8 bg-white rounded">
                                    {loading ? (
                                        <>
                                            <Skeleton height={30} count={1}/>
                                            <Skeleton height={100} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div className="head mb-2">
                                                <h6>Higher Education</h6>
                                            </div>
                                            <hr/>

                                            <div id="checkbox" className="py-3">
                                                <div className="flex items-center gap-2">
                                                    <Checkbox onClick={handleEducationCheckboxClick} id="education1"/>
                                                    <Label htmlFor="education1"
                                                           className="text-gray-500 font-normal">
                                                        I didn’t attend college
                                                    </Label>
                                                </div>
                                            </div>

                                            <div
                                                className={`box rounded bg-white border ${isEducationBoxVisible ? '' : 'hidden'}`}>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 px-4 py-4">
                                                    <div className="col">
                                                        <h6 className="text-[14px]">School Name</h6>
                                                        <p className="mt-0">Harvard University</p>
                                                    </div>

                                                    <div className="col mt-4 sm:mt-0">
                                                        <h6 className="text-[14px]">Academic Degree</h6>
                                                        <p className="mt-0">MBA</p>
                                                    </div>

                                                    <div className="col mt-4">
                                                        <h6 className="text-[14px]">Major/Field of Study</h6>
                                                        <p className="mt-0">Business Administration</p>
                                                    </div>

                                                    <div className="col mt-4">
                                                        <h6 className="text-[14px]">Concentration</h6>
                                                        <p className="mt-0">Mergers and Acquisitions</p>
                                                    </div>

                                                    <div className="col mt-4">
                                                        <h6 className="text-[14px]">Country/Region</h6>
                                                        <p className="mt-0">United States of America</p>
                                                    </div>

                                                    <div className="col mt-4">
                                                        <h6 className="text-[14px]">Status</h6>
                                                        <p className="mt-0">Dropped Out</p>
                                                    </div>
                                                </div>
                                                <div className="px-4">
                                                    <hr/>
                                                </div>

                                                <div className="flex items-center justify-end gap-6 px-4 py-4">
                                                    <button
                                                        onClick={() => setopenDegreeRemoveModal(true)}
                                                        className="text-[14px] text-primary">Remove
                                                    </button>
                                                    <button className="text-[14px] text-primary">Edit</button>
                                                </div>
                                            </div>

                                            <button onClick={() => setOpenEducationModal(true)}
                                                    className={`mt-4 text-primary flex items-center gap-1 text-[14px] ${isEducationBoxVisible ? '' : 'hidden'}`}>
                                                <HiOutlinePlusCircle size={17}/>
                                                Add Another Degree
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Education Pop-Up Start */}
                                <Modal size="lg" dismissible show={openEducationModal}
                                       onClose={() => setOpenEducationModal(false)}>
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Education</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <div className="flex items-center gap-2 w-full">
                                                <div className="one w-full">
                                                    <h4 className="text-[14px]">School Name</h4>
                                                    <input
                                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                        type="text"
                                                        placeholder="Enter school"
                                                    />
                                                </div>
                                                <div className="two w-full">
                                                    <h4 className="text-[14px]">Country</h4>
                                                    <input
                                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                        type="text"
                                                        placeholder="Enter country"
                                                    />
                                                </div>
                                            </div>

                                            <h4 className="text-[14px] mt-4">Academic Degree</h4>
                                            <div className="select-box mt-2" ref={selectBoxRefEducation}>
                                                <div className="select-option flex"
                                                     onClick={toggleOptionsVisibilityEducation}>
                                                    <input type="text" placeholder="Select"
                                                           readOnly
                                                           value={selectedOptionEducation}
                                                           className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                                </div>
                                                {isOptionsVisibleEducation && (
                                                    <div className="info-content gender_content">
                                                        <ul className="options">
                                                            <li onClick={() => handleOptionClickEducation("Postdoctorate (postdoc)")}>
                                                                Postdoctorate (postdoc)
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Doctor of Philosophy (PhD)")}>
                                                                Doctor of Philosophy (PhD)
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Doctor of Business Administration (DBA)")}>
                                                                Doctor of Business Administration (DBA)
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Master’s Degree")}>
                                                                Master’s Degree
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Master of Science (MSc)")}>
                                                                Master of Science (MSc)
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Master of Arts (MA)")}>
                                                                Master of Arts (MA)
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Master of Engineering")}>
                                                                Master of Engineering
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Master of Physics")}>
                                                                Master of Physics
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Master of Chemistry")}>
                                                                Master of Chemistry
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Master of Medicine (M.Ed.)")}>
                                                                Master of Medicine (M.Ed.)
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Master of Computer Science")}>
                                                                Master of Computer Science
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Master of Philosophy (MPhil)")}>
                                                                Master of Philosophy (MPhil)
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Master of Business Administration (MBA")}>
                                                                Master of Business Administration (MBA
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Bachelor’s Degree")}>
                                                                Bachelor’s Degree
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Bachelor of Science (BSc)")}>
                                                                Bachelor of Science (BSc)
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Bachelor of Arts (BA)")}>
                                                                Bachelor of Arts (BA)
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Bachelor of Engineering")}>
                                                                Bachelor of Engineering
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Bachelor of Computer Science")}>
                                                                Bachelor of Computer Science
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Bachelor of Medicine (BM)")}>
                                                                Bachelor of Medicine (BM)
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Associate of Science (AS)")}>
                                                                Associate of Science (AS)
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Associate of Arts (AA)")}>
                                                                Associate of Arts (AA)
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Associate of Applied Science (AAS)")}>
                                                                Associate of Applied Science (AAS)
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Associate of Applied Business (AAB)")}>
                                                                Associate of Applied Business (AAB)
                                                            </li>
                                                            <li onClick={() => handleOptionClickEducation("Other")}>
                                                                Other
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex items-center w-full gap-2">
                                                <div className="one w-full">
                                                    <h4 className="text-[14px] mt-4">Major/Field of Study</h4>
                                                    <input
                                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                        type="text"
                                                        placeholder="Enter major or field of study"
                                                    />
                                                </div>
                                                <div className="two w-full">
                                                    <h4 className="text-[14px] mt-4">Concentration</h4>
                                                    <input
                                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                        type="text"
                                                        placeholder="Enter concentration"
                                                    />
                                                </div>
                                            </div>

                                            <h4 className="text-[14px] mt-4">Status</h4>
                                            <div className="select-box mt-2" ref={selectBoxRefStatus}>
                                                <div className="select-option flex"
                                                     onClick={toggleOptionsVisibilityStatus}>
                                                    <input type="text" placeholder="Select"
                                                           readOnly
                                                           value={selectedOptionStatus}
                                                           className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                                </div>
                                                {isOptionsVisibleStatus && (
                                                    <div className="info-content gender_content">
                                                        <ul className="options">
                                                            <li onClick={() => handleOptionClickStatus("Graduated")}>
                                                                Graduated
                                                            </li>
                                                            <li onClick={() => handleOptionClickStatus("Dropped Out")}>
                                                                Dropped Out
                                                            </li>
                                                            <li onClick={() => handleOptionClickStatus("Still Attending")}>
                                                                Still Attending
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenEducationModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                            </button>
                                            <button onClick={() => setOpenEducationModal(false)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Education Pop-Up End */}
                            </div>

                            {/* Experience */}
                            <div className="grid grid-cols-1 mb-4 info-wrapper">
                                <div className="col w-full py-6 px-8 bg-white rounded">
                                    {loading ? (
                                        <>
                                            <Skeleton height={30} count={1}/>
                                            <Skeleton height={100} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div className="head mb-2">
                                                <h6>Experience</h6>
                                            </div>
                                            <hr/>

                                            <div id="checkbox" className="py-3">
                                                <div className="flex items-center gap-2">
                                                    <Checkbox onClick={handleExperienceCheckboxClick} id="exprience1"/>
                                                    <Label htmlFor="exprience1"
                                                           className="text-gray-500 font-normal">
                                                        I don’t have prior experience
                                                    </Label>
                                                </div>
                                            </div>

                                            <div
                                                className={`box rounded bg-white border ${isExperienceBoxVisible ? '' : 'hidden'}`}>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 px-4 py-4">
                                                    <div className="col">
                                                        <h6 className="text-[14px]">Employer</h6>
                                                        <p className="mt-0">X Corporation</p>
                                                    </div>

                                                    <div className="col mt-4 sm:mt-0">
                                                        <h6 className="text-[14px]">Current Employer</h6>
                                                        <p className="mt-0">No</p>
                                                    </div>

                                                    <div className="col mt-4">
                                                        <h6 className="text-[14px]">Job Title</h6>
                                                        <p className="mt-0">UX/UI Designer</p>
                                                    </div>

                                                    <div className="col mt-4">
                                                        <h6 className="text-[14px]">Country</h6>
                                                        <p className="mt-0">Taiwan</p>
                                                    </div>

                                                    <div className="col mt-4">
                                                        <h6 className="text-[14px]">Start Date</h6>
                                                        <p className="mt-0">January 22, 2021</p>
                                                    </div>

                                                    <div className="col mt-4">
                                                        <h6 className="text-[14px]">End Date</h6>
                                                        <p className="mt-0">January 22, 2022</p>
                                                    </div>
                                                </div>
                                                <div className="px-4">
                                                    <hr/>
                                                </div>

                                                <div className="flex items-center justify-end gap-6 px-4 py-4">
                                                    <button onClick={() => setopenExperienceRemoveModal(true)}
                                                            className="text-[14px] text-primary">Remove
                                                    </button>
                                                    <button className="text-[14px] text-primary">Edit</button>
                                                </div>
                                            </div>

                                            <button onClick={() => setOpenExperienceModal(true)}
                                                    className={`mt-4 text-primary flex items-center gap-1 text-[14px] ${isExperienceBoxVisible ? '' : 'hidden'}`}>
                                                <HiOutlinePlusCircle size={17}/>
                                                Add Another Experience
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Experience Pop-Up Start */}
                                <Modal size="lg" dismissible show={openExperienceModal}
                                       onClose={() => setOpenExperienceModal(false)}>
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Experience</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <h4 className="text-[14px]">Employer</h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                placeholder="Enter employer"
                                            />

                                            <h4 className="text-[14px] mt-4">Current Employer</h4>
                                            <fieldset id="radio_box" className="mt-2 flex items-center gap-6">
                                                <div
                                                    className="flex items-center gap-1">
                                                    <Radio
                                                        id="yes"
                                                        name="employer"
                                                        value="Yes"
                                                        onChange={handleRadioChange}
                                                        checked={isEmployed}
                                                    />
                                                    <Label htmlFor="yes">Yes</Label>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Radio
                                                        id="no"
                                                        name="employer"
                                                        value="No"
                                                        onChange={handleRadioChange}
                                                        checked={!isEmployed}
                                                    />
                                                    <Label htmlFor="no">No</Label>
                                                </div>
                                            </fieldset>

                                            <h4 className="mt-4 text-[14px]">Job Title</h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                placeholder="Enter job title"
                                            />

                                            <h4 className="mt-4 text-[14px]">Country</h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                placeholder="Enter cuntry name"
                                            />

                                            <div className="flex items-center w-full gap-2">
                                                <div className="one w-full">
                                                    <h4 className="text-[14px] mt-4">Start Date</h4>
                                                    <input
                                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                        type="text"
                                                        placeholder="Month"
                                                    />
                                                </div>
                                                <div className="two w-full mt-9">
                                                    <input
                                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                        type="text"
                                                        placeholder="Year"
                                                    />
                                                </div>
                                            </div>

                                            <div
                                                className={`check_wrapper flex items-center w-full gap-2 ${isEmployed ? 'hidden' : ''}`}>
                                                <div className="one w-full">
                                                    <h4 className="text-[14px] mt-4">End Date</h4>
                                                    <input
                                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                        type="text"
                                                        placeholder="Month"
                                                    />
                                                </div>
                                                <div className="two w-full mt-9">
                                                    <input
                                                        className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                        type="text"
                                                        placeholder="Year"
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenExperienceModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                            </button>
                                            <button onClick={() => setOpenExperienceModal(false)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Experience Pop-Up End */}
                            </div>

                            {/* Skill */}
                            <div className="grid grid-cols-1 mb-4 info-wrapper">
                                <div className="col w-full py-6 px-8 bg-white rounded">
                                    {loading ? (
                                        <>
                                            <Skeleton height={10} count={1}/>
                                            <Skeleton height={60} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div className="head mb-2">
                                                <h6>Skills</h6>
                                            </div>
                                            <hr/>

                                            {/* Skill File */}
                                            <div
                                                className="box mt-6 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">Ruby On Rails, Figma, Adobe XD</h6>
                                                </div>
                                                <div onClick={() => setOpenSkillModal(true)} className="right">
                                                    <button className="text-primary text-[14px]">Edit</button>
                                                </div>
                                            </div>
                                            {/* Skill File change Pop-Up Start */}
                                            <Modal size="lg" dismissible show={openSkillModal}
                                                   onClose={() => setOpenSkillModal(false)}>
                                                <Modal.Header>
                                                    <h4 className="text-[16px]">Skills</h4>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="modal_body box">
                                                        <p>
                                                            Please list your skills, separated by commas (optional).
                                                        </p>
                                                        <h4 className="text-[14px] mt-4">Add Skills</h4>
                                                        <textarea cols={30} rows={3}
                                                                  className="mt-1 border border-gray-300 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"></textarea>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <div className="flex w-full items-center justify-between">
                                                        <button onClick={() => setOpenSkillModal(false)}
                                                                className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                                        </button>
                                                        <button onClick={() => setOpenSkillModal(false)}
                                                                className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                                        </button>
                                                    </div>
                                                </Modal.Footer>
                                            </Modal>
                                            {/* Skill File change Pop-Up End */}
                                        </>
                                    )}
                                </div>

                            </div>

                            {/* Resume */}
                            <div className="grid grid-cols-1 mb-4 info-wrapper">
                                <div className="col w-full py-6 px-8 bg-white rounded">
                                    {loading ? (
                                        <>
                                            <Skeleton height={10} count={1}/>
                                            <Skeleton height={60} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div className="head mb-2">
                                                <h6>Résumé</h6>
                                            </div>
                                            <hr/>

                                            {/* Resume File */}
                                            <div
                                                className="box mt-6 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left flex items-center gap-1">
                                                    <ImAttachment size={15} className="text-gray-400"/>
                                                    <h6 className="text-[14px]">
                                                        Jane Doe_Resume
                                                    </h6>
                                                </div>
                                                <div onClick={() => setOpenResumeModal(true)} className="right">
                                                    <button className="text-primary text-[14px]">Edit</button>
                                                </div>
                                            </div>
                                            {/* Resume File change Pop-Up Start */}
                                            <Modal size="lg" dismissible show={openResumeModal}
                                                   onClose={() => setOpenResumeModal(false)}>
                                                <Modal.Header>
                                                    <h4 className="text-[16px]">Resume</h4>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="modal_body box">
                                                        <div className="flex mt-2 items-center justify-between">
                                                            <div className="left mt-0">
                                                                {selectedFile ? (
                                                                    <p className="text-primary">{selectedFile.name}</p>
                                                                ) : (
                                                                    <div className="flex items-center gap-1">
                                                                        <ImAttachment size={15}
                                                                                      className="text-gray-400"/>
                                                                        <h6 className="text-[14px]">
                                                                            Jane Doe_Resume
                                                                        </h6>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div onClick={handleRemoveClick}
                                                                 className="right mt-0 cursor-pointer flex gap-1 items-center">
                                                                <HiOutlineMinusCircle className="text-primary"/>
                                                                <button className="text-primary text-[14px]">Remove
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="image-upload mt-4">
                                                            <h4 className="text-[14px]">Upload Résumé</h4>
                                                            <div
                                                                className="flex items-center justify-center mt-3 w-full">
                                                                <label htmlFor="dropzone-file"
                                                                       className="flex flex-col items-center justify-center w-full h-28 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
                                                                    <div
                                                                        className="flex flex-col items-center justify-center pt-5 pb-6">
                                                                        <HiOutlineCloudArrowUp
                                                                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"/>
                                                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                                            className="font-semibold">Click to upload</span> or
                                                                            drag and
                                                                            drop</p>
                                                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                                                            Supported file formats: .pdf, .doc, .docx,
                                                                            .txt
                                                                        </p>
                                                                    </div>
                                                                    <input
                                                                        id="dropzone-file"
                                                                        type="file"
                                                                        accept=".pdf,.doc,.docx,.txt"
                                                                        className="hidden"
                                                                        onChange={handleFileChange}
                                                                        ref={fileInputRef}
                                                                    />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <div className="flex w-full items-center justify-between">
                                                        <button onClick={() => setOpenResumeModal(false)}
                                                                className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                                        </button>
                                                        <button onClick={() => setOpenResumeModal(false)}
                                                                className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                                        </button>
                                                    </div>
                                                </Modal.Footer>
                                            </Modal>
                                            {/* Resume File change Pop-Up End */}
                                        </>
                                    )}
                                </div>

                            </div>

                            {/* Document */}
                            <div className="grid grid-cols-1 mb-4 info-wrapper">
                                <div className="col w-full py-6 px-8 bg-white rounded">
                                    {loading ? (
                                        <>
                                            <Skeleton height={10} count={1}/>
                                            <Skeleton height={60} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div className="head mb-2">
                                                <h6>Supporting Documents</h6>
                                            </div>
                                            <hr/>

                                            {/* Resume File */}
                                            <div
                                                className="box mt-6 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left flex items-center gap-1">
                                                    <ImAttachment size={15} className="text-gray-400"/>
                                                    <h6 className="text-[14px]">
                                                        Jane Doe_Document
                                                    </h6>
                                                </div>
                                                <div onClick={() => setOpenDocumentModal(true)} className="right">
                                                    <button className="text-primary text-[14px]">Edit</button>
                                                </div>
                                            </div>
                                            {/* Resume File change Pop-Up Start */}
                                            <Modal size="lg" dismissible show={openDocumentModal}
                                                   onClose={() => setOpenDocumentModal(false)}>
                                                <Modal.Header>
                                                    <h4 className="text-[16px]">Supporting Documents</h4>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="modal_body box">
                                                        <div className="flex mt-2 items-center justify-between">
                                                            <div className="left mt-0">
                                                                {selectedDocumentFile ? (
                                                                    <p className="text-primary">{selectedDocumentFile.name}</p>
                                                                ) : (
                                                                    <div className="flex items-center gap-1">
                                                                        <ImAttachment size={15}
                                                                                      className="text-gray-400"/>
                                                                        <h6 className="text-[14px]">
                                                                            Jane Doe_Document
                                                                        </h6>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div onClick={handleDocumentRemoveClick}
                                                                 className="right mt-0 cursor-pointer flex gap-1 items-center">
                                                                <HiOutlineMinusCircle className="text-primary"/>
                                                                <button className="text-primary text-[14px]">Remove
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="image-upload mt-4">
                                                            <h4 className="text-[14px]">Upload Supporting Documents</h4>
                                                            <div
                                                                className="flex items-center justify-center mt-3 w-full">
                                                                <label htmlFor="dropzone-file"
                                                                       className="flex flex-col items-center justify-center w-full h-28 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
                                                                    <div
                                                                        className="flex flex-col items-center justify-center pt-5 pb-6">
                                                                        <HiOutlineCloudArrowUp
                                                                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"/>
                                                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                                            className="font-semibold">Click to upload</span> or
                                                                            drag and
                                                                            drop</p>
                                                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                                                            Supported file formats: .pdf, .doc, .docx,
                                                                            .txt
                                                                        </p>
                                                                    </div>
                                                                    <input id="dropzone-file" type="file"
                                                                           accept=".pdf,.doc,.docx,.txt"
                                                                           className="hidden"
                                                                           onChange={(event) => handleFileDocumentChange(event)}
                                                                           ref={fileInputDocumentRef}
                                                                    />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <div className="flex w-full items-center justify-between">
                                                        <button onClick={() => setOpenDocumentModal(false)}
                                                                className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                                        </button>
                                                        <button onClick={() => setOpenDocumentModal(false)}
                                                                className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                                        </button>
                                                    </div>
                                                </Modal.Footer>
                                            </Modal>
                                            {/* Resume File change Pop-Up End */}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Degree Remove Pop-Up Start */}
                <Modal size="lg" dismissible show={openDegreeRemoveModal}
                       onClose={() => setopenDegreeRemoveModal(false)}>
                    <Modal.Header>
                        <h4 className="text-[16px]">Remove Degree</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body box">
                            <p>
                                Are you sure you want to remove this degree? This action cannot
                                be undone.
                            </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setopenDegreeRemoveModal(false)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                            </button>
                            <button onClick={() => setopenDegreeRemoveModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Degree Remove Pop-Up End */}

                {/* Experience Remove Pop-Up Start */}
                <Modal size="lg" dismissible show={openExperienceRemoveModal}
                       onClose={() => setopenExperienceRemoveModal(false)}>
                    <Modal.Header>
                        <h4 className="text-[16px]">Remove Experience</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body box">
                            <p>
                                Are you sure you want to remove this experience? This action
                                cannot be undone.
                            </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setopenExperienceRemoveModal(false)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                            </button>
                            <button onClick={() => setopenExperienceRemoveModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Experience Remove Pop-Up End */}
            </section>
        </>
    );
};

export default Page;