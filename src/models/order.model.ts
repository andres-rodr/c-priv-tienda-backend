import { getModelForClass, prop } from "@typegoose/typegoose";
import { Product } from "./product.model";
import { User } from "./user.model";

class ProductOrder {
    // Producto, Precio, Cantidad
    @prop({required: true})
    public product!: Product;

    @prop({required: true})
    public price!: number;

    @prop({required: true})
    public quantity!: number;
}

class Order {
    // Productos, Precios de los Productos, Cantidades de productos, Información del cliente, Fecha de la Orden, Fecha del Pago, Numero de Orden, Método de Pago, Persona Jurídica o Persona Natural, estado pagado
    @prop({type: () => [ProductOrder]})
    public products!: ProductOrder[];

    // llamar a la clase del cliente?
    @prop({required: true})
    public user!: User;

    @prop({required: true})
    public orderDate!: Date;

    @prop({required: true})
    public paymentDate!: Date;

    @prop({required: true})
    public orderNumber!: string;

    @prop({required: true})
    public paymentMethod!: string;

    @prop({required: true})
    public isLegalEntity!: boolean;

    @prop({required: true})
    public paymentStatus!: string;
}

const OrderModel = getModelForClass(Order)
export default OrderModel