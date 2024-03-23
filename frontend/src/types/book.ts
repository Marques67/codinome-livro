import { Review } from "./review";

export type Book = {
    id: number;
    name: string;
    description: string;
    author: string;
    literaryGenreEnum: LiteraryGenrerEnum;
    numberOfPages: number;
    publishingCompany: string;
    image: string;
    reviews: Review[];
}

export enum LiteraryGenrerEnum {
    HORROR = 'TERROR',
    CHILDISH = 'INFANTOJUVENIL',
    THRILLER = 'THRILLER',
    FANTASY = 'FANTASIA',
    ADVENTURE = 'AVENTURA',
    DYSTOPIA = 'DISTOPIA',
    REAL_CRIME = 'CRIMES REAIS',
    ROMANCE = 'ROMANCE',
    COMIC = 'HQ'
  }