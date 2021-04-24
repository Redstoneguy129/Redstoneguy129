import React from "react";

export class Navbar extends React.Component {
    render() {
        return (
            <nav className="flex flex-wrap justify-center items-center p-4">
                <div className="lg:text-center">
                    <a className="text-xl text-white font-semibold font-heading" href="/">Cameron Whyte</a>
                </div>
            </nav>
        );
    }
}
