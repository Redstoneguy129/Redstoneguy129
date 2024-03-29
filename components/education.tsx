const Milestone = (props: { title: string; date: string; text?: string }) => (
    <div>
        <div className="flex justify-between md:flex-col">
            <h4 className="md:order-2">{props.title}</h4>
            <p className="md:order-1 md:mb-0.2">{props.date}</p>
        </div>
        {props.text && <p className="whitespace-pre-wrap">{props.text}</p>}
    </div>
);
const Education = (data: { milestones }) => (
    <>
        <h3>Education</h3>
        <div className="space-y-3 lg:space-y-2">
            {data.milestones.map((milestone) => (
                <Milestone {...milestone} />
            ))}
        </div>
    </>
);
export default Education;