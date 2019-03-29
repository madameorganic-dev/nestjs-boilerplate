import { Model } from "mongoose";
import { IProduct } from "./interface/product.interface";
import { BaseModel } from "../Model/model";
export declare class Service extends BaseModel {
    private readonly postModel;
    constructor(postModel: Model<IProduct>);
}
