import React from 'react';
import heroImage from '@/../public/assets/images/sitec/student-banner.jpg';

const Page = () => {
    return (
        <>
            <section id="banner-section" className="bg-[#E5E8EF] pt-[5rem] pb-[2rem]">
                <div className="container">
                    <h4 className="text-center text-[14px]">
                        Please keep in mind that you can submit a maximum of 3 job applications every 60 days.
                        Therefore,<br/>
                        ensure that you apply for positions that closely match your profile.
                    </h4>
                </div>
            </section>
        </>
    );
};

export default Page;