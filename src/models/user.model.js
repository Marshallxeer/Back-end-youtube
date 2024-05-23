import mongoose,{Schema} from "mongoose"; 

const userSchema = new Schema(
    {
        username:{

            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim:true,
            index:true

        }
    }
)

export cont user = mongoose.model("User", userSchema)