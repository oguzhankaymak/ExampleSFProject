export type ISource = {
    id?: number;
    name?: string;
};

export type INews = {
    source: ISource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

export type INewsResponse = {
    status: string;
    totalResults: number;
    articles : INews[]; 
};

export enum Category {
    BUSINESS= "business",
    GENERAL="general",
    SPORTS="sports",
    SCIENCE="science",
    TECHNOLOGY="technology",
}