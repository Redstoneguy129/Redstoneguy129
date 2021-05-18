import React from "react";
import { Octokit } from "@octokit/rest";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from 'react-cookie';
import {
    commits as commitsIcon,
    time as timeIcon,
    calendar as calenderIcon,
    python,
    typescript,
    java,
    css, cpp, javascript, markdown, react, nodejs, vue, bitcoin, deno, discord4j, express
} from "../assets";

class Skills extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }
    constructor(props: {} | Readonly<{}>) {
        super(props);
        // @ts-ignore
        const { cookies } = props;
        this.state = {
            commits: cookies.get("commits") || 0,
            average: cookies.get("daily_average") || 0,
            past: cookies.get("past_year") || 0
        }
    }
    async componentDidMount() {
        // @ts-ignore
        const { cookies } = this.props;
        if(cookies.get("commits") === undefined) {
            const commits_count = (await new Octokit().search.commits({q: "committer:Redstoneguy129"})).data.total_count;
            cookies.set("commits", commits_count, { expires: new Date(Date.now() + 86400000) });
            this.setState({
                commits: commits_count
            });
        }
        if(cookies.get("daily_average") === undefined || cookies.get("past_year") === undefined) {
            const wakatime = (await (await fetch("https://wakatime.com/share/@Redstoneguy129/b2d60553-2762-428c-ab49-e722f04811a3.json", {
                method: "GET"
            })).json()).data["grand_total"];
            console.log(wakatime)
            cookies.set("daily_average", wakatime["human_readable_daily_average"], { expires: new Date(Date.now() + 86400000) });
            cookies.set("past_year", wakatime["human_readable_total"], { expires: new Date(Date.now() + 86400000) });
            this.setState({
                average: wakatime["human_readable_daily_average"],
                past: wakatime["human_readable_total"]
            });
        }
    }
    getCommits() {
        // @ts-ignore
        return this.state.commits;
    }
    getAverage() {
        // @ts-ignore
        return this.state.average;
    }
    getPast() {
        // @ts-ignore
        return this.state.past;
    }
    render() {
        return (
            <div className="flex flex-col">
                <h2 className="flex justify-center text-3xl font-extrabold text-black dark:text-white sm:text-4xl pt-4">
                    <span className="block text-white mb-4">Skills</span>
                </h2>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t-2">
                        <div className="flex items-center space-x-4 p-6">
                            <div className="flex items-center p-4 text-white rounded-lg bg-gradient-to-tr from-yellow-400 to-red-500">
                                <img src={commitsIcon} className="fill-current w-7 h-7" width="24" height="24" alt="commits"/>
                            </div>
                            <div className="flex-1">
                                <p className="text-white font-semibold">Yearly Commits</p>
                                <h2 className="text-2xl font-semibold text-white">
                                    {this.getCommits()}
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 p-6">
                            <div className="flex items-center p-4 text-white rounded-lg bg-gradient-to-t from-yellow-400 to-red-500">
                                <img src={timeIcon} className="fill-current w-7 h-7" width="24" height="24" alt="commits"/>
                            </div>
                            <div className="flex-1">
                                <p className="text-white font-semibold">Daily Average</p>
                                <h2 className="text-2xl font-semibold text-white">
                                    {this.getAverage()}
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 p-6">
                            <div className="flex items-center p-4 text-white rounded-lg bg-gradient-to-tl from-yellow-400 to-red-500">
                                <img src={calenderIcon} className="fill-current w-7 h-7" width="24" height="24" alt="commits"/>
                            </div>
                            <div className="flex-1">
                                <p className="text-white font-semibold">Past Year</p>
                                <h2 className="text-2xl font-semibold text-white">
                                    {this.getPast()}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="flex justify-center text-xl font-extrabold text-black dark:text-white sm:text-2xl pt-6">
                    <span className="block text-white mb-2">Languages</span>
                </h2>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center border-t">
                        <div className="p-6">
                            <div className="p-4 text-white rounded-lg bg-gradient-to-tl from-yellow-400 to-red-500">
                                <img src={python} className="w-12 h-12" width="32" height="32" alt="python"/>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="p-4 text-white rounded-lg bg-gradient-to-tl from-yellow-400 to-red-500">
                                <img src={typescript} className="w-12 h-12" width="32" height="32" alt="typescript"/>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="p-4 text-white rounded-lg bg-gradient-to-tl from-yellow-400 to-red-500">
                                <img src={java} className="w-12 h-12" width="32" height="32" alt="java"/>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="p-4 text-white rounded-lg bg-gradient-to-tl from-yellow-400 to-red-500">
                                <img src={css} className="w-12 h-12" width="32" height="32" alt="css"/>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="p-4 text-white rounded-lg bg-gradient-to-tl from-yellow-400 to-red-500">
                                <img src={cpp} className="w-12 h-12" width="32" height="32" alt="c++"/>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="p-4 text-white rounded-lg bg-gradient-to-tl from-yellow-400 to-red-500">
                                <img src={javascript} className="w-12 h-12" width="32" height="32" alt="javascript"/>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="p-4 text-white rounded-lg bg-gradient-to-tl from-yellow-400 to-red-500">
                                <img src={markdown} className="w-12 h-12" width="32" height="32" alt="markdown"/>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="flex justify-center text-xl font-extrabold text-black dark:text-white sm:text-2xl pt-6">
                    <span className="block text-white mb-2">Frameworks + Libraries</span>
                </h2>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center border-t">
                        <div className="p-6">
                            <div className="flex items-center p-4 text-white rounded-lg bg-gradient-to-tl from-yellow-400 to-red-500">
                                <img src={react} className="fill-current w-12 h-12" width="32" height="32" alt="react"/>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center p-4 text-white rounded-lg bg-gradient-to-tl from-yellow-400 to-red-500">
                                <img src={nodejs} className="fill-current w-12 h-12" width="32" height="32" alt="react"/>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center p-4 text-white rounded-lg bg-gradient-to-tl from-yellow-400 to-red-500">
                                <img src={vue} className="fill-current w-12 h-12" width="32" height="32" alt="vue"/>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center p-4 text-white rounded-lg bg-gradient-to-tl from-yellow-400 to-red-500">
                                <img src={bitcoin} className="fill-current w-12 h-12" width="32" height="32" alt="bitcoin"/>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center p-4 text-white rounded-lg bg-gradient-to-tl from-yellow-400 to-red-500">
                                <img src={deno} className="fill-current w-12 h-12" width="32" height="32" alt="deno"/>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center p-4 text-white rounded-lg bg-gradient-to-tl from-yellow-400 to-red-500">
                                <img src={discord4j} className="fill-current w-12 h-12" width="32" height="32" alt="discord4j"/>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center p-4 text-white rounded-lg bg-gradient-to-tl from-yellow-400 to-red-500">
                                <img src={express} className="fill-current w-12 h-12" width="32" height="32" alt="express"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex justify-center">
                    </div>
                </div>
            </div>
        );
    }
}

export default withCookies(Skills);
