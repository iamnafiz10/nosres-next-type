import React from 'react';

const Page = () => {
    return (
        <>
            <section id="sustain-section" className="bg-[#F1F2F2] mt-16">
                <div className="container py-16">
                    <div className="head-wrap text-center">
                        <h4 className="text-[24px]">
                            Sustain Nosres Ethics and Compliance
                        </h4>
                        <p className="mt-4">
                            We want to ensure that Nosres, its employees, and other third parties operate ethically and
                            transparently and<br/>
                            prevent harm to the economy and society. Therefore, it is of great importance that we
                            sustain our Ethics and<br/>
                            Compliance policies.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div data-aos="zoom-in" className="col flex flex-col items-center text-center">
                            <svg className="py-2" width="200" height="200" viewBox="0 0 100 100" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1107_33)">
                                    <path
                                        d="M49.9996 99.4001C77.2825 99.4001 99.3996 77.283 99.3996 50.0001C99.3996 22.7172 77.2825 0.600098 49.9996 0.600098C22.7167 0.600098 0.599609 22.7172 0.599609 50.0001C0.599609 77.283 22.7167 99.4001 49.9996 99.4001Z"
                                        fill="white"></path>
                                    <path
                                        d="M47.2996 72.8002H15.5996V27.2002H43.9996C45.7996 27.2002 47.2996 28.7002 47.2996 30.5002V72.8002Z"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"></path>
                                    <path d="M23.7998 48.7002H39.0998" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10"></path>
                                    <path d="M23.7998 53.9001H39.0998" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10"></path>
                                    <path d="M23.7998 59.0002H39.0998" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10"></path>
                                    <path d="M23.7998 64.2002H39.0998" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10"></path>
                                    <path
                                        d="M78.9996 63.6002C77.6996 65.6002 75.3996 66.9002 72.8996 66.9002C70.5996 66.9002 68.4996 65.8002 67.1996 64.1002C66.1996 62.9002 65.5996 61.3002 65.5996 59.6002C65.5996 59.2002 65.5996 58.7002 65.6996 58.3002C65.8996 57.3002 66.2996 56.3002 66.8996 55.4002C68.5996 53.0002 71.4996 51.8002 74.2996 52.4002C76.2996 52.8002 77.8996 54.0002 78.8996 55.6002"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"></path>
                                    <path
                                        d="M78.9998 68.1002V72.8002H47.2998V30.5002C47.2998 28.7002 48.7998 27.2002 50.5998 27.2002H78.9998V51.2002"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"></path>
                                    <path d="M70.8 48.7002H55.5" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10"></path>
                                    <path d="M64.2 53.9001H55.5" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10"></path>
                                    <path d="M62.5 59.0002H55.5" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10"></path>
                                    <path d="M63.6 64.2002H55.5" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10"></path>
                                    <path d="M27.0996 40.1001L30.3996 43.4001L36.8996 36.9001" stroke="#333333"
                                          strokeWidth="0.35" strokeMiterlimit="10"></path>
                                    <path d="M67.2998 42.5002L60.2998 35.5002" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10"></path>
                                    <path d="M60.0996 42.3002L67.4996 35.7002" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10"></path>
                                    <path
                                        d="M79 55.6002C78 54.0002 76.4 52.9002 74.4 52.4002C71.6 51.8002 68.6 53.0002 67 55.4002C66.4 56.3002 66 57.2002 65.8 58.3002C65.7 58.7002 65.7 59.2002 65.7 59.6002C65.7 61.3002 66.3 62.9002 67.3 64.1002C68.6 65.8002 70.7 66.9002 73 66.9002C75.5 66.9002 77.8 65.6002 79.1 63.6002M83.3 59.6002C83.3 56.2002 81.7 53.1002 79 51.1002C78.8 50.9002 78.5 50.8002 78.3 50.6002C73.5 47.7002 67.3 49.1002 64.2 53.8002C64.1 53.9002 64.1 54.0002 64 54.1002C63.5 55.0002 63 56.0002 62.8 57.0002C62.6 57.6002 62.5 58.3002 62.5 59.0002C62.5 59.2002 62.5 59.4002 62.5 59.6002C62.5 61.2002 62.9 62.8002 63.5 64.2002C64.8 66.8002 67.2 68.9002 70.1 69.7002C73.3 70.6002 76.5 69.9002 78.9 68.1002C80 67.3002 80.9 66.4002 81.6 65.2002C81.7 65.1002 81.7 65.0002 81.8 64.9002C81.9 64.8002 81.9 64.7002 82 64.6002C82.1 64.5002 82.1 64.4002 82.2 64.3002C82.3 64.2002 82.3 64.1002 82.4 64.0002V63.9002C82.4 63.8002 82.5 63.7002 82.5 63.6002V63.5002C82.5 63.4002 82.6 63.3002 82.6 63.2002C82.7 63.0002 82.8 62.7002 82.8 62.5002C83.2 61.5002 83.3 60.6002 83.3 59.6002Z"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"></path>
                                    <path
                                        d="M79 63.6001C79.5 62.9001 79.8 62.0001 80 61.1001C80.4 59.1001 80 57.2001 79 55.6001"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"></path>
                                    <path
                                        d="M82.9998 62.4001L88.7998 64.9001C89.3998 65.1001 89.6998 65.7001 89.6998 66.3001C89.6998 67.2001 88.9998 67.8001 88.1998 67.8001C87.9998 67.8001 87.7998 67.8001 87.5998 67.7001L81.7998 65.2001C82.2998 64.3001 82.6998 63.4001 82.9998 62.4001Z"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"></path>
                                    <path
                                        d="M74 54.4003C71.9 54.0003 69.7 54.8003 68.5 56.6003C68.1 57.2003 67.8 58.0003 67.6 58.7003C67.5 59.0003 67.5 59.3003 67.5 59.7003"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1107_33">
                                        <rect width="100" height="100" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            <h4 className="text-[16px] mt-2">Read and Abide</h4>
                            <h4 className="text-[14px] text-prgcolor mt-2">
                                Read and comply with Nosres and Compliance policies, and applicable laws and regulations
                                to make positive impact.
                            </h4>
                        </div>

                        <div data-aos="zoom-in" className="col flex flex-col items-center text-center">
                            <svg className="py-2" width="200" height="200" viewBox="0 0 100 100" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1107_61)">
                                    <path
                                        d="M49.9996 99.4001C77.2825 99.4001 99.3996 77.283 99.3996 50.0001C99.3996 22.7172 77.2825 0.600098 49.9996 0.600098C22.7167 0.600098 0.599609 22.7172 0.599609 50.0001C0.599609 77.283 22.7167 99.4001 49.9996 99.4001Z"
                                        fill="white"></path>
                                    <path
                                        d="M30.8994 47.0002L43.9994 22.6002C44.2994 22.1002 45.0994 21.9002 45.4994 22.4002L51.6994 29.5002L56.1994 34.6002L63.1994 42.5002L68.0994 48.0002L73.9994 54.7002C74.3994 55.2002 74.2994 56.0002 73.5994 56.2002L47.8994 66.2002L30.8994 47.0002Z"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"></path>
                                    <path
                                        d="M47.6993 65.9002L35.2993 76.9002C34.7993 77.4002 34.0993 77.3002 33.5993 76.8002L29.4993 72.2002L22.4993 64.3002L18.7993 60.1002C18.3993 59.6002 18.3993 58.9002 18.9993 58.4002L31.2993 47.5002"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"></path>
                                    <path
                                        d="M44.5988 68.6001L53.7988 73.8001C55.8988 75.0001 56.5988 77.5001 55.3988 79.6001C54.1988 81.7001 51.6988 82.4001 49.5988 81.2001L37.7988 74.6001"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"></path>
                                    <path
                                        d="M66.599 43.2001L55.999 31.1001L59.099 28.3001C62.299 25.5001 67.099 25.8001 69.999 29.0001L70.399 29.5001C73.199 32.7001 72.899 37.6001 69.699 40.4001L66.599 43.2001Z"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"></path>
                                    <path d="M30.8994 47.0002L47.8994 66.2002" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10"></path>
                                    <path d="M67.2988 16.7002V24.2002" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10"></path>
                                    <path d="M82.8988 33.4002L75.2988 32.7002" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10"></path>
                                    <path d="M80.6996 19.6001L73.5996 26.7001" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1107_61">
                                        <rect width="100" height="100" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            <h4 className="text-[16px] mt-2">Speak Up</h4>
                            <h4 className="text-[14px] text-prgcolor mt-2">
                                Feel free to speak up if you have any questions or concerns. Do not be afraid to reveal
                                any unacceptable behavior.
                            </h4>
                        </div>

                        <div data-aos="zoom-in" className="col flex flex-col items-center text-center">
                            <svg className="py-2" width="200" height="200" viewBox="0 0 100 100" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1107_73)">
                                    <path
                                        d="M49.9996 99.4001C77.2825 99.4001 99.3996 77.283 99.3996 50.0001C99.3996 22.7172 77.2825 0.600098 49.9996 0.600098C22.7167 0.600098 0.599609 22.7172 0.599609 50.0001C0.599609 77.283 22.7167 99.4001 49.9996 99.4001Z"
                                        fill="white"></path>
                                    <path d="M79.7994 27H53.8994" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10" strokeLinejoin="round"></path>
                                    <path d="M46.0992 27H20.1992" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10" strokeLinejoin="round"></path>
                                    <path
                                        d="M10.6994 54C10.4994 54.8 10.3994 55.5 10.3994 56.2C10.3994 61.6 14.7994 66 20.1994 66C25.5994 66 29.9994 61.6 29.9994 56.2C29.9994 54.6 29.4994 53.3 28.9994 51.9L20.1994 27L11.3994 51.8L10.6994 54Z"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"
                                        strokeLinejoin="round"></path>
                                    <path d="M10.6992 54H29.7992" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10" strokeLinejoin="round"></path>
                                    <path d="M70.1992 54H89.2992" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10" strokeLinejoin="round"></path>
                                    <path
                                        d="M70.1994 54C69.9994 54.8 69.8994 55.5 69.8994 56.2C69.8994 61.6 74.2994 66 79.6994 66C85.0994 66 89.4994 61.6 89.4994 56.2C89.4994 54.6 88.9994 53.3 88.4994 51.9L79.7994 27L70.9994 51.9L70.1994 54Z"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"
                                        strokeLinejoin="round"></path>
                                    <path d="M31.1992 76.9001H68.7992" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10" strokeLinejoin="round"></path>
                                    <path d="M42.3994 76.9001V72.4001H57.5994V76.9001" stroke="#333333"
                                          strokeWidth="0.35" strokeMiterlimit="10" strokeLinejoin="round"></path>
                                    <path d="M49.999 72.4001V30.9001" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10" strokeLinejoin="round"></path>
                                    <path
                                        d="M49.9996 30.9001C52.1535 30.9001 53.8996 29.154 53.8996 27.0001C53.8996 24.8462 52.1535 23.1001 49.9996 23.1001C47.8457 23.1001 46.0996 24.8462 46.0996 27.0001C46.0996 29.154 47.8457 30.9001 49.9996 30.9001Z"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"
                                        strokeLinejoin="round"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1107_73">
                                        <rect width="100" height="100" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            <h4 className="text-[16px] mt-2">Be Honest</h4>
                            <h4 className="text-[14px] text-prgcolor mt-2">
                                Be honest with yourself and Nosres. You need to cooperate without reservation during an
                                ethical investigation.
                            </h4>
                        </div>

                        <div data-aos="zoom-in" className="col flex flex-col items-center text-center">
                            <svg className="py-2" width="200" height="200" viewBox="0 0 100 100" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1107_91)">
                                    <path
                                        d="M49.9996 99.4001C77.2825 99.4001 99.3996 77.283 99.3996 50.0001C99.3996 22.7172 77.2825 0.600098 49.9996 0.600098C22.7167 0.600098 0.599609 22.7172 0.599609 50.0001C0.599609 77.283 22.7167 99.4001 49.9996 99.4001Z"
                                        fill="white"></path>
                                    <path
                                        d="M49.0004 27.8001C51.5409 27.8001 53.6004 25.7406 53.6004 23.2001C53.6004 20.6596 51.5409 18.6001 49.0004 18.6001C46.4599 18.6001 44.4004 20.6596 44.4004 23.2001C44.4004 25.7406 46.4599 27.8001 49.0004 27.8001Z"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"></path>
                                    <path
                                        d="M46.1004 26.8H45.1004C42.8004 26.8 40.7004 28.2 39.9004 30.3L38.5004 33.7001C38.1004 34.7001 38.0004 35.9 38.3004 37C38.6004 37.9 39.1004 38.7001 39.8004 39.4001C40.8004 40.4001 42.3004 41.8 43.1004 42.5C43.4004 42.8 43.5004 43.2 43.5004 43.5C43.4004 44.1 43.4004 44.6001 43.3004 45.2001C43.1004 46.6001 42.9004 48.0001 42.8004 49.4001C42.6004 51.2001 42.3004 53 42.1004 54.8C41.9004 56.5 41.7004 58.2 41.4004 60C41.2004 61.4 41.0004 62.8 40.9004 64.1C40.8004 64.7 40.9004 65.4 41.1004 66C41.8004 67.6 44.2004 67.8 45.4004 66.7C46.2004 66 46.5004 64.8001 46.7004 63.7001C46.8004 63.5001 46.8004 63.2 46.9004 63C47.3004 61.2 47.8004 59.4 48.2004 57.6C48.5004 56.4 48.8004 55.2 49.1004 54C49.4004 55.2 49.7004 56.4 50.0004 57.6C50.4004 59.4 50.9004 61.2 51.3004 63C51.4004 63.2 51.4004 63.5001 51.5004 63.7001C51.7004 64.7001 52.0004 65.9 52.8004 66.7C54.0004 67.8 56.4004 67.5 57.1004 66C57.4004 65.4 57.4004 64.7 57.3004 64.1C57.2004 62.7 57.0004 61.3 56.8004 60C56.6004 58.3 56.4004 56.6 56.1004 54.8C55.9004 53 55.6004 51.2001 55.4004 49.4001C55.2004 48.0001 55.0004 46.6001 54.9004 45.2001C54.8004 44.6001 54.8004 44.1 54.7004 43.5C54.7004 43.1 54.8004 42.7 55.1004 42.5C55.8004 41.8 57.4004 40.4001 58.4004 39.4001C59.1004 38.8001 59.6004 37.9 59.9004 37C60.2004 35.9 60.2004 34.7001 59.7004 33.7001L58.3004 30.3C57.4004 28.2 55.4004 26.8 53.1004 26.8H52.1004"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"
                                        strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path
                                        d="M23.5 81.4002H49H74.6H66.7V74.3002H59.6H59.5V67.2002H49H38.6V74.3002H38.5H31.4V81.4002"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"></path>
                                    <path
                                        d="M59.0996 38.3C59.0996 38.4 60.7996 44.6 76.0996 53.5C76.1996 53.6 76.3996 53.7001 76.4996 53.7001C73.9996 53.3001 71.6996 55.4001 70.3996 57.4001C69.4996 58.8001 68.2996 60.3001 66.6996 60.7001C64.8996 61.2001 63.1996 60.2 61.5996 59.5C59.9996 58.8 58.2996 59.0001 56.5996 59.2001"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"
                                        strokeLinejoin="round"></path>
                                    <path d="M43.4004 42.8H54.6004" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M43.4004 33.3V43.4001" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M54.5996 33.3V43.4001" stroke="#333333" strokeWidth="0.35"
                                          strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path
                                        d="M71 22.8C70.9 22.8 70.8 22.8 70.7 22.9C70.6 23 70.6 23.1001 70.6 23.2001V23.5C70.5 24.6 69.6 25.5 68.5 25.5H68.4C68.2 25.5 68 25.7 68 25.9C68 26 68 26.1001 68.1 26.2001C68.2 26.3001 68.4 26.3 68.6 26.3C69.2 26.3 69.7 26.6 70.1 27C70.3 27.2 70.4 27.4 70.5 27.6C70.6 27.8 70.7 28.1 70.7 28.3V28.6C70.7 28.8 70.9 29 71.1 29C71.3 29 71.5 28.8 71.5 28.6V28.3C71.5 28.1 71.6 27.8 71.7 27.6C71.8 27.4 71.9 27.2 72.1 27C72.5 26.6 73 26.3 73.6 26.3C73.8 26.3 74 26.3001 74.1 26.2001C74.2 26.1001 74.2 26 74.2 25.9C74.2 25.7 74 25.5 73.8 25.5H73.7C72.6 25.5 71.6 24.6 71.6 23.5V23.2001C71.6 23.1001 71.6 23 71.5 22.9C71.1 22.8 71.1 22.8 71 22.8Z"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"></path>
                                    <path
                                        d="M27.5996 38.3C27.4996 38.3 27.3996 38.3001 27.2996 38.4001C27.1996 38.5001 27.1996 38.6001 27.1996 38.7001V39C27.0996 40.1 26.1996 41 25.0996 41H24.9996C24.7996 41 24.5996 41.2001 24.5996 41.4001C24.5996 41.5001 24.5996 41.6001 24.6996 41.7001C24.7996 41.8001 24.9996 41.8 25.1996 41.8C25.7996 41.8 26.2996 42.1 26.6996 42.5C26.8996 42.7 26.9996 42.9 27.0996 43.1C27.1996 43.3 27.2996 43.6 27.2996 43.8V44C27.2996 44.2 27.4996 44.4001 27.6996 44.4001C27.8996 44.4001 28.0996 44.2 28.0996 44V43.7001C28.0996 43.5001 28.1996 43.2 28.2996 43C28.3996 42.8 28.4996 42.6001 28.6996 42.4001C29.0996 42.0001 29.5996 41.7001 30.1996 41.7001C30.3996 41.7001 30.5996 41.7 30.6996 41.6C30.7996 41.5 30.7996 41.4 30.7996 41.3C30.7996 41.1 30.5996 40.9001 30.3996 40.9001H30.2996C29.1996 40.9001 28.1996 40.0001 28.1996 38.9001V38.6C28.1996 38.5 28.1996 38.4 28.0996 38.3C27.7996 38.3 27.6996 38.3 27.5996 38.3Z"
                                        stroke="#333333" strokeWidth="0.35" strokeMiterlimit="10"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1107_91">
                                        <rect width="100" height="100" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            <h4 className="text-[16px] mt-2">Lead by Example</h4>
                            <h4 className="text-[14px] text-prgcolor mt-2">
                                Senior leaders must model ethical and compliant behavior to create a culture that values
                                these principles.
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;