"use client"
import React, { createContext, useContext, useState } from "react";

type LanguageContextType={
    language:Language;
    setLanguage:React.Dispatch<React.SetStateAction<Language>>;
};

const LanguageContext=createContext<LanguageContextType | null>(null);

export function LanguageProvider({children}:{children:React.ReactNode}){
    const [language,setLanguage]=useState<Language>("pt");

    return(
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage(){
    const context=useContext(LanguageContext)
    if(!context) throw new Error("useLanguage deve ser usado dentro de <LanguageProvider>")
    return context;
}