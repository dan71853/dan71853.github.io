import type { JSX } from "react/jsx-runtime";

export interface page {
  page: ()=>JSX.Element;
  thumb: string;
  priority?: number;
  title: string;
}

export type pages = Record<string, page>;

export interface cardGroupProps {
  pages: pages;
  title: string;
  path: string;
  limit?: number;
  wrap?: boolean;
}

export interface cardProps extends page {
  grayScale: boolean;
}

export interface PageGroup {
  title:string|undefined,
  priority:number|undefined,
 [key: string]: unknown
}

export interface pageGroups{
  [key:string]: PageGroup
}