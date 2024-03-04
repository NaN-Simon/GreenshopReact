import { ICard } from "./card";

export interface IPagination {
  itemsPerPage: number,
  items: ICard[]
}