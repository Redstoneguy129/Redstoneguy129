import Menu from "../components/menu.tsx";
import Me from "../components/me.tsx";
import Education from "../components/education.tsx";
import Experience from "../components/experience.tsx";
import Skills from "../components/skills.tsx";
import Footer from "../components/footer.tsx";
import Projects from "../components/projects.tsx";

const Index = () => {
    return (
        <>
            <div className="grid grid-cols-desktop gap-x-5 lg:grid-cols-1 gap-y-10 lg:gap-y-0">
                <Menu/>
                <Me/>
                <Education milestones={[
                    {
                        title: "Royal Holloway, University of London",
                        date: "2023 - Present",
                        text: "Computer Science (Software Engineering) MSci"
                    },
                    {
                        title: "USP College",
                        date: "2021 - 2023",
                        text: "BTEC Level 3 Extended Diploma in IT"
                    },
                ]}/>
                <Experience jobs={[
                    {
                        name: "Quirk Studios",
                        role: "Co-Founder",
                        date: "2023 - Present",
                        tasks: [
                            "Creating Microservices Infrastructure",
                            "Building a development team",
                            "Producing Open Source Software"
                        ]
                    },
                    {
                        name: "Lev Solutions Ltd",
                        role: "IPP Software Engineer Assistant",
                        date: "2021 - 2022",
                        tasks: [
                            "Creating Spring Boot Microservices",
                            "NextJS Website Development",
                            "Creating a CI/CD Pipeline"
                        ]
                    }
                ]}/>
                <Skills sections={[
                    {
                        title: "Programming Languages",
                        skills: [
                            "TypeScript",
                            "Python",
                            "Java",
                            "Rust",
                            "C++"
                        ]
                    },
                    {
                        title: "Libraries & Frameworks",
                        skills: [
                            "React",
                            "Next.js",
                            "Gatsby",
                            "Vue",
                            "Node",
                            "Express",
                            "Nest.js",
                            "Deno",
                            "Fresh",
                            "Tailwind CSS",
                        ]
                    },
                    {
                        title: "Further Knowledge",
                        skills: [
                            "Linux",
                            "Docker",
                            "Traefik",
                            "Git",
                            "DevOps",
                        ]
                    }
                ]}/>
                <Projects projects={[
                    {
                        link: "https://cameronwhyte.me",
                        domain: "cameronwhyte.me",
                        technologies: "Deno, Fresh, Tailwind CSS",
                        from: "#ffffff",
                        to: "#ff0000"
                    },
                    {
                        link: "https://quirkstudios.xyz",
                        domain: "quirkstudios.xyz",
                        technologies: "Deno, Fresh, Tailwind CSS, Framer Motion",
                        from: "#0ea200",
                        to: "#0095ff"
                    }
                ]}/>
                <Footer/>
            </div>
        </>
    );
};

export default Index;