import { request } from "express"

 const asyncHendler =(reqestHendeler)=>{
    (req, res, next)=>{
        Promise.resolve(requestHendeler(req,res,next)).
        catch((err)=> next(err))
    }
 }



export {asyncHendler}

// const asyncHendler =() =>{}
// const asyncHendler = (func) =>()=>{}
// const asyncHendler =(func) =>async ()=>{}


// const asyncHendler = (fn) => async (res,res,next) =>{
//     try {
//             await fn(req,res, next)
//     } catch (error) {
//     res.status(err.code || 500).json({
//         success : false,
//         message: err.message
//         })
//     }
// }