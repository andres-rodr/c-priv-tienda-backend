import { getModelForClass, prop } from "@typegoose/typegoose";

export class User {
    @prop({required: true})
    public name!: string;

    @prop({required: true})
    public email!: string;

    @prop({required: true})
    public password!: string;

    @prop()
    public creditCardToken?: string;

    @prop({required: true})
    public phoneNumber!: string;

    @prop({required: true})
    public document!: string;

    @prop({required: true})
    public birthDay!: Date;

    @prop({required: true})
    public address!: string;

    @prop({required: true})
    public gender!: string;

    @prop({required: true})
    public createdAt!: Date;

    @prop({required: true})
    public updatedAt!: Date;
}

const UserModel = getModelForClass(User)
export default UserModel