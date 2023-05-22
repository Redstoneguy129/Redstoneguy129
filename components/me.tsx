const Me = () => (
  <div class="flex md:flex-col justify-between gap-10 md:gap-y-3 items-center md:items-start">
    <div class="md:order-2">
      <h1>Cameron Whyte</h1>
      <h2 class="my-1">
        Full Stack Developer
      </h2>
      <p class="whitespace-pre-wrap">
        I'm a full stack developer with experience in backend software engineering. I used to create Minecraft mods to learn Java then moved on to creating UI libraries with TailwindCSS.
      </p>
    </div>
    <img
      class="rounded-full flex-shrink-0 md:order-1 md:w-8"
      src="pixels/me.webp"
      height="150"
      width="150"
      alt="Portrait Cameron Whyte"
    />
  </div>
);

export default Me;