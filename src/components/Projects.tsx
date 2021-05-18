import React from "react";
import {react, typescript, nodejs, python, cpp, deno, java} from "../assets";

export class Projects extends React.Component {
    render() {
        return (
            <div className="flex flex-col">
                <h2 className="flex justify-center text-3xl font-extrabold text-black dark:text-white sm:text-4xl pt-6">
                    <span className="block text-white mb-4">Projects</span>
                </h2>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center border-t-2">
                        <div className="p-6">
                            <div className="relative bg-gradient-to-r from-yellow-400 to-red-500 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl z-20">
                                <p className="text-xl font-semibold mb-2 text-white">Portfolio Site</p>
                                <div className="flex space-x-2 text-white text-sm mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                    <a href="https://cameronwhyte.me" rel="noreferrer" target="_blank">https://cameronwhyte.me</a>
                                </div>
                                <div className="border-t-2"/>
                                <div className="flex justify-between">
                                    <div className="my-2">
                                        <p className="font-semibold text-base text-white mb-2">Technologies</p>
                                        <div className="flex space-x-2">
                                            <img src={typescript} className="w-6 h-6 rounded-full" alt="typescript"/>
                                            <img src={react} className="w-6 h-6 rounded-full" alt="react"/>
                                            <img src={nodejs} className="w-6 h-6 rounded-full" alt="nodejs"/>
                                            <img src={python} className="w-6 h-6 rounded-full" alt="python"/>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <p className="font-semibold text-base mb-2 text-white">Progress</p>
                                        <div className="text-base text-white font-semibold">
                                            <p>80%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="relative bg-gradient-to-r from-yellow-400 to-red-500 py-6 px-6 rounded-3xl w-72 my-4 shadow-xl z-20">
                                <p className="text-xl font-semibold mb-2 text-white">Boku-No-MC-Remastered</p>
                                <div className="flex space-x-2 text-white text-sm mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                    <a href="https://github.com/Redstoneguy129/Boku-No-Minecraft-Remastered" rel="noreferrer" target="_blank">Redstoneguy129/Boku-No-Minecraft-Remastered</a>
                                </div>
                                <div className="border-t-2"/>
                                <div className="flex justify-between">
                                    <div className="my-2">
                                        <p className="font-semibold text-base text-white mb-2">Technologies</p>
                                        <div className="flex space-x-2">
                                            <img src={java} className="w-6 h-6 rounded-full" alt="java"/>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <p className="font-semibold text-base mb-2 text-white">Progress</p>
                                        <div className="text-base text-white font-semibold">
                                            <p>20%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="relative bg-gradient-to-r from-yellow-400 to-red-500 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl z-20">
                                <p className="text-xl font-semibold mb-2 text-white">RedTek</p>
                                <div className="flex space-x-2 text-white text-sm mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                    <a href="https://github.com/Redstoneguy129/RedTek" rel="noreferrer" target="_blank">Coming Soon!</a>
                                </div>
                                <div className="border-t-2"/>
                                <div className="flex justify-between">
                                    <div className="my-2">
                                        <p className="font-semibold text-base text-white mb-2">Technologies</p>
                                        <div className="flex space-x-2">
                                            <img src={java} className="w-6 h-6 rounded-full" alt="java"/>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <p className="font-semibold text-base mb-2 text-white">Progress</p>
                                        <div className="text-base text-white font-semibold">
                                            <p>5%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="relative bg-gradient-to-r from-yellow-400 to-red-500 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl z-20">
                                <p className="text-xl font-semibold mb-2 text-white">Raphtalia</p>
                                <div className="flex space-x-2 text-white text-sm mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                    <a href="https://raphtalia.dev" rel="noreferrer" target="_blank">Coming Soon!</a>
                                </div>
                                <div className="border-t-2"/>
                                <div className="flex justify-between">
                                    <div className="my-2">
                                        <p className="font-semibold text-base text-white mb-2">Technologies</p>
                                        <div className="flex space-x-2">
                                            <img src={typescript} className="w-6 h-6 rounded-full" alt="typescript"/>
                                            <img src={cpp} className="w-6 h-6 rounded-full" alt="cpp"/>
                                            <img src={deno} className="w-6 h-6 rounded-full" alt="deno"/>
                                            <img src={react} className="w-6 h-6 rounded-full" alt="react"/>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <p className="font-semibold text-base mb-2 text-white">Progress</p>
                                        <div className="text-base text-white font-semibold">
                                            <p>75%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
