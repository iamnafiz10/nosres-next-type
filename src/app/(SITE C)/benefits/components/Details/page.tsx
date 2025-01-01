import React from 'react';
import {HiOutlineCheck} from "react-icons/hi";
const Page = () => {
    return (
        <>
            <section id="benefits-details-section">
                <div className="container pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="col">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_814_392)">
                                    <path
                                        d="M50.0002 3.69995C75.5002 3.69995 96.3002 24.5 96.3002 50C96.3002 75.5 75.5002 96.3 50.0002 96.3C24.5002 96.3 3.7002 75.5 3.7002 50C3.7002 24.5 24.5002 3.69995 50.0002 3.69995ZM50.0002 0.699951C22.8002 0.699951 0.700195 22.7999 0.700195 50C0.700195 77.2 22.8002 99.3 50.0002 99.3C77.2002 99.3 99.3002 77.2 99.3002 50C99.3002 22.7999 77.2002 0.699951 50.0002 0.699951Z"
                                        fill="#4C7FBB"></path>
                                    <path d="M50.0005 32.2V70.4" stroke="#4C7FBB" strokeWidth="3"
                                          strokeMiterlimit="10" strokeLinecap="square"></path>
                                    <path d="M69.1003 50H30.8003" stroke="#4C7FBB" strokeWidth="3"
                                          strokeMiterlimit="10" strokeLinecap="square"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_814_392">
                                        <rect width="100" height="100" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            <h4 className="text-[20px] mt-4">Health and Wellness</h4>
                            <p className="mt-4">
                                We strive to keep our employees healthy and well. We encourage them to maintain a
                                healthy lifestyle and overall well-being. Therefore, we design the following health
                                benefits for them at no cost.
                            </p>
                            <ul className="mt-4 space-y-1">
                                <li className="flex items-center text-[14px] text-[#828D9E]">
                                    <span className="w-10">
                                        <HiOutlineCheck size={30} className="text-primary"/>
                                    </span>
                                    <div className="w-full">On-site balanced meals and healthy snacks</div>
                                </li>
                                <li className="flex items-center text-[14px] text-[#828D9E]">
                                    <span className="w-10">
                                        <HiOutlineCheck size={30} className="text-primary"/>
                                    </span>
                                    <div className="w-full">Nearby fitness centers to exercise regularly and
                                        be physically active
                                    </div>
                                </li>
                                <li className="flex items-center text-[14px] text-[#828D9E]">
                                    <span className="w-10">
                                        <HiOutlineCheck size={30} className="text-primary"/>
                                    </span>
                                    <div className="w-full">
                                        Medical, dental, and vision insurance for employees and dependents
                                    </div>
                                </li>
                                <li className="flex items-center text-[14px] text-[#828D9E]">
                                    <span className="w-10">
                                        <HiOutlineCheck size={30} className="text-primary"/>
                                    </span>
                                    <div className="w-full">
                                        Assistance programs that help with mental health
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_815_399)">
                                    <path
                                        d="M50.0002 3.69995C75.5002 3.69995 96.3002 24.5 96.3002 50C96.3002 75.5 75.5002 96.3 50.0002 96.3C24.5002 96.3 3.7002 75.5 3.7002 50C3.7002 24.5 24.5002 3.69995 50.0002 3.69995ZM50.0002 0.699951C22.8002 0.699951 0.700195 22.7999 0.700195 50C0.700195 77.2 22.8002 99.3 50.0002 99.3C77.2002 99.3 99.3002 77.2 99.3002 50C99.3002 22.7999 77.2002 0.699951 50.0002 0.699951Z"
                                        fill="#4C7EB8"></path>
                                    <path
                                        d="M43.8004 61.9C45.1004 63.2 46.8004 64 48.8004 64.4V51.1C47.0004 50.7 45.5004 50.2 44.2004 49.7C42.9004 49.2 41.8004 48.6 41.0004 47.8C40.1004 47.1 39.5004 46.2 39.1004 45.2C38.7004 44.2 38.5004 42.9 38.5004 41.4C38.5004 39.9 38.8004 38.5 39.3004 37.3C39.8004 36 40.6004 35 41.5004 34C42.4004 33.1 43.5004 32.4 44.8004 31.8C46.1004 31.3 47.4004 30.9 48.8004 30.8V27.5H51.6004V30.9C54.3004 31.2 56.5004 32.2 58.1004 33.9C59.7004 35.6 60.8004 37.9 61.5004 40.8H57.2004C56.5004 37.5 54.7004 35.6 51.6004 35V47.3L54.6004 48.1C55.3004 48.3 56.1004 48.6 57.0004 49C57.9004 49.4 58.8004 50 59.6004 50.7C60.4004 51.4 61.1004 52.4 61.7004 53.5C62.3004 54.6 62.6004 55.9 62.6004 57.5C62.6004 59.1 62.3004 60.6 61.8004 61.9C61.2004 63.2 60.5004 64.3 59.5004 65.2C58.5004 66.1 57.4004 66.8 56.0004 67.4C54.7004 67.9 53.2004 68.3 51.6004 68.4V72.5H48.8004V68.4C45.5004 68.1 42.8004 66.9 40.8004 64.9C38.8004 62.9 37.7004 60.2 37.4004 56.7H41.7004C41.8004 58.8 42.5004 60.6 43.8004 61.9ZM44.7004 36.6C43.6004 37.6 43.0004 39 43.0004 40.9C43.0004 41.8 43.1004 42.5 43.4004 43.1C43.7004 43.7 44.1004 44.2 44.6004 44.7C45.1004 45.1 45.7004 45.5 46.4004 45.8C47.1004 46.1 47.9004 46.4 48.7004 46.6V34.9C47.2004 35.1 45.8004 35.6 44.7004 36.6ZM54.1004 63.9C54.9004 63.6 55.6004 63.2 56.2004 62.7C56.8004 62.2 57.2004 61.5 57.6004 60.7C57.9004 59.9 58.1004 59 58.1004 57.9C58.1004 56.9 57.9004 56.1 57.6004 55.5C57.3004 54.8 56.8004 54.3 56.2004 53.8C55.6004 53.3 54.9004 52.9 54.1004 52.6C53.3004 52.3 52.4004 52 51.5004 51.7V64.3C52.5004 64.3 53.3004 64.1 54.1004 63.9Z"
                                        fill="#4C7EB8"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_815_399">
                                        <rect width="100" height="100" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            <h4 className="text-[20px] mt-4">Financial Health</h4>
                            <p className="mt-4">
                                According to research, financial stress has a negative impact on health. Therefore, we
                                provide them financial benefits and services to help you improve your financial health
                                to reduce stress. They are as follows:
                            </p>
                            <ul className="mt-4 space-y-1">
                                <li className="flex items-center text-[14px] text-[#828D9E]">
                                    <span className="w-10">
                                        <HiOutlineCheck size={30} className="text-primary"/>
                                    </span>
                                    <div className="w-full">
                                        Competitive compensation
                                    </div>
                                </li>
                                <li className="flex items-center text-[14px] text-[#828D9E]">
                                    <span className="w-10">
                                        <HiOutlineCheck size={30} className="text-primary"/>
                                    </span>
                                    <div className="w-full">
                                        Financial coaching
                                    </div>
                                </li>
                                <li className="flex items-center text-[14px] text-[#828D9E]">
                                   <span className="w-10">
                                        <HiOutlineCheck size={30} className="text-primary"/>
                                    </span>
                                    <div className="w-full">
                                        Competitive retirement plan
                                    </div>
                                </li>
                                <li className="flex items-center text-[14px] text-[#828D9E]">
                                     <span className="w-10">
                                        <HiOutlineCheck size={30} className="text-primary"/>
                                    </span>
                                    <div className="w-full">
                                        Bonus and equity awards
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="benefits-details-section-two" className="bg-[#F1F2F2] mt-16">
                <div className="container py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="col">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_815_405)">
                                    <path
                                        d="M50.0002 3.69995C75.5002 3.69995 96.3002 24.5 96.3002 50C96.3002 75.5 75.5002 96.3 50.0002 96.3C24.5002 96.3 3.7002 75.5 3.7002 50C3.7002 24.5 24.5002 3.69995 50.0002 3.69995ZM50.0002 0.699951C22.8002 0.699951 0.700195 22.7999 0.700195 50C0.700195 77.2 22.8002 99.3 50.0002 99.3C77.2002 99.3 99.3002 77.2 99.3002 50C99.3002 22.7999 77.2002 0.699951 50.0002 0.699951Z"
                                        fill="#4C7EB8"></path>
                                    <path d="M50 71V50L63.8 36.2" stroke="#4C7EB8" strokeWidth="3"
                                          strokeMiterlimit="10"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_815_405">
                                        <rect width="100" height="100" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            <h4 className="text-[20px] mt-4">Flexible Working</h4>
                            <p className="mt-4">
                                Nosres is committed to giving employees time away, flexible work schedules, and
                                vacations — whenever they need them — to care for themselves, spend with families, and
                                pursue their interests outside of work whenever they need it.
                            </p>
                            <ul className="mt-4 space-y-1">
                                <li className="flex items-center text-[14px] text-[#828D9E]">
                                      <span className="w-10">
                                        <HiOutlineCheck size={30} className="text-primary"/>
                                    </span>
                                    <div className="w-full">
                                        Regular paid time off work to recharge.
                                    </div>
                                </li>
                                <li className="flex items-center text-[14px] text-[#828D9E]">
                                      <span className="w-10">
                                        <HiOutlineCheck size={30} className="text-primary"/>
                                    </span>
                                    <div className="w-full">
                                        Remote and hybrid work flexibility.
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_815_410)">
                                    <path
                                        d="M50.0002 3.69995C75.5002 3.69995 96.3002 24.5 96.3002 50C96.3002 75.5 75.5002 96.3 50.0002 96.3C24.5002 96.3 3.7002 75.5 3.7002 50C3.7002 24.5 24.5002 3.69995 50.0002 3.69995ZM50.0002 0.699951C22.8002 0.699951 0.700195 22.7999 0.700195 50C0.700195 77.2 22.8002 99.3 50.0002 99.3C77.2002 99.3 99.3002 77.2 99.3002 50C99.3002 22.7999 77.2002 0.699951 50.0002 0.699951Z"
                                        fill="#4C7EB8"></path>
                                    <path
                                        d="M22.3999 41.8V78.9001H29.7999H43.4999H47.9999H51.9999H56.4999H70.1999H77.5999V42.1"
                                        stroke="#4C7EB8" stroke-width="3" stroke-miterlimit="10"></path>
                                    <path d="M18.1001 45.1001L49.5001 21.1001L81.9001 45.3001" stroke="#4C7EB8"
                                          stroke-width="3" stroke-miterlimit="10"></path>
                                    <path
                                        d="M38.9002 53.3001C41.7721 53.3001 44.1002 50.972 44.1002 48.1001C44.1002 45.2283 41.7721 42.9001 38.9002 42.9001C36.0283 42.9001 33.7002 45.2283 33.7002 48.1001C33.7002 50.972 36.0283 53.3001 38.9002 53.3001Z"
                                        stroke="#4C7EB8" stroke-width="3" stroke-miterlimit="10"></path>
                                    <path
                                        d="M61.0999 53.3001C63.9718 53.3001 66.2999 50.972 66.2999 48.1001C66.2999 45.2283 63.9718 42.9001 61.0999 42.9001C58.228 42.9001 55.8999 45.2283 55.8999 48.1001C55.8999 50.972 58.228 53.3001 61.0999 53.3001Z"
                                        stroke="#4C7EB8" stroke-width="3" stroke-miterlimit="10"></path>
                                    <path
                                        d="M50.0001 57.9001C52.4302 57.9001 54.4001 55.9302 54.4001 53.5001C54.4001 51.07 52.4302 49.1001 50.0001 49.1001C47.57 49.1001 45.6001 51.07 45.6001 53.5001C45.6001 55.9302 47.57 57.9001 50.0001 57.9001Z"
                                        stroke="#4C7EB8" stroke-width="3" stroke-miterlimit="10"></path>
                                    <path
                                        d="M53 61.4C54.5 58.5 57.6 56.5 61.1 56.5C63.6 56.5 65.9 57.5 67.5 59.2C69.1 60.8 70.2 63.1 70.2 65.6V69.6"
                                        stroke="#4C7EB8" stroke-width="3" stroke-miterlimit="10" stroke-linecap="square"
                                        stroke-linejoin="round"></path>
                                    <path
                                        d="M43.5 69.6002V67.3002C43.5 64.8002 44.9 62.6002 47 61.5002C47.9 61.0002 48.9 60.7002 50 60.7002C51.1 60.7002 52.1 61.0002 53 61.5002C53.6 61.8002 54.1 62.2002 54.6 62.7002C55.8 63.9002 56.5 65.5002 56.5 67.3002V69.6002"
                                        stroke="#4C7EB8" stroke-width="3" stroke-miterlimit="10"></path>
                                    <path
                                        d="M70.2003 69.6H56.5003H43.5003H29.8003V65.6C29.8003 60.6 33.9003 56.5 38.9003 56.5C41.4003 56.5 43.7003 57.5 45.3003 59.2C46.0003 59.9 46.5003 60.6 46.9003 61.4"
                                        stroke="#4C7EB8" stroke-width="3" stroke-miterlimit="10"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_815_410">
                                        <rect width="100" height="100" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            <h4 className="text-[20px] mt-4">Family Support</h4>
                            <p className="mt-4">
                                Nosres also cares about your loved ones. So, we provide programs to help you support
                                them.
                            </p>
                            <ul className="mt-4 space-y-1">
                                <li className="flex items-center text-[14px] text-[#828D9E]">
                                        <span className="w-10">
                                        <HiOutlineCheck size={30} className="text-primary"/>
                                    </span>
                                    <div className="w-full">
                                        Paid parental (maternity, paternity, and adoption) leave for new parents
                                    </div>
                                </li>
                                <li className="flex items-center text-[14px] text-[#828D9E]">
                                        <span className="w-10">
                                        <HiOutlineCheck size={30} className="text-primary"/>
                                    </span>
                                    <div className="w-full">
                                        Subsidized backup childcare
                                    </div>
                                </li>
                                <li className="flex items-center text-[14px] text-[#828D9E]">
                                        <span className="w-10">
                                        <HiOutlineCheck size={30} className="text-primary"/>
                                    </span>
                                    <div className="w-full">
                                        Parenting classes
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="benefits-details-section-three">
                <div className="container py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="col">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_815_423)">
                                    <path
                                        d="M50.0002 3.69995C75.5002 3.69995 96.3002 24.5 96.3002 50C96.3002 75.5 75.5002 96.3 50.0002 96.3C24.5002 96.3 3.7002 75.5 3.7002 50C3.7002 24.5 24.5002 3.69995 50.0002 3.69995ZM50.0002 0.699951C22.8002 0.699951 0.700195 22.7999 0.700195 50C0.700195 77.2 22.8002 99.3 50.0002 99.3C77.2002 99.3 99.3002 77.2 99.3002 50C99.3002 22.7999 77.2002 0.699951 50.0002 0.699951Z"
                                        fill="#4C7EB8"></path>
                                    <path d="M51.5005 76.6V76.5" stroke="#4C7EB8" strokeWidth="3"
                                          strokeMiterlimit="10"></path>
                                    <path d="M37.3003 63.7999V63.7" stroke="#4C7EB8" strokeWidth="3"
                                          strokeMiterlimit="10"></path>
                                    <path
                                        d="M30.9003 58L26.8003 54.3L21.3003 49.4C14.5003 43.3 14.0003 32.8 20.1003 26C21.3003 24.7 22.6003 23.6 24.0003 22.8C26.6003 21.3 29.5003 20.5 32.4003 20.5C35.9003 20.5 39.4003 21.6 42.3003 23.8C42.7003 24.1 43.1003 24.4 43.4003 24.7L50.2003 30.8"
                                        stroke="#4C7EB8" strokeWidth="3" strokeMiterlimit="10"></path>
                                    <path
                                        d="M42.0005 59.0999L37.4005 63.6999L36.4005 64.6999C36.3005 64.7999 36.2005 64.8999 36.1005 64.8999C34.4005 66.2999 31.9005 66.2999 30.3005 64.6999C29.5005 63.8999 29.0005 62.7999 29.0005 61.6999C29.0005 60.5999 29.4005 59.4999 30.3005 58.6999L31.0005 57.9999L36.0005 52.9999L45.3005 43.6999C45.9005 43.0999 46.8005 43.0999 47.4005 43.5999L50.2005 46.0999C51.2005 46.9999 52.3005 47.3999 53.5005 47.4999H53.6005C53.7005 47.4999 53.9005 47.4999 54.0005 47.4999C55.6005 47.4999 57.1005 46.8999 58.3005 45.5999C59.4005 44.3999 59.9005 42.7999 59.8005 41.2999V41.1999C59.7005 39.7999 59.0005 38.4999 57.9005 37.4999L54.5005 34.3999L50.3005 30.9999L42.5005 23.8999"
                                        stroke="#4C7EB8" strokeWidth="3" strokeMiterlimit="10"></path>
                                    <path
                                        d="M67.9002 56.6C66.9002 54.7 67.2002 52.3 68.8002 50.8C69.4002 50.2 70.2002 49.8 70.9002 49.5C71.4002 49.4 71.8002 49.3 72.3002 49.3C73.6002 49.3 74.9002 49.8 75.8002 50.8L76.5002 51.5L79.5002 54.5C81.4002 56.4 81.4002 59.6 79.5002 61.6C78.5002 62.6 77.2002 63.1 76.0002 63.1C75.0002 63.1 74.0002 62.8 73.2002 62.3"
                                        stroke="#4C7EB8" strokeWidth="3" strokeMiterlimit="10"></path>
                                    <path
                                        d="M66.4005 55L72.5005 61.0999C74.4005 62.9999 74.4005 66.1999 72.5005 68.1999C70.6005 70.0999 67.4005 70.0999 65.4005 68.1999L59.3005 62.0999C57.4005 60.1999 57.4005 57 59.3005 55C61.2005 53.1 64.4005 53.1 66.4005 55Z"
                                        stroke="#4C7EB8" strokeWidth="3" strokeMiterlimit="10"></path>
                                    <path
                                        d="M66.7002 69.1999C67.8002 71.0999 67.5002 73.5999 65.9002 75.1999C64.9002 76.1999 63.6002 76.6999 62.4002 76.6999C61.1002 76.6999 59.8002 76.1999 58.9002 75.1999L56.0002 72.3C54.1002 70.4 54.1002 67.1999 56.0002 65.1999C57.0002 64.1999 58.3002 63.7 59.5002 63.7C60.1002 63.7 60.7002 63.8 61.3002 64"
                                        stroke="#4C7EB8" strokeWidth="3" strokeMiterlimit="10"></path>
                                    <path
                                        d="M36.1004 65C34.8004 66.8 35.0004 69.3 36.6004 70.9L37.0004 71.3C38.5004 72.8 40.8004 73 42.5004 72.1"
                                        stroke="#4C7EB8" strokeWidth="3" strokeMiterlimit="10"></path>
                                    <path
                                        d="M51.5002 76.5L50.0002 78.1C48.2002 79.9 45.3002 79.9 43.5002 78.1L43.1002 77.7C41.6002 76.2 41.4002 73.9 42.4002 72.1C42.6002 71.8 42.8002 71.5 43.1002 71.2L44.3002 70L48.6002 65.7"
                                        stroke="#4C7EB8" strokeWidth="3" strokeMiterlimit="10"></path>
                                    <path
                                        d="M50.3003 31L55.8003 25.5C59.2003 22.1 63.8003 20.5 68.3003 20.7C71.5003 20.9 74.6003 21.9 77.2003 23.8C77.2003 23.8 77.2003 23.8 77.3003 23.8C78.0003 24.3 78.6003 24.8 79.2003 25.4C80.9003 27.1 82.2003 29.1 83.0003 31.3C83.0003 31.4 83.1003 31.5 83.1003 31.6C83.7003 33.4 84.0003 35.2 84.0003 37.1C84.0003 41.2 82.5003 45.3 79.5003 48.4C79.4003 48.5 79.3003 48.7 79.1003 48.8L76.5003 51.4"
                                        stroke="#4C7EB8" strokeWidth="3" strokeMiterlimit="10"></path>
                                    <path d="M55.9005 72.2L51.5005 76.6" stroke="#4C7EB8" strokeWidth="3"
                                          strokeMiterlimit="10"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_815_423">
                                        <rect width="100" height="100" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            <h4 className="text-[20px] mt-4">Community</h4>
                            <p className="mt-4">
                                Nosres is committed to making the world a better place. Therefore, we back and empower
                                communities both internally and externally.
                            </p>
                            <ul className="mt-4 space-y-1">
                                <li className="flex items-center text-[14px] text-[#828D9E]">
                                         <span className="w-10">
                                        <HiOutlineCheck size={30} className="text-primary"/>
                                    </span>
                                    <div className="w-full">
                                        Education, including online classes
                                    </div>
                                </li>
                                <li className="flex items-center text-[14px] text-[#828D9E]">
                                         <span className="w-10">
                                        <HiOutlineCheck size={30} className="text-primary"/>
                                    </span>
                                    <div className="w-full">
                                        Internal employee clubs to connect with other employees
                                    </div>
                                </li>
                                <li className="flex items-center text-[14px] text-[#828D9E]">
                                         <span className="w-10">
                                        <HiOutlineCheck size={30} className="text-primary"/>
                                    </span>
                                    <div className="w-full">
                                        External community groups to volunteer and make a difference
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;