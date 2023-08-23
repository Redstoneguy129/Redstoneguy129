const Footer = () => (
    <div className="col-span-2 lg:col-span-1 flex gap-1 items-start mt-10 justify-between">
        <a href="mailto:public@cameronwhyte.me">
            Email
        </a>
        <div className="flex flex-col items-center gap-2">
            <a
                className="relative w-4"
                width="16"
                height="16"
                href="https://github.com/Redstoneguy129"
                rel="noopener"
                target="_blank"
            >
                <img
                    className="w-full"
                    loading="lazy"
                    src="vectors/github.svg"
                    alt="Logo von GitHub"
                />
            </a>
        </div>
        <a href="https://www.youtube.com/@Cameron_Whyte">
            YouTube
        </a>
    </div>
);
export default Footer;