import React from 'react';
import {Element} from "react-scroll";
import {Helmet} from 'react-helmet';
import {Navbar, Footer, Landing, Skills, Projects} from "./components";

function App() {
    return (
        <div className="app">
            <Helmet>
                <style>{'body { background-color: #191a22; }'}</style>
            </Helmet>
            <Navbar/>
            <Landing/>
            <Element name="skills">
                <Skills/>
            </Element>
            <Element name="projects">
                <Projects/>
            </Element>
            <Footer/>
        </div>
    );
}

export default App;
