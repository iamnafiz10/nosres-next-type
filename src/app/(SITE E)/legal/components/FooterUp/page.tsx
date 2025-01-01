import React from 'react';

function Page() {
    return (
        <>
            <section id="footer-up-section">
                <div className="container py-16 text-center">
                    <h1 className="text-[24px]">
                        Can’t find what you’re looking for?
                    </h1>
                    <div className="mt-8">
                        <button
                            className="text-primary hover:bg-primary hover:text-white rounded px-6 py-2 border text-[14px]">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;