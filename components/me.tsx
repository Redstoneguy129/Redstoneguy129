const Me = () => (
    <div className="flex md:flex-col justify-between gap-10 md:gap-y-3 items-center md:items-start">
        <div className="md:order-2">
            <h1>Cameron Whyte</h1>
            <h2 className="my-1">
                Software Engineer
            </h2>
            <p className="whitespace-pre-wrap">
                I'm a Software Engineer with a passion for creating open source software and learning new technologies.
                You can contact me if you want to work on a project together.
            </p>
        </div>
        <img
            className="rounded-full flex-shrink-0 md:order-1 md:w-8"
            src="pixels/me.webp"
            height="150"
            width="150"
            alt="Portrait Cameron Whyte"
        />
    </div>
);

export default Me;