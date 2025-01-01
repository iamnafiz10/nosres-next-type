import React from 'react';
import {HiOutlineArrowRightCircle} from "react-icons/hi2";

const Page = () => {
    return (
        <>
            <section id="behavior-section">
                <div className="container pt-16">
                    <div className="head-wrap text-center">
                        <h4 className="text-[24px]">A Crusade Against Illegal or Unethical Behavior</h4>
                        <p className="mt-4">
                            Illegal or unethical behavior refers to any action or decision that violates the law,
                            standards of ethical conduct, or norms of<br/> societal behavior. As shown in the table
                            below,
                            illegal or unethical behavior can take many forms. At Nosres, we do not<br/> tolerate any of
                            them. We conduct business ethically and in full compliance with applicable laws and
                            regulations.
                        </p>
                    </div>

                    <div className="overflow-x-auto py-12">
                        <table className="w-full whitespace-nowrap border border-t-0">
                            <thead>
                            <tr>
                                <th className="px-5 py-3 border-l border-b bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                    Type of Illegal or Unethical Behavior
                                </th>
                                <th className="px-5 py-3 border-l border-b bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                    Description
                                </th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td className="px-5 py-4 border-l border-b border-gray-200 bg-white">
                                    <h4 className="text-[14px] font-semibold">
                                        Corruption
                                    </h4>
                                </td>
                                <td className="px-5 py-4 border-l border-b border-gray-200 bg-white">
                                    <h4 className="text-[14px]">
                                        Paying or receiving bribes to influence decisions or gain an advantage.
                                    </h4>
                                </td>
                            </tr>

                            <tr>
                                <td className="px-5 py-4 border-l border-b border-gray-200 bg-white">
                                    <h4 className="text-[14px] font-semibold">
                                        Fraud
                                    </h4>
                                </td>
                                <td className="px-5 py-4 border-l border-b border-gray-200 bg-white">
                                    <h4 className="text-[14px]">
                                        Misrepresenting information or manipulating records for personal gain.
                                    </h4>
                                </td>
                            </tr>

                            <tr>
                                <td className="px-5 py-4 border-l border-b border-gray-200 bg-white">
                                    <h4 className="text-[14px] font-semibold">
                                        Insider Trading
                                    </h4>
                                </td>
                                <td className="px-5 py-4 border-l border-b border-gray-200 bg-white">
                                    <h4 className="text-[14px]">
                                        Using insider information for personal financial gain in securities trading.
                                    </h4>
                                </td>
                            </tr>

                            <tr>
                                <td className="px-5 py-4 border-l border-b border-gray-200 bg-white">
                                    <h4 className="text-[14px] font-semibold">
                                        Discrimination and Harassment
                                    </h4>
                                </td>
                                <td className="px-5 py-4 border-l border-b border-gray-200 bg-white">
                                    <h4 className="text-[14px]">
                                        Treating individuals unfairly or differently based on their<br/> race, gender,
                                        religion, age, or other personal characteristics.
                                    </h4>
                                </td>
                            </tr>

                            <tr>
                                <td className="px-5 py-4 border-l border-b border-gray-200 bg-white">
                                    <h4 className="text-[14px] font-semibold">
                                        Tax Evasion
                                    </h4>
                                </td>
                                <td className="px-5 py-4 border-l border-b border-gray-200 bg-white">
                                    <h4 className="text-[14px]">
                                        Illegally avoiding paying taxes
                                    </h4>
                                </td>
                            </tr>

                            <tr>
                                <td className="px-5 py-4 border-l border-b border-gray-200 bg-white">
                                    <h4 className="text-[14px] font-semibold">
                                        Intellectual Property Violations
                                    </h4>
                                </td>
                                <td className="px-5 py-4 border-l border-b border-gray-200 bg-white">
                                    <h4 className="text-[14px]">
                                        Stealing or misusing someone else’s ideas, inventions, or creations.
                                    </h4>
                                </td>
                            </tr>

                            <tr>
                                <td className="px-5 py-4 border-l border-b border-gray-200 bg-white">
                                    <h4 className="text-[14px] font-semibold">
                                        Environmental Violations
                                    </h4>
                                </td>
                                <td className="px-5 py-4 border-l border-b border-gray-200 bg-white">
                                    <h4 className="text-[14px]">
                                        Causing harm to the environment, such as polluting the air or water, without
                                        proper permits.
                                    </h4>
                                </td>
                            </tr>

                            <tr>
                                <td className="px-5 py-4 border-l border-b border-gray-200 bg-white">
                                    <h4 className="text-[14px] font-semibold">
                                        Health and safety violations
                                    </h4>
                                </td>
                                <td className="px-5 py-4 border-l border-b border-gray-200 bg-white">
                                    <h4 className="text-[14px]">
                                        Failing to ensure the health and safety of employees or customers, such as by
                                        providing hazardous<br/> working conditions
                                    </h4>
                                </td>
                            </tr>

                            <tr>
                                <td className="px-5 py-4 border-l border-b border-gray-200 bg-white">
                                    <h4 className="text-[14px] font-semibold">
                                        Election Interference or Tampering
                                    </h4>
                                </td>
                                <td className="px-5 py-4 border-l border-b border-gray-200 bg-white">
                                    <h4 className="text-[14px]">
                                        Tampering with the outcome of an election, or interfering with the democratic
                                        process.
                                    </h4>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-10 xl:mt-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="col">
                            <h4 className="text-[24px]">Nosres Code of Ethics</h4>
                            <h4 className="mt-3 c text-[14px]">
                                The Nosres Code of ethics outlines the ethical principles that govern the way we work
                                and conduct business.
                            </h4>
                            <button type='button'
                                    className="mt-2 text-[14px] flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                <HiOutlineArrowRightCircle size={30}/>
                                Nosres’ Code of Ethics (PDF)
                            </button>
                        </div>
                        <div className="col">
                            <h4 className="text-[24px]">
                                Nosres Anti-Corruption Policy
                            </h4>
                            <h4 className="mt-3 text-prgcolor text-[14px]">
                                Nosres strictly prohibits corruption of all kinds, including bribery, kickbacks,
                                embezzlement, and facilitating payments.
                            </h4>
                            <button type='button'
                                    className="mt-2 text-[14px] flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                <HiOutlineArrowRightCircle size={30}/>
                                Nosres Anti-Corruption Policy (PDF)
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
        ;
};

export default Page;