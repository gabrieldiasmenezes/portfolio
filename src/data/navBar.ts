type MenuItem= {
  id: string;
  label: string;
  img: string;
  link: string;
}

const menuItens = (languages: Language): MenuItem[] => [
{ id: "home", label: languages === "pt" ? "Página Principal" : "Home", img: "home.png", link: "/" },
{ id: "contato", label: languages === "pt" ? "Contato" : "Contact", img: "contato.png", link: "/contato" },
{ id: "sobre", label: languages === "pt" ? "Sobre Mim" : "About Me", img: "sobre.png", link: "/sobre-mim" },
{ id: "projetos", label: languages === "pt" ? "Projetos" : "Projects", img: "projetos.png", link: "/projetos" },
{ id: "certificacoes", label: languages === "pt" ? "Certificações" : "Certifications", img: "certificacao.png", link: "/certificacoes" },
];

export default menuItens;

