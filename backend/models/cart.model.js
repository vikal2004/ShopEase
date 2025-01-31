import mongoose, {Schema} from "mongoose";

const cartSchema=new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    items:[
        {
            productId:{type:mongoose.Schema.Types.ObjectId, ref:"Product"},
            quantity:{type:Number, required:true,default:1}
        }
    ],
    totalPrice:{
        type:Number,
        default:0
    }
},{timestamps:true});

export const Cart=mongoose.model("Cart", cartSchema)