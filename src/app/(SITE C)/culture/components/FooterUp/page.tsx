import React from 'react';

const Page = () => {
    return (
        <>
            <section id="footer-up-section">
                <div className="container py-16 text-center">
                    <h1 className="text-[24px] text-primary">
                        We enjoy working here.<br/>
                        What do we have in common?
                    </h1>
                    <div className="mt-8">
                        <button
                            className="text-primary hover:bg-primary hover:text-white rounded px-6 py-2 border text-[14px]">
                            See available positions
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;