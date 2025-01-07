import React from 'react';
import {IoIosCheckmarkCircleOutline} from "react-icons/io";

function Page() {
    return (
        <>
            <section id="thank-you-order-section" className="bg-[#F9FAFB] flex justify-center items-center h-screen">
                <div className="thank_you_box bg-white rounded-lg text-center w-[500px] px-5 py-10 mx-5 md:mx-0">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="icon">
                            <IoIosCheckmarkCircleOutline className="w-[50px] h-[50px] text-primary"/>
                        </div>
                        <h4 className="text-prgcolor text-[16px] font-[500] mt-3">
                            Thank you! Your information has been<br/>
                            successfully submitted!
                        </h4>
                        <h4 className="text-gray-500 text-[14px] mt-3">
                            We will be in touch with you shorty.
                        </h4>
                    </div>
                    <div className="flex justify-center">
                        <button type="button"
                                className="mt-4 py-2 block w-full px-4 gap-2 bg-[#4D7FB8] hover:bg-[#3A5F8A] text-white text-[14px] rounded">
                            Go to Nosres
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;