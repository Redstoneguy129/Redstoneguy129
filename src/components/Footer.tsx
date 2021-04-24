import React from "react";

import { github, twitter, youtube, email } from "../assets";

export class Footer extends React.Component {
    render() {
        return (
            <footer className="pt-4 pb-8 xl:pt-8">
                <div
                    className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
                    <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
                        <a href="https://twitter.com/redstoneguy129" rel="noreferrer" target="_blank"><img src={twitter} width="20" height="20" alt="twitter"/></a>
                        <a href="https://www.youtube.com/channel/UCvFfPyw4h-QPkCahgTVFvBg" rel="noreferrer" target="_blank"><img src={youtube} width="20" height="20" alt="youtube"/></a>
                        <a href="https://github.com/Redstoneguy129" rel="noreferrer" target="_blank"><img src={github} width="20" height="20" alt="github"/></a>
                        <a href="mailto:public@cameronwhyte.me" rel="noreferrer" target="_blank"><img src={email} width="20" height="20" alt="email"/></a>
                    </div>
                    <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
                        {'</>'} with ❤ by Cameron Whyte.
                    </div>
                </div>
            </footer>
        );
    }
}
