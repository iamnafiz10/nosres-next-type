"use client";
import React, {useEffect, useRef, useState} from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {Modal} from 'flowbite-react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
// @ts-ignore
import LogoImg from '@/../public/assets/images/logo.svg';
import {
    HiOutlineIdentification,
    HiOutlineMinusCircle,
    HiOutlineCamera,
    HiOutlinePlusCircle,
    HiOutlineCloudArrowUp,
} from 'react-icons/hi2';
import {HiUserCircle} from 'react-icons/hi';

const Page = () => {
    // Image Upload Function
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // Profile image change popup
    const [openProfileImageModal, setOpenProfileImageModal] = useState<boolean>(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const file: File | null = event.target.files?.[0] || null;
        setSelectedFile(file);
    };

    const handleRemoveClick = () => {
        setSelectedFile(null);
        // Reset the file input value to allow re-uploading the same file
        if (fileInputRef.current) {
            if ("value" in fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    const handleCanceltClick = () => {
        handleRemoveClick();
        setOpenProfileImageModal(false);
    };

    const handleSaveClick = () => {
        handleRemoveClick();
        setOpenProfileImageModal(false);
    };


// For Username Type
    const constantPart: string = "auth.nosres.com/@";
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const userInput: string = e.target.value;

        // Check if the user's input already includes the constant part
        if (userInput.startsWith(constantPart)) {
            setInputValue(userInput);
        } else {
            setInputValue(constantPart + userInput);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Handle backspace to prevent repetition
        if (e.key === 'Backspace' && inputValue === constantPart) {
            e.preventDefault(); // Prevent backspace from removing the constant part
        }
    };


// ------------------ One ------------------//
    const [selectedOptionOne, setSelectedOptionOne] = useState<string>('');
    const [isOptionsVisibleOne, setIsOptionsVisibleOne] = useState<boolean>(false);

    const selectBoxRef = useRef<HTMLDivElement>(null);

    const handleOptionClickOne = (option: string) => {
        setSelectedOptionOne(option);
        toggleOptionsVisibilityOne();
    };

    const toggleOptionsVisibilityOne = () => {
        setIsOptionsVisibleOne(!isOptionsVisibleOne);
    };
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            // @ts-ignore
            if (selectBoxRef.current && !selectBoxRef.current.contains(event.target as Node)) {
                setIsOptionsVisibleOne(false);
            }
        };

        // @ts-ignore
        document.addEventListener('click', handleOutsideClick);

        return () => {
            // @ts-ignore
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

// ------------------ Two ------------------//
    const [selectedOptionTwo, setSelectedOptionTwo] = useState<string>('');
    const [isOptionsVisibleTwo, setIsOptionsVisibleTwo] = useState<boolean>(false);
    const selectBoxRefTwo = useRef<HTMLDivElement>(null);

    const toggleOptionsVisibilityTwo = () => {
        setIsOptionsVisibleTwo(!isOptionsVisibleTwo);
    };

    const handleOptionClickTwo = (day: number) => {
        setSelectedOptionTwo(String(day));
        toggleOptionsVisibilityTwo();
    };

// ------------------ Three ------------------//
    const [selectedOptionThree, setSelectedOptionThree] = useState<string>('');
    const [isOptionsVisibleThree, setIsOptionsVisibleThree] = useState<boolean>(false);

    const selectBoxRefThree = useRef<HTMLDivElement>(null);

    const handleOptionClickThree = (option: string) => {
        setSelectedOptionThree(option);
        toggleOptionsVisibilityThree();
    };

// For Birthday Year
    const startYear: number = 1900;
    const endYear: number = 2024;
    const yearOptions: JSX.Element[] = [];

    for (let year = startYear; year <= endYear; year++) {
        yearOptions.push(
            <li key={year} onClick={() => handleOptionClickThree(`${year}`)}>
                {year}
            </li>
        );
    }

// For Birthday Date and Month
    const monthLengths: { [key: string]: number } = {
        January: 31, February: 29, March: 31, April: 30,
        May: 31, June: 30, July: 31, August: 31,
        September: 30, October: 31, November: 30, December: 31
    }

    const [selectedMonth, setSelectedMonth] = useState<string>('January');

    const handleMonthSelect = (month: string) => {
        setSelectedMonth(month);
    };

    const toggleOptionsVisibilityThree = () => {
        setIsOptionsVisibleThree(!isOptionsVisibleThree);
    };
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            // @ts-ignore
            if (selectBoxRefThree.current && !selectBoxRefThree.current.contains(event.target as Node)) {
                setIsOptionsVisibleThree(false);
            }
        };

        // @ts-ignore
        document.addEventListener('click', handleOutsideClick);

        return () => {
            // @ts-ignore
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

// ------------------ Gender Select ------------------//
    const [selectedOptionGender, setSelectedOptionGender] = useState<string>('');
    const [isOptionsVisibleGender, setIsOptionsVisibleGender] = useState<boolean>(false);

    const selectBoxRefGender = useRef<HTMLDivElement>(null);

    const handleOptionClickGender = (option: string) => {
        setSelectedOptionGender(option);
        toggleOptionsVisibilityGender();
    };

    const toggleOptionsVisibilityGender = () => {
        setIsOptionsVisibleGender(!isOptionsVisibleGender);
    };
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            // @ts-ignore
            if (selectBoxRefGender.current && !selectBoxRefGender.current.contains(event.target as Node)) {
                setIsOptionsVisibleGender(false);
            }
        };

        // @ts-ignore
        document.addEventListener('click', handleOutsideClick);

        return () => {
            // @ts-ignore
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

// ------------------ Country Select ------------------//
    const [selectedOptionCountry, setSelectedOptionCountry] = useState<string>('');
    const [isOptionsVisibleCountry, setIsOptionsVisibleCountry] = useState<boolean>(false);

    const selectBoxRefCountry = useRef<HTMLDivElement>(null);

    const handleOptionClickCountry = (option: string) => {
        setSelectedOptionCountry(option);
        toggleOptionsVisibilityCountry();
    };

    const toggleOptionsVisibilityCountry = () => {
        setIsOptionsVisibleCountry(!isOptionsVisibleCountry);
    };
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            // @ts-ignore
            if (selectBoxRefCountry.current && !selectBoxRefCountry.current.contains(event.target as Node)) {
                setIsOptionsVisibleCountry(false);
            }
        };

        // @ts-ignore
        document.addEventListener('click', handleOutsideClick);

        return () => {
            // @ts-ignore
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);


// ------------------ Language Select ------------------//
    const [selectedOptionLanguage, setSelectedOptionLanguage] = useState<string>('');
    const [isOptionsVisibleLanguage, setIsOptionsVisibleLanguage] = useState<boolean>(false);

    const selectBoxRefLanguage = useRef<HTMLDivElement>(null);

    const handleOptionClickLanguage = (option: string) => {
        setSelectedOptionLanguage(option);
        toggleOptionsVisibilityLanguage();
    };

    const toggleOptionsVisibilityLanguage = () => {
        setIsOptionsVisibleLanguage(!isOptionsVisibleLanguage);
    };
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            // @ts-ignore
            if (selectBoxRefLanguage.current && !selectBoxRefLanguage.current.contains(event.target as Node)) {
                setIsOptionsVisibleLanguage(false);
            }
        };

        // @ts-ignore
        document.addEventListener('click', handleOutsideClick);

        return () => {
            // @ts-ignore
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

// Name change popup
    const [openNameModal, setOpenNameModal] = useState<boolean>(false);

// Username change popup
    const [openUsernameModal, setOpenUsernameModal] = useState<boolean>(false);

// Birthday change popup
    const [openBirthdayModal, setOpenBirthdayModal] = useState<boolean>(false);

// Gender change popup
    const [openGenderModal, setOpenGenderModal] = useState<boolean>(false);

// Country change popup
    const [openCountryModal, setOpenCountryModal] = useState<boolean>(false);

// Language change popup
    const [openLanguageModal, setOpenLanguageModal] = useState<boolean>(false);

// --------------------- Email change popup START -----------------------//
    const [openEmailModal, setOpenEmailModal] = useState<boolean>(false);
    const [openAddEmailModal, setOpenAddEmailModal] = useState<boolean>(false);
    const [openEmailPasswordModal, setOpenEmailPasswordModal] = useState<boolean>(false);
    const [openConfirmEmailModal, setOpenConfirmEmailModal] = useState<boolean>(false);

    // Function to close all Email popups
    const closeAllEmailPopups = () => {
        setOpenEmailModal(false);
        setOpenAddEmailModal(false);
        setOpenEmailPasswordModal(false);
        setOpenConfirmEmailModal(false);
    };

    const notify = () => {
        toast.info('Your email has been verified.', {
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

    const handleConfirmPopEmailButtonClick = () => {
        notify();
        closeAllEmailPopups();
    };

// --------------------- Email change popup END -----------------------//

// --------------------- Phone change popup START -----------------------//
    const [openPhoneModal, setOpenPhoneModal] = useState<boolean>(false);
    const [openAddPhoneModal, setOpenAddPhoneModal] = useState<boolean>(false);
    const [openPhoneVModal, setOpenPhoneVModal] = useState<boolean>(false);
    const [openConfirmVCodePhoneModal, setOpenConfirmVCodePhoneModal] = useState<boolean>(false);

// Function to close all Phone popups
    const closeAllPhonePopups = () => {
        setOpenPhoneModal(false);
        setOpenAddPhoneModal(false);
        setOpenPhoneVModal(false);
        setOpenConfirmVCodePhoneModal(false);
    };

    const notifyP = () => {
        toast.success('Your phone has been verified.', {
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

    const handleConfirmPopPhoneButtonClick = () => {
        notifyP();
        closeAllPhonePopups();
    };
// --------------------- Phone change popup END -----------------------//
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

    // Email remove popup
    const [OpenEmailRemoveModal, setOpenEmailRemoveModal] = useState<boolean>(false);

    // Email primary popup
    const [OpenEmailMakePrimaryModal, setOpenEmailMakePrimaryModal] = useState<boolean>(false);

    // Phone remove popup
    const [OpenPhoneRemoveModal, setOpenPhoneRemoveModal] = useState<boolean>(false);

    // Phone primary popup
    const [OpenPhoneMakePrimaryModal, setOpenPhoneMakePrimaryModal] = useState<boolean>(false);

    // Notify Email remove
    const notifyEmailRemove = () => {
        toast.warning('Your email has been removed successfully.', {
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

    const handleCloseEmailAllPopups = () => {
        setOpenEmailModal(false);
        setOpenEmailRemoveModal(false);
    };

    const handleEmailRemoveButtonClick = () => {
        notifyEmailRemove();
        handleCloseEmailAllPopups();
    };

    // Notify Email primary
    const notifyEmailPrimary = () => {
        toast.success('This email has been successfully set as the primary.', {
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

    const handleCloseEmailAllPopupsTwo = () => {
        setOpenEmailModal(false);
        setOpenEmailMakePrimaryModal(false);
    };

    const handleEmailPrimaryButtonClick = () => {
        notifyEmailPrimary();
        handleCloseEmailAllPopupsTwo();
    };

    // ---------------------- Email Notify Close ---------------------------//

    // Notify Phone remove
    const notifyPhoneRemove = () => {
        toast.warning('Your phone number has been removed successfully.', {
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

    const handleClosePhoneAllPopups = () => {
        setOpenPhoneModal(false);
        setOpenPhoneRemoveModal(false);
    };

    const handlePhoneRemoveButtonClick = () => {
        notifyPhoneRemove();
        handleClosePhoneAllPopups();
    };

    // Notify Phone primary
    const notifyPhonePrimary = () => {
        toast.success('Your phone number has been successfully set as the primary.', {
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

    const handleClosePhoneAllPopupsTwo = () => {
        setOpenPhoneModal(false);
        setOpenPhoneMakePrimaryModal(false);
    };

    const handlePhonePrimaryButtonClick = () => {
        notifyPhonePrimary();
        handleClosePhoneAllPopupsTwo();
    };

    return (
        <>
            <section id="dashboard-section" className="bg-[#F9FAFB]">
                {/* Dashboard Body */}
                <div className="p-4 sm:ml-64 md:ml-80 bg-gray-50">
                    <div className="p-4 rounded mt-14">
                        {/* Profile Picture */}
                        <div className="grid grid-cols-1 mb-4">
                            <div className="flex items-center mb-2 gap-2">
                                <HiOutlineIdentification size={25} className="text-gray-500"/>
                                <h6 className="text-[18px]">Personal Information</h6>
                            </div>
                            <hr/>
                            <div className="mt-8 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                                {loading ? (
                                    <>
                                        <Skeleton height={60} count={1}/>
                                        <Skeleton height={10} count={2}/>
                                    </>
                                ) : (
                                    <>
                                        <div className="head mb-2">
                                            <h6>Profile Picture</h6>
                                        </div>
                                        <hr/>
                                        <div className="mt-4 sm:flex box items-center gap-3">
                                            <div className="one w-16 h-16 relative">
                                                <HiUserCircle className="w-16 h-16 text-primary"/>
                                                <HiOutlineCamera onClick={() => setOpenProfileImageModal(true)}
                                                                 size={20}
                                                                 className="cursor-pointer absolute bottom-[15%] right-[18%] bg-white opacity-[0.5] rounded-full p-1"/>
                                            </div>

                                            <div className="two mt-2 sm:mt-0">
                                                <p>
                                                    Adding a profile picture to your Nosres account helps you express
                                                    yourself
                                                    and
                                                    helps other people identify you. It also helps others to develop the
                                                    right
                                                    impression
                                                    of you. Click photo to update.
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Profile Picture Pop-Up Start */}
                        <Modal size="lg" dismissible show={openProfileImageModal}
                               onClose={() => setOpenProfileImageModal(false)}>
                            <Modal.Header
                                style={{
                                    backgroundColor: 'rgb(129 188 255 / 18%)',
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <Image src={LogoImg} width={100} height={100} className="w-6" alt="LogoImg"/>
                                    <h4 className="text-[16px]">Account</h4>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="modal_body box">
                                    <h4 className="text-[16px]">Edit Profile Picture</h4>
                                    <p className="mt-2">
                                        Adding a profile picture to your Nosres account helps you express
                                        yourself and helps other people identify you.
                                    </p>

                                    <div className="flex mt-2 items-center justify-between">
                                        <div className="left">
                                            {selectedFile ? (
                                                <Image
                                                    width={100} height={100}
                                                    src={URL.createObjectURL(selectedFile)}
                                                    alt="Uploaded Preview"
                                                    className="w-20 h-20 object-cover rounded-full"
                                                />
                                            ) : (
                                                <HiUserCircle className="w-20 h-20 text-primary"/>
                                            )}
                                        </div>
                                        <div onClick={handleRemoveClick}
                                             className="right cursor-pointer flex gap-1 items-center">
                                            <HiOutlineMinusCircle className="text-primary"/>
                                            <button className="text-primary text-[14px]">Remove</button>
                                        </div>
                                    </div>

                                    <div className="image-upload mt-4">
                                        <h4 className="text-[14px]">Upload New Picture</h4>
                                        <div className="flex items-center justify-center mt-3 w-full">
                                            <label htmlFor="dropzone-file"
                                                   className="flex flex-col items-center justify-center w-full h-28 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <HiOutlineCloudArrowUp
                                                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"/>
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                        className="font-semibold">Click to upload</span> or drag and
                                                        drop</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG,
                                                        JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" className="hidden"
                                                       onChange={(event) => handleFileChange(event)}
                                                       ref={fileInputRef}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <div className="flex w-full items-center justify-between">
                                    <button onClick={handleCanceltClick}
                                            className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                    </button>
                                    <button onClick={handleSaveClick}
                                            className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                    </button>
                                </div>
                            </Modal.Footer>
                        </Modal>
                        {/* Profile Picture Pop-Up End */}

                        {/* Primary Information */}
                        <div className="grid grid-cols-1 mb-4 info-wrapper">
                            <div className="mt-8 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                                <div className="head mb-2">
                                    <h6>Primary Information</h6>
                                </div>
                                <hr/>
                                <div className="mt-4 box">
                                    <p>
                                        Manage your basic information, including your name, username, birthday,
                                        language, etc.
                                    </p>
                                </div>
                                {loading ? (
                                    <>
                                        <Skeleton height={60} count={1}/>
                                        <Skeleton height={10} count={1}/>
                                    </>
                                ) : (
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
                                )}
                                {/* Name change Pop-Up Start */}
                                <Modal size="lg" dismissible show={openNameModal}
                                       onClose={() => setOpenNameModal(false)}>
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Change Name</h4>
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

                                            <h4 className="text-[14px] mt-6">Last Name</h4>
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
                                {loading ? (
                                    <>
                                        <Skeleton height={60} count={1}/>
                                        <Skeleton height={10} count={1}/>
                                    </>
                                ) : (
                                    <div
                                        className="box rounded mt-4 flex items-start justify-between bg-white border px-4 py-4">
                                        <div className="left">
                                            <h6 className="text-[14px]">Username</h6>
                                            <p className="mt-0">Janedoe</p>
                                        </div>
                                        <div onClick={() => setOpenUsernameModal(true)} className="right">
                                            <button className="text-primary text-[14px]">Edit</button>
                                        </div>
                                    </div>
                                )}
                                {/* Username change Pop-Up Start */}
                                <Modal size="lg" dismissible show={openUsernameModal}
                                       onClose={() => setOpenUsernameModal(false)}>
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Change Username</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <h4 className="text-[14px]">Username</h4>
                                            <input
                                                className="mt-1 valid_input rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                                type="text"
                                                placeholder="auth.nosres.com/@"
                                                value={inputValue}
                                                onChange={handleInputChange}
                                                onKeyDown={handleKeyDown}
                                            />
                                            <h4 className="mt-2 text-gray-500 text-[12px]">
                                                Up to 15 characters (letters, numbers, or _)
                                            </h4>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenUsernameModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                            </button>
                                            <button onClick={() => setOpenUsernameModal(false)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Username change Pop-Up End */}
                                {loading ? (
                                    <>
                                        <Skeleton height={60} count={1}/>
                                        <Skeleton height={10} count={1}/>
                                    </>
                                ) : (
                                    <div
                                        className="box rounded mt-4 flex items-start justify-between bg-white border px-4 py-4">
                                        <div className="left">
                                            <h6 className="text-[14px]">Birthday</h6>
                                            <p className="mt-0">January 22, 2000</p>
                                        </div>
                                        <div onClick={() => setOpenBirthdayModal(true)} className="right">
                                            <button className="text-primary text-[14px]">Edit</button>
                                        </div>
                                    </div>
                                )}
                                {/* Birthday change Pop-Up Start */}
                                <Modal size="lg" dismissible show={openBirthdayModal}
                                       onClose={() => setOpenBirthdayModal(false)}>
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Change Birthday</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <h4 className="text-[16px]">Birthday</h4>

                                            <div className="flex gap-2">
                                                <div className="select-box mt-2" ref={selectBoxRef}>
                                                    <div className="select-option flex"
                                                         onClick={toggleOptionsVisibilityOne}>
                                                        <input type="text" placeholder="Month"
                                                               readOnly
                                                               value={selectedOptionOne}
                                                               className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                                    </div>
                                                    {isOptionsVisibleOne && (
                                                        <div className="info-content">
                                                            <ul className="options">
                                                                {Object.keys(monthLengths).map((month, index) => (
                                                                    <li key={index} onClick={() => {
                                                                        handleMonthSelect(month);
                                                                        handleOptionClickOne(month);
                                                                    }}>{month}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="select-box mt-2" ref={selectBoxRefTwo}>
                                                    <div className="select-option flex"
                                                         onClick={toggleOptionsVisibilityTwo}>
                                                        <input
                                                            type="text"
                                                            placeholder="Day"
                                                            readOnly
                                                            value={selectedOptionTwo}
                                                            className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300"
                                                        />
                                                    </div>
                                                    {isOptionsVisibleTwo && (
                                                        <div className="info-content">
                                                            <ul className="options">
                                                                {Array.from(Array(monthLengths[selectedMonth]).keys()).map((day) => (
                                                                    <li key={day + 1}
                                                                        onClick={() => handleOptionClickTwo(day + 1)}>
                                                                        {day + 1}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="select-box mt-2" ref={selectBoxRefThree}>
                                                    <div className="select-option flex"
                                                         onClick={toggleOptionsVisibilityThree}>
                                                        <input type="text" placeholder="Year"
                                                               readOnly
                                                               value={selectedOptionThree}
                                                               className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                                    </div>
                                                    {isOptionsVisibleThree && (
                                                        <div className="info-content">
                                                            <ul className="options">
                                                                {yearOptions}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <h4 className="mt-2 text-gray-500 text-[12px]">
                                                Your date of birth is required to identify which services you qualify
                                                for.
                                            </h4>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenBirthdayModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                            </button>
                                            <button onClick={() => setOpenBirthdayModal(false)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Birthday change Pop-Up End */}
                                {loading ? (
                                    <>
                                        <Skeleton height={60} count={1}/>
                                        <Skeleton height={10} count={1}/>
                                    </>
                                ) : (
                                    <div
                                        className="box rounded mt-4 flex items-start justify-between bg-white border px-4 py-4">
                                        <div className="left">
                                            <h6 className="text-[14px]">Gender</h6>
                                            <p className="mt-0">Female</p>
                                        </div>
                                        <div className="right" onClick={() => setOpenGenderModal(true)}>
                                            <button className="text-primary text-[14px]">Edit</button>
                                        </div>
                                    </div>
                                )}
                                {/* Gender change Pop-Up Start */}
                                <Modal size="lg" dismissible show={openGenderModal}
                                       onClose={() => setOpenGenderModal(false)}>
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Change Gender</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <h4 className="text-[16px]">Gender</h4>
                                            <p className="mt-2">
                                                Nosres uses this information to customize your experience, such
                                                as delivering more targeted advertisements to you within Nosres
                                                products and services.
                                            </p>
                                            <div className="select-box mt-2" ref={selectBoxRefGender}>
                                                <div className="select-option flex"
                                                     onClick={toggleOptionsVisibilityGender}>
                                                    <input type="text" placeholder="Select"
                                                           readOnly
                                                           value={selectedOptionGender}
                                                           className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                                </div>
                                                {isOptionsVisibleGender && (
                                                    <div className="info-content gender_content">
                                                        <ul className="options">
                                                            <li onClick={() => handleOptionClickGender("Male")}>Male</li>
                                                            <li onClick={() => handleOptionClickGender("Female")}>Female</li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenGenderModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                            </button>
                                            <button onClick={() => setOpenGenderModal(false)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Gender change Pop-Up End */}

                                {loading ? (
                                    <>
                                        <Skeleton height={60} count={1}/>
                                        <Skeleton height={10} count={1}/>
                                    </>
                                ) : (
                                    <div
                                        className="box rounded mt-4 flex items-start justify-between bg-white border px-4 py-4">
                                        <div className="left">
                                            <h6 className="text-[14px]">Country / Region</h6>
                                            <p className="mt-0">United States</p>
                                        </div>
                                        <div className="right" onClick={() => setOpenCountryModal(true)}>
                                            <button className="text-primary text-[14px]">Edit</button>
                                        </div>
                                    </div>
                                )}
                                {/* Country change Pop-Up Start */}
                                <Modal size="lg" dismissible show={openCountryModal}
                                       onClose={() => setOpenCountryModal(false)}>
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Change Country</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <h4 className="text-[14px]">Country</h4>
                                            <div className="select-box mt-2" ref={selectBoxRefCountry}>
                                                <div className="select-option flex"
                                                     onClick={toggleOptionsVisibilityCountry}>
                                                    <input type="text" placeholder="Select"
                                                           readOnly
                                                           value={selectedOptionCountry}
                                                           className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                                </div>
                                                {isOptionsVisibleCountry && (
                                                    <div className="info-content gender_content">
                                                        <ul className="options">
                                                            <li onClick={() => handleOptionClickCountry("United States")}>United
                                                                States
                                                            </li>
                                                            <li onClick={() => handleOptionClickCountry("India")}>India</li>
                                                            <li onClick={() => handleOptionClickCountry("Bangladesh")}>Bangladesh</li>
                                                            <li onClick={() => handleOptionClickCountry("Pakisthan")}>Pakisthan</li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenCountryModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                            </button>
                                            <button onClick={() => setOpenCountryModal(false)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Country change Pop-Up End */}

                                {loading ? (
                                    <>
                                        <Skeleton height={60} count={1}/>
                                        <Skeleton height={10} count={1}/>
                                    </>
                                ) : (
                                    <div
                                        className="box rounded mt-4 flex items-start justify-between bg-white border px-4 py-4">
                                        <div className="left">
                                            <h6 className="text-[14px]">Language</h6>
                                            <p className="mt-0">English</p>
                                        </div>
                                        <div className="right" onClick={() => setOpenLanguageModal(true)}>
                                            <button className="text-primary text-[14px]">Edit</button>
                                        </div>
                                    </div>
                                )}
                                {/* Language change Pop-Up Start */}
                                <Modal size="lg" dismissible show={openLanguageModal}
                                       onClose={() => setOpenLanguageModal(false)}>
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Change Language</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <h4 className="text-[14px]">Language</h4>
                                            <div className="select-box mt-2" ref={selectBoxRefLanguage}>
                                                <div className="select-option flex"
                                                     onClick={toggleOptionsVisibilityLanguage}>
                                                    <input type="text" placeholder="Select"
                                                           readOnly
                                                           value={selectedOptionLanguage}
                                                           className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                                </div>
                                                {isOptionsVisibleLanguage && (
                                                    <div className="info-content gender_content">
                                                        <ul className="options">
                                                            <li onClick={() => handleOptionClickLanguage("English")}>English</li>
                                                            <li onClick={() => handleOptionClickLanguage("Hindi")}>Hindi</li>
                                                            <li onClick={() => handleOptionClickLanguage("Bangla")}>Bangla</li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenLanguageModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                            </button>
                                            <button onClick={() => setOpenLanguageModal(false)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Language change Pop-Up End */}
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="grid grid-cols-1 mb-4 info-wrapper">
                            <div
                                className="mt-8 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                                <div className="head mb-2">
                                    <h6>Contact Information</h6>
                                </div>
                                <hr/>
                                <div className="mt-4 box">
                                    <p>
                                        Manage your contact information, including your email addresses and phone
                                        numbers.
                                    </p>
                                </div>
                                {loading ? (
                                    <>
                                        <Skeleton height={60} count={1}/>
                                        <Skeleton height={10} count={1}/>
                                    </>
                                ) : (
                                    <div
                                        className="box mt-6 rounded flex items-start justify-between bg-white border px-4 py-4">
                                        <div className="left">
                                            <h6 className="text-[14px]">Email Address</h6>
                                            <p className="mt-0">
                                                janedoe@mail.com
                                            </p>
                                        </div>
                                        <div className="right" onClick={() => setOpenEmailModal(true)}>
                                            <button className="text-primary text-[14px]">Edit</button>
                                        </div>
                                    </div>
                                )}

                                <Modal size="lg"
                                       dismissible={!openAddEmailModal && !OpenEmailMakePrimaryModal && !OpenEmailRemoveModal}
                                       show={openEmailModal}
                                       onClose={() => setOpenEmailModal(false)}
                                       style={{
                                           backgroundColor: 'rgb(17 24 39 / 50%)',
                                           padding: '0px',
                                       }}
                                       className="modal_cntrl"
                                >
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Email Address</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <p>
                                                Your email helps you sign in, receive notifications, reset your
                                                password easily, and more. Your email in your profile is visible to
                                                you only.
                                            </p>

                                            <div className="mt-4 flex items-center justify-between">
                                                <h4 className="text-[16px]">3 email addresses</h4>
                                                <button onClick={() => setOpenAddEmailModal(true)}
                                                        className="text-primary flex items-center gap-1 text-[14px]">
                                                    <HiOutlinePlusCircle size={17}/>
                                                    Add new email address
                                                </button>
                                            </div>

                                            <div className="box mt-3 rounded bg-white border px-4 py-2">
                                                <h6 className="text-[14px]">janedoe@mail.com</h6>
                                                <p className="mt-0">
                                                    Primary
                                                </p>
                                            </div>

                                            <div
                                                className="box mt-2 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">
                                                        janedoe55@mail.com
                                                    </h6>
                                                    <button onClick={() => setOpenEmailMakePrimaryModal(true)}
                                                            type='button' className="mt-0 text-[14px] text-primary">
                                                        Make Primary
                                                    </button>
                                                </div>
                                                <div className="right">
                                                    <button onClick={() => setOpenEmailRemoveModal(true)}
                                                            className="text-primary flex gap-1 items-center text-[14px]">
                                                        <HiOutlineMinusCircle size={17}/>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>

                                            <div
                                                className="box mt-2 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">
                                                        janedoe22@mail.com
                                                    </h6>
                                                    <h6 className="mt-0 text-[14px] cursor-pointer text-primary">
                                                        Confirm
                                                    </h6>
                                                </div>
                                                <div className="right">
                                                    <button onClick={() => setOpenEmailRemoveModal(true)}
                                                            className="text-primary flex gap-1 items-center text-[14px]">
                                                        <HiOutlineMinusCircle size={17}/>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
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

                                {/* Add Email Pop-Up Start */}
                                <Modal size="lg"
                                       show={openAddEmailModal}
                                       onClose={() => setOpenAddEmailModal(false)}
                                       style={{
                                           backgroundColor: 'rgb(17 24 39 / 15%)',
                                           padding: '0',
                                       }}
                                       className="modal_cntrl"
                                >
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Add New Email Address</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <h4 className="text-[14px]">Enter New Email</h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                placeholder="Enter new email"
                                            />
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenAddEmailModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                                Back
                                            </button>
                                            <button onClick={() => setOpenEmailPasswordModal(true)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                                Continue
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Add Email Pop-Up End */}

                                {/* Email Password Pop-Up Start */}
                                <Modal size="lg"
                                       show={openEmailPasswordModal}
                                       onClose={() => setOpenEmailPasswordModal(false)}
                                       style={{
                                           backgroundColor: 'rgb(17 24 39 / 20%)',
                                           padding: '0',
                                       }}
                                       className="modal_cntrl"
                                >
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Enter Password</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <p>
                                                For security purposes, please enter your password to add this<br/>
                                                email.
                                            </p>
                                            <h4 className="text-[14px] mt-2">Enter Password</h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                placeholder="******"
                                            />
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenEmailPasswordModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                                Back
                                            </button>
                                            <button onClick={() => setOpenConfirmEmailModal(true)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                                Add Email
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Email Password Pop-Up End */}

                                {/* Confirm Email Pop-Up Start */}
                                <Modal size="lg"
                                       show={openConfirmEmailModal}
                                       onClose={() => setOpenConfirmEmailModal(false)}
                                       style={{
                                           backgroundColor: 'rgb(17 24 39 / 20%)',
                                           padding: '0',
                                       }}
                                       className="modal_cntrl"
                                >
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Confirm Email</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <p>
                                                We’ll send you a confirmation link to janedoe22@gmail.com to
                                                confirm this email address.
                                            </p>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenConfirmEmailModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                                Cancel
                                            </button>
                                            <button onClick={handleConfirmPopEmailButtonClick}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                                Confirm
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Confirm Email Pop-Up End */}

                                {/*--------------------- Phone Start */}
                                {loading ? (
                                    <>
                                        <Skeleton height={60} count={1}/>
                                        <Skeleton height={10} count={1}/>
                                    </>
                                ) : (
                                    <div
                                        className="box mt-4 rounded flex items-start justify-between bg-white border px-4 py-4">
                                        <div className="left">
                                            <h6 className="text-[14px]">Phone Number</h6>
                                            <p className="mt-0">
                                                +123 234 234 566
                                            </p>
                                        </div>
                                        <div className="right" onClick={() => setOpenPhoneModal(true)}>
                                            <button className="text-primary text-[14px]">Edit</button>
                                        </div>
                                    </div>
                                )}
                                <Modal size="lg"
                                       show={openPhoneModal}
                                       dismissible={!openAddPhoneModal && !OpenPhoneMakePrimaryModal && !OpenPhoneRemoveModal}
                                       onClose={() => setOpenPhoneModal(false)}
                                       style={{
                                           backgroundColor: 'rgb(17 24 39 / 50%)',
                                           padding: '0',
                                       }}
                                       className="modal_cntrl"
                                >
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Phone Number</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <p>
                                                Adding your phone number helps you receive notifications, reset your
                                                password easily, and more. Your phone number in your profile is
                                                visible
                                                to you only.
                                            </p>

                                            <div className="mt-4 flex items-center justify-between">
                                                <h4 className="text-[16px]">3 phone numbers</h4>
                                                <button onClick={() => setOpenAddPhoneModal(true)}
                                                        className="text-primary flex gap-1 items-center text-[14px]">
                                                    <HiOutlinePlusCircle size={17}/>
                                                    Add new phone number
                                                </button>
                                            </div>

                                            <div className="box mt-3 rounded bg-white border px-4 py-2">
                                                <h6 className="text-[14px]">+886 154 141 115</h6>
                                                <p className="mt-0">
                                                    Primary
                                                </p>
                                            </div>

                                            <div
                                                className="box mt-2 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">
                                                        +886 754 458 578
                                                    </h6>
                                                    <button onClick={() => setOpenPhoneMakePrimaryModal(true)}
                                                            type='button' className="mt-0 text-[14px] text-primary">
                                                        Make Primary
                                                    </button>
                                                </div>
                                                <div className="right">
                                                    <button onClick={() => setOpenPhoneRemoveModal(true)} type='button'
                                                            className="text-primary gap-1 flex items-center text-[14px]">
                                                        <HiOutlineMinusCircle size={17}/>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>

                                            <div
                                                className="box mt-2 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">
                                                        +886 564 455 775
                                                    </h6>
                                                    <button onClick={() => setOpenPhoneMakePrimaryModal(true)}
                                                            type='button' className="mt-0 text-[14px] text-primary">
                                                        Make Primary
                                                    </button>
                                                </div>
                                                <div className="right">
                                                    <button onClick={() => setOpenPhoneRemoveModal(true)} type='button'
                                                            className="text-primary gap-1 flex items-center text-[14px]">
                                                        <HiOutlineMinusCircle size={17}/>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
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

                                {/* Add Phone Pop-Up Start */}
                                <Modal size="lg"
                                       show={openAddPhoneModal}
                                       onClose={() => setOpenAddPhoneModal(false)}
                                       style={{
                                           backgroundColor: 'rgb(17 24 39 / 15%)',
                                           padding: '0',
                                       }}
                                       className="modal_cntrl"
                                >
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Add New Phone Number</h4>
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
                                            <button onClick={() => setOpenAddPhoneModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                                Back
                                            </button>
                                            <button onClick={() => setOpenPhoneVModal(true)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                                Continue
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Add Phone Pop-Up End */}

                                {/* Phone Verify Pop-Up Start */}
                                <Modal size="lg"
                                       show={openPhoneVModal}
                                       onClose={() => setOpenPhoneVModal(false)}
                                       style={{
                                           backgroundColor: 'rgb(17 24 39 / 20%)',
                                           padding: '0',
                                       }}
                                       className="modal_cntrl"
                                >
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Get Verification Code</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <p>
                                                Nosres will send you a verification code at +134522334 to make sure
                                                this
                                                number is yours.
                                            </p>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenPhoneVModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                                Back
                                            </button>
                                            <button onClick={() => setOpenConfirmVCodePhoneModal(true)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                                Get Code
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Phone Verify Pop-Up End */}

                                {/* Confirm Code Phone Pop-Up Start */}
                                <Modal size="lg"
                                       show={openConfirmVCodePhoneModal}
                                       onClose={() => setOpenConfirmVCodePhoneModal(false)}
                                       style={{
                                           backgroundColor: 'rgb(17 24 39 / 20%)',
                                           padding: '0',
                                       }}
                                       className="modal_cntrl"
                                >
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Enter Verification Code</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <p>
                                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                We've just send you an SMS at +134522334 with a verification code.
                                                Please wait al least 5 minutes before requesting another
                                                verification
                                                code.
                                                <span className="text-primary cursor-pointer"> Resend Code</span>
                                            </p>
                                            <h4 className="text-[14px] mt-4">Enter Code</h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                placeholder="Enter verification code"
                                            />
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenConfirmVCodePhoneModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                                Cancel
                                            </button>
                                            <button onClick={handleConfirmPopPhoneButtonClick}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                                Verify
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* ConfirmV Code Phone Pop-Up End */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Email remove modal */}
            <Modal size="lg"
                   show={OpenEmailRemoveModal}
                   onClose={() => setOpenEmailRemoveModal(false)}
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
                        <button onClick={() => setOpenEmailRemoveModal(false)}
                                className="px-8 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                            Back
                        </button>
                        <button onClick={handleEmailRemoveButtonClick}
                                className="px-8 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                            Remove
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>

            {/* Email primary modal */}
            <Modal size="lg"
                   show={OpenEmailMakePrimaryModal}
                   onClose={() => setOpenEmailMakePrimaryModal(false)}
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
                        <button onClick={() => setOpenEmailMakePrimaryModal(false)}
                                className="px-8 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                            Back
                        </button>
                        <button onClick={handleEmailPrimaryButtonClick}
                                className="px-8 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                            Make Primary
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>

            {/* Phone remove modal */}
            <Modal size="lg"
                   show={OpenPhoneRemoveModal}
                   onClose={() => setOpenPhoneRemoveModal(false)}
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
                        <button onClick={() => setOpenPhoneRemoveModal(false)}
                                className="px-8 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                            Back
                        </button>
                        <button onClick={handlePhoneRemoveButtonClick}
                                className="px-8 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                            Remove
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>

            {/* Phone primary modal */}
            <Modal size="lg"
                   show={OpenPhoneMakePrimaryModal}
                   onClose={() => setOpenPhoneMakePrimaryModal(false)}
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
                        <button onClick={() => setOpenPhoneMakePrimaryModal(false)}
                                className="px-8 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                            Back
                        </button>
                        <button onClick={handlePhonePrimaryButtonClick}
                                className="px-8 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                            Make Primary
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
        ;
};

export default Page;