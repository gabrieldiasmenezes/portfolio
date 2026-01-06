import {FaPython,FaJava,FaJs,FaHtml5,FaCss3Alt,FaLanguage,FaMicrosoft,FaReact,FaDocker,FaRobot,} from "react-icons/fa";
import {SiTypescript,SiNextdotjs,SiSpringboot,SiFirebase,SiMongodb,SiPostgresql,SiOracle,SiSqlite,SiFigma} from "react-icons/si";


const hard = {
   ["pt"]: {
        title: "Habilidades Técnicas",
        categories: [
        {
            title: "Linguagens de Programação",
            skills: [
            { name: "Python", icon: <FaPython /> },
            { name: "Java", icon: <FaJava /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "HTML5", icon: <FaHtml5 /> },
            { name: "CSS3", icon: <FaCss3Alt /> },
            { name: "Node-RED", icon: <FaJs /> },
            ],
        },
        {
            title: "Frameworks & Bibliotecas",
            skills: [
            { name: "React.js", icon: <FaReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "React Native", icon: <FaReact /> },
            { name: "Spring Boot", icon: <SiSpringboot /> },
            ],
        },
        {
            title: "Banco de Dados",
            skills: [
            { name: "SQLite", icon: <SiSqlite /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "Oracle", icon: <SiOracle /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Firestore", icon: <SiFirebase /> },
            ],
        },
        {
            title: "Ferramentas & Cloud",
            skills: [
            { name: "Docker", icon: <FaDocker /> },
            { name: "Azure (VMs, CI/CD, ACI, ACR)", icon: <FaMicrosoft /> },
            { name: "Firebase", icon: <SiFirebase /> },
            { name: "IBM Chatbot", icon: <FaRobot /> },
            { name: "Figma", icon: <SiFigma /> },
            { name: "Spline", icon: <FaReact /> },
            { name: "Wokwi", icon: <FaReact /> },
            { name: "Microsoft Office", icon: <FaMicrosoft /> },
            ],
        },
        {
            title: "Idiomas",
            skills: [
            { name: "Inglês", icon: <FaLanguage /> },
            { name: "Espanhol", icon: <FaLanguage /> },
            ],
        },
        ],
    },

    ["en"]: {
        title: "Technical Skills",
        categories: [
        {
            title: "Programming Languages",
            skills: [
            { name: "Python", icon: <FaPython /> },
            { name: "Java", icon: <FaJava /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "HTML5", icon: <FaHtml5 /> },
            { name: "CSS3", icon: <FaCss3Alt /> },
            { name: "Node-RED", icon: <FaJs /> },
            ],
        },
        {
            title: "Frameworks & Libraries",
            skills: [
            { name: "React.js", icon: <FaReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "React Native", icon: <FaReact /> },
            { name: "Spring Boot", icon: <SiSpringboot /> },
            ],
        },
        {
            title: "Databases",
            skills: [
            { name: "SQLite", icon: <SiSqlite /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "Oracle", icon: <SiOracle /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Firestore", icon: <SiFirebase /> },
            ],
        },
        {
            title: "Tools & Cloud",
            skills: [
            { name: "Docker", icon: <FaDocker /> },
            { name: "Azure (VMs, CI/CD, ACI, ACR)", icon: <FaMicrosoft /> },
            { name: "Firebase", icon: <SiFirebase /> },
            { name: "IBM Chatbot", icon: <FaRobot /> },
            { name: "Figma", icon: <SiFigma /> },
            { name: "Spline", icon: <FaReact /> },
            { name: "Wokwi", icon: <FaReact /> },
            { name: "Microsoft Office", icon: <FaMicrosoft /> },
            ],
        },
        {
            title: "Languages",
            skills: [
            { name: "English", icon: <FaLanguage /> },
            { name: "Spanish", icon: <FaLanguage /> },
            ],
        },
        ],
    },
};

export default hard;