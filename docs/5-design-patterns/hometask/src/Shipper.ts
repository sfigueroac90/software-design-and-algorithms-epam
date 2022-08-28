
/**
 * @class Shipper: Factory of shippers based on shipment
 */

export interface Shipper {
    getName(): string
    getCost(weight:number): number
}

export interface ShipperConfig {
    name: string;
    rate: number;
    fromZipCodeStart: number[];
    isDefault?:boolean;

}

export class ConcreteShipper implements Shipper{
   private shipperConfig: ShipperConfig

   getName(){
    return this.shipperConfig.name;
   }

    constructor(shipperConfig:ShipperConfig){
     this.shipperConfig = shipperConfig;
    }
    getCost(weight:number){
        return this.shipperConfig.rate *weight;
    }
}





