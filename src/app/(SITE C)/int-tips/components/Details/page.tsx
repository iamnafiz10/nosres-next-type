import React from 'react';
import {
    PiNumberCircleOneFill,
    PiNumberCircleTwoFill,
    PiNumberCircleThreeFill,
    PiNumberCircleFourFill,
    PiNumberCircleFiveFill,
} from "react-icons/pi";
import Link from "next/link";
import {HiOutlineArrowRightCircle} from "react-icons/hi2";

const Page = () => {
    return (
        <>
            <section id="app-tips-details-section">
                <div className="container py-16">
                    <div className="grid grid-cols-1">
                        <div className="col space-y-8">
                            <div className="flex items-start gap-2">
                                <div className="icon">
                                    <PiNumberCircleOneFill size={35}/>
                                </div>
                                <div className="content">
                                    <h4 className="text-[24px]">
                                        Pre-Interview
                                    </h4>
                                    <ul className="space-y-8 text-[#39393b]">
                                        <li className="mt-2 list-disc">
                                            <b>Do your homework.</b> It is essential to research the company’s products
                                            and
                                            culture. It will show<br/> that you are curious about our company and that
                                            your
                                            skills and values align with its interests.<br/> In addition, it will help
                                            you
                                            better
                                            prepare to answer the interview questions effectively.
                                        </li>

                                        <li className="mt-2 list-disc">
                                            <b>Reread your résumé and the job posting.</b> Spend time reading your
                                            résumé and the job posting<br/> again very carefully to find
                                            interconnections
                                            between them. Identify the skills, experience,<br/> or qualifications you
                                            possess
                                            that support your candidacy for the position.
                                        </li>

                                        <li className="mt-2 list-disc">
                                            <b>Get ready for the interview format.</b> We may conduct interviews in
                                            different formats, including<br/> phone and video interviews, in-office
                                            interviews, and out-of-office interviews. Our interview<br/> process is
                                            currently
                                            entirely virtual. Consequently, we suggest finding a quiet place with<br/>
                                            adequate lighting and without interruptions. Additionally, check the
                                            technology setup you will<br/> use, including webcam and microphone,
                                            headphones,
                                            internet connection, and mobile phone<br/> reception.
                                        </li>

                                        <li className="mt-2 list-disc">
                                            <b>Familiarize yourself with the interview stages. </b>
                                            We want to make the interview as structured,<br/> crystal clear, and
                                            relaxing as
                                            possible. Our interview consists of five stages. Check out those<br/> stages
                                            to
                                            be more prepared and confident.
                                        </li>

                                        <li className="mt-2 list-disc">
                                            <b>Write down answers to common job interview questions. </b>
                                            It is indeed difficult to predict what<br/> types of questions you will be
                                            asked
                                            during the interview, but it’s beneficial to learn how to<br/> answer common
                                            interview questions with confidence and clarity.
                                        </li>

                                        <li className="mt-2 list-disc">
                                            <b>Draw up a list of smart questions for the interviewer. </b>
                                            Typically, we will invite you to ask your<br/> questions before the end of
                                            the
                                            interview. Your questions are crucial to us. Therefore, we<br/> encourage
                                            you to
                                            prepare relevant questions about the job or company if you have any.
                                        </li>

                                        <li className="mt-2 list-disc">
                                            <b>Rehearse your job interview. </b>
                                            As the saying goes, “Practice makes perfect.” So, practice as<br/> much as
                                            you
                                            can. You can ask a family member or a friend to play the role of
                                            interviewer.<br/> Remember to ask them to give you genuine feedback. If it
                                            is a
                                            phone or video interview, run<br/> through it with a family member or a
                                            friend to
                                            ensure everything goes smoothly.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="icon">
                                    <PiNumberCircleTwoFill size={35}/>
                                </div>
                                <div className="content">
                                    <h4 className="text-[24px]">
                                        Interview
                                    </h4>
                                    <ul className="space-y-8 text-[#39393b]">
                                        <li className="mt-2 list-disc">
                                            <b>Be punctual. </b>
                                            Punctuality is crucial when it comes to interview at Nosres. Hence, plan
                                            your<br/> schedule to arrive 10 to15 minutes early to complete any necessary
                                            paperwork, have time relax,<br/> and use the restroom if needed. Remember to
                                            bring a government-issued ID such as driver’s<br/> license, passport, etc.,
                                            to
                                            check in.
                                        </li>

                                        <li className="mt-2 list-disc">
                                            <b>Bring hard copies of your résumé, a notebook and a pen. </b>
                                            Of course, we will have a printed copy<br/> of your résumé and cover letter,
                                            but
                                            remember to bring your own. In addition, bring a pen and a<br/> notebook to
                                            take
                                            notes.
                                        </li>

                                        <li className="mt-2 list-disc">
                                            <b>Be authentic and honest. </b>
                                            At Nosres, we value authenticity and honesty. So, it is paramount
                                            to<br/> act
                                            like yourself. Be positive and tell the truth when answering questions. If
                                            you cannot answer<br/> a question, be honest and ask the interviewer to
                                            provide
                                            more explanation.
                                        </li>

                                        <li className="mt-2 list-disc">
                                            <b>Keep your answers specific, detailed, and concise. </b>
                                            Avoid giving lengthy or unclear answers to<br/> the interviewer’s questions.
                                            When
                                            the interviewer asks you a question, take a deep breath so<br/> you can
                                            organize
                                            your thoughts to provide a thoughtful, concise, and well-delivered
                                            answer.<br/>
                                            Remember to keep your eye on the time because your time with the interviewer
                                            is limited.
                                        </li>

                                        <li className="mt-2 list-disc">
                                            <b>Ask smart questions. </b>
                                            Now it’s your turn to ask questions. It is an opportunity to know
                                            more<br/> about
                                            us and the position you are applying for. Not only does it show that you are
                                            interested in<br/> Nosres and the role, but also it’s a proof that you have
                                            a
                                            general understanding of what we<br/> need.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="icon">
                                    <PiNumberCircleThreeFill size={35}/>
                                </div>
                                <div className="content">
                                    <h4 className="text-[24px]">
                                        Post-Interview
                                    </h4>
                                    <ul className="space-y-8 text-[#39393b]">
                                        <li className="mt-2 list-disc">
                                            <b>Ask for the next step. </b>
                                            Generally, the recruiting team will follow up with the interview
                                            results<br/>
                                            within a week or two following your interview. But remember to ask when you
                                            can expect to <br/>hear back about the next steps or the hiring decision.
                                        </li>

                                        <li className="mt-2 list-disc">
                                            <b>Submit take-home assignments in a timely fashion. </b>
                                            f we ask you to complete a take-home<br/> interview assignment, please
                                            provide
                                            quality work within a reasonable time frame. It is an<br/> opportunity for
                                            you to
                                            showcase more skills and go beyond the answers to your
                                            interview<br/> questions.
                                        </li>
                                    </ul>
                                    <button type='button'
                                            className="mt-8 text-[14px] flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                        <HiOutlineArrowRightCircle size={30}/>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;