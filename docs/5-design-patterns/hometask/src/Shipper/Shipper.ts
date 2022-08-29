
/**
 * @class Shipper: Factory of shippers based on shipment
 */

import { getShipmentType } from "../Shipment/ShipmentType";

export interface Shipper {
    getName(): string
    getCost(weight:number): number
}

export interface ShipperConfig {
    name: string;
    fromZipCodeStart: number[];
    isDefault?:boolean;

}

/**
 * @class AbstractShipper abstact class to depend on when creating concrete classes for Shippers.
 *  Concrete classes should implement getLetterCost, getPackageCost and getOversizedCost
 * 
 */
export abstract class AbstractShipper implements Shipper{
   private shipperConfig: ShipperConfig

   getName(){
    return this.shipperConfig.name;
   }

    constructor(shipperConfig:ShipperConfig){
     this.shipperConfig = shipperConfig;
    }

    abstract getLetterCost(weight:number)
    abstract getPackageCost(weight:number)
    abstract getOversizedCost(weight:number)

    getCost(weight: number): number {
        const shipmentType = getShipmentType(weight);
        
        switch(shipmentType){
            case "Letter": return this.getLetterCost(weight);
            case "Package": return this.getPackageCost(weight);
            case "Oversized": return this.getOversizedCost(weight);
        }
    }
}