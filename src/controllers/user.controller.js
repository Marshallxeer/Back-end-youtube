import { asyncHendler } from "../utils/asyncHendler.js";

const registerUser = asyncHendler(async(req,res)=>{
   try {
    console.log("hey");
       // Register user code here
       res.status(200).json({
           message: "User registered successfully"
       });
   } catch (error) {
       console.error("Error registering user:", JSON.stringify(error));
       res.status(500).json({
           message: "Error registering user"
       });
   }
})

export {registerUser}