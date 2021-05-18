import React from "react";
import { Octokit } from "@octokit/rest";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from 'react-cookie';
import {commits as commitsIcon, time as timeIcon, calendar as calenderIcon} from "../assets";

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
            <div>
                <div className="flex justify-center gap-x-8">
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
        );
    }
}

export default withCookies(Skills);
