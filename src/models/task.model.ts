import { getModelForClass, prop } from "@typegoose/typegoose";

class Task {
    @prop()
    public title!: string;

    @prop()
    public description!: string

    @prop()
    public isChecked!: boolean
}

const TaskModel = getModelForClass(Task)
export default TaskModel