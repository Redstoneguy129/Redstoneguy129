import React from 'react';
import {Element} from "react-scroll";
import {Helmet} from 'react-helmet';
import {Footer, Landing, Skills, Projects} from "./components";
import Particles from "react-particles-js";

function App() {
    return (
        <div className="app">
            <Helmet>
                <style>{'body { background-color: #191a22; }'}</style>
            </Helmet>
            <main className="z-10 inset-0 absolute">
                <div className="flex justify-center items-center w-full h-full"><Landing/></div>
                <div className="flex flex-col space-y-6">
                    <Element name="skills"><Skills/></Element>
                    <Element name="projects"><Projects/></Element>
                </div>
                <Footer/>
            </main>
            <Particles className="z-0 fixed w-full h-full"/>
        </div>
    );
}

export default App;
