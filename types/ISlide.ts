import type { Base } from "~/types/IBase";

export type Slide = {
  value: SlideValue
} & Base

export type SlideValue = {
  id: number;
  sort: number | string;
  title: string;
  description: string;
  btnText: string;
  link: string;
  image: {
    id: number;
    catalog: string;
    name: string;
    isDeleted: boolean;
  }[],
  isSaved: boolean;
  deleted: boolean;
}