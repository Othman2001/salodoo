import { useMutation } from "@tanstack/react-query"
import client from "../../helpers/client"
import { Shipment } from "../../types/shipment";
import {AxiosError } from "axios"

export const useAddShipmentMutation = ()=>{
    const addShipment = async ({name , pickupAddress , dropOffAddress}:{name:string ; pickupAddress :string ; dropOffAddress:string}):Promise<Shipment | AxiosError>=>{
   const res = await client.post("/api/shipments",{
    data:{
        name,
        pickUpAddress:pickupAddress,
        dropOffAddress,
        shipper:{
            id:1
        }
    }

   })
   return res.data;
    }
    const saveData = useMutation({
        mutationKey:["addShipment"],
        mutationFn:({name , pickupAddress , dropOffAddress}:{name:string ; pickupAddress :string ; dropOffAddress:string})=>(
            addShipment({name, pickupAddress, dropOffAddress})
        )
        
    })
    return { 
        ...saveData
    }
}