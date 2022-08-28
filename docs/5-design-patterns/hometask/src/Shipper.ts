
/**
 * @class Shipper: Factory of shippers based on shipment
 */

import { getShipmentType } from "./ShipmentType";

export interface Shipper {
    getName(): string
    getCost(weight:number): number
}

export interface ShipperConfig {
    name: string;
    fromZipCodeStart: number[];
    isDefault?:boolean;

}

abstract class AbstractShipper implements Shipper{
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

export class AirEastShipper extends AbstractShipper {
    getLetterCost(weight:number){
        return 0.39 * weight;
    }

    getPackageCost(weight:number){
        return 0.25* weight;
    }

    getOversizedCost(weight:number){
        return 10 + this.getPackageCost(weight);
    }
}

export class ChicagoSprintShipper extends AbstractShipper { 
    getLetterCost(weight:number){
        return 0.42 * weight;
    }

    getPackageCost(weight:number){
        return 0.20* weight;
    }

    getOversizedCost(weight:number){
        return this.getPackageCost(weight);
    }
}

export class PacificParcelShipper extends AbstractShipper {
    getLetterCost(weight:number){
        return 0.51 * weight;
    }

    getPackageCost(weight:number){
        return 0.19* weight;
    }

    getOversizedCost(weight:number){
        return 0.02*weight + this.getPackageCost(weight);
    }
}






