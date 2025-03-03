import { Link } from "react-router-dom";
import ErrorPage from "../../estilizacao/error";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
export default function Error(){
    const texts={
        pt:{
            errorTitle:"ERRO:404",
            errorMessage:"Página não encontrada",
            errorDescription:"A página que você está procurando não existe. Volte para a página inicial ou explore outras seções.",
            buttonHome:"Voltar a Página Principal"
        },
        en: {
            errorTitle: "ERROR: 404",
            errorMessage: "Page Not Found",
            errorDescription: "The page you are looking for does not exist. Go back to the homepage or explore other sections.",
            buttonHome: "Go to Home"
        }  
    }
    const[languages,setLanguages]=useState<"pt"|"en">("pt");
    const changeLanguage=()=>{
        setLanguages((prev)=>prev==="pt"?"en":"pt");
    }
    return(
    <ErrorPage>
        <section className="errorContainer">
            <h1 className="errorTitle">{texts[languages].errorTitle}</h1>
            <p className="errorMessage">{texts[languages].errorMessage}</p>
            <p className="errorDescription">{texts[languages].errorDescription}</p>
            <Link to="/" className="buttonHome">{texts[languages].buttonHome}</Link>
        </section>
        <button className="changeLanguage" onClick={changeLanguage}>
        {languages === "pt" ? "EN" : "PT-BR"}
      </button>
        <Spline className="backgroundAnimation" scene="https://prod.spline.design/Y1ihDm6-QYiFbzFW/scene.splinecode" />
 
    </ErrorPage>
    );
}