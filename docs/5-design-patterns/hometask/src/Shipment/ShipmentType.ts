export type ShipmentType = "Letter" | "Package" | "Oversized" 

/**
 * Helper function for determine the correct package type based on the weight
 * @param weight 
 * @returns {ShipmentType} 
 */
export const getShipmentType:(weight:number)=>ShipmentType = (weight:number) => {
    if(weight  > 160){
        return "Oversized"
    }
    if(weight > 15 ){
        return "Package"
    }
    return "Letter"
}