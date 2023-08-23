const Section = (props: { title: string; skills: string[] }) => (
    <>
        <h4>{props.title}</h4>
        <div className="grid grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-y-1 ">
            {props.skills.map((skill) => <p key={skill}>{skill}</p>)}
        </div>
    </>
);

const Skills = (data: { sections }) => (
    <>
        <h3>Skills</h3>
        <div className="space-y-3">
            {data.sections.map((section) => <Section {...section} />)}
        </div>
    </>
);
export default Skills;