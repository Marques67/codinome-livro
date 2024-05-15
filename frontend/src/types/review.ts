import { User } from "./user";

export type Review = {
    id: number;
    note: number;
    opinion: string;
    date: string;
    user: User;
}