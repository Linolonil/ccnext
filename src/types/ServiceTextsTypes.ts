import { IconType } from "react-icons";

export interface ServicesTexts {
    icon: IconType;
    title: string;
    subTitle: string[];
    description: string[];
    moreInfo: string[];
    phoneNumber: string;
    keywords?: string[]; 

}