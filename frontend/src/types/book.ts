import { Review } from "./review";

export type Book = {
    id: number;
    name: string;
    description: string;
    author: string;
    literaryGenreEnumSet?: { literaryGenreEnum: LiteraryGenreEnum }[];
    numberOfPages: number;
    publishingCompany: string;
    image: string;
    reviews: Review[];
    countReview: number;
    score: number;
}

export enum LiteraryGenreEnum {
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