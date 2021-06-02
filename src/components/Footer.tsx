import React from "react";
import { Octokit } from "@octokit/rest";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from 'react-cookie';
import { github, twitter, youtube, email, star, forks } from "../assets";

class Footer extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }
    constructor(props: {} | Readonly<{}>) {
        super(props);
        // @ts-ignore
        const { cookies } = props;
        this.state = {
            repos: cookies.get("repos") || 0,
            stars: cookies.get("stars") || 0
        }
    }
    async componentDidMount() {
        // @ts-ignore
        const { cookies } = this.props;
        if(cookies.get("repos") === undefined) {
            const reposValue = (await new Octokit().rest.users.getByUsername({username: "Redstoneguy129"})).data.public_repos;
            cookies.set("repos", reposValue, { expires: new Date(Date.now() + 86400000) });
            this.setState({
                repos: reposValue
            });
        }
        if(cookies.get("stars") === undefined) {
            const starsValue = (await(await fetch("https://api.github.com/users/Redstoneguy129/starred")).json()).length;
            cookies.set("stars", starsValue, { expires: new Date(Date.now() + 86400000) });
            this.setState({
                stars: starsValue
            });
        }
    }
    getRepos(): number {
        // @ts-ignore
        return this.state.repos;
    }
    getStars(): number {
        // @ts-ignore
        return this.state.stars;
    }
    render() {
        return (
            <footer className="pt-4 pb-8 xl:pt-8">
                <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
                    <div className="text-center pb-6 font-light flex justify-center space-x-8">
                        <a href="https://github.com/Redstoneguy129?tab=stars" rel="noreferrer" target="_blank" className="flex items-center justify-center space-x-2">
                            <img src={star} width="20" height="20" alt="stars"/>
                            <p>{this.getStars()} Starred</p>
                        </a>
                        <a href="https://github.com/Redstoneguy129?tab=repositories" rel="noreferrer" target="_blank" className="flex items-center justify-center space-x-2">
                            <img src={forks} width="20" height="20" alt="repositories"/>
                            <p>{this.getRepos()} Repositories</p>
                        </a>
                    </div>
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

export default withCookies(Footer);
