import React from "react";
import {scroller} from "react-scroll";

export class Landing extends React.Component {
    render() {
        return (
            <div className="text-center self-center">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block text-white">Welcome to my Site!</span>
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">I&#x27;m a Full-Stack Developer.</span>
                </h2>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="flex justify-center">
                        <div className="px-3">
                            <div className="mt-12 inline-flex rounded-md shadow">
                                <button type="button" className="py-4 px-6 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg bg-gradient-to-bl from-yellow-400 to-red-500" onClick={() => {
                                    scroller.scrollTo('skills', {
                                        duration: 1500,
                                        delay: 100,
                                        smooth: true
                                    })
                                }}>
                                    Skills
                                </button>
                            </div>
                        </div>
                        <div className="px-3">
                            <div className="mt-12 inline-flex rounded-md shadow">
                                <button type="button" className="py-4 px-6 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg bg-gradient-to-b from-yellow-400 to-red-500">
                                    CV
                                </button>
                            </div>
                        </div>
                        <div className="px-3">
                            <div className="mt-12 inline-flex rounded-md shadow">
                                <button type="button" className="py-4 px-6 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg bg-gradient-to-br from-yellow-400 to-red-500" onClick={() => {
                                    scroller.scrollTo('projects', {
                                        duration: 1500,
                                        delay: 100,
                                        smooth: true
                                    })
                                }}>
                                    Projects
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
