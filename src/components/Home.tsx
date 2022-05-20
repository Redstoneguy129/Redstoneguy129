import { h } from "preact";

export default function Home() {
    return (
        <section className="flex justify-center items-center h-screen dark:bg-zinc-800 bg-white">
            <div className="-mt-16 mx-auto max-w-7xl px-4 sm:-mt-24 text-center">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="dark:text-white">Cameron</span>{' '}
                        <span className="bg-gradient-to-r from-orange-400 to-rose-400 text-transparent bg-clip-text leading-normal">Whyte</span>
                    </h1>
                    <p className="mt-3 dark:text-white max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Hello!, I'm a Developer based in the UK. Always looking to learn and improve the quality of my work!
                    </p>
                    <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                        <div className="rounded-md shadow">
                            <a
                                href="#"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-gradient-to-r hover:bg-gradient-to-l from-orange-400 to-rose-400 md:py-4 md:text-lg md:px-10"
                            >
                                About Me
                            </a>
                        </div>
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 bg-white hover:bg-gray-50">
                            <a
                                href="#"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-transparent bg-clip-text bg-gradient-to-r hover:bg-gradient-to-l from-orange-400 to-rose-400 md:py-4 md:text-lg md:px-10"
                            >
                                My Work
                            </a>
                        </div>
                    </div>
            </div>
        </section>
    );
}