import { Link } from "react-router-dom";
import ErrorPage from "../../estilizacao/error";
import Spline from "@splinetool/react-spline";
import { useLanguage } from "../../context/LanguageContext";
import textError from "../../data/error";
export default function Error(){
    const {language,setLanguage}=useLanguage();
    const error=textError[language];
    const changeLanguage=()=>{
        setLanguage((prev)=>prev==="pt"?"en":"pt");
    };
    return(
    <ErrorPage>
        <section className="errorContainer">
            <h1 className="errorTitle">{error.errorTitle}</h1>
            <p className="errorMessage">{error.errorMessage}</p>
            <p className="errorDescription">{error.errorDescription}</p>
            <Link to="/" className="buttonHome">{error.buttonHome}</Link>
        </section>
        <button className="changeLanguage" onClick={changeLanguage}>
        {language === "pt" ? "EN" : "PT-BR"}
      </button>
        <Spline className="backgroundAnimation" scene="https://prod.spline.design/Y1ihDm6-QYiFbzFW/scene.splinecode" />
 
    </ErrorPage>
    );
}