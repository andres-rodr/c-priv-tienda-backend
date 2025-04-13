import { getModelForClass, prop } from "@typegoose/typegoose";


export class Provider {
    // Nombre
    @prop()
    public name!: string;
}

const ProviderModel = getModelForClass(Provider)
export default ProviderModel