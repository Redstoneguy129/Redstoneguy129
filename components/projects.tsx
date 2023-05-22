export const Project = (props: {
  link: string;
  domain: string;
  technologies: string;
  from: string;
  to: string;
  matteo?: boolean;
}) => (
  <a href={props.link} rel="noopener" target="_blank">
    <div
      class={`rounded-xl p-0.3 h-full bg-gradient-to-r from-[${props.from}] to-[${props.to}] cursor-pointer transition-transform hover:scale-105`}
    >
      <div class="bg-gray rounded-lg p-2 text-center h-full">
        <h4>{props.domain}</h4>
        <p>{props.technologies}</p>
      </div>
    </div>
  </a>
);

const Projects = (data: { projects }) => (
    <>
        <h3>Projects</h3>
        <div class="grid grid-cols-2 sm:grid-cols-1 gap-3">
            {data.projects.map((project) => <Project {...project} />)}
        </div>
    </>
);

export default Projects;