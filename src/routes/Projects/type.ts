export type LanguageProps={
    name:string;
    percentage:number;
    color:string
}

export type RepositoriesProps={
    id:number;
    name:string;
    description:string;
    languages:LanguageProps[];
    link:string;
}


