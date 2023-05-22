import Menu from "../components/menu.tsx";
import Me from "../components/me.tsx";
import Education from "../components/education.tsx";
import Experience from "../components/experience.tsx";
import Skills from "../components/skills.tsx";
import Projects, {Project} from "../components/projects.tsx";
import Footer from "../components/footer.tsx";

const Index = () => {
  return (
      <>
        <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1 gap-y-10 lg:gap-y-0">
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
                role: "Founder",
                date: "2023 - Present",
                tasks: [
                    "Creating Microservices Infrastructure",
                    "Building a development team",
                    "Producing Open Source Software"
                ]
              }
            ]}/>
            <Skills sections={[
              {
                title: "Programming Languages",
                skills: [
                    "TypeScript",
                    "Golang",
                    "Python",
                    "Java",
                    "Rust"
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
            <Footer/>
        </div>
      </>
  );
};
/*
<Projects projects={[
                {
                    link:"https://www.quirkstudios.xyz",
                    domain:"quirkstudios.xyz",
                    technologies:"Next.js, Tailwind CSS",
                    from:"#1dbde6",
                    to:"#f1515e"
                }
            ]} />
 */
export default Index;