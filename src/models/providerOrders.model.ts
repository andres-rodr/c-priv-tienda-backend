import { getModelForClass, prop } from "@typegoose/typegoose";
import { Provider } from "./providers.model";
import { Product } from "./product.model";

class ProviderOrder {
    // Provider, Producto, Cantidad, Precio, Fecha de compra
    @prop({required: true})
    public provider!: Provider;

    @prop({required: true})
    public product!: Product;

    @prop({required: true})
    public quantity!: number;

    @prop({required: true})
    public price!: number;

    @prop({required: true})
    public purchaseDate!: Date;
}

const ProviderOrderModel = getModelForClass(ProviderOrder)
export default ProviderOrderModel;