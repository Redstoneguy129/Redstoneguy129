import {AppProps} from "$fresh/server.ts";
import {Head} from "$fresh/runtime.ts";

export default function App({Component}: AppProps) {
    return (
        <>
            <Head>
                <title>Cameron Whyte - Full Stack Developer</title>
                <meta
                    name="description"
                    content="Full Stack Developer with experience in backend software engineering."
                />
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <div
                className="max-w-xl my-5 mx-auto lg:mx-2 sm:mx-1 text-sm text-white font-plex leading-none tracking-wide md:my-3">
                <Component/>
            </div>
        </>
    );
}