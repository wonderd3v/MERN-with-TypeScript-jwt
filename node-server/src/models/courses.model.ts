import { Schema, model, Document } from "mongoose";

export interface ICourses extends Document{ 
    name:string;
    photo:string;
    category:string;
    code:string;
}

const courseSchema = new Schema({
    name:{
        type: String,
        required: true,
        lowercase: true
    },
    photo:{
        type:String,
    },
    category:{
        type:String,
        required:true,
        lowercase:true
    },
    code:{
        type:String,
        required:true,
        lowercase:true
    }
});

export default model<ICourses>('Courses', courseSchema);