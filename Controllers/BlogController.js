import BlogModel from "../Models/BlogModel.js";


export const create=async(req,res)=>{
    try {
        const {title,desc,image}=req.body
       
        let newblog=BlogModel(req.body)
        const blog=await newblog.save()
        
        res.status(200).json({blog}) 
    } catch (error) {
         
        res.status(500).json(error) 
    }
}



export const getall=async(req,res)=>{
    try {
       const data=await BlogModel.find() 
       res.status(200).json(data.reverse())
    } catch (error) {
        res.status(500).json(error)
    }
}



export const getOne=async(req,res)=>{
    try{
        const id =req.params.id
    const data=await BlogModel.findOne({_id:id}) 
    res.status(200).json(data)
 } catch (error) {
     res.status(500).json(error)
 }
}