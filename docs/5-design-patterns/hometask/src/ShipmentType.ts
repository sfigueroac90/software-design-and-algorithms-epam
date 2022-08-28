export type ShipmentType = "Letter" | "Package" | "Oversized" 

export const getShipmentType:(weight:number)=>ShipmentType = (weight:number) => {
    if(weight  > 160){
        return "Oversized"
    }
    if(weight > 15 ){
        return "Package"
    }
    return "Letter"
}