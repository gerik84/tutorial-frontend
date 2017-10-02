import {Media} from './Media';
import {BaseModel} from "./BaseModel";

export class Goods extends BaseModel {
    name: string;
    description: string;
    cover: Media;
    images: Media[];
    properties: string[];
}

