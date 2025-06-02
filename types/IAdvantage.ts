import type { Base } from "~/types/IBase";

export type Advantage = {
  value: AdvantageValue
} & Base

export type AdvantageValue = {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconError: boolean;
  isSaved: boolean;
}