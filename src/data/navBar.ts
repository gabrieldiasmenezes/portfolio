import { FaHome, FaUser, FaProjectDiagram, FaCertificate, FaEnvelope } from "react-icons/fa";
import { IconType } from "react-icons";

type MenuItem = {
  id: string;
  label: string;
  icon: IconType;
  link: string;
};


const menuItens = (language: Language): MenuItem[] => [
  {
    id: "home",
    label: language === "pt" ? "Página Principal" : "Home",
    icon: FaHome,
    link: "/",
  },
  {
    id: "contato",
    label: language === "pt" ? "Contato" : "Contact",
    icon: FaEnvelope,
    link: "/contato",
  },
  {
    id: "sobre",
    label: language === "pt" ? "Sobre Mim" : "About Me",
    icon: FaUser,
    link: "/sobre-mim",
  },
  {
    id: "projetos",
    label: language === "pt" ? "Projetos" : "Projects",
    icon: FaProjectDiagram,
    link: "/projetos",
  },
  {
    id: "certificacoes",
    label: language === "pt" ? "Certificações" : "Certifications",
    icon: FaCertificate,
    link: "/certificacoes",
  },
];

export default menuItens;
