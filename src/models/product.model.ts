import { getModelForClass, prop } from "@typegoose/typegoose";


export class Product {
    // Precio, stock, nombre, categoria, linea, descripción, fotos, SKU, fecha de creacion, fecha de actualizacion, habilitado
    @prop({required: true})
    public price!: number;

    @prop({required: true})
    public stock!: number;

    @prop({required: true})
    public name!: string;

    @prop()
    public category!: string;

    @prop()
    public line!: string;

    @prop()
    public description!: string;

    @prop()
    public photos!: string[];

    @prop({required: true})
    public SKU!: string;

    @prop({required: true})
    public createdAt!: Date;

    @prop({required: true})
    public updatedAt!: Date;

    @prop({required: true, default: true})
    public enabled!: boolean;

}

const ProductModel = getModelForClass(Product)
export default ProductModel