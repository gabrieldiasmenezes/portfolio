// import { useEffect, useState } from "react";

import { useEffect, useState } from "react"
import { LanguageProps, RepositoriesProps } from "./type"

//Definindo as cores de cada linguagem de programação
//const langaugeColors:Record<string,string>
const languageColors:Record<string,string>={
    JavaScript:"#f1e05a",
    TypeScript: "#2b7489",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
    Java: "#b07219",
    C:"#5555",
    Dockerfile:"#0055d4",
    "C#":"#178600",
    "C++":"#f34b7d",
    Shell:"#0a0013"
}

const getLanguageColor=(lang:string)=>{
    return languageColors[lang] 
}

export function gitHubRepositories(){
    const [repositories,setRepositories]=useState<RepositoriesProps[]>([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        const fetchRepositories=async ()=>{
            try{
                const response=await fetch(`https://api.github.com/users/${import.meta.env.VITE_GITHUB_USERNAME}/repos?sort=updated&per_page=100`,{
                    headers:{
                        Authorization:`token ${import.meta.env.VITE_GITHUB_TOKEN}`,
                    },
                })

                const data= await response.json()

                if(!Array.isArray(data)){
                    throw new Error(data.message || "Erro ao buscar repositórios")
                }

                const repositories:RepositoriesProps[]=await Promise.all(
                    data.map( async (repositorie:any)=>{
                        const languageResponse= await fetch(repositorie.languages_url,
                            {
                                headers:{
                                    Authorization:`token ${import.meta.env.VITE_GITHUB_TOKEN}`
                                }
                            }
                        );
                        const languageData= await languageResponse.json()

                        const totalBytes=Object.values(languageData)
                                                .map((b)=>Number(b))
                                                .reduce((a,b)=> a + b, 0)
                        
                        const languages: LanguageProps[]=Object.entries(languageData).map(
                            ([name,bytes])=>({
                                name,
                                percentage: Math.round((Number(bytes)/totalBytes)*100),
                                color:getLanguageColor(name),
                            })
                        )
                        return {
                            id:repositorie.id,
                            name:repositorie.name,
                            description:repositorie.description || "Repositório sem descrição",
                            languages:languages.length ? languages : [],
                            link:repositorie.html_url
                        }
                    })
                );
                setRepositories(repositories)
                setLoading(false)
            }catch(error){
                console.log("Erro ao buscar repositórios: ",error)
                setLoading(false)
            }
        }
        fetchRepositories()
    },[])

    return {repositories,loading}

}




