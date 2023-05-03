import { GetToken, CourierServiceability , Tracking_OrderId } from 'shiprocket-api'


export const auth=async(req,res)=>{
    try {
        const token = await GetToken({
            email : 'example@email.com',
            password: 'password',
          })
          res.status(200).json(token) 
    } catch (error) {
       res.status(500).json(error) 
    }
}

export const Serviceability=async(req,res)=>{
    try{
            const response = await CourierServiceability({

        auth: {
                email : 'example@email.com',
                password: 'password',
            },
        params: {
            pickup_postcode : 600000,
            delivery_postcode : 600005,
            weight: 2,
            cod : 1
        }
    })
          res.status(200).json(response) 
    } catch (error) {
       res.status(500).json(error) 
    }
}


export const Tracking=async(req,res)=>{
    try {
        const response = await Tracking_OrderId({
            auth: {
                email : 'example@email.com',
                password: 'password',
            },
            params: {
                order_id : '55097',
            }
        })
        res.status(200).json(response)
    } catch (error) {
       res.status(500).json(error) 
    }
}