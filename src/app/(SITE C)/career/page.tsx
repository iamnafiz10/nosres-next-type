'use client';
import React, {useEffect, useState} from 'react';
import {HiUserCircle} from "react-icons/hi";
import {GoQuestion} from "react-icons/go";
import {
    HiOutlineIdentification,
    HiOutlineFolder,
    HiOutlineBookmark,
} from "react-icons/hi2";
import Link from "next/link";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {LuBellRing, LuPalette} from "react-icons/lu";
import {Checkbox, Label, Modal} from "flowbite-react";

const Page = () => {
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

    // Popup
    const [openOneModal, setOpenOneModal] = useState<boolean>(false);
    const [openTwoModal, setOpenTwoModal] = useState<boolean>(false);
    const [openThreeModal, setOpenThreeModal] = useState<boolean>(false);
    const [openFourModal, setOpenFourModal] = useState<boolean>(false);
    const [openFiveModal, setOpenFiveModal] = useState<boolean>(false);
    const [openSixModal, setOpenSixModal] = useState<boolean>(false);
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
                                                <HiOutlineIdentification size={25}
                                                                         className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3">Information</span>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="#"
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
                                                           className="text-primary w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3 font-semibold">Career Interests</span>
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
                            <div className="grid grid-cols-1 mb-4 info-wrapper">

                                {/*First*/}
                                <div className="col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                                    {loading ? (
                                        <>
                                            <Skeleton height={30} count={1}/>
                                            <Skeleton height={80} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div className="head mb-2">
                                                <h6 className="font-700">Career Interests Form</h6>
                                            </div>
                                            <div className="mt-4 box">
                                                <h4 className="text-[14px]">
                                                    Tell us about your career goals to help us find the best
                                                    opportunities for you!
                                                </h4>
                                            </div>

                                            <div
                                                className="box mt-4 rounded flex items-start justify-between bg-white">
                                                <div className="left">
                                                    <h4 className="text-[12px] text-gray-500">
                                                        Turn on job alerts to receive personalized job recommendations
                                                        based on your <br/> career interests.
                                                    </h4>
                                                </div>
                                                <div className="right">
                                                    <label className="inline-flex items-center me-5 cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            className="sr-only peer"/>
                                                        <div
                                                            className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-teal-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                                                    </label>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 mb-4 info-wrapper">
                                    {/*One*/}
                                    <div className="mt-6 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                                        <div className="head mb-2">
                                            <h6>Preferred Job Titles</h6>
                                        </div>
                                        <hr/>
                                        <div className="mt-4 box">
                                            <p>
                                                Enter the job roles you are interested in.
                                            </p>
                                        </div>
                                        {loading ? (
                                            <>
                                                <Skeleton height={60} count={1}/>
                                                <Skeleton height={10} count={1}/>
                                            </>
                                        ) : (
                                            <div
                                                className="box mt-4 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">Preferred Job Title</h6>
                                                    <h4 className="mt-0 text-[12px] text-gray-500">Not stated</h4>
                                                </div>
                                                <div className="right">
                                                    <button onClick={() => setOpenOneModal(true)} type="button"
                                                            className="text-primary text-[14px]">Edit
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/*Two*/}
                                    <div className="mt-6 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                                        <div className="head mb-2">
                                            <h6>Desired Locations</h6>
                                        </div>
                                        <hr/>
                                        <div className="mt-4 box">
                                            <p>
                                                Select where you’d like to work.
                                            </p>
                                        </div>
                                        {loading ? (
                                            <>
                                                <Skeleton height={60} count={1}/>
                                                <Skeleton height={10} count={1}/>
                                            </>
                                        ) : (
                                            <div
                                                className="box mt-4 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">Desired Location</h6>
                                                    <h4 className="mt-0 text-[12px] text-gray-500">Not stated</h4>
                                                </div>
                                                <div className="right">
                                                    <button onClick={() => setOpenTwoModal(true)} type="button"
                                                            className="text-primary text-[14px]">Edit
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/*Three*/}
                                    <div className="mt-6 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                                        <div className="head mb-2">
                                            <h6>Team of Interest</h6>
                                        </div>
                                        <hr/>
                                        <div className="mt-4 box">
                                            <p>
                                                Choose teams you’re passionate about.
                                            </p>
                                        </div>
                                        {loading ? (
                                            <>
                                                <Skeleton height={60} count={1}/>
                                                <Skeleton height={10} count={1}/>
                                            </>
                                        ) : (
                                            <div
                                                className="box mt-4 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">Team of Interest</h6>
                                                    <h4 className="mt-0 text-[12px] text-gray-500">Not stated</h4>
                                                </div>
                                                <div className="right">
                                                    <button onClick={() => setOpenThreeModal(true)} type="button"
                                                            className="text-primary text-[14px]">Edit
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/*Four*/}
                                    <div className="mt-6 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                                        <div className="head mb-2">
                                            <h6>Preferred Degree</h6>
                                        </div>
                                        <hr/>
                                        <div className="mt-4 box">
                                            <p>
                                                Select your preferred degree.
                                            </p>
                                        </div>
                                        {loading ? (
                                            <>
                                                <Skeleton height={60} count={1}/>
                                                <Skeleton height={10} count={1}/>
                                            </>
                                        ) : (
                                            <div
                                                className="box mt-4 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">Preferred Degree</h6>
                                                    <h4 className="mt-0 text-[12px] text-gray-500">Not stated</h4>
                                                </div>
                                                <div className="right">
                                                    <button onClick={() => setOpenFourModal(true)} type="button"
                                                            className="text-primary text-[14px]">Edit
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/*Five*/}
                                    <div className="mt-6 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                                        <div className="head mb-2">
                                            <h6>Employment Type</h6>
                                        </div>
                                        <hr/>
                                        <div className="mt-4 box">
                                            <p>
                                                Select what works best for you.
                                            </p>
                                        </div>
                                        {loading ? (
                                            <>
                                                <Skeleton height={60} count={1}/>
                                                <Skeleton height={10} count={1}/>
                                            </>
                                        ) : (
                                            <div
                                                className="box mt-4 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">Employment Type</h6>
                                                    <h4 className="mt-0 text-[12px] text-gray-500">Not stated</h4>
                                                </div>
                                                <div className="right">
                                                    <button onClick={() => setOpenFiveModal(true)} type="button"
                                                            className="text-primary text-[14px]">Edit
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/*Six*/}
                                    <div className="mt-6 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                                        <div className="head mb-2">
                                            <h6>Keywords</h6>
                                        </div>
                                        <hr/>
                                        <div className="mt-4 box">
                                            <p>
                                                Add specific skills, certifications, or tools you’d like in your ideal
                                                job.
                                            </p>
                                        </div>
                                        {loading ? (
                                            <>
                                                <Skeleton height={60} count={1}/>
                                                <Skeleton height={10} count={1}/>
                                            </>
                                        ) : (
                                            <div
                                                className="box mt-4 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">Employment Type</h6>
                                                    <h4 className="mt-0 text-[12px] text-gray-500">Not stated</h4>
                                                </div>
                                                <div className="right">
                                                    <button onClick={() => setOpenSixModal(true)} type="button"
                                                            className="text-primary text-[14px]">Edit
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*One*/}
            <Modal size="lg" dismissible show={openOneModal}
                   onClose={() => setOpenOneModal(false)}>
                <Modal.Header>
                    <h4 className="text-[16px]">Edit Preferred Job Title</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body box">
                        <p>
                            Please list your preferred job titles, separated by commas.
                        </p>
                        <h4 className="text-[14px] mt-3">Add Job Title</h4>
                        <input
                            className="mt-2 rounded w-full pb-[50px] py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                            type="text"
                            placeholder="e.g., UX/UI Design, Front-End Developer, Back-End Engineer"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex w-full items-center justify-between">
                        <button onClick={() => setOpenOneModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#E5E5E8] hover:bg-[#C6C6C6] text-black rounded">
                            Cancel
                        </button>
                        <button onClick={() => setOpenOneModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#4D7FB8] hover:bg-[#3A5F8A] text-white rounded">
                            Save
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
            {/*Two*/}
            <Modal size="lg" dismissible show={openTwoModal}
                   onClose={() => setOpenTwoModal(false)}>
                <Modal.Header>
                    <h4 className="text-[16px]">Edit Desired Location</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body box">
                        <p>
                            Please select where you’d like to work. (You can select more than
                            one)
                        </p>
                        <div id="checkbox" className="mt-3">
                            <div className="flex items-center gap-2">
                                <Checkbox id="sone"/>
                                <Label htmlFor="sone" className="text-gray-500 font-normal">
                                    Remote
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="stwo" defaultChecked/>
                                <Label htmlFor="stwo" className="text-gray-500 font-normal">
                                    In Office
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="sthree"/>
                                <Label htmlFor="sthree" className="text-gray-500 font-normal">
                                    Hybrid
                                </Label>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex w-full items-center justify-between">
                        <button onClick={() => setOpenTwoModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#E5E5E8] hover:bg-[#C6C6C6] text-black rounded">
                            Cancel
                        </button>
                        <button onClick={() => setOpenTwoModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#4D7FB8] hover:bg-[#3A5F8A] text-white rounded">
                            Save
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
            {/*Three*/}
            <Modal size="lg" dismissible show={openThreeModal}
                   onClose={() => setOpenThreeModal(false)}>
                <Modal.Header>
                    <h4 className="text-[16px]">Edit Team of Interest</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body box">
                        <p>
                            Please select teams you’re passionate about. (You can select more
                            than one)
                        </p>
                        <div id="checkbox" className="mt-3">
                            <div className="flex items-center gap-2">
                                <Checkbox id="sone"/>
                                <Label htmlFor="sone" className="text-gray-500 font-normal">
                                    Administration
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="stwo" defaultChecked/>
                                <Label htmlFor="stwo" className="text-gray-500 font-normal">
                                    Business Development
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="sthree"/>
                                <Label htmlFor="sthree" className="text-gray-500 font-normal">
                                    Business Operations
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="sfour"/>
                                <Label htmlFor="sfour" className="text-gray-500 font-normal">
                                    Customer Service
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="sfive"/>
                                <Label htmlFor="sfive" className="text-gray-500 font-normal">
                                    Design
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="ssix"/>
                                <Label htmlFor="ssix" className="text-gray-500 font-normal">
                                    Engineering & Technology
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="sseven"/>
                                <Label htmlFor="sseven" className="text-gray-500 font-normal">
                                    Finance
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="seight"/>
                                <Label htmlFor="seight" className="text-gray-500 font-normal">
                                    Human Resources
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="snine"/>
                                <Label htmlFor="snine" className="text-gray-500 font-normal">
                                    Legal
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="sten"/>
                                <Label htmlFor="sten" className="text-gray-500 font-normal">
                                    Marketing
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="seleven"/>
                                <Label htmlFor="seleven" className="text-gray-500 font-normal">
                                    Public Relations
                                </Label>
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="stwelve"/>
                                <Label htmlFor="stwelve" className="text-gray-500 font-normal">
                                    R&D
                                </Label>
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="sthirteen"/>
                                <Label htmlFor="sthirteen" className="text-gray-500 font-normal">
                                    Sales
                                </Label>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex w-full items-center justify-between">
                        <button onClick={() => setOpenThreeModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#E5E5E8] hover:bg-[#C6C6C6] text-black rounded">
                            Cancel
                        </button>
                        <button onClick={() => setOpenThreeModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#4D7FB8] hover:bg-[#3A5F8A] text-white rounded">
                            Save
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
            {/*Four*/}
            <Modal size="lg" dismissible show={openFourModal}
                   onClose={() => setOpenFourModal(false)}>
                <Modal.Header>
                    <h4 className="text-[16px]">Edit Preferred Degree</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body box">
                        <p>
                            Please select your preferred degree. (You can select more than
                            one)
                        </p>
                        <div id="checkbox" className="mt-3">
                            <div className="flex items-center gap-2">
                                <Checkbox id="sone"/>
                                <Label htmlFor="sone" className="text-gray-500 font-normal">
                                    PhD
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="stwo" defaultChecked/>
                                <Label htmlFor="stwo" className="text-gray-500 font-normal">
                                    Master
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="sthree"/>
                                <Label htmlFor="sthree" className="text-gray-500 font-normal">
                                    Bachelor
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="sfour"/>
                                <Label htmlFor="sfour" className="text-gray-500 font-normal">
                                    Pursuing Degree
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="sfive"/>
                                <Label htmlFor="sfive" className="text-gray-500 font-normal">
                                    Associate
                                </Label>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex w-full items-center justify-between">
                        <button onClick={() => setOpenFourModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#E5E5E8] hover:bg-[#C6C6C6] text-black rounded">
                            Cancel
                        </button>
                        <button onClick={() => setOpenFourModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#4D7FB8] hover:bg-[#3A5F8A] text-white rounded">
                            Save
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
            {/*Five*/}
            <Modal size="lg" dismissible show={openFiveModal}
                   onClose={() => setOpenFiveModal(false)}>
                <Modal.Header>
                    <h4 className="text-[16px]">Edit Employment Type</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body box">
                        <p>
                            Please select what works best for you. (You can select more than
                            one)
                        </p>
                        <div id="checkbox" className="mt-3">
                            <div className="flex items-center gap-2">
                                <Checkbox id="sone"/>
                                <Label htmlFor="sone" className="text-gray-500 font-normal">
                                    Full-Time
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="stwo" defaultChecked/>
                                <Label htmlFor="stwo" className="text-gray-500 font-normal">
                                    Part-Time
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="sthree"/>
                                <Label htmlFor="sthree" className="text-gray-500 font-normal">
                                    Temporary
                                </Label>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <Checkbox id="sfour"/>
                                <Label htmlFor="sfour" className="text-gray-500 font-normal">
                                    Intern
                                </Label>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex w-full items-center justify-between">
                        <button onClick={() => setOpenFiveModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#E5E5E8] hover:bg-[#C6C6C6] text-black rounded">
                            Cancel
                        </button>
                        <button onClick={() => setOpenFiveModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#4D7FB8] hover:bg-[#3A5F8A] text-white rounded">
                            Save
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
            {/*Six*/}
            <Modal size="lg" dismissible show={openSixModal}
                   onClose={() => setOpenSixModal(false)}>
                <Modal.Header>
                    <h4 className="text-[16px]">Edit Keywords</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body box">
                        <p>
                            Please list your keywords, separated by commas.
                        </p>
                        <h4 className="text-[14px] mt-3">Add Skills</h4>
                        <input
                            className="mt-2 rounded w-full pb-[50px] py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                            type="text"
                            placeholder="e.g., Python, Adobe Photoshop, CPA Certification"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex w-full items-center justify-between">
                        <button onClick={() => setOpenSixModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#E5E5E8] hover:bg-[#C6C6C6] text-black rounded">
                            Cancel
                        </button>
                        <button onClick={() => setOpenSixModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#4D7FB8] hover:bg-[#3A5F8A] text-white rounded">
                            Save
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Page;