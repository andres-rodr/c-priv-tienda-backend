import { getModelForClass, prop } from "@typegoose/typegoose";

class ProductCategory {
    // Nombre, Descripción
    @prop({required: true})
    public name!: string;

    @prop()
    public description!: string;
}

// Esta linea es usada para crear el modelo de la clase ProductCategory 
// esto, para que pueda ser usado para crear, leer, actualizar y eliminar de la base de datos directamente
const ProductCategoryModel = getModelForClass(ProductCategory)
export default ProductCategoryModel