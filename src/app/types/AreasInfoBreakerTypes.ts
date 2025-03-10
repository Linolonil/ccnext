import { ReactNode } from "react";

export interface AreasInfoBreaker {
    id: number;
    title: string;
    description: string[];
    icon: ReactNode;
    message: string
}