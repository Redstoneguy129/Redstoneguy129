const Milestone = (data: { name: sring, role: string, tasks, date: string }) => (
    <div>
        <div className="flex justify-between md:flex-col">
            <div className="md:order-2">
                <h4>{data.name}</h4>
                <h5>{data.role}</h5>
                <ul>
                    {data.tasks.map((item: string) => <li key={item}>{item}</li>)}
                </ul>
            </div>
            <p className="flex-shrink-0 md:order-1 md:mb-0.2">{data.date}</p>
        </div>
    </div>
);
const Experience = (data: { jobs }) => (
    <>
        <h3>Experience</h3>
        <div className="space-y-3 lg:space-y-2">
            {data.jobs.map((job) => <Milestone {...job} />)}
        </div>
    </>
);
export default Experience;