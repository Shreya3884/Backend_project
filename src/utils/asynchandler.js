const asynchandler=(requesthandler)=>{
    return async(req,res,next)=>{
        Promise.resolve(requesthandler(req,res,next)).catch((error)=>next(error))
    }
}


export {asynchandler}
// const asynchandler=(function)=>async(req,res,next)=>{
//     try{
//         await function(req,res,next)
//     }
//     catch(error){
//         res.status(err.code||500).json({
//             Success:false,
//             message:err.message
//         })
//     }
// }