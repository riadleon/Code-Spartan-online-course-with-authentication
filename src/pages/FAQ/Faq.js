import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="dark:bg-cyan-800 dark:text-gray-100 mt-6 mb-12">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 mb-5">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is this website all about?</summary>
                            <div className="px-4 pb-4">
                                <p>It is an online platform to learn effective coding</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Is it reasonable from other site?</summary>
                            <div className="px-4 pb-4">
                                <p>yes, absolutely</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Can i get anything for free?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>No Sorry Baki chahiya Lojjja Dibennna</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;